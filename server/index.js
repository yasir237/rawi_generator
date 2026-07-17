import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import { carouselSlideCounts } from "./carouselSlideCounts.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "2mb" }));

const STORY_TYPES = [
  "challenge-card",
  "new-word",
  "quiz-true-false",
  "reverse-translate",
  "word-challenge",
];

function getViewportSize(type) {
  return STORY_TYPES.includes(type)
    ? { width: 1080, height: 1920 }
    : { width: 1080, height: 1080 };
}

const RENDER_BASE_URL = process.env.RENDER_BASE_URL || "http://localhost:5173";
const API_KEY = process.env.API_KEY || "test-key-degistir";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let browser = null;

async function getBrowser() {
  try {
    if (browser && typeof browser.isConnected === "function" && browser.isConnected()) {
      return browser;
    }
  } catch (e) {
    console.warn("Eski browser instance geçersiz, yeniden başlatılıyor:", e.message);
  }

  browser = await puppeteer.launch({ headless: true });
  browser.on("disconnected", () => {
    console.warn("Tarayıcı bağlantısı koptu, bir sonraki istekte yeniden başlatılacak.");
    browser = null;
  });

  return browser;
}

app.post("/api/generate", async (req, res) => {
  if (req.headers["x-api-key"] !== API_KEY) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const { type, ...data } = req.body || {};
  if (!type) return res.status(400).json({ error: "type alanı zorunlu" });

  const payload = Buffer.from(JSON.stringify({ type, ...data }), "utf-8").toString("base64");
  const url = `${RENDER_BASE_URL}/render?data=${encodeURIComponent(payload)}`;

  let page;
  try {
    const br = await getBrowser();
    page = await br.newPage();
    await page.setViewport(getViewportSize(type));
    await page.goto(url, { waitUntil: "networkidle0", timeout: 20000 });
    await page.waitForFunction("window.__READY__ === true", { timeout: 15000 });

    const el = await page.$("#export-root");
    if (!el) throw new Error("export-root bulunamadı");

    const buffer = await el.screenshot({ type: "png" });

    const upload = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: "image", folder: "rawi-posts" }, (err, result) =>
          err ? reject(err) : resolve(result)
        )
        .end(buffer);
    });

    res.json({ url: upload.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  } finally {
    if (page) await page.close();
  }
});


app.post("/api/generate-carousel", async (req, res) => {
  if (req.headers["x-api-key"] !== API_KEY) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const { type, ...data } = req.body || {};
  const slideCountFn = carouselSlideCounts[type];

  if (!type || !slideCountFn) {
    return res.status(400).json({
      error: `bilinmeyen veya desteklenmeyen carousel type: "${type}"`,
      supportedTypes: Object.keys(carouselSlideCounts),
    });
  }

  const totalSlides = slideCountFn(data);
  if (!totalSlides || totalSlides < 1) {
    return res.status(400).json({ error: "geçersiz veri, slayt sayısı hesaplanamadı" });
  }

  const payloadObj = { type, ...data };
  const payloadB64 = Buffer.from(JSON.stringify(payloadObj), "utf-8").toString("base64");

  const urls = [];
  let page;

  try {
    const br = await getBrowser();

    for (let i = 0; i < totalSlides; i++) {
      const pageUrl = `${RENDER_BASE_URL}/render?data=${encodeURIComponent(payloadB64)}&slide=${i}`;

      page = await br.newPage();
      await page.setViewport(getViewportSize(type));
      await page.goto(pageUrl, { waitUntil: "networkidle0", timeout: 20000 });
      await page.waitForFunction("window.__READY__ === true", { timeout: 15000 });

      const el = await page.$("#export-root");
      if (!el) throw new Error(`export-root bulunamadı (slide ${i})`);

      const buffer = await el.screenshot({ type: "png" });

      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { resource_type: "image", folder: `rawi-posts/${type}` },
            (err, result) => (err ? reject(err) : resolve(result))
          )
          .end(buffer);
      });

      urls.push(upload.secure_url);

      await page.close();
      page = null;
    }

    res.json({ urls, totalSlides, type });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message, partialUrls: urls });
  } finally {
    if (page) await page.close();
  }
});

app.listen(3001, () => console.log("API http://localhost:3001"));

process.on("SIGINT", async () => {
  if (browser) await browser.close();
  process.exit(0);
});
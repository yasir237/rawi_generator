// src/pages/RenderPage.tsx
import { useEffect, Component, type ReactNode } from "react";
import { templateRegistry } from "../templates/registry";
import { carouselRegistry } from "../templates/carouselRegistry";

declare global {
  interface Window {
    __READY__?: boolean;
  }
}

const STORY_TYPES = [
  "challenge-card",
  "new-word",
  "quiz-true-false",
  "reverse-translate",
  "word-challenge",
];

function getCanvasSize(type: string) {
  return STORY_TYPES.includes(type)
    ? { width: 1080, height: 1920 }
    : { width: 1080, height: 1080 };
}

function base64ToUtf8(base64: string): string {
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}

export default function RenderPage() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("data");
  const slideParam = params.get("slide");

  let payload: any = null;
  let parseError: string | null = null;
  try {
    payload = raw ? JSON.parse(base64ToUtf8(raw)) : null;
  } catch {
    parseError = "تعذر قراءة الـ JSON (خطأ base64/JSON)";
  }

  const carouselDef = payload ? carouselRegistry[payload.type] : null;
  const isCarousel = !!carouselDef;
  const slideIndex = slideParam !== null ? parseInt(slideParam, 10) : 0;

  const Template = !isCarousel && payload ? templateRegistry[payload.type] : null;
  const ready = isCarousel || (!!payload && !!Template);

  useEffect(() => {
    if (!ready) return;
    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.__READY__ = true;
        });
      });
    });
  }, [ready]);

  if (parseError) return <div style={{ color: "red" }}>{parseError}</div>;
  if (!payload) return <div>ناقص باراميتر ?data=</div>;

  const canvasSize = getCanvasSize(payload.type);

  // ---- carousel akışı ----
  if (isCarousel) {
  const content = carouselDef.renderSlide(payload, slideIndex);
  return (
    <RenderErrorBoundary>
      <div id="export-root" style={{ width: canvasSize.width, height: canvasSize.height }}>
        {content}
      </div>
    </RenderErrorBoundary>
  );
}

if (!Template) return <div>نوع قالب غير معروف: {payload.type}</div>;

return (
  <RenderErrorBoundary>
    <div id="export-root" style={{ width: canvasSize.width, height: canvasSize.height }}>
      <Template {...payload} />
    </div>
  </RenderErrorBoundary>
);
}

class RenderErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error("Render hatası:", error);
    // Puppeteer'ı sonsuza kadar bekletmemek için READY'i biz set ediyoruz
    window.__READY__ = true;
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, color: "red", fontSize: 24, background: "white" }}>
          Render hatası: {this.state.error.message}
        </div>
      );
    }
    return this.props.children;
  }
}
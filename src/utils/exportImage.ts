import { toPng } from "html-to-image";

interface ExportOptions {
  /** زود هذا الرقم (مثلاً 2) لدقة أعلى، بس حجم الملف يكبر بنفس النسبة */
  pixelRatio?: number;
}

export async function exportNodeAsPng(
  node: HTMLElement,
  filename = "rawi-export.png",
  options: ExportOptions = {}
): Promise<void> {
  const { pixelRatio = 1 } = options;

  try {
    const dataUrl = await toPng(node, { pixelRatio });
    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("فشل تصدير الصورة:", error);
    throw error;
  }
}
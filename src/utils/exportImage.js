// src/utils/exportImage.js
// يحتاج: npm install html-to-image

import { toPng } from 'html-to-image'

/**
 * يصدّر أي عنصر DOM (زي WordCardTemplate) كصورة PNG وينزّلها مباشرة.
 * @param {HTMLElement} node - العنصر المطلوب تصويره (خذه من useRef)
 * @param {string} filename - اسم الملف بدون امتداد
 */
export async function exportNodeAsPng(node, filename = 'rawi-post') {
  if (!node) throw new Error('exportNodeAsPng: node is null — تأكد إن الـ ref متوصل')

  // pixelRatio: 1 لأن القالب مبني أصلًا بمقاس 1080×1080 الحقيقي،
  // ما نحتاج نكبّر فوقه عشان ما تتضاعف الأحجام
  const dataUrl = await toPng(node, {
    pixelRatio: 1,
    width: 1080,
    height: 1080,
    cacheBust: true
  })

  const link = document.createElement('a')
  link.download = `${filename}.png`
  link.href = dataUrl
  link.click()
}
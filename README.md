# RAWI — Template Generator (كود جاهز للدمج)

هذي الملفات مبنية عشان تنسخها داخل مشروعك الحالي (React + Vite + Tailwind).
ما فيها أي إعداد مشروع جديد — بس مكونات.

## 1. تثبيت المكتبة المطلوبة للتصدير

```bash
npm install html-to-image
```

## 2. إضافة الخطوط

ضيف هذا السطر داخل `<head>` بملف `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## 3. دمج ألوان الهوية بـ Tailwind (v4 — بدون tailwind.config.js)

عندك `@tailwindcss/vite`، يعني Tailwind v4 وما تحتاج ملف config. بس ضيف
استيراد `rawi-theme.css` بأعلى ملف الـ CSS الرئيسي عندك (اللي فيه
`@import "tailwindcss";`، عادة `src/index.css`):

```css
@import "tailwindcss";
@import "./rawi-theme.css";
```

بعدها الكلاسات زي `bg-rawi-primary` و `font-arabic` و `rounded-rawi` تشتغل
تلقائيًا بأي مكون. التفاصيل والقيم كلها داخل `src/rawi-theme.css`.

## 4. نسخ الملفات

انسخ هذي المجلدات/الملفات لمشروعك بنفس المسار:

```
src/design/tokens.js
src/rawi-theme.css
src/components/WordCardTemplate.jsx
src/components/ControlPanel.jsx
src/utils/exportImage.js
src/RawiGeneratorExample.jsx   ← مثال تجميع، اختياري
```

## 5. الاستخدام

```jsx
import RawiGeneratorExample from './RawiGeneratorExample'

function App() {
  return <RawiGeneratorExample />
}
```

أو استورد `WordCardTemplate` مباشرة بأي مكان تبيه، وابنِ عليه Control Panel خاص فيك.

## كيف تضيف قالب جديد (Quote card, Quran ayah, Code snippet...)

كل قالب = ملف مستقل بـ `src/components/` بنفس بنية `WordCardTemplate.jsx`:

1. نفس الأبعاد الثابتة `1080×1080` ونفس الـ padding `72px`.
2. نفس ترتيب البلوكات: `LOGO → TITLE → IMAGE → CONTENT → FOOTER`.
3. الألوان والخطوط تُستورد دايمًا من `src/design/tokens.js` — ممنوع نكتب Hex
   يدوي بأي قالب جديد.
4. الأكسنت يتغير بس حسب الحساب (`turkish`, `english`, `quran`, `code`)
   والبنفسجي `#6D3BFF` يضل ثابت في الكل — هذي القاعدة الذهبية من وثيقة
   الهوية.

بمجرد ما القالب يصير جاهز ومطابق لهذي القواعد، تعبّيه بالبيانات بس —
بدون أي لمسة تصميم يدوية بعدها.

## ملاحظة على جودة التصدير

`exportNodeAsPng` يصدّر بمقاس `1080×1080` الحقيقي (`pixelRatio: 1`) لأن
القالب مبني أصلًا بهذا المقاس. إذا احتجت دقة أعلى لطباعة أو استخدام تاني،
زيد `pixelRatio` بملف `src/utils/exportImage.js` (مثلاً `2`) وبس تذكر إن
حجم الملف النهائي بيكبر بنفس النسبة.
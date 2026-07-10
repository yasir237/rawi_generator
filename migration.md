# تحويل مشروع RAWI من JS إلى TypeScript (بدون فقدان أي شي موجود)

## 1. تثبيت الحزم المطلوبة

```bash
npm install -D typescript @types/react @types/react-dom
```

## 2. نسخ ملفات الإعداد

انسخ هذي الملفين لجذر مشروعك (بجانب `package.json`):

- `tsconfig.json`
- `tsconfig.node.json`

## 3. إعادة تسمية الملفات (JS → TS)

| القديم | الجديد |
|---|---|
| `vite.config.js` | `vite.config.ts` |
| `src/design/tokens.js` | `src/design/tokens.ts` |
| `src/utils/exportImage.js` | `src/utils/exportImage.ts` |
| `src/components/*.jsx` | `src/components/*.tsx` |
| `src/RawiGeneratorExample.jsx` | `src/RawiGeneratorExample.tsx` (أو انقله إلى `src/templates/`) |
| `src/main.jsx` | `src/main.tsx` |
| `src/App.jsx` | `src/App.tsx` |

> ملاحظة: تقدر تسوي هذا تدريجيًا — Vite يدعم وجود `.js` و `.tsx` بنفس الوقت،
> فما تحتاج تحول كل شي بضربة وحدة. حوّل ملف، جرب `npm run dev`، انتقل للي بعده.

## 4. تحديث `index.html`

تأكد إن السكربت الرئيسي يشاور لـ `main.tsx`:

```html
<script type="module" src="/src/main.tsx"></script>
```

## 5. الهيكل النهائي بعد الدمج

```
src/
├── design/
│   └── tokens.ts              ← ألوان/خطوط/مقاسات الهوية (كان tokens.js)
├── types/
│   └── index.ts                ← أنواع مشتركة (WordItem, TemplateProps...)
├── components/                  ← عناصر بناء قابلة لإعادة الاستخدام
│   ├── Logo.tsx
│   ├── Badge.tsx
│   ├── Title.tsx
│   ├── WordCard.tsx
│   └── ControlPanel.tsx         ← (الموجود عندك، محول لـ .tsx)
├── templates/                   ← كل قالب نهائي = ملف مستقل هنا
│   ├── WordCardTemplate.tsx      ← القالب الأول (كان بجذر components/)
│   └── ThreeWords.tsx            ← القالب الثاني (3 كلمات)
├── utils/
│   └── exportImage.ts
├── rawi-theme.css
├── RawiGeneratorExample.tsx
├── App.tsx
└── main.tsx
```

**الفرق عن الهيكل القديم:** القوالب (`*Template.tsx` / templates كاملة) تنتقل
لمجلد `templates/`، والقطع الصغيرة القابلة لإعادة الاستخدام (Logo, Badge,
Title, WordCard) تضل بـ `components/`. القالب الأول `WordCardTemplate`
يصير يبني من نفس مكونات `components/` بدل ما يكرر الكود جوا نفسه.

## 6. القاعدة الذهبية ما تتغير

كل قالب جديد لازم:
1. نفس الأبعاد `1080×1080` ونفس الـ padding `72px`.
2. نفس ترتيب البلوكات: `LOGO → TITLE → IMAGE/BADGE → CONTENT → FOOTER`.
3. الألوان والخطوط تُستورد دايمًا من `src/design/tokens.ts` — ممنوع Hex يدوي.
4. البنفسجي `#6D3BFF` ثابت بكل القوالب، الأكسنت بس يتغير حسب الحساب.
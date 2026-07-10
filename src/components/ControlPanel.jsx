// src/components/ControlPanel.jsx
// ملاحظة: الألوان هنا لواجهة المحرر فقط (تدعم داكن/فاتح).
// الكارد المصدَّر (WordCardTemplate) ما يتأثر — يضل أبيض دايمًا حسب الهوية.

const FIELD_CLASS =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition ' +
  'border-rawi-border bg-white text-rawi-text-primary focus:ring-2 focus:ring-rawi-primary/30 ' +
  'dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100'

export default function ControlPanel({ data, onChange, accent, onAccentChange, onExport }) {
  function update(key, value) {
    onChange({ ...data, [key]: value })
  }

  return (
    <div
      className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border p-6
        border-rawi-border bg-rawi-surface
        dark:border-neutral-700 dark:bg-neutral-800"
    >
      <h2 className="text-lg font-semibold text-rawi-text-primary dark:text-neutral-100">
        بيانات القالب
      </h2>

      <Field label="الكلمة التركية">
        <input
          dir="ltr"
          className={FIELD_CLASS}
          value={data.turkishWord}
          onChange={(e) => update('turkishWord', e.target.value)}
        />
      </Field>

      <Field label="الترجمة">
        <input
          dir="rtl"
          className={FIELD_CLASS}
          value={data.translation}
          onChange={(e) => update('translation', e.target.value)}
        />
      </Field>

      <Field label="جملة مثال (تركي)">
        <input
          dir="ltr"
          className={FIELD_CLASS}
          value={data.example}
          onChange={(e) => update('example', e.target.value)}
        />
      </Field>

      <Field label="ترجمة المثال">
        <input
          dir="rtl"
          className={FIELD_CLASS}
          value={data.exampleTranslation}
          onChange={(e) => update('exampleTranslation', e.target.value)}
        />
      </Field>

      <Field label="ملاحظة صغيرة (اختياري)">
        <textarea
          dir="rtl"
          rows={2}
          className={FIELD_CLASS}
          value={data.note}
          onChange={(e) => update('note', e.target.value)}
        />
      </Field>

      <Field label="التصنيف (Badge)">
        <input
          dir="rtl"
          className={FIELD_CLASS}
          value={data.category}
          onChange={(e) => update('category', e.target.value)}
        />
      </Field>

      <Field label="الأكسنت">
        <select
          className={FIELD_CLASS}
          value={accent}
          onChange={(e) => onAccentChange(e.target.value)}
        >
          <option value="turkish">تركي (أحمر)</option>
          <option value="english">إنجليزي (أزرق)</option>
          <option value="quran">قرآن (أخضر)</option>
          <option value="code">كود (سماوي)</option>
        </select>
      </Field>

      <button
        onClick={onExport}
        className="mt-2 rounded-xl bg-rawi-primary px-4 py-3 text-sm font-semibold text-white
          transition hover:bg-rawi-primary-hover"
      >
        تصدير PNG (1080×1080)
      </button>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-rawi-text-secondary dark:text-neutral-400">{label}</span>
      {children}
    </label>
  )
}
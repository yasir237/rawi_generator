// src/components/ControlPanel.jsx

const FIELD_CLASS =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2'

export default function ControlPanel({ data, onChange, accent, onAccentChange, onExport }) {
  function update(key, value) {
    onChange({ ...data, [key]: value })
  }

  return (
    <div
      className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border p-6"
      style={{ borderColor: '#E5E7EB', backgroundColor: '#F8F9FC' }}
    >
      <h2 className="text-lg font-semibold" style={{ color: '#1F2937' }}>
        بيانات القالب
      </h2>

      <Field label="الكلمة التركية">
        <input
          dir="ltr"
          className={FIELD_CLASS}
          style={{ borderColor: '#E5E7EB' }}
          value={data.turkishWord}
          onChange={(e) => update('turkishWord', e.target.value)}
        />
      </Field>

      <Field label="الترجمة">
        <input
          dir="rtl"
          className={FIELD_CLASS}
          style={{ borderColor: '#E5E7EB' }}
          value={data.translation}
          onChange={(e) => update('translation', e.target.value)}
        />
      </Field>

      <Field label="جملة مثال (تركي)">
        <input
          dir="ltr"
          className={FIELD_CLASS}
          style={{ borderColor: '#E5E7EB' }}
          value={data.example}
          onChange={(e) => update('example', e.target.value)}
        />
      </Field>

      <Field label="ترجمة المثال">
        <input
          dir="rtl"
          className={FIELD_CLASS}
          style={{ borderColor: '#E5E7EB' }}
          value={data.exampleTranslation}
          onChange={(e) => update('exampleTranslation', e.target.value)}
        />
      </Field>

      <Field label="ملاحظة صغيرة (اختياري)">
        <textarea
          dir="rtl"
          rows={2}
          className={FIELD_CLASS}
          style={{ borderColor: '#E5E7EB' }}
          value={data.note}
          onChange={(e) => update('note', e.target.value)}
        />
      </Field>

      <Field label="التصنيف (Badge)">
        <input
          dir="rtl"
          className={FIELD_CLASS}
          style={{ borderColor: '#E5E7EB' }}
          value={data.category}
          onChange={(e) => update('category', e.target.value)}
        />
      </Field>

      <Field label="الأكسنت">
        <select
          className={FIELD_CLASS}
          style={{ borderColor: '#E5E7EB' }}
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
        className="mt-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition"
        style={{ backgroundColor: '#6D3BFF' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5A2EE6')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6D3BFF')}
      >
        تصدير PNG (1080×1080)
      </button>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span style={{ color: '#6B7280' }}>{label}</span>
      {children}
    </label>
  )
}
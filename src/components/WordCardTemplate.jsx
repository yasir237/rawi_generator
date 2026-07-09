// src/components/WordCardTemplate.jsx
//
// هذا هو القالب الأول (Word Card) — كلمة تركية + ترجمة + مثال.
// القاعدة الذهبية: بعد ما يصير هذا القالب جاهز ومضبوط، ما نلمس التصميم يدويًا
// أبدًا — بس نمرر بيانات مختلفة له (forwardRef عشان نصدّره كصورة من برّا).

import { forwardRef } from 'react'

// أكسنت كل حساب فرعي — البنفسجي ثابت دايمًا، بس هذا يتغير
const ACCENTS = {
  turkish: '#E53935',
  english: '#3B82F6',
  quran: '#22C55E',
  code: '#06B6D4'
}

const WordCardTemplate = forwardRef(function WordCardTemplate(
  {
    turkishWord = 'Merhaba',
    translation = 'مرحبًا',
    example = 'Merhaba, nasılsın?',
    exampleTranslation = 'مرحبًا، كيف حالك؟',
    note = '',
    category = 'كلمة اليوم',
    accent = 'turkish'
  },
  ref
) {
  const accentColor = ACCENTS[accent] ?? ACCENTS.turkish

  return (
    <div
      ref={ref}
      className="relative flex flex-col justify-between bg-white"
      style={{
        width: 1080,
        height: 1080,
        fontFamily: "'Inter', 'Alexandria', sans-serif",
        padding: 72
      }}
    >
      {/* LOGO */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-white font-bold text-xl"
            style={{ backgroundColor: '#6D3BFF' }}
          >
            R
          </div>
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ color: '#1F2937' }}
          >
            rawi.turkish
          </span>
        </div>
        <span
          className="rounded-full px-4 py-1.5 text-sm font-medium"
          style={{ backgroundColor: '#F8F9FC', color: accentColor }}
        >
          {category}
        </span>
      </div>

      {/* TITLE + IMAGE (الكلمة التركية كمحور بصري رئيسي) */}
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1
          dir="ltr"
          className="font-bold leading-tight"
          style={{ fontSize: 70, color: '#1F2937' }}
        >
          {turkishWord}
        </h1>
        <div
          className="mt-3 rounded-full"
          style={{ width: 56, height: 4, backgroundColor: accentColor }}
        />
        <p
          dir="rtl"
          className="mt-6 font-semibold"
          style={{ fontSize: 42, color: '#1F2937', fontFamily: "'Alexandria', sans-serif" }}
        >
          {translation}
        </p>
      </div>

      {/* CONTENT (بطاقة المثال) */}
      <div
        className="w-full"
        style={{
          backgroundColor: '#F8F9FC',
          borderRadius: 24,
          border: '1px solid #E5E7EB',
          padding: 32
        }}
      >
        <p
          dir="ltr"
          className="font-medium"
          style={{ fontSize: 32, color: '#1F2937' }}
        >
          {example}
        </p>
        <p
          dir="rtl"
          className="mt-2"
          style={{ fontSize: 24, color: '#6B7280', fontFamily: "'Alexandria', sans-serif" }}
        >
          {exampleTranslation}
        </p>
        {note ? (
          <p
            dir="rtl"
            className="mt-4 border-t pt-3"
            style={{ fontSize: 24, color: '#6B7280', borderColor: '#E5E7EB', fontFamily: "'Alexandria', sans-serif" }}
          >
            {note}
          </p>
        ) : null}
      </div>

      {/* FOOTER */}
      <div className="mt-6 flex items-center justify-between">
        <span style={{ fontSize: 20, color: '#6B7280' }}>@rawi.turkish</span>
        <span style={{ fontSize: 20, color: '#6B7280' }}>rawiturkish.com</span>
      </div>
    </div>
  )
})

export default WordCardTemplate
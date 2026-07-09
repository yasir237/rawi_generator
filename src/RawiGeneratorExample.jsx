// src/RawiGeneratorExample.jsx
//
// مثال تجميع كامل. خذ منه الفكرة وادمجه بـ App.jsx عندك،
// أو استورده مباشرة إذا تبيه صفحة مستقلة.

import { useRef, useState } from 'react'
import WordCardTemplate from './components/WordCardTemplate'
import ControlPanel from './components/ControlPanel'
import { exportNodeAsPng } from './utils/exportImage'

const DEFAULT_DATA = {
  turkishWord: 'Merhaba',
  translation: 'مرحبًا',
  example: 'Merhaba, nasılsın?',
  exampleTranslation: 'مرحبًا، كيف حالك؟',
  note: '',
  category: 'كلمة اليوم'
}

// مقاس المعاينة على الشاشة (الكارد فعليًا 1080، بس نعرضه مصغّر)
const PREVIEW_SIZE = 420
const PREVIEW_SCALE = PREVIEW_SIZE / 1080

export default function RawiGeneratorExample() {
  const [data, setData] = useState(DEFAULT_DATA)
  const [accent, setAccent] = useState('turkish')
  const cardRef = useRef(null)

  async function handleExport() {
    await exportNodeAsPng(cardRef.current, data.turkishWord || 'rawi-post')
  }

  return (
    <div
      className="flex min-h-screen flex-col items-center gap-8 p-10 md:flex-row md:items-start md:justify-center"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* المعاينة — نلف الكارد الحقيقي (1080×1080) بصندوق مصغّر بس نصدّر الأصل */}
      <div
        style={{
          width: PREVIEW_SIZE,
          height: PREVIEW_SIZE,
          overflow: 'hidden',
          borderRadius: 24,
          boxShadow: '0 8px 30px rgba(31, 41, 55, 0.06)'
        }}
      >
        <div
          style={{
            width: 1080,
            height: 1080,
            transform: `scale(${PREVIEW_SCALE})`,
            transformOrigin: 'top left'
          }}
        >
          <WordCardTemplate ref={cardRef} {...data} accent={accent} />
        </div>
      </div>

      <ControlPanel
        data={data}
        onChange={setData}
        accent={accent}
        onAccentChange={setAccent}
        onExport={handleExport}
      />
    </div>
  )
}
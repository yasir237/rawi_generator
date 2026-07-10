// src/RawiGeneratorExample.jsx
//
// مثال تجميع كامل. خذ منه الفكرة وادمجه بـ App.jsx عندك،
// أو استورده مباشرة إذا تبيه صفحة مستقلة.
//
// ملاحظة: الداكن/الفاتح هنا يتحكم بواجهة المحرر بس (الخلفية، الفورم،
// إطار المعاينة). الكارد المصدَّر (WordCardTemplate) يضل أبيض دايمًا —
// هذا جزء من هوية RAWI الثابتة.

import { useRef, useState } from 'react'
import WordCardTemplate from './components/WordCardTemplate'
import ControlPanel from './components/ControlPanel'
import ThemeToggle from './components/ThemeToggle'
import { exportNodeAsPng } from './utils/exportImage'
import { useTheme } from './hooks/useTheme'

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
  const { theme, toggleTheme } = useTheme()

  async function handleExport() {
    await exportNodeAsPng(cardRef.current, data.turkishWord || 'rawi-post')
  }

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-neutral-900">
      <div className="flex justify-end p-4">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>

      <div className="flex flex-col items-center gap-8 px-10 pb-16 md:flex-row md:items-start md:justify-center">
        {/* المعاينة — نلف الكارد الحقيقي (1080×1080) بصندوق مصغّر بس نصدّر الأصل.
            الإطار حوالين الكارد يتبع وضع المحرر، الكارد نفسه ثابت أبيض. */}
        <div
          className="rounded-rawi p-3 shadow-rawi dark:bg-neutral-800"
          style={{ width: PREVIEW_SIZE + 24, height: PREVIEW_SIZE + 24 }}
        >
          <div
            style={{
              width: PREVIEW_SIZE,
              height: PREVIEW_SIZE,
              overflow: 'hidden',
              borderRadius: 24
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
        </div>

        <ControlPanel
          data={data}
          onChange={setData}
          accent={accent}
          onAccentChange={setAccent}
          onExport={handleExport}
        />
      </div>
    </div>
  )
}
import type { WordItem } from "../types";
import { colors, fonts, getWordAccent, layout } from "../design/tokens";
import WordIcon from "./WordIcon";

interface WordCardProps extends WordItem {
  index: number;
  width?: number;
}

const BLOCK_WIDTH = 150;
const ICON_SIZE = 80;
const CARD_HEIGHT = 130;
const CARD_RADIUS = 32;
const CONTENT_RADIUS = 40;

export default function WordCard({ turkish, arabic, icon = "star", index, width }: WordCardProps) {
  const accent = getWordAccent(index - 1);
  const w = width ?? layout.canvasSize - layout.padding * 2 - 80;
  const gradient = `linear-gradient(150deg, ${accent} 0%, color-mix(in srgb, ${accent} 65%, black) 100%)`;

  return (
    <div
      className="relative flex items-stretch"
      style={{
        width: w,
        height: CARD_HEIGHT,
        borderRadius: CARD_RADIUS,
        background: gradient, // التدرج الوحيد — مصدر واحد لكل الكرت
        overflow: "hidden",
        boxShadow: "0 10px 26px rgba(20, 10, 50, 0.16)",
      }}
    >
      {/* مساحة فارغة تحفظ عرض المربع بالتخطيط */}
      <div style={{ width: BLOCK_WIDTH, flexShrink: 0 }} />

      {/* الرقم فقط — بدون أي خلفية خاصة، يقعد مباشرة فوق تدرج الكرت الخارجي */}
      <div
        className="absolute flex items-center justify-center inset-y-0 left-0"
        style={{ width: BLOCK_WIDTH, zIndex: 1 }}
      >
        <span
          className="font-extrabold"
          style={{ fontFamily: fonts.latin, fontSize: 58, color: "#FFFFFF" }}
        >
          {index}
        </span>
      </div>

      {/* صندوق النص الأبيض — border-radius على كل الجهات، يعوم فوق التدرج */}
      <div
        className="relative flex-1 min-w-0 flex flex-col justify-center gap-2"
        style={{
          zIndex: 2,
          borderRadius: `${CONTENT_RADIUS}px 0 0 ${CONTENT_RADIUS}px`,
          background: "#fff",
          paddingLeft: 76,
          paddingRight: 60,
        }}
      >
        <div
          className="font-bold truncate"
          style={{ fontFamily: fonts.latin, fontSize: 34, color: colors.ink, lineHeight: 1.1 }}
        >
          {turkish}
        </div>
        <div
          className="truncate"
          style={{ fontFamily: fonts.arabic, fontSize: 23, fontWeight: 700, color: accent, lineHeight: 1.1 }}
        >
          {arabic}
        </div>
      </div>

      {/* الدائرة البيضاء المتراكبة على حافة المربع — فوق كل شي */}
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          left: BLOCK_WIDTH - ICON_SIZE / 2,
          top: "50%",
          transform: "translateY(-50%)",
          width: ICON_SIZE,
          height: ICON_SIZE,
          backgroundColor: "#fff",
          boxShadow: "0 4px 14px rgba(20,10,50,0.2)",
          zIndex: 3,
        }}
      >
        <WordIcon icon={icon} color={accent} size={36} />
      </div>

      {/* شبكة نقاط زخرفية يمين البطاقة */}
      <div
        className="absolute"
        style={{
          right: 26,
          top: "50%",
          transform: "translateY(-50%)",
          display: "grid",
          gridTemplateColumns: "repeat(3, 5px)",
          gridTemplateRows: "repeat(4, 5px)",
          gap: 6,
          zIndex: 2,
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: accent,
              opacity: 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}
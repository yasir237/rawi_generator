import { colors, fonts, layout } from "../design/tokens";
import type { TranslateChallengeProps } from "../types";
import bgImage from "../assets/backgrounds/translate-challenge-bg.png";

// ⚠️ تقدير تقريبي بالعين — يحتاج ضبط بصري بعد أول تصدير فعلي
// (نفس منطق EXTRA_PER_LINE بـ TornNote). الحدود مبنية على عرض
// الكرت الأبيض بالخلفية (~950px) وخط Inter Black.
function getSentenceFontSize(text: string): number {
  const len = text.length;
  if (len <= 15) return 140;
  if (len <= 25) return 115;
  if (len <= 35) return 95;
  if (len <= 50) return 78;
  return 54; // جملة طويلة جدًا — آخر حد أدنى مقبول بصريًا
}

export default function TranslateChallenge({
  turkishSentence,
  level,
}: TranslateChallengeProps) {
  const fontSize = getSentenceFontSize(turkishSentence);

  return (
    <div
      style={{
        width: layout.canvasSize,
        height: layout.canvasSize,
        position: "relative",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: fonts.arabic,
        overflow: "hidden",
      }}
    >
      {/* نص المستوى — فوق شارة "مستوى" البنفسجية الموجودة بالخلفية */}
      {level && (
        <div
          style={{
            position: "absolute",
            top: 185,
            right: 100,
            color: colors.surface,
            fontFamily: fonts.latin,
            fontSize: 44,
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          {level}
        </div>
      )}

      {/* الجملة التركية — فوق الكرت الأبيض الموجود بالخلفية */}
      <div
        style={{
          position: "absolute",
          top: 410,
          left: layout.padding + 40,
          right: layout.padding + 40,
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: colors.ink,
            fontFamily: fonts.latin,
            fontSize,
            fontWeight: 900,
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          {turkishSentence}
        </p>
      </div>
    </div>
  );
}
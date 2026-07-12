import { colors, fonts } from "../design/tokens";

/**
 * Chip — كبسولة صغيرة مضغوطة (إيموجي/أيقونة + نص قصير)، خلفية فاتحة محايدة.
 * بديل عام لأي "مستطيل رمادي كامل العرض" — الفكرة إن الحجم يلتف حول
 * المحتوى فقط (inline-flex) بدل ما ياخذ عرض القالب كامل، عشان يحس أخف
 * وأقرب لعنصر UI حقيقي مو صندوق معلومات.
 *
 * مبني كمكوّن عام (مو مقفول على WordOfDay) بنفس فلسفة StatusCapsule/IconPill
 * — أي قالب مستقبلي يحتاج "ملاحظة صغيرة سريعة" يقدر يعيد استخدامه.
 */
interface ChipProps {
  emoji?: string;
  text: string;
  background?: string; // افتراضي: colors.surfaceMuted
  textColor?: string; // افتراضي: colors.ink
  fontSize?: number;
}

export default function Chip({
  emoji,
  text,
  background = colors.surfaceMuted,
  textColor = colors.ink,
  fontSize = 26,
}: ChipProps) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full"
      style={{
        background,
        padding: "14px 28px",
      }}
    >
      {emoji && <span style={{ fontSize: fontSize, lineHeight: 1 }}>{emoji}</span>}
      <span
        className="font-bold"
        style={{ fontFamily: fonts.arabic, color: textColor, fontSize: 26 }}
      >
        {text}
      </span>
    </div>
  );
}
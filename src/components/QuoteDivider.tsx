import { colors } from "../design/tokens";

interface QuoteDividerProps {
  /** لون الخطوط وعلامة الاقتباس */
  color?: string;
  /** أقصى عرض للفاصل بالكامل */
  width?: number;
}

/**
 * فاصل بسيط: خط — علامة اقتباس بالمنتصف — خط، بدل شكل فقاعة الكلام
 * الصلدة (QuoteBubble) المستخدم بنسخة سابقة من القالب. أخف بصريًا
 * ويناسب تصميم أهدأ بدون عناصر مصمتة كثيرة أعلى القالب.
 */
export default function QuoteDivider({
  color = colors.purpleTop,
  width = 420,
}: QuoteDividerProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        width,
      }}
    >
      <div style={{ flex: 1, height: 1, background: color, opacity: 0.5 }} />
      <span
        style={{
          fontSize: 40,
          fontWeight: 900,
          color,
          lineHeight: 1,
          transform: "translateY(-4px)",
        }}
      >
        &rdquo;
      </span>
      <div style={{ flex: 1, height: 1, background: color, opacity: 0.5 }} />
    </div>
  );
}
import { colors } from "../design/tokens";

interface NotchDividerProps {
  color?: string;
  width?: number;
}

/**
 * خط أفقي فيه "ذيل" مثلث صغير للأسفل بالمنتصف — نفس لغة فقاعة الكلام
 * (الشعار العربي أصلاً فيه ذيل مشابه بزاويته). يُستخدم كفاصل بين منطقة
 * السؤال ومنطقة الجواب بقالب QuestionAnswer.
 */
export default function NotchDivider({
  color = "rgba(255,255,255,0.35)",
  width = 480,
}: NotchDividerProps) {
  const height = 20;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: "block" }}
    >
      <path
        d={`M0,1 H${width / 2 - 14} L${width / 2},${height - 2} L${
          width / 2 + 14
        },1 H${width}`}
        stroke={color}
        strokeWidth={1.5}
        fill="none"
      />
    </svg>
  );
}
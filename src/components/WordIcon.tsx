import type { WordIconKey } from "../types";

interface WordIconProps {
  icon: WordIconKey;
  color: string;
  size?: number;
}

/** أيقونات SVG بسيطة، بدون أي مكتبة خارجية */
function iconPath(icon: WordIconKey) {
  switch (icon) {
    case "heart":
      return "M10 17 L3 10.5 A4.5 4.5 0 0 1 10 4.5 A4.5 4.5 0 0 1 17 10.5 Z";
    case "handshake":
      return "M4 11 L8 8 L11 10 L14 7 L17 10 M8 8 L8 14 M14 7 L14 13";
    case "sun":
      return "M10 6 A4 4 0 1 1 10 14 A4 4 0 1 1 10 6 M10 1V3 M10 17V19 M1 10H3 M17 10H19 M4 4L5.5 5.5 M14.5 14.5L16 16 M16 4L14.5 5.5 M5.5 14.5L4 16";
    case "star":
      return "M10 2 L12.5 7.5 L18 8 L14 12 L15 17.5 L10 15 L5 17.5 L6 12 L2 8 L7.5 7.5 Z";
    case "book":
      return "M4 4H10V16H4A1 1 0 0 1 3 15V5A1 1 0 0 1 4 4Z M16 4H10V16H16A1 1 0 0 0 17 15V5A1 1 0 0 0 16 4Z";
    default:
      return "";
  }
}

/** الأيقونة عارية بدون أي دائرة/خلفية — تُستخدم داخل مكونات ثانية زي WordCard */
export default function WordIcon({ icon, color, size = 20 }: WordIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d={iconPath(icon)}
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={icon === "heart" || icon === "star" ? color : "none"}
      />
    </svg>
  );
}
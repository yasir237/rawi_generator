export type UiIconKey =
  | "star"
  | "translate"
  | "chat"
  | "speaker"
  | "calendar"
  | "lightbulb"
  | "heart"
  | "sun-cloud"
  | "quote"
  | "coffee"
  | "brain"; 

function path(icon: UiIconKey) {
  switch (icon) {
    case "star":
      return "M10 2 L12.5 7.5 L18 8 L14 12 L15 17.5 L10 15 L5 17.5 L6 12 L2 8 L7.5 7.5 Z";
    case "translate":
      return "M3 5H11 M7 3V5 M4 5C4 9 7 11 10 12 M8 8C7 10 5 12 3 13 M12 17L15 10L18 17 M13 15H17";
    case "chat":
      return "M3 4H17V13H8L4 16V13H3Z";
    case "speaker":
      return "M3 8H6L10 4V16L6 12H3Z M13 7C14 8 14 12 13 13 M15.5 5C17.5 7.5 17.5 12.5 15.5 15";
    case "calendar":
      return "M3 5H17V17H3Z M3 8H17 M6 3V6 M14 3V6";
    case "lightbulb":
      return "M10 2C7 2 5 4 5 7C5 9 6 10 7 11.5V14H13V11.5C14 10 15 9 15 7C15 4 13 2 10 2Z M8 16H12 M8.5 18H11.5";
    // ⬇️ إضافات جديدة لأجل قالب SentenceOfDay — بنفس مقياس viewBox 20x20
    case "heart":
      return "M10 17.5C10 17.5 2.5 11.3 2.5 6.8C2.5 4.1 4.6 2 7.2 2C8.8 2 10 3.1 10 4.8C10 3.1 11.2 2 12.8 2C15.4 2 17.5 4.1 17.5 6.8C17.5 11.3 10 17.5 10 17.5Z";
    case "sun-cloud":
      return "M9.5 1.5V3 M13 2.3L12.4 3.6 M6 2.3L6.6 3.6 M4.5 13.5C3 13.5 2 12.3 2 11C2 9.7 3 8.6 4.3 8.5C4.6 6.3 6.5 4.7 8.7 5C10.5 5.2 11.9 6.5 12.2 8.2C13.8 8.4 15 9.7 15 11.3C15 12.6 14 13.5 12.5 13.5H4.5Z";
    case "quote":
      return "M4 6.5C4 4.6 5.6 3 7.5 3V5C6.7 5 6 5.7 6 6.5H7.5V10H4V6.5Z M11.5 6.5C11.5 4.6 13.1 3 15 3V5C14.2 5 13.5 5.7 13.5 6.5H15V10H11.5V6.5Z";
    case "coffee":
      return "M4 8h10v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8z M14 9h1.5a2 2 0 0 1 0 4H14";
    case "brain":
      return "M6 3C4 3 3 5 3 7 1.5 7.5 1 9 2 10.5 1.5 12 2.5 13.5 4 13.5 4 15 5.5 16 7 15.5 8 17 11 17 12.5 15.8 14.5 16 16.5 14.5 16 12.5 17.5 11.5 17.5 9 16 8 16.5 6 15 4 13 4.5 12 3 9.5 2.5 8 3.5 7.3 3.1 6.6 3 6 3Z";
    
      default:
      return "";
  }
}

const filledIcons: UiIconKey[] = ["star", "heart"]; // الأيقونات الممتلئة (بدون stroke)

export default function UiIcon({ icon, color, size = 18 }: { icon: UiIconKey; color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d={path(icon)}
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filledIcons.includes(icon) ? color : "none"}
      />
    </svg>
  );
}
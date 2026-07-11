export type UiIconKey = "star" | "translate" | "chat" | "speaker" | "calendar" | "lightbulb";

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
    default:
      return "";
  }
}

export default function UiIcon({ icon, color, size = 18 }: { icon: UiIconKey; color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d={path(icon)}
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={icon === "star" ? color : "none"}
      />
    </svg>
  );
}
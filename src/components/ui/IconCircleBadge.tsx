import { colors } from "../../design/tokens";
import UiIcon, { type UiIconKey } from "../UiIcon";

interface IconCircleBadgeProps {
  icon: UiIconKey;
  size?: number;
  bg?: string;
  iconColor?: string;
  iconSize?: number;
}

export default function IconCircleBadge({
  icon,
  size = 100,
  bg = colors.purple,
  iconColor = colors.surface,
  iconSize = 44,
}: IconCircleBadgeProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UiIcon icon={icon} color={iconColor} size={iconSize} />
    </div>
  );
}
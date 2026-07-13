import { colors, fonts } from "../../design/tokens";

interface BrushBadgeProps {
  children: string;
  color?: string;
  textColor?: string;
  fontSize?: number;
}

export default function BrushBadge({
  children,
  color = colors.purple,
  textColor = colors.surface,
  fontSize = 40,
}: BrushBadgeProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "18px 56px",
        background: color,
        // حواف غير منتظمة — يحاكي إحساس خط الفرشاة/الماركر
        borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
      }}
    >
      <span style={{ fontFamily: fonts.arabic, fontWeight: 800, fontSize, color: textColor }}>
        {children}
      </span>
    </div>
  );
}
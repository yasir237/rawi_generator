import { colors, fonts } from "../design/tokens";

interface BadgeProps {
  children: string;
  fontSize?: number;
  color?: string;
  padding?: string;
}

export default function Badge({
  children,
  fontSize = 16,
  color = colors.primary,
  padding= "8px 24px"
}: BadgeProps) {
  return (
    <div
      className="inline-flex items-center rounded-full font-semibold text-white"
      style={{
        backgroundColor: color,
        fontFamily: fonts.arabic,
        fontSize: fontSize,
        padding: padding,
      }}
    >
      {children}
    </div>
  );
}

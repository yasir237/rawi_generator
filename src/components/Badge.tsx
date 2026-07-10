import { colors, fonts } from "../design/tokens";

interface BadgeProps {
  children: string;
  fontSize: number ;
}

export default function Badge({ children, fontSize=16 }: BadgeProps) {
  return (
    <div
      className="inline-flex items-center rounded-full font-semibold text-white"
      style={{
        backgroundColor: colors.primary,
        fontFamily: fonts.arabic,
        fontSize: fontSize,
        padding: "8px 24px",
      }}
    >
      {children}
    </div>
  );
}
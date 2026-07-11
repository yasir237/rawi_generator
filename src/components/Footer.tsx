import { colors, fonts } from "../design/tokens";

interface FooterProps {
  handle?: string;
  /** true = خلفية فاتحة (نص داكن)، false (افتراضي) = خلفية داكنة (نص أبيض) — نفس السلوك القديم */
  dark?: boolean;
  fontSize?: number;
  align?: "left" | "center" | "right";
}

const alignClass: Record<string, string> = {
  center: "text-center",
  left: "text-left",
  right: "text-right",
};

export default function Footer({
  handle = "@rawi.turkish",
  dark = false,
  fontSize = 13,
  align = "center",
}: FooterProps) {
  return (
    <div
      className={`${dark ? "" : "text-white/70"} ${alignClass[align]}`}
      style={{
        fontFamily: fonts.latin,
        fontSize,
        color: dark ? colors.inkMuted : undefined,
      }}
      dir="ltr"
    >
      {handle}
    </div>
  );
}
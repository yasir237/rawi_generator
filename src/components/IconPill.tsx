import { fonts } from "../design/tokens";
import UiIcon, { type UiIconKey } from "./UiIcon";

interface IconPillProps {
  icon: UiIconKey;
  children: string;
  color: string;
  fontSize?: number;
}

export default function IconPill({ icon, children, color, fontSize = 22 }: IconPillProps) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full text-white font-semibold"
      style={{ backgroundColor: color, fontFamily: fonts.latin, fontSize, padding: "10px 26px 10px 20px" }}
      dir="ltr"
    >
      <span className="flex items-center justify-center rounded-full bg-white/20" style={{ width: 30, height: 30 }}>
        <UiIcon icon={icon} color="#fff" size={16} />
      </span>
      {children}
    </div>
  );
}
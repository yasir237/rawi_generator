import type { ReactNode } from "react";
import { colors, fonts } from "../design/tokens";
import UiIcon, { type UiIconKey } from "./UiIcon";

interface InfoRowProps {
  icon: UiIconKey;
  label: string;
  children: ReactNode;
  accent?: string;
}

export default function InfoRow({ icon, label, children, accent = colors.purple }: InfoRowProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2 translate-x-[-3rem]">
        <span className="flex items-center justify-center rounded-full" style={{ width: 40, height: 40, backgroundColor: accent }}>
          <UiIcon icon={icon} color="#fff" size={25} />
        </span>
        <span className="font-bold" style={{ fontFamily: fonts.arabic, fontSize: 18, color: colors.purple }}>
          {label}
        </span>
      </div>
      <div >{children}</div>
    </div>
  );
}
import { colors, fonts } from "../design/tokens";
import UiIcon from "./UiIcon";

export default function TipBanner({ text, label = "نصيحة" }: { text: string; label?: string }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl" style={{ backgroundColor: colors.purple, padding: "18px 26px" }} dir="rtl">
      <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 48, height: 48, backgroundColor: "rgba(255,255,255,0.18)" }}>
        <UiIcon icon="lightbulb" color="#fff" size={24} />
      </span>
      <div className="flex flex-col gap-1">
        <span className="font-bold" style={{ fontFamily: fonts.arabic, fontSize: 16, color: "#fff" }}>{label}</span>
        <span style={{ fontFamily: fonts.arabic, fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>{text}</span>
      </div>
    </div>
  );
}
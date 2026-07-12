import { colors, fonts } from "../design/tokens";
import UiIcon from "./UiIcon";

export default function CtaBox({ text }: { text: string }) {
  return (
    <div
      className="flex items-center gap-4 rounded-t-3xl absolute bottom-0"
      style={{ backgroundColor: colors.purple, padding: "18px 26px" }}
      dir="rtl"
    >
      <div className="flex flex-col gap-1">
        <span
          style={{
            fontFamily: fonts.arabic,
            fontSize: 35,
            fontWeight: 500,
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.5,
          }}
        >
          {text}
        </span>
      </div>
      <span
        className="flex items-center justify-center rounded-full shrink-0"
        style={{
          width: 56,
          height: 56,
          backgroundColor: "rgba(255,255,255,0.18)",
        }}
      >
        <UiIcon icon={"heart"} color="#fff" size={28} />
      </span>
    </div>
  );
}

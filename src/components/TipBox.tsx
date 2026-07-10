import { colors, fonts } from "../design/tokens";

interface TipBoxProps {
  text: string;
  label?: string;
}

export default function TipBox({ text, label = "نصيحة اليوم" }: TipBoxProps) {
  return (
    <div className="flex items-stretch" style={{ maxWidth: 460 }}>
      {/* الشريط الجانبي الصلد — نفس منطق مربع الرقم بالـ WordCard */}
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: 8,
          borderRadius: "8px 0 0 8px",
          backgroundColor: colors.purple,
        }}
      />

      <div
        className="flex flex-col gap-1"
        style={{
          padding: "14px 22px",
          backgroundColor: "rgba(255,255,255,0.06)",
          borderRadius: "0 14px 14px 0",
        }}
      >
        <span
          className="font-bold"
          style={{
            fontFamily: fonts.arabic,
            fontSize: 15,
            color: colors.purpleTop,
            letterSpacing: 0.3,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: fonts.arabic,
            fontSize: 17,
            fontWeight: 500,
            color: "#fff",
            lineHeight: 1.5,
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
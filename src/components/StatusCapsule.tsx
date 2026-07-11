import { colors, fonts } from "../design/tokens";

type CapsuleTone = "wrong" | "correct";

interface StatusCapsuleProps {
  label: string;
  tone: CapsuleTone;
}

export default function StatusCapsule({ label, tone }: StatusCapsuleProps) {
  const capsuleBg = tone === "wrong" ? colors.primary : colors.purple;
  const badgeBg = tone === "wrong" ? colors.primary : colors.success;

  return (
    <div className="relative inline-flex" style={{ marginRight: 28 }}>
      <div
        className="rounded-full flex items-center justify-center"
        style={{ background: capsuleBg, padding: "26px 64px" }}
      >
        <span
          className="font-black text-white text-center"
          style={{ fontFamily: fonts.arabic, fontSize: 44, lineHeight: 1 }}
        >
          {label}
        </span>
      </div>

      {/* دائرة الأيقونة — تتكئ على حافة البطاقة اليمنى */}
      <div
        className="absolute rounded-full flex items-center justify-center"
        style={{
          background: badgeBg,
          width: 60,
          height: 60,
          right: -22,
          top: "50%",
          transform: "translateY(-50%)",
          border: `5px solid ${colors.surface}`,
        }}
      >
        {tone === "wrong" ? <CloseIcon /> : <CheckIcon />}
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <path d="M6 6L18 18M18 6L6 18" stroke="#FFFFFF" strokeWidth={3.5} strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width={24} height={20} viewBox="0 0 24 20" fill="none">
      <path d="M2 10L9 17L22 3" stroke="#FFFFFF" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
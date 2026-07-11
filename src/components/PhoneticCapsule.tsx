import { colors, fonts } from "../design/tokens";

interface PhoneticCapsuleProps {
  phonetic: string;
  highlightWord: string;
}

/** Pill شفاف بحدود رفيعة + زر سبيكر دائري متدرج، نص محاط بأقواس [ ] */
export default function PhoneticCapsule({ phonetic, highlightWord }: PhoneticCapsuleProps) {
  const [before, after] = phonetic.split(highlightWord);

  return (
    <div
      className="inline-flex items-center gap-4 rounded-full"
      style={{
        padding: "14px 32px 14px 14px",
        background: "rgba(255,255,255,0.06)",
        border: "1.5px solid rgba(255,255,255,0.18)",
      }}
    >
      <div
        className="flex items-center justify-center rounded-full flex-shrink-0"
        style={{
          width: 44,
          height: 44,
          background: `linear-gradient(135deg, ${colors.purpleTop}, ${colors.purple})`,
        }}
      >
        <svg width={35} height={35} viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M4 9v6h4l5 5V4L8 9H4z" />
          <path d="M16.5 8.5a5 5 0 0 1 0 7" stroke="#FFFFFF" strokeWidth={1.8} fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <span
        className="font-bold whitespace-nowrap text-white"
        style={{ fontFamily: fonts.arabic, fontSize: 26 }}
      >
         {before}
        <span style={{ color: colors.purpleTop }}>{highlightWord}</span>
        {after} 
      </span>
    </div>
  );
}
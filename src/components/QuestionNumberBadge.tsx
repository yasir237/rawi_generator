import { colors, fonts } from "../design/tokens";

interface QuestionNumberBadgeProps {
  number: number;
}

export default function QuestionNumberBadge({ number }: QuestionNumberBadgeProps) {
  return (
    <div
      style={{
        background: colors.purple,
        borderRadius: 20,
        padding: "12px 26px",
        transform: "rotate(-4deg)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 90,
      }}
    >
      <span style={{ color: colors.surface, fontFamily: fonts.arabic, fontSize: 20, fontWeight: 700 }}>
        السؤال
      </span>
      <span style={{ color: colors.surface, fontFamily: fonts.latin, fontSize: 46, fontWeight: 900, lineHeight: 1 }}>
        {number}
      </span>
    </div>
  );
}
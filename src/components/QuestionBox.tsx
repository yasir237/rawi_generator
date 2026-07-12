import { colors, fonts } from "../design/tokens";

interface QuestionBoxProps {
  question: string;
}

export default function QuestionBox({ question }: QuestionBoxProps) {
  return (
    <div
    dir="rtl"
      style={{
        background: colors.surface,
        border: `2px solid ${colors.purple}`,
        borderRadius: 28,
        padding: "26px 32px",
        display: "flex",
        flexDirection: "row-reverse", // دائرة ؟ يمين بالـ RTL
        alignItems: "center",
        gap: 24,
        width: "100%",
        letterSpacing: "1.5px",
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: colors.purple,
          color: colors.surface,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 32,
          fontWeight: 900,
          flexShrink: 0,
        }}
      >
        ؟
      </div>
      <p
        style={{
          color: colors.ink,
          fontFamily: fonts.arabic,
          fontSize: 30,
          fontWeight: 800,
          textAlign: "right",
          margin: 0,
          flex: 1,
        }}
      >
        {question}
      </p>
    </div>
  );
}
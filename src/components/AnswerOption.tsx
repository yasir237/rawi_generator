import { colors, fonts } from "../design/tokens";

interface AnswerOptionProps {
  letter: string;
  text: string;
  mode?: "q" | "a";
  answer?: boolean;
}

export default function AnswerOption({
  letter,
  text,
  mode = "q", // ← الافتراضي "q" مو "a"، يحافظ على سلايد السؤال الأصلي بدون تغيير
  answer,
}: AnswerOptionProps) {
  return (
    <div
      style={{
        background: mode === "q" ? colors.purpleSoft : answer ? colors.bgSuccess : colors.bgWrong,
        border: `1px solid ${colors.purple}33`,
        borderRadius: 20,
        padding: "18px 28px",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 20,
        width: "100%",
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: mode === "q" ? colors.purple : answer ? colors.success : colors.primary,
          color: colors.surface,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.latin,
          fontSize: 24,
          fontWeight: 900,
          flexShrink: 0,
        }}
      >
        {letter}
      </div>
      <p
        style={{
          color: colors.ink,
          fontFamily: fonts.arabic,
          fontSize: 27,
          fontWeight: 700,
          margin: 0,
          flex: 1,
          textAlign: "right",
        }}
      >
        {text}
      </p>
    </div>
  );
}
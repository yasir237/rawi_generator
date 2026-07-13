// src/components/stories/AnswerOptionButton.tsx
//
// زر خيار إجابة (صح/خطأ)، قابل لإعادة الاستخدام بأي قالب كويز مستقبلي
// (True/False, Multiple Choice...). نمطين: `filled` (مُختار/صحيح) و
// `outline` (غير مُختار). دائرة الأيقونة تتبدل لونها حسب النمط بنفس
// فلسفة `StatusCapsule` (دائرة بيضاء فوق خلفية ملوّنة عند filled).

import { colors, fonts } from "../../design/tokens";

interface AnswerOptionButtonProps {
  label: string;
  icon: "check" | "x";
  variant: "filled" | "outline";
  width?: number;
}

export default function AnswerOptionButton({
  label,
  icon,
  variant,
  width = 340,
}: AnswerOptionButtonProps) {
  const filled = variant === "filled";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        width,
        height: 96,
        borderRadius: 24,
        background: filled ? colors.purple : colors.surface,
        border: filled ? "none" : `2px solid ${colors.purple}`,
        boxShadow: filled
          ? "0 12px 24px rgba(90,70,180,0.30)"
          : "0 4px 10px rgba(90,70,180,0.08)",
        opacity: 1,
      }}
    >
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: filled ? colors.surface : "transparent",
          border: filled ? "none" : `2px solid ${colors.purple}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon === "check" ? (
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10.5L8 14.5L16 5.5"
              stroke={colors.purple}
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke={colors.purple}
              strokeWidth={2.6}
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
      <span
        style={{
          fontFamily: fonts.arabic,
          fontWeight: 800,
          fontSize: 34,
          color: filled ? colors.surface : colors.purple,
        }}
      >
        {label}
      </span>
    </div>
  );
}
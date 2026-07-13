// src/components/stories/DashedPill.tsx
//
// كبسولة صغيرة بحدود متقطعة (dashed border) بدون خلفية صلدة — تُستخدم
// كعنوان فرعي خفيف تحت البادج الرئيسي (مثل "صح أم خطأ؟"). مختلفة عن
// `Badge` الموجود (خلفية صلدة ملوّنة) عمدًا — لغة بصرية "أخف" لعنوان ثانوي.

import { colors, fonts } from "../../design/tokens";

interface DashedPillProps {
  text: string;
  fontSize?: number;
}

export default function DashedPill({ text, fontSize = 30 }: DashedPillProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "12px 36px",
        borderRadius: 999,
        border: `2px dashed ${colors.purple}`,
        background: "transparent",
      }}
    >
      <span
        style={{
          fontFamily: fonts.arabic,
          fontWeight: 700,
          fontSize,
          color: colors.purple,
        }}
      >
        {text}
      </span>
    </div>
  );
}
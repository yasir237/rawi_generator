// src/components/stories/FoldedNoteCard.tsx
//
// بطاقة ورقية بيضاء بزاوية سفلى-يمنى "مطوية" (dog-ear fold) + شريط لاصق
// اختياري أعلاها. مختلفة تمامًا عن `TornNote` (اللي تحاكي ورقة ممزقة
// الجوانب بصور PNG حقيقية) — هذا شكل هندسي بسيط (طية زاوية)، فبُني
// بـ CSS/SVG خالص بدون أي صورة، نفس القاعدة الذهبية رقم 9 (SVG لما يكفي
// بدون صورة حقيقية للحالات الهندسية البسيطة).
//
// ⚠️ تبسيط مقصود: الطية مبنية كمثلث "فوق" زاوية الكرت (مو قص حقيقي
// لزاوية الكرت + رفعها) — لأن `clip-path` بـ CSS ما يدعم دمج قص هندسي
// مع border-radius منحني بسهولة. النتيجة بصريًا قريبة جدًا من المرجع،
// لكن لازم تتأكد بصريًا بعد أول تصدير فعلي.

import { colors } from "../../design/tokens";

interface FoldedNoteCardProps {
  width?: number;
  foldSize?: number;
  showTape?: boolean;
  children: React.ReactNode;
}

export default function FoldedNoteCard({
  width = 800,
  foldSize = 64,
  showTape = true,
  children,
}: FoldedNoteCardProps) {
  return (
    <div style={{ position: "relative", width }}>
      {showTape && (
        <div
          style={{
            position: "absolute",
            top: -22,
            left: "50%",
            transform: "translateX(-50%) rotate(-3deg)",
            width: 210,
            height: 54,
            // ⚠️ لون شبه شفاف مبني من colors.purple مباشرة (rgba يدوي) —
            // نفس استثناء QuestionAnswer الزجاجي؛ لو تكرر الاستخدام
            // بقوالب ستوري ثانية، الأنسب نضيف token مخصص (colors.tapePurple)
            background: "rgba(124, 92, 219, 0.55)",
            borderRadius: 6,
            boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
            zIndex: 2,
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          background: colors.surface,
          borderRadius: 32,
          boxShadow: "0 24px 48px rgba(90, 70, 180, 0.16)",
          padding: "56px 56px",
          zIndex: 1,
        }}
      >
        {children}
      </div>

      {/* رقعة الطية — مثلث بتدرج خفيف يوهم بانحناء زاوية الورقة للأعلى */}
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: foldSize,
          height: foldSize,
          background: "linear-gradient(135deg, #ffffff 0%, #ECE7FA 100%)",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          borderBottomRightRadius: 32,
          boxShadow: "-6px -6px 14px rgba(90,70,180,0.10)",
          zIndex: 2,
        }}
      />
    </div>
  );
}
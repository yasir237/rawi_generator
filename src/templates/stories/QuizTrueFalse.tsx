// src/templates/stories/QuizTrueFalse.tsx
//
// نسخة مُعاد بناؤها بالكامل لتطابق المرجع البصري المرسل (بطاقة ورق
// مطوية الزاوية + أزرار صح/خطأ حقيقية + خلفية سماء إسطنبول). تختلف
// جذريًا عن أول نسخة (كانت مبنية على StatusCapsule/التصميم المربع).
//
// عناصر جديدة محلية بهذا الملف (زخارف مرة استخدام واحدة، غير مُصدَّرة —
// نفس فلسفة "ما نرفعها لمكوّن عام إلا لو تكررت باستخدام ثاني"):
// DotGrid, GlowCorner, SparkleBurst, ArrowSquiggle.
//
// مكوّنات جديدة عامة (بـ components/stories/): FoldedNoteCard,
// AnswerOptionButton, DashedPill — راجعها بملفاتها المنفصلة.

import Badge from "../../components/Badge";
import FoldedNoteCard from "../../components/stories/FoldedNoteCard";
import AnswerOptionButton from "../../components/stories/AnswerOptionButton";
import DashedPill from "../../components/stories/DashedPill";
import { colors, fonts } from "../../design/tokens";
import { storyLayout } from "../../design/layoutStory";
import Logo from "../../components/Logo";
import imageBg from "/assets/backgrounds/stories/galata.png"
import Footer from "../../components/Footer";


export interface QuizTrueFalseProps {
  turkishSentence: string; // الجملة التركية المطلوب الحكم على صحتها
  correctAnswer: "true" | "false"; // هل الجملة صحيحة فعلاً؟
  explanation: string; // يظهر بسلايد الجواب فقط — ليش صح/غلط
  questionText?: string; // افتراضي: "هل هذه الجملة صحيحة؟" (غير مُستخدم حاليًا، محجوز لمرونة مستقبلية)
  badgeText?: string; // افتراضي: "اختبر نفسك"
  subBadgeText?: string; // افتراضي: "صح أم خطأ؟"
  mode: "question" | "answer";
}

/** شبكة نقاط زخرفية صغيرة — محلية، غير مُصدَّرة (أول استخدام) */
function DotGrid({
  x,
  y,
  rows = 6,
  cols = 3,
  gap = 16,
}: {
  x: number;
  y: number;
  rows?: number;
  cols?: number;
  gap?: number;
}) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * gap}
          cy={r * gap}
          r={3.5}
          fill={colors.purple}
          opacity={0.35}
        />
      );
    }
  }
  return (
    <svg
      style={{ position: "absolute", left: x, top: y, zIndex: 0 }}
      width={cols * gap}
      height={rows * gap}
    >
      {dots}
    </svg>
  );
}

/** توهج دائري خفيف بزاوية الكانفاس */
function GlowCorner() {
  return (
    <div
      style={{
        position: "absolute",
        top: -80,
        right: -80,
        width: 260,
        height: 260,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(124,92,219,0.16) 0%, rgba(124,92,219,0) 70%)",
        zIndex: 0,
      }}
    />
  );
}

/** شرطات زخرفية صغيرة (انفجار/بريق) حوالين البادج */
function SparkleBurst({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d="M10 20 L18 10 L14 24 Z" fill={colors.purple} opacity={0.6} />
      <path d="M28 4 L30 16 L34 4 Z" fill={colors.purple} opacity={0.5} />
      <path d="M42 22 L48 30 L36 26 Z" fill={colors.purple} opacity={0.5} />
    </svg>
  );
}

/** سهم صغير منحني — يشير لنص التلميح أسفل الأزرار */
function ArrowSquiggle() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <path
        d="M40 6 C34 18 20 20 10 30"
        stroke={colors.purple}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M18 26 L10 30 L14 38"
        stroke={colors.purple}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function QuizTrueFalse({
  turkishSentence,
  correctAnswer,
  explanation,
  badgeText = "اختبر نفسك",
  subBadgeText = "صح أم خطأ؟",
  mode,
}: QuizTrueFalseProps) {
  const { canvasWidth, canvasHeight } = storyLayout;

  const trueVariant =
    mode === "answer" ? (correctAnswer === "true" ? "filled" : "outline") : "outline";
  const falseVariant =
    mode === "answer" ? (correctAnswer === "false" ? "filled" : "outline") : "outline";

  return (
    <div
      style={{
        width: canvasWidth,
        height: canvasHeight,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #FDFCFF 0%, #F5F2FC 100%)",
      }}
    >
      <GlowCorner />
      <DotGrid x={44} y={44} rows={6} cols={3} />
      <DotGrid x={canvasWidth - 130} y={430} rows={6} cols={3} />

      {/* ⚠️ شعار "RAWI ACADEMY" — أصل الملف مو موجود بالمشروع بعد.
          مكانه محجوز فاضي بارتفاع مطابق للمرجع؛ استبدله بـ <img>
          أو مكوّن Logo مخصص أول ما يتوفر الملف. */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          height: 70,
          zIndex: 1,
        }}
      >
         <div
                  className="absolute flex items-start"
                  style={{ marginTop: -24, marginLeft: -20 }}
                >
                  {/* اللوجو أعلى يسار */}
                  <Logo variant="dark" height={170} />
                </div>
        
      </div>

      <div
        className="flex flex-col items-center"
        style={{ position: "relative", zIndex: 1, paddingTop: 300, gap: 28 }}
      >
        {/* صف: علامة استفهام كبيرة + بادج "اختبر نفسك" + بريق حوالينه */}
        <div className="flex items-center" style={{ gap: 24 }}>
          <span
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: colors.purple,
              opacity: 0.85,
              transform: "rotate(-8deg)",
              lineHeight: 1,
              textShadow: "0 6px 10px rgba(90,70,180,0.25)",
            }}
          >
            ?
          </span>
          <SparkleBurst />
            {
              (mode == "question") ?
              <Badge color={colors.purple} fontSize={44} padding="18px 56px">
                {badgeText}
              </Badge>
              :
              <Badge color={colors.purple} fontSize={44} padding="18px 56px">
                {"الـجـواب"}
              </Badge>
            }
          <SparkleBurst flip />
        </div>

        <DashedPill text={subBadgeText} />

        <div style={{ marginTop: 12 }}>
          <FoldedNoteCard width={800}>
            <div className="flex flex-col items-center" style={{ gap: 28 }}>
              {/* نص السؤال الثابت بالقالب — مع تسطير فرشاة تحت "الجملة" */}
              <p
                style={{
                  fontFamily: fonts.arabic,
                  fontWeight: 700,
                  fontSize: 36,
                  color: colors.ink,
                  textAlign: "center",
                }}
              >
                هل هذه{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  الجملة
                  <svg
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                    style={{ position: "absolute", bottom: -8, left: 0, width: "100%", height: 12 }}
                  >
                    <path
                      d="M2,6 C20,2 35,9 50,5 C65,1 80,8 98,4"
                      stroke={colors.purple}
                      strokeWidth={3}
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                صحيحة؟
              </p>

              <div style={{ width: "100%", borderTop: `2px dashed ${colors.purpleSoft}` }} />

              <p
                style={{
                  fontFamily: fonts.latin,
                  fontWeight: 800,
                  fontSize: 64,
                  color: colors.ink,
                  textAlign: "center",
                  lineHeight: 1.25,
                }}
              >
                {turkishSentence}
              </p>

              <div style={{ width: "100%", borderTop: `2px dashed ${colors.purpleSoft}` }} />
            </div>
          </FoldedNoteCard>
        </div>

        <div className="flex" style={{ gap: 40, marginTop: 24 }}>
          <AnswerOptionButton label="صح" icon="check" variant={trueVariant} />
          <AnswerOptionButton label="خطأ" icon="x" variant={falseVariant} />
        </div>

        {mode === "question" ? (
          <div className="flex items-center" style={{ gap: 12, marginTop: 8 }}>
            <span
              style={{
                fontFamily: fonts.arabic,
                fontWeight: 600,
                fontSize: 26,
                color: colors.inkMuted,
              }}
            >
              اختر إجابتك قبل رؤية الحل
            </span>
            <ArrowSquiggle />
          </div>
        ) : (
          <div
          dir="rtl"
            style={{
              marginTop: 8,
              maxWidth: 720,
              background: colors.purpleSoft,
              borderRadius: 24,
              padding: "24px 32px",
            }}
          >
            <p
              style={{
                fontFamily: fonts.arabic,
                fontWeight: 600,
                fontSize: 30,
                color: colors.ink,
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              {explanation}
            </p>
          </div>
        )}
      </div>

       <GlowCorner />
      <DotGrid x={94} y={canvasHeight - 194} rows={6} cols={3} />
      <DotGrid x={canvasWidth - 190} y={canvasHeight -430} rows={3} cols={6} />

      <div className="absolute right-25 left-25 bottom-10" >
      <Footer handle={"@rawi.turkish"} dark fontSize={20} align="center" />
      </div>
    </div>
  );
}
import { colors, fonts, layout } from "../design/tokens";
import Background, { BackgroundVariant } from "../components/Background";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import UiIcon from "../components/UiIcon";
import QuoteDivider from "../components/QuoteDivider";
import NotchDivider from "../components/NotchDivider";

export interface QuestionAnswerProps {
  /** السؤال كاملاً كنص طبيعي متواصل (مثال: "كيف تطلب قهوة في تركيا؟") */
  question: string;
  /** الكلمة المطلوب تمييزها ببنفسجي داخل السؤال (مثال: "قهوة") */
  questionHighlight: string;
  /** الجملة التركية كاملة (مثال: "Bir kahve lütfen.") */
  turkishAnswer: string;
  /** الجزء المطلوب تمييزه ببنفسجي من الجملة التركية (مثال: "lütfen.") */
  turkishHighlight: string;
  /** الترجمة العربية فقط (بدون نطق) */
  arabicTranslation: string;
  /** مسار صورة SVG توضيحية — من public/assets */
  illustration: string;
  footerHandle: string;
  background: BackgroundVariant;
}

export default function QuestionAnswer({
  question,
  questionHighlight,
  turkishAnswer,
  turkishHighlight,
  arabicTranslation,
  illustration,
  footerHandle,
  background,
}: QuestionAnswerProps) {
  // ميكانيزم الهايلايت الموحّد (جملة كاملة + كلمة/جزء هايلايت)
  const [qBefore, qAfter] = question.split(questionHighlight);
  const [tBefore, tAfter] = turkishAnswer.split(turkishHighlight);

  return (
    <div
      style={{
        position: "relative",
        width: layout.canvasSize,
        height: layout.canvasSize,
        overflow: "hidden",
        fontFamily: fonts.arabic,
      }}
    >
      <Background variant={background} />

      {/* منصّة/قاعدة أسطوانية بنفسجية تتكئ عليها الرسمة التوضيحية — bleed أسفل يمين */}
      <div
        style={{
          position: "absolute",
          right: -60,
          bottom: -40,
          width: 420,
          height: 260,
          zIndex: 5,
        }}
      ></div>

      {/* الرسمة التوضيحية فوق القاعدة */}
      <img
        src={illustration}
        alt=""
        style={{
          position: "absolute",
          right: 40,
          bottom: 40,
          width: 550,
          height: 550,
          objectFit: "contain",
          zIndex: 99,
        }}
      />

      {/* المحتوى الرئيسي */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          padding: layout.padding,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* صف الشعارين */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* شعار إنجليزي (RAWI TURKISH) — يحتاج ملف شعار جديد، مؤقتًا فاضي */}
          <div style={{ height: 56 }} />

          <div
            className="absolute flex items-start"
            style={{ marginTop: -24, marginLeft: -20 }}
          >
            {/* اللوجو أعلى يسار */}
            <Logo height={130} />
          </div>
        </div>

        {/* فاصل الاقتباس + السؤال */}
        <div
          style={{
            marginTop: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <QuoteDivider width={420} />

          <h1
            dir="rtl"
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.35,
              textAlign: "center",
              margin: "20px 0 0",
              maxWidth: 720,
            }}
          >
            {qBefore}
            <span style={{ color: colors.purpleTop }}>{questionHighlight}</span>
            {qAfter}
          </h1>

          <div style={{ marginTop: 24 }}>
            <NotchDivider width={520} />
          </div>
        </div>

        {/* منطقة الجواب — كرت زجاجي شفاف (Glassmorphism) */}
        <div
          style={{
            marginTop: 40,
            marginLeft: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 20,
            maxWidth: 460,
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.22)",
            borderRadius: 28,
            padding: "36px 40px",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        >
          <p
            dir="ltr"
            style={{
              fontFamily: fonts.latin,
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.15,
              margin: 0,
              textAlign: "left",
            }}
          >
            <span style={{ color: "#ffffff" }}>{tBefore}</span>
            <br />
            <span style={{ color: colors.purpleTop }}>{turkishHighlight}</span>
            {tAfter}
          </p>

          <br />

          <p
            dir="rtl"
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#ffffff",
              margin: 0,
            }}
          >
            {arabicTranslation}
          </p>

          <UiIcon icon="coffee" color={colors.purpleTop} size={40} />
        </div>

        <div style={{ marginTop: "auto" }}>
          <Footer handle={footerHandle}  />
        </div>
      </div>
    </div>
  );
}
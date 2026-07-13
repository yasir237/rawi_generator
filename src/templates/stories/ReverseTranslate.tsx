import { colors, fonts, storyLayout } from "../../design/tokens";
import Logo from "../../components/Logo";
import Badge from "../../components/Badge";
import Footer from "../../components/Footer";
import type { ReverseTranslateProps } from "../../types";
import FoldedNoteCard from "../../components/stories/FoldedNoteCard";
import { DotGrid } from "../../components/ui/DotGrid";

export default function ReverseTranslate({
  arabicSentence,
  textBefore = "هل تعرف ترجمة",
  textHiglit = "الجملة",
  textAfter = "هذه",
  footerHandle,
}: ReverseTranslateProps) {
  return (
    <div
      style={{
        width: storyLayout.canvasWidth,
        height: storyLayout.canvasHeight,
        background: colors.bgDeep,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <DotGrid x={44} y={44} rows={6} cols={3} />
      <DotGrid x={storyLayout.canvasWidth - 130} y={430} rows={6} cols={3} />
      {/* اللوجو — نفس القاعدة القياسية أعلى-يسار */}
      <div
        className="absolute flex items-center"
        style={{ marginTop: 24, marginLeft: "38%" }}
      >
        <Logo variant="white" height={180} />
      </div>

      {/* المحتوى الرئيسي — متمركز عموديًا */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          height: "100%",
          padding: `0 ${storyLayout.padding}px`,
          gap: 64,
        }}
      >
        <h1
          style={{ color: colors.surface, fontSize: "80px", fontWeight: "700" }}
        >
          اختبار سريع
        </h1>

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
                {textBefore}{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  {textHiglit}
                  <svg
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                    style={{
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: "100%",
                      height: 12,
                    }}
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
                {textAfter}
              </p>

              <div
                style={{
                  width: "100%",
                  borderTop: `2px dashed ${colors.purpleSoft}`,
                }}
              />

              <p
                style={{
                  fontFamily: fonts.arabic,
                  fontWeight: 700,
                  fontSize: 64,
                  color: colors.ink,
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                {arabicSentence}
              </p>

              <div
                style={{
                  width: "100%",
                  borderTop: `2px dashed ${colors.purpleSoft}`,
                }}
              />
            </div>
          </FoldedNoteCard>
        </div>

        <span
          style={{
            fontFamily: fonts.latin,
            fontWeight: 900,
            fontSize: 220,
            color: colors.surface,
            opacity: 0.9,
            lineHeight: 1,
          }}
        >
          ؟
        </span>
      </div>
      <DotGrid x={94} y={storyLayout.canvasHeight - 194} rows={6} cols={3} />
      <DotGrid
        x={storyLayout.canvasWidth - 190}
        y={storyLayout.canvasHeight - 430}
        rows={3}
        cols={6}
      />
      {/* الفوتر — أسفل المنتصف */}
      <div className="absolute" style={{ bottom: 48, left: 0, right: 0 }}>
        <Footer handle={footerHandle} align="center" />
      </div>
    </div>
  );
}

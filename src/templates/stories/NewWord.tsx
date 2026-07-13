import type { NewWordProps } from "../../types";
import { colors, fonts, layout } from '../../design/tokens';
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
import Badge from "../../components/Badge";
import { storyLayout } from "../../design/layoutStory";
import FoldedNoteCard from "../../components/stories/FoldedNoteCard";

export default function NewWord({
  arabicWord,
  turkishWord,
  turkishSentence,
  background,
}: NewWordProps) {
  const { canvasWidth, canvasHeight } = storyLayout;

  return (
    <div
      className="relative"
      style={{
        width: canvasWidth,
        height: canvasHeight,
        background: colors.surface,
        overflow: "hidden",
      }}
    >
      {/* الخلفية — صورة من public/assets، JSON-driven */}
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* تعتيم خفيف أعلى/أسفل — يحسّن قراءة اللوجو والفوتر فوق أي صورة */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: 260,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.28), transparent)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: 220,
          background: "linear-gradient(to top, rgba(0,0,0,0.22), transparent)",
          zIndex: 1,
        }}
      />

      <div
        className="relative flex flex-col h-full"
        style={{ padding: layout.padding, zIndex: 10 }}
      >
        <div
          className="absolute flex items-start"
          style={{ marginTop: -24, marginLeft: -20 }}
        >
          {/* اللوجو أعلى يسار */}
          <Logo variant="dark" height={130} />
        </div>

        <div
          className="flex flex-col items-center flex-1 justify-center"
          style={{ position: "relative", zIndex: 1, gap: 40 }}
        >
          {/* كرت الكلمة — أبيض صلد، يحل مشكلة القراءة فوق الصورة */}
          <div
            style={{
              padding: "48px 56px",
              width: 880,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Badge children="كلمة جديدة" color={colors.purple} fontSize={30} padding="10px 36px" />

            <p
              style={{
                fontFamily: fonts.latin,
                fontWeight: 800,
                fontSize: 96,
                color: colors.purple,
                textAlign: "center",
                lineHeight: 1.1,
              }}
            >
              {turkishWord}
            </p>

            <p
              style={{
                fontFamily: fonts.arabic,
                fontWeight: 700,
                fontSize: 44,
                color: colors.ink,
                textAlign: "center",
              }}
            >
              {arabicWord}
            </p>
          </div>

          {/* بطاقة الجملة التطبيقية */}
          <FoldedNoteCard width={800}>
            <div className="flex flex-col items-center" style={{ gap: 28 }}>
              <p
                style={{
                  fontFamily: fonts.arabic,
                  fontWeight: 700,
                  fontSize: 36,
                  color: colors.ink,
                  textAlign: "center",
                }}
              >
                استخدام{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  الكلمة
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
                داخل جملة
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

          {/* سؤال تفاعلي — Pill شفاف بدل نص طاير فوق الصورة */}
          <div
            style={{
              background: "rgba(255,255,255,0.92)",
              borderRadius: 999,
              padding: "16px 40px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}
          >
            <p
              style={{
                fontFamily: fonts.arabic,
                fontWeight: 700,
                fontSize: 30,
                color: colors.purple,
                textAlign: "center",
                margin: 0,
              }}
            >
              🤔 هل تعرف ترجمة الجملة؟
            </p>
          </div>
        </div>

        <Footer handle={"@rawi.turkish"} dark fontSize={20} align="center" />
      </div>
    </div>
  );
}
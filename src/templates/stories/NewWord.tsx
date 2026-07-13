import type { NewWordProps } from "../../types";
import { colors, fonts, layout } from '../../design/tokens';
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";
import StatusCapsule from "../../components/StatusCapsule";
import { storyLayout } from "../../design/layoutStory";
import FoldedNoteCard from "../../components/stories/FoldedNoteCard";
import Badge from "../../components/Badge";

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
      }}
    >
      {/* الخلفية — صورة من public/assets، تختلف حسب المنشور (JSON-driven) */}
      <img
        src={background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
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
          className="flex flex-col items-center"
          style={{ position: "relative", zIndex: 1, paddingTop: 300, gap: 28 }}
        >


<div className="flex flex-col" >
      <h1 className="text-7xl font-bold pb-10 text-center">
            كلمة جديدة
        </h1>
        <Badge children={turkishWord} fontSize={120} padding="10px 80px" />
        <h1 className="text-7xl font-bold py-30 text-center">
            {arabicWord}
        </h1>
</div>

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
                 استخدام {" "}
                  <span
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    الكلمة
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
                 داخل جملة
                </p>

                <div
                  style={{
                    width: "100%",
                    borderTop: `2px dashed ${colors.purpleSoft}`,
                  }}
                />

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

                <div
                  style={{
                    width: "100%",
                    borderTop: `2px dashed ${colors.purpleSoft}`,
                  }}
                />
              </div>
            </FoldedNoteCard>

            <p className="text-center py-30 text-3xl" >
                هل تعرف ترجمة الجملة ؟
            </p>
          </div>
        </div>
        <Footer handle={"@rawi.turkish"} dark fontSize={20} align="center" />
      </div>
    </div>
  );
}

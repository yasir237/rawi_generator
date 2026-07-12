import type { DoYouKnowProps } from "../types";
import { colors, fonts, layout } from "../design/tokens";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Badge from "../components/Badge";
import QuoteDivider from "../components/QuoteDivider";

export default function DoYouKnow({
  background,
  text1,
  text2,
  word1Highlight,
  word2Highlight,
  footerHandle,
}: DoYouKnowProps) {
  // نفس ميكانيزم الهايلايت الموحّد المستخدم بباقي القوالب (FeaturedSentence/QuestionAnswer/WordOfDay)
  const renderHighlighted = (text: string, highlight?: string) => {
    if (!highlight || !text.includes(highlight)) return text;
    const [before, after] = text.split(highlight);
    return (
      <>
        {before}
        <span style={{ color: colors.accent }}>{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <div
      className="relative"
      style={{
        width: layout.canvasSize,
        height: layout.canvasSize,
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

        <Footer handle={footerHandle} dark fontSize={20} align="center" />

        <div style={{height: "100px"}} />
        <div className="flex-1 flex flex-col items-center justify-start gap-8 px-30">
          <Badge children={"هل تعلم"} fontSize={30} padding="8px 50px" color={colors.accent} />

          <p
            style={{
              color: colors.ink,
              fontFamily: fonts.arabic,
              fontSize: 46,
              fontWeight: 900,
              lineHeight: 1.4,
              textAlign: "right",
              margin: 0,
              width: "100%",
            }}
          >
            {renderHighlighted(text1, word1Highlight)}
          </p>

          <QuoteDivider color={colors.accent} />
            
         {text2 && (
           <p
            style={{
              color: colors.ink,
              fontFamily: fonts.arabic,
              fontSize: 38,
              fontWeight: 700,
              lineHeight: 1.4,
              textAlign: "right",
              margin: 0,
              width: "100%",
            }}
          >
            {renderHighlighted(text2, word2Highlight)}
          </p>
         )}
        </div>
      </div>
    </div>
  );
}
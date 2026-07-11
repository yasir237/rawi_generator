import type { DontSayProps } from "../types";
import { colors, fonts, layout } from "../design/tokens";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import StatusCapsule from "../components/StatusCapsule";

export default function DontSay({
  wrongPhrase,
  correctPhrase,
  translationWrong,
translationCorrect,
  wrongLabel = "لا تقل",
  correctLabel = "قل بدلاً منها",
  footerHandle,
  background,
}: DontSayProps) {
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

        <div className="flex-1 flex flex-col items-center justify-center gap-7">
          <StatusCapsule label={wrongLabel} tone="wrong" />
          <span
            className="font-bold text-center"
            style={{ fontFamily: fonts.latin, fontSize: 60, color: colors.ink }}
          >
            {wrongPhrase}
          </span>


           <span
            className="font-semibold text-center"
            dir="rtl"
            style={{
              fontFamily: fonts.arabic,
              fontSize: 34,
              color: colors.ink,
            }}
          >
            {translationWrong}
          </span>

       

          <StatusCapsule label={correctLabel} tone="correct" />
          <span
            className="font-black text-center"
            style={{ fontFamily: fonts.latin, fontSize: 72, color: colors.ink }}
          >
            {correctPhrase}
          </span>

        

          <span
            className="font-semibold text-center"
            dir="rtl"
            style={{
              fontFamily: fonts.arabic,
              fontSize: 34,
              color: colors.ink,
            }}
          >
            {translationCorrect}
          </span>
        </div>

        <Footer handle={footerHandle} dark fontSize={20} align="left" />
      </div>
    </div>
  );
}

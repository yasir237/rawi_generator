import type { SentenceOfDayProps } from "../types";
import { colors, fonts, layout } from "../design/tokens";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import PaintedBadge from "../components/PaintedBadge";
import UiIcon from "../components/UiIcon";
import PhoneticCapsule from "../components/PhoneticCapsule";
import TornNote from "../components/TornNote";

export default function SentenceOfDay({
  turkishSentence,
  turkishHighlight,
  phonetic,
  phoneticHighlight,
  translation,
  translationHighlightWord,
  cta,
  ctaHighlight,
  footerHandle,
  background,
}: SentenceOfDayProps) {
  const [ctaBefore, ctaAfter] = cta.split(ctaHighlight);
  const [turkishBefore, turkishAfter] = turkishSentence.split(turkishHighlight);
  return (
    <div
      className="relative"
      style={{ width: layout.canvasSize, height: layout.canvasSize }}
    >
      <Background variant={background} />

      <div
        className="relative flex flex-col h-full"
        style={{ padding: layout.padding, zIndex: 10 }}
      >
        <div
          className="absolute flex items-start"
          style={{ marginTop: -24, marginLeft: -20 }}
        >
          {/* اللوجو أعلى يسار */}
          <Logo height={130} />
        </div>
        {/* المحتوى الرئيسي — عمود متمركز */}
        <div className="flex-1 flex flex-col items-center justify-center gap-9 -mt-6">
          {/* البادج + النجمة */}
          <div className="flex items-center gap-3">
            <PaintedBadge  height={120} />
          </div>

          {/* الجملة التركية — أكبر عنصر، بدون Card ولا إطار */}
          <div className="relative text-center" style={{ maxWidth: 900 }}>
            <div
              className="absolute"
              style={{ top: -30, left: -10, opacity: 0.9 }}
            >
              <UiIcon icon="quote" color={colors.purpleTop} size={56} />
            </div>
            <div className="absolute" style={{ top: -10, right: -20 }}>
              <UiIcon icon="sun-cloud" color={colors.purpleTop} size={80} />
            </div>

            <span
              className="font-black text-white"
              style={{ fontFamily: fonts.latin, fontSize: 92, lineHeight: 1.05 }}
            >
              {turkishBefore}
              <span style={{ color: colors.purpleTop }}>{turkishHighlight}</span>
              {turkishAfter}
            </span>

            <svg
              width={280}
              height={14}
              className="block mx-auto"
              style={{ marginTop: 8 }}
            >
              <path
                d="M4,7 C60,2 220,2 276,7"
                stroke={colors.purpleTop}
                strokeWidth={5}
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* كبسولة النطق */}
          <PhoneticCapsule
            phonetic={phonetic}
            highlightWord={phoneticHighlight}
          />

          {/* الترجمة — ورقة ممزقة */}
          <TornNote
            text={translation}
            highlightWord={translationHighlightWord}
          />

          {/* CTA */}
          <div className="flex items-center gap-4" style={{ marginTop: 8 }}>
            <span className="font-bold text-white" style={{ fontSize: 26 }}>
              {ctaBefore}
              <span style={{ color: colors.purpleTop }}>{ctaHighlight}</span>
              {ctaAfter}
            </span>
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: 48, height: 48, background: colors.purple }}
            >
              <svg width={30} height={30} viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4-7 4V3a1 1 0 0 1 1-1z" />
              </svg>
            </div>
          </div>
        </div>

        <Footer handle={footerHandle} />
      </div>
    </div>
  );
}

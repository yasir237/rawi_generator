import type { GramerOfDayData } from "../types";
import { colors, layout } from "../design/tokens";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import Badge from "../components/Badge";
import TornNote from "../components/TornNote";
import CtaBox from "../components/CtaBox";

export default function GramerOfDay({
  gramerName,
  gramerType,
  whyUsed,
  examples,
  cta,
  footerHandle,
}: GramerOfDayData) {
  const exampleItems = examples
    .map((e) => `${e.turkish} → ${e.arabic}`)
    .join("\n");
  return (
    <div
      className="relative"
      style={{
        width: layout.canvasSize,
        height: layout.canvasSize,
        background: colors.surfaceMuted,
      }}
    >
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
          <Badge
            children={"قاعدة اليوم"}
            fontSize={46}
            color={colors.purple}
            padding="10px 70px"
          />

          <h1 className="text-8xl mt-15 font-semibold">{gramerName}</h1>

          {gramerType && (
            <Badge
              children={gramerType}
              fontSize={56}
              color={colors.purple}
              padding="4px 70px"
            />
          )}

          <span
            dir="rtl"
            style={{ color: colors.bgTop }}
            className={`text-5xl`}
          >
            {whyUsed}
          </span>

          <div className="mt-10">
            <TornNote text={exampleItems} />
          </div>
          
            <CtaBox text={cta}  />
        </div>

        <Footer handle={footerHandle} dark fontSize={20} align="left" />
      </div>
    </div>
  );
}

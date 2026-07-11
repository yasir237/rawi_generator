import type { WordOfDayData } from "../types";
import { layout, colors, fonts } from "../design/tokens";
import Background from "../components/Background";
import Logo from "../components/Logo";
import IconPill from "../components/IconPill";
import WordOfDayCard from "../components/WordOfDayCard";
import TipBanner from "../components/TipBanner";
import Footer from "../components/Footer";

type WordOfDayProps = Omit<WordOfDayData, "type">;

export default function WordOfDay({
  turkish, phonetic, meaning, exampleTurkish, exampleArabic, tip, image, footerHandle, background,
}: WordOfDayProps) {
  return (
    <div className="relative" style={{ width: layout.canvasSize, height: layout.canvasSize }}>
      <Background variant={background ?? "orbit"} />

      <div className="relative flex flex-col items-center h-full" style={{ padding: layout.padding, zIndex: 10 }}>
        <div className="absolute" style={{ top: layout.padding, left: layout.padding }}>
          <Logo height={130} />
        </div>

        <div className="flex flex-col items-center gap-4" style={{ marginTop: 20 }}>
          <div className="font-extrabold text-white" style={{ fontFamily: fonts.arabic, fontSize: 72 }}>
            كلمة اليوم
          </div>
          <IconPill icon="calendar" color={colors.purple}>
            Günün Kelimesi
          </IconPill>
        </div>

        <div style={{ marginTop: 56 }}>
          <WordOfDayCard
            turkish={turkish}
            phonetic={phonetic}
            meaning={meaning}
            exampleTurkish={exampleTurkish}
            exampleArabic={exampleArabic}
            image={image}
          />
        </div>

        <div className="flex-1 flex items-center" style={{ marginTop: 40 }}>
          <TipBanner text={tip} />
        </div>

        <Footer handle={footerHandle} />
      </div>
    </div>
  );
}
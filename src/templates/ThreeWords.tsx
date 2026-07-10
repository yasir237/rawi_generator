import type { ThreeWordsProps } from "../types";
import { layout } from "../design/tokens";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Badge from "../components/Badge";
import WordCard from "../components/WordCard";
import TipBox from "../components/TipBox";
import Footer from "../components/Footer";

interface ThreeWordsExtendedProps extends ThreeWordsProps {
  tip?: string; // إلزامي الآن، دايمًا يظهر
}

export default function ThreeWords({
  title,
  badge,
  words,
  footerHandle,
  background,
  tip,
  teaImage,
}: ThreeWordsExtendedProps) {
  return (
    <div
      className="relative"
      style={{ width: layout.canvasSize, height: layout.canvasSize }}
    >
      <Background variant={background} />

      {/* الصورة — ملتصقة تمامًا بالحافة اليمنى والسفلى للكانفاس، خارج أي padding */}
      <img
        src={teaImage}
        alt=""
        className="absolute"
        style={{
          right: 0,
          bottom: 0,
          maxWidth: 420,
          maxHeight: 420,
          objectFit: "contain",
          zIndex: 20,
        }}
      />

      {/* كل المحتوى الثاني يبقى داخل الـ padding العادي */}
      <div
        className="relative flex flex-col justify-between h-full"
        style={{ padding: layout.padding, zIndex: 10 }}
      >
        {/* الصف العلوي: اللوجو + العنوان والبادج */}
        <div
          className="flex items-start"
          style={{ marginTop: -24, marginLeft: -20 }}
        >
          <Logo height={130} />
          <div className="flex-1 flex justify-center pt-6">
            <div
              className="flex flex-col items-end gap-3"
              style={{ transform: "translateX(-40px)" }}
            >
              <Title number={words.length} title={title} size={2.5} />
              <Badge fontSize={48}>{badge}</Badge>
            </div>
          </div>
        </div>

        {/* قائمة الكلمات */}
        <div className="flex flex-col gap-7">
          {words.map((w, i) => (
            <WordCard key={i} index={i + 1} {...w} />
          ))}
        </div>

        {/* صندوق النصيحة — يظهر دايمًا، أسفل يسار */}
        {tip && (
          <div className="flex-1 flex items-end justify-start absolute bottom-5 left-5">
            <TipBox text={tip} />
          </div>
        )}

        <Footer handle={footerHandle} />
      </div>
    </div>
  );
}

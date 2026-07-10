import { useRef, useState } from "react";
import ThreeWords from "./ThreeWords";
import postData from "../data/three-words-example.json";
import { exportNodeAsPng } from "../utils/exportImage";
import { backgroundVariants, type BackgroundVariant } from "../components/Background";
import type { PostData } from "../types";

const data = postData as PostData;

export default function ThreeWordsExample() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [background, setBackground] = useState<BackgroundVariant>(
    data.background ?? "aurora"
  );

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, "three-words.png");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      {/* اختيار نمط الخلفية للمعاينة فقط — لو تبيه ثابت بالبيانات، احذف هذا الجزء */}
      <div className="flex gap-2">
        {backgroundVariants.map((v) => (
          <button
            key={v}
            onClick={() => setBackground(v)}
            className="px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              backgroundColor: v === background ? "#6D3BFF" : "#EEE",
              color: v === background ? "#FFF" : "#333",
            }}
          >
            {v}
          </button>
        ))}
      </div>

      <div ref={cardRef}>
        <ThreeWords
          title={data.title}
          badge={data.badge}
          words={data.words}
          footerHandle={data.footerHandle}
          background={background}
          tip= {data.tip}
          teaImage={data.teaImage}
        />
      </div>

      <button
        onClick={handleExport}
        className="rounded-full px-6 py-2 text-white font-medium"
        style={{ backgroundColor: "#6D3BFF" }}
      >
        تصدير PNG
      </button>
    </div>
  );
}
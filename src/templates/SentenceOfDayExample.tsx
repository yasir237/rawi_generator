import { useRef, useState } from "react";
import SentenceOfDay from "./SentenceOfDay";
import postData from "../data/sentence-of-day-example.json";
import { exportNodeAsPng } from "../utils/exportImage";
import { backgroundVariants, type BackgroundVariant } from "../components/Background";
import type { SentenceOfDayData } from "../types";

const data = postData as SentenceOfDayData;

export default function SentenceOfDayExample() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [background, setBackground] = useState<BackgroundVariant>(
    data.background ?? "swoosh"
  );

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, "sentence-of-day.png");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
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
        <SentenceOfDay {...data} background={background} />
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
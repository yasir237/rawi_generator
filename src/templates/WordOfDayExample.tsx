import { useRef } from "react";
import WordOfDay from "./WordOfDay";
import postData from "../data/word-of-day-example.json";
import { exportNodeAsPng } from "../utils/exportImage";
import type { WordOfDayData } from "../types";

const data = postData as WordOfDayData;

export default function WordOfDayExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) exportNodeAsPng(cardRef.current, "word-of-day.png");
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div ref={cardRef}>
        <WordOfDay {...data} />
      </div>
      <button onClick={handleExport} className="rounded-full px-6 py-2 text-white font-medium" style={{ backgroundColor: "#6D3BFF" }}>
        تصدير PNG
      </button>
    </div>
  );
}
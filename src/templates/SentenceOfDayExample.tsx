import { useRef } from "react";
import SentenceOfDay from "./SentenceOfDay";
import { exportNodeAsPng } from "../utils/exportImage";
import data from "../data/sentence-of-day-example.json";

export default function SentenceOfDayExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, "sentence-of-day.png");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <div ref={cardRef}>
        <SentenceOfDay {...data} />
      </div>
      <button
        onClick={handleExport}
        className="px-6 py-3 rounded-full bg-[#5B21B6] text-white font-bold"
      >
        تصدير PNG
      </button>
    </div>
  );
}
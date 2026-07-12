import { useRef } from "react";
import postData from "../data/gramer-of-day.json";
import { exportNodeAsPng } from "../utils/exportImage";
import type { GramerOfDayData } from "../types";
import GramerOfDay from './GramerOfDay';

const data = postData as GramerOfDayData;

export default function GramerOfDayExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div ref={cardRef}>
        <GramerOfDay {...data} />
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
import { useRef } from "react";
import DontSay from "./DontSay";
import postData from "../data/dont-say-example.json";
import { exportNodeAsPng } from "../utils/exportImage";
import type { DontSayData } from "../types";

const data = postData as DontSayData;

export default function DontSayExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, "dont-say.png");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div ref={cardRef}>
        <DontSay {...data} />
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
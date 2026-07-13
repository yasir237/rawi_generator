import { useRef } from "react";
import ReverseTranslate from "./ReverseTranslate";
import { exportNodeAsPng } from "../../utils/exportImage";
import data from "../../data/stories/reverse-translate-example.json";
import type { ReverseTranslateData } from "../../types";

export default function ReverseTranslateExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, "reverse-translate.png");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div ref={cardRef}>
        <ReverseTranslate {...(data as ReverseTranslateData)} />
      </div>
      <button onClick={handleExport}>تصدير PNG</button>
    </div>
  );
}
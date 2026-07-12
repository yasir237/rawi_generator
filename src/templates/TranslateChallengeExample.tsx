import { useRef } from "react";
import TranslateChallenge from "./TranslateChallenge";
import { exportNodeAsPng } from "../utils/exportImage";
import data from "../data/translate-challenge-example.json";

export default function TranslateChallengeExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, "translate-challenge.png");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <div ref={cardRef}>
        <TranslateChallenge {...data} />
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
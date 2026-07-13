import { useRef } from "react";
import WordChallenge from "./WordChallenge";
import { exportNodeAsPng } from "../../utils/exportImage";
import data from "../../data/stories/word-challenge-example.json";
import type { WordChallengeData } from "../../types";

export default function WordChallengeExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, "word-challenge.png");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div ref={cardRef}>
        <WordChallenge {...(data as WordChallengeData)} />
      </div>
      <button onClick={handleExport}>تصدير PNG</button>
    </div>
  );
}
import { useRef } from "react";
import ChallengeCard from "./ChallengeCard";
import { exportNodeAsPng } from "../../utils/exportImage";
import data from "../../data/stories/challenge-card-example.json";
import type { ChallengeCardData } from "../../types";

export default function ChallengeCardExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, "challenge-card.png");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div ref={cardRef}>
        <ChallengeCard {...(data as ChallengeCardData)} />
      </div>
      <button onClick={handleExport}>تصدير PNG</button>
    </div>
  );
}
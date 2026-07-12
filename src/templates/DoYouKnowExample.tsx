import { useRef } from "react";
import DoYouKnow from "./DoYouKnow";
import postData from "../data/do-you-know-example.json";
import { exportNodeAsPng } from "../utils/exportImage";
import type { DoYouKnowProps } from "../types";

const data = postData as DoYouKnowProps;

export default function DoYouKnowExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, "dont-say.png");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div ref={cardRef}>
        <DoYouKnow {...data} />
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
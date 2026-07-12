import { useRef } from "react";
import FeaturedWord from "./FeaturedWord";
import postData from "../data/featured-word-example.json";
import { exportNodeAsPng } from "../utils/exportImage";
import type { FeaturedWordData } from "../types";

const data = postData as FeaturedWordData;

export default function FeaturedWordExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) exportNodeAsPng(cardRef.current, "featured-word.png");
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div ref={cardRef}>
        <FeaturedWord {...data} />
      </div>
      <button onClick={handleExport} className="rounded-full px-6 py-2 text-white font-medium" style={{ backgroundColor: "#6D3BFF" }}>
        تصدير PNG
      </button>
    </div>
  );
}
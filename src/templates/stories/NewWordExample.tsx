import { useRef } from "react";
import NewWord from "./NewWord";
import postData from "../../data/stories/new-word-example.json";
import { exportNodeAsPng } from "../../utils/exportImage";
import type { NewWordData } from "../../types";

const data = postData as NewWordData;

export default function NewWordExample() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, "dont-say.png");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div ref={cardRef}>
        <NewWord {...data} />
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
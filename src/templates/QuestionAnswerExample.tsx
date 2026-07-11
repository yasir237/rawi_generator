import { useRef, useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import { exportNodeAsPng } from "../utils/exportImage";
import { backgroundVariants, BackgroundVariant } from "../components/Background";
import data from "../data/question-answer-example.json";

export default function QuestionAnswerExample() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [background, setBackground] = useState<BackgroundVariant>(
    (data.background as BackgroundVariant) ?? "aurora"
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
      <div ref={cardRef}>
        <QuestionAnswer {...data} background={background} />
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
        {backgroundVariants.map((variant) => (
          <button key={variant} onClick={() => setBackground(variant)}>
            {variant}
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          if (cardRef.current) {
            exportNodeAsPng(cardRef.current, "question-answer.png");
          }
        }}
      >
        تصدير PNG
      </button>
    </div>
  );
}
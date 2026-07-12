import { useRef } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizAnswer from "./QuizAnswer";
import { exportNodeAsPng } from "../utils/exportImage";
import data from "../data/quiz-question-example.json";
import type { QuizSetData } from "../types";

const quizData = data as QuizSetData;

export default function QuizQuestionExample() {
  // كل سؤال = سلايدين (سؤال + جواب) → المصفوفة طولها questions.length * 2
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleExport = (index: number, label: string) => {
    const node = cardRefs.current[index];
    if (node) {
      exportNodeAsPng(node, `quiz-${label}.png`);
    }
  };

  const handleExportAll = () => {
    cardRefs.current.forEach((node, i) => {
      if (node) {
        exportNodeAsPng(node, `quiz-slide-${i + 1}.png`);
      }
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <button
        onClick={handleExportAll}
        style={{
          alignSelf: "center",
          background: "#7C3AED",
          color: "#fff",
          border: "none",
          borderRadius: 12,
          padding: "12px 28px",
          fontWeight: 700,
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        تصدير كل السلايدات PNG
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
        {quizData.questions.map((q, i) => {
          const qIndex = i * 2;       // موقع سلايد السؤال بالمصفوفة
          const aIndex = i * 2 + 1;   // موقع سلايد الجواب بعده مباشرة

          return (
            <div key={i} style={{ display: "flex", gap: 24 }}>
              {/* سلايد السؤال */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <div ref={(el) => { cardRefs.current[qIndex] = el; }}>
                  <QuizQuestion
                    questionNumber={i + 1}
                    question={q.question}
                    options={q.options}
                    correctAnswerIndex={q.correctAnswerIndex}
                    background={quizData.background}
                  />
                </div>
                <button onClick={() => handleExport(qIndex, `q${i + 1}`)} style={{ background: "#EF4444", color: "#fff", border: "none", borderRadius: 10, padding: "8px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                  تصدير سؤال {i + 1}
                </button>
              </div>

              {/* سلايد الجواب — مباشرة بعد السؤال */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <div ref={(el) => { cardRefs.current[aIndex] = el; }}>
                  <QuizAnswer
                    questionNumber={i + 1}
                    question={q.question}
                    options={q.options}
                    correctAnswerIndex={q.correctAnswerIndex}
                    background={quizData.background}
                  />
                </div>
                <button onClick={() => handleExport(aIndex, `a${i + 1}`)} style={{ background: "#EF4444", color: "#fff", border: "none", borderRadius: 10, padding: "8px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                  تصدير جواب {i + 1}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
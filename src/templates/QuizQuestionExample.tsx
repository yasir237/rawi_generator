import { useRef } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizAnswer from "./QuizAnswer";
import { exportNodeAsPng } from "../utils/exportImage";
import data from "../data/quiz-question-example.json";
import type { QuizSetData } from "../types";

const quizData = data as QuizSetData;

const START_COVER = "/assets/templates/quizStartCover.png";
const END_COVER = "/assets/templates/quizEndCover.png";

export default function QuizQuestionExample() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleExport = (index: number, label: string) => {
    const node = cardRefs.current[index];
    if (node) {
      exportNodeAsPng(node, `quiz-${label}.png`);
    }
  };

  // Sabit kapak PNG'lerini yeniden screenshot almadan direkt indir
  const downloadStaticImage = (path: string, filename: string) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = filename;
    link.click();
  };

  const handleExportAll = () => {
    downloadStaticImage(START_COVER, "quiz-slide-0-start.png");
    cardRefs.current.forEach((node, i) => {
      if (node) {
        exportNodeAsPng(node, `quiz-slide-${i + 1}.png`);
      }
    });
    downloadStaticImage(END_COVER, `quiz-slide-${quizData.questions.length * 2 + 1}-end.png`);
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
        تصدير كل السلايدات PNG (بما فيها الأغلفة)
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
        {/* غلاف البداية — ثابت */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <img src={START_COVER} alt="غلاف البداية" style={{ width: 300, height: 300, objectFit: "cover", borderRadius: 12 }} />
          <button
            onClick={() => downloadStaticImage(START_COVER, "quiz-slide-0-start.png")}
            style={{ background: "#22C55E", color: "#fff", border: "none", borderRadius: 10, padding: "8px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
          >
            تحميل غلاف البداية
          </button>
        </div>

        {quizData.questions.map((q, i) => {
          const qIndex = i * 2;
          const aIndex = i * 2 + 1;

          return (
            <div key={i} style={{ display: "flex", gap: 24 }}>
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

        {/* غلاف النهاية — ثابت */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <img src={END_COVER} alt="غلاف النهاية" style={{ width: 300, height: 300, objectFit: "cover", borderRadius: 12 }} />
          <button
            onClick={() => downloadStaticImage(END_COVER, `quiz-slide-${quizData.questions.length * 2 + 1}-end.png`)}
            style={{ background: "#22C55E", color: "#fff", border: "none", borderRadius: 10, padding: "8px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
          >
            تحميل غلاف النهاية
          </button>
        </div>
      </div>
    </div>
  );
}
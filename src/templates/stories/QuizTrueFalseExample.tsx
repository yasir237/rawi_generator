// src/templates/stories/QuizTrueFalseExample.tsx
//
// معاينة + تصدير لقالب QuizTrueFalse — بنفس فلسفة ملفات Example الأخرى
// ({...data} كامل، تحقق cardRef.current قبل التصدير). فيها زر تبديل بين
// سلايد السؤال وسلايد الجواب، وزر تصدير يصدّر السلايد الظاهر حاليًا فقط
// (لازم تصدّر مرتين — مرة بكل mode — عشان تحصل الصورتين).

import { useRef, useState } from "react";
import QuizTrueFalse from "./QuizTrueFalse";
import { exportNodeAsPng } from "../../utils/exportImage";
import data from "../../data/stories/quiz-true-false-example.json";

export default function QuizTrueFalseExample() {
  const [mode, setMode] = useState<"question" | "answer">("question");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (cardRef.current) {
      exportNodeAsPng(cardRef.current, `quiz-true-false-${mode}.png`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <div className="flex gap-3">
        <button
          onClick={() => setMode("question")}
          className="px-4 py-2 rounded-full border"
        >
          سلايد السؤال
        </button>
        <button
          onClick={() => setMode("answer")}
          className="px-4 py-2 rounded-full border"
        >
          سلايد الجواب
        </button>
      </div>

      <div ref={cardRef}>
        <QuizTrueFalse {...data} mode={mode} />
      </div>

      <button
        onClick={handleExport}
        className="px-6 py-2 rounded-full bg-black text-white"
      >
        تصدير PNG ({mode === "question" ? "السؤال" : "الجواب"})
      </button>
    </div>
  );
}
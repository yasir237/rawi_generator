// src/templates/carouselRegistry.ts
import QuizQuestion from "./QuizQuestion";
import QuizAnswer from "./QuizAnswer";

export interface CarouselDefinition {
  /** Toplam slayt sayısını payload'a göre hesaplar (kapaklar dahil) */
  totalSlides: (payload: any) => number;
  /** Belirli bir slayt index'i için JSX döner */
  renderSlide: (payload: any, slideIndex: number) => React.ReactNode;
}

export const carouselRegistry: Record<string, CarouselDefinition> = {
  "quiz-question": {
    totalSlides: (payload) => 2 + (payload.questions?.length ?? 0) * 2,
    renderSlide: (payload, slideIndex) => {
      const total = 2 + (payload.questions?.length ?? 0) * 2;

      if (slideIndex === 0) {
        return (
          <img
            src="/assets/templates/quizStartCover.png"
            alt="quiz-start"
            style={{ width: 1080, height: 1080, objectFit: "cover", display: "block" }}
          />
        );
      }

      if (slideIndex === total - 1) {
        return (
          <img
            src="/assets/templates/quizEndCover.png"
            alt="quiz-end"
            style={{ width: 1080, height: 1080, objectFit: "cover", display: "block" }}
          />
        );
      }

      const contentIndex = slideIndex - 1;
      const questionIndex = Math.floor(contentIndex / 2);
      const isAnswer = contentIndex % 2 === 1;
      const q = payload.questions?.[questionIndex];

      if (!q) return <div>سلايد غير موجود: {slideIndex}</div>;

      return isAnswer ? (
        <QuizAnswer
          questionNumber={questionIndex + 1}
          question={q.question}
          options={q.options}
          correctAnswerIndex={q.correctAnswerIndex}
          background={payload.background}
        />
      ) : (
        <QuizQuestion
          questionNumber={questionIndex + 1}
          question={q.question}
          options={q.options}
          correctAnswerIndex={q.correctAnswerIndex}
          background={payload.background}
        />
      );
    },
  },

  // ⭐ Yarın yeni bir carousel eklerken sadece buraya yeni bir entry eklemen yeterli:
  // "mistakes-carousel": {
  //   totalSlides: (payload) => 2 + (payload.mistakes?.length ?? 0),
  //   renderSlide: (payload, slideIndex) => { ... },
  // },
};
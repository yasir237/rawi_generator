// server/carouselSlideCounts.js
export const carouselSlideCounts = {
  "quiz-question": (payload) => 2 + (payload.questions?.length ?? 0) * 2,

  // ⭐ Yarın yeni carousel type eklerken buraya da aynı mantığı ekle:
  // "mistakes-carousel": (payload) => 2 + (payload.mistakes?.length ?? 0),
};
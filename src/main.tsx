import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RenderPage from "./pages/RenderPage"; // ⭐ جديد
import ThreeWordsExample from "./templates/ThreeWordsExample";
import FeaturedSentenceExample from "./templates/FeaturedSentenceExample";
import QuestionAnswerExample from "./templates/QuestionAnswerExample";
import DontSayExample from "./templates/DontSayExample";
import GramerOfDayExample from "./templates/GramerOfDayExample";
import FeaturedWordExample from "./templates/FeaturedWordExample";
import WordOfDayExample from "./templates/WordOfDayExample";
import SentenceOfDayExample from "./templates/SentenceOfDayExample";
import QuizQuestionExample from "./templates/QuizQuestionExample";
import DoYouKnowExample from "./templates/DoYouKnowExample";
import TranslateChallengeExample from "./templates/TranslateChallengeExample";
import QuizTrueFalseExample from "./templates/stories/QuizTrueFalseExample";
import NewWordExample from "./templates/stories/NewWordExample";
import ReverseTranslateExample from "./templates/stories/ReverseTranslateExample";
import WordChallengeExample from "./templates/stories/WordChallengeExample";
import ChallengeCardExample from "./templates/stories/ChallengeCardExample";

// ⭐ جديد — فحص بسيط: إذا الرابط /render، نعرض صفحة الرندر بس (بدون أي UI ثاني)
const isRenderMode = window.location.pathname === "/render";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isRenderMode ? (
      <RenderPage />
    ) : (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100">
        {/* <ThreeWordsExample /> */}
        {/* <QuestionAnswerExample />  */}
        {/* <DontSayExample /> */}
        {/* <GramerOfDayExample /> */}
        {/* <FeaturedWordExample /> */}
        {/* <FeaturedSentenceExample /> */}
        {/* <WordOfDayExample /> */}
        {/* <SentenceOfDayExample /> */}
        {/* <QuizQuestionExample /> */}
        {/* <DoYouKnowExample /> */}
        {/* <TranslateChallengeExample /> */}

        {/* <QuizTrueFalseExample /> */}
        {/* <NewWordExample /> */}
        {/* <ReverseTranslateExample /> */}
        {/* <WordChallengeExample /> */}
        {/* <ChallengeCardExample /> */}
      </div>
    )}
  </StrictMode>,
);

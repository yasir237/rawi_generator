import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThreeWordsExample from "./templates/ThreeWordsExample";
import FeaturedSentenceExample from './templates/FeaturedSentenceExample';
import QuestionAnswerExample from "./templates/QuestionAnswerExample";
import DontSayExample from "./templates/DontSayExample";
import GramerOfDayExample from "./templates/GramerOfDayExample";
import FeaturedWordExample from "./templates/FeaturedWordExample";
import WordOfDayExample from "./templates/WordOfDayExample";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      {/* <ThreeWordsExample /> */}
      {/* <QuestionAnswerExample />  */}
      {/* <DontSayExample /> */}
      {/* <GramerOfDayExample /> */}
      {/* <FeaturedWordExample /> */}
      {/* <FeaturedSentenceExample /> */}
      <WordOfDayExample />
    </div>
  </StrictMode>
);
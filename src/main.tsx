import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThreeWordsExample from "./templates/ThreeWordsExample";
import WordOfDayExample from "./templates/WordOfDayExample";
import SentenceOfDayExample from './templates/SentenceOfDayExample';
import QuestionAnswerExample from "./templates/QuestionAnswerExample";
import DontSayExample from "./templates/DontSayExample";
import GramerOfDayExample from "./templates/GramerOfDayExample";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      {/* <ThreeWordsExample /> */}
      <WordOfDayExample />
      {/* <SentenceOfDayExample /> */}
      {/* <QuestionAnswerExample />  */}
      {/* <DontSayExample /> */}
      {/* <GramerOfDayExample /> */}
    </div>
  </StrictMode>
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThreeWordsExample from "./templates/ThreeWordsExample";
import WordOfDayExample from "./templates/WordOfDayExample";
import SentenceOfDayExample from './templates/SentenceOfDayExample';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      {/* <ThreeWordsExample /> */}
      {/* <WordOfDayExample /> */}
      <SentenceOfDayExample />
    </div>
  </StrictMode>
);
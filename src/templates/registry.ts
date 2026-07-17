// src/templates/registry.ts
import ThreeWords from "./ThreeWords";
import FeaturedWord from "./FeaturedWord";
import FeaturedSentence from "./FeaturedSentence";
import QuestionAnswer from "./QuestionAnswer";
import DontSay from "./DontSay";
import GramerOfDay from "./GramerOfDay";
import WordOfDay from "./WordOfDay";
import SentenceOfDay from "./SentenceOfDay";
import DoYouKnow from "./DoYouKnow";
import TranslateChallenge from "./TranslateChallenge";
import NewWord from "./stories/NewWord";
import ChallengeCard from "./stories/ChallengeCard";
import QuizTrueFalse from "./stories/QuizTrueFalse";
import ReverseTranslate from "./stories/ReverseTranslate";
import WordChallenge from "./stories/WordChallenge";

export const templateRegistry: Record<string, React.ComponentType<any>> = {
  "three-words": ThreeWords,
  "featured-word": FeaturedWord,
  "featured-sentence": FeaturedSentence,
  "question-answer": QuestionAnswer,
  "dont-say": DontSay,
  "gramer-of-day": GramerOfDay,
  "word-of-day": WordOfDay,
  "sentence-of-day": SentenceOfDay,
  "do-you-know": DoYouKnow,
  "translate-challenge": TranslateChallenge,
  "challenge-card": ChallengeCard,
  "new-word": NewWord,
  "quiz-true-false": QuizTrueFalse,
  "reverse-translate": ReverseTranslate,
  "word-challenge": WordChallenge,
};
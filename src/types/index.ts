import type { ReactNode } from "react";
import type { BackgroundVariant } from "../components/Background";
import { UiIconKey } from "../components/UiIcon";

/** أيقونة كل كلمة — تقدر تضيف مفاتيح جديدة وتربطها بأيقونة بملف WordIcon.tsx */
export type WordIconKey = "heart" | "handshake" | "sun" | "star" | "book";

export interface WordItem {
  turkish: string;
  arabic: string;
  icon?: WordIconKey;
}

export interface PostData {
  /** يحدد أي قالب يستخدم (المرحلة 3: Engine) */
  type: "three-words";
  title: string;
  subtitle?: string;
  badge: string;
  words: WordItem[];
  /** اسم أيقونة الرسمة التوضيحية (حاليًا: "tea" فقط متاح كـ SVG داخلي) */
  illustration?: "tea";
  footerHandle?: string;
  /** نمط الخلفية — لو ما انحدد، ينختار عشوائي (getRandomBackgroundVariant) */
  background?: BackgroundVariant;
  tip?: string;
  teaImage?: string;
}

export interface ThreeWordsProps {
  title: string;
  subtitle?: string;
  badge: string;
  words: WordItem[];
  footerHandle?: string;
  background?: BackgroundVariant;
  children?: ReactNode;
  tip?: string;
  teaImage?: string;
}

// ------------ Featured Word ------------

export interface FeaturedWordData {
  type: "featured-word";
  turkish: string;
  phonetic: string;
  meaning: string;
  exampleTurkish: string;
  exampleArabic: string;
  tip: string;
  image: string; // من public/assets — دائرة الصورة
  footerHandle?: string;
  background?: BackgroundVariant;
}

// ------------- SentenceOfDayData -------------

export interface FeaturedSentenceProps {
  turkishSentence: string;
  turkishHighlight: string;
  phonetic: string;
  phoneticHighlight: string;
  translation: string;
  translationHighlightWord?: string;
  cta: string;
  ctaHighlight: string;
  footerHandle: string;
  background: BackgroundVariant;
}

export interface FeaturedSentenceData extends Omit<
  FeaturedSentenceProps,
  "background"
> {
  type: "featured-sentence";
  background?: BackgroundVariant;
}

// ----------------- Question Answer -----------------

export interface QuestionAnswerProps {
  question: string;
  questionHighlight: string;
  turkishAnswer: string;
  turkishHighlight: string; // ← جديد: الجزء المطلوب تمييزه من الجملة التركية
  arabicTranslation: string;
  illustration: string;
  footerHandle: string;
  background: BackgroundVariant;
}

export interface QuestionAnswerData extends Omit<
  QuestionAnswerProps,
  "background"
> {
  type: "question-answer";
  background?: BackgroundVariant;
}

// -------------- dontSay ------------------
export interface DontSayProps {
  wrongPhrase: string;
  correctPhrase: string;
  translationWrong: string;
  translationCorrect: string;
  wrongLabel?: string;
  correctLabel?: string;
  footerHandle?: string;
  background: string; // مسار من public/assets، مثال: "/assets/dont-say-bg.png"
}

export interface DontSayData extends DontSayProps {
  type: "dont-say";
}

// -------------------- Gramer of Day --------------------
export interface ExampleItem {
  turkish?: string;
  arabic?: string;
}

export interface GramerOfDayProps {
  gramerName: string;
  gramerType?: string;
  whyUsed: string;
  examples: ExampleItem[];
  cta: string;

  footerHandle?: string;
}

export interface GramerOfDayData extends GramerOfDayProps {
  type: "gramer-of-day";
}

// ----------------- Sentence Of Day ----------------
export interface SentenceOfDayItem {
  turkish: string;
  arabic: string;
}

export interface SentenceOfDayProps {
  turkish: string;
  arabic: string;
  badgeText?: string;      // افتراضي: "عبارة اليوم"
  sectionTitle?: string;   // افتراضي: "الردود الشائعة" — عنوان عام، تقدر تغيّره (مرادفات/مواقف استخدام...)
  items: SentenceOfDayItem[];
  footerHandle?: string;
}

export interface SentenceOfDayData extends SentenceOfDayProps {
  type: "sentence-of-day";
}


// -------------------- Quizzes -------------

export interface QuizOption {
  text: string;
}

export interface QuizQuestionItem {
  question: string;
  options: QuizOption[];
  correctAnswerIndex: number; // index الخيار الصحيح بمصفوفة options (0 = A, 1 = B...)
}

// props القالب لسلايد سؤال وحد
export interface QuizQuestionProps {
  questionNumber: number;
  question: string;
  options: QuizOption[];
  correctAnswerIndex: number; // يوصل للقالب بس ما يُعرض بهالسلايد (زي ما تريد التصميم يضل نفسه)
  background: string;
}

// بيانات الـ JSON الكاملة (كل الأسئلة بمنشور واحد)
export interface QuizSetData {
  type: "quiz-question";
  badgeText?: string;
  background: string;
  questions: QuizQuestionItem[];
}


// ----------------- Do You Know -----------------


export interface DoYouKnowProps {
  type: "do-you-know";
  background: string;
  text1: string;
  text2?: string;
  word1Highlight?: string;
  word2Highlight?: string;
  footerHandle: string;
}



// ----------  ranslateChallenge ----------

export interface TranslateChallengeProps {
  turkishSentence: string; // الجملة التركية، تدعم سطرين لو طويلة
  level?: string;          // "A2", "B1"... النص بس فوق الشارة الموجودة بالخلفية
  footerHandle?: string;
}

export interface TranslateChallengeData extends TranslateChallengeProps {
  type: "translate-challenge";
}





// ----------------------------------------------------------------------------------
// --------------------------  QuizTrueFalseProps  ----------------------------------
// ----------------------------------------------------------------------------------

// ⚠️ هذا مقتطف فقط — يحتاج دمج يدوي داخل types/index.ts الموجود عندك،
// نفس منهج "حالة الدمج" المتبع بكل القوالب المربعة السابقة.
// لا يُستخدم كملف مستقل بالمشروع.

export interface QuizTrueFalseProps {
  turkishSentence: string;
  correctAnswer: "true" | "false";
  explanation: string;
  questionText?: string;
  badgeText?: string;
  subBadgeText?: string;
  mode: "question" | "answer";
}

// النسخة المخزّنة بالـ JSON بدون mode — الـ Example هو اللي يحدد mode وقت العرض
export interface QuizTrueFalseData
  extends Omit<QuizTrueFalseProps, "mode"> {
  type: "quiz-true-false";
}


// --------------------------  New Word  ----------------------------------

export interface NewWordProps {
  arabicWord: string;
  turkishWord: string;
  turkishSentence: string;
  background: string;
}

export interface NewWordData
  extends NewWordProps {
  type: "new-word";
}


// --------------------------  ReverseTranslate  ----------------------------------

// Stories — ReverseTranslate
export interface ReverseTranslateProps {
  arabicSentence: string;   // الجملة العربية، مثال: "أنا ذاهب للمدرسة."
  textBefore?: string;       
  textHiglit?: string;       
  textAfter?: string;       
  footerHandle?: string;
}

export interface ReverseTranslateData extends ReverseTranslateProps {
  type: "reverse-translate";
}


// ----------------- WordChallengeWordItem ---------------

export interface WordChallengeWordItem {
  turkish: string;
  emoji: string;
}

export interface WordChallengeProps {
  title?: string;
  badgeText?: string;
  subtitle?: string;
  words: WordChallengeWordItem[]; // مرن — أي عدد
  ratingQuestion?: string;
  ratingSubtitle?: string;
  lowEmoji?: string;
  lowLabel?: string;
  highEmoji?: string;
  highLabel?: string;
  tipText?: string;
  footerHandle?: string;
}

export interface WordChallengeData extends WordChallengeProps {
  type: "word-challenge";
}


// ------------------- Challenge --------------

export interface ChallengeCardProps {
  icon?: UiIconKey;        // أيقونة الدائرة العلوية — افتراضي "lightbulb"
  badgeText?: string;      // نص البادج (BrushBadge) — افتراضي "تحدي اليوم"
  title: string;           // العنوان الرئيسي — "أخطأت؟" / "أي كلمة تُستخدم أكثر؟"
  highlightText?: string;  // المحتوى التركي كنص واحد (جملة أو كلمة) — كرت وحيد
  highlightWord?: string;  // كلمة مميزة داخل highlightText (نفس ميكانيزم split() الموحّد)
  items?: string[];        // ⭐ بديل عن highlightText — لعرض كذا عنصر جنب بعض (مقارنة كلمتين مثلاً)
  question: string;        // السؤال الختامي — "أين الخطأ؟"
  footerHandle?: string;
}

export interface ChallengeCardData extends ChallengeCardProps {
  type: "challenge-card";
}
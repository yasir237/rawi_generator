import type { ReactNode } from "react";
import type { BackgroundVariant } from "../components/Background";

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
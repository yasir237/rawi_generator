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

export interface WordOfDayData {
  type: "word-of-day";
  turkish: string;
  phonetic: string;
  meaning: string;
  exampleTurkish: string; 
  exampleArabic: string;
  tip: string;
  image: string;             // من public/assets — دائرة الصورة
  footerHandle?: string;
  background?: BackgroundVariant;
}

// ------------- SentenceOfDayData -------------

export interface SentenceOfDayProps {
  turkishSentence: string;           // الجملة التركية كاملة، مثال: "Bugün hava çok güzel."
  turkishHighlight: string;          // الكلمة الملونة بالبنفسجي داخلها، مثال: "hava"
  phonetic: string;
  phoneticHighlight: string;
  translation: string;
  translationHighlightWord?: string;
  cta: string;
  ctaHighlight: string;
  footerHandle: string;
  background: BackgroundVariant;
}
 
export interface SentenceOfDayData extends Omit<SentenceOfDayProps, "background"> {
  type: "sentence-of-day";
  background?: BackgroundVariant;
}
 
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

import { colors } from "../design/tokens";

interface QuoteBubbleProps {
  /** حجم الفقاعة (عرض/ارتفاع) بالبكسل */
  size?: number;
  /** لون خلفية الفقاعة — بنفسجي افتراضيًا */
  bg?: string;
  /** لون علامة الاقتباس داخل الفقاعة */
  mark?: string;
}

/**
 * فقاعة كلام مصمتة (rounded square + ذيل صغير) فيها علامة اقتباس بيضاء.
 * تُستخدم فوق السؤال بقالب QuestionAnswer، وقابلة لإعادة الاستخدام بأي
 * قالب مستقبلي يحتاج نفس شكل "فقاعة اقتباس" (مو نفس UiIcon.quote اللي
 * هو علامة اقتباس مجردة بدون حاوية فقاعة).
 */
export default function QuoteBubble({
  size = 90,
  bg = colors.purpleTop,
  mark = "#ffffff",
}: QuoteBubbleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* جسم الفقاعة: مربع بحواف دائرية + ذيل صغير أسفل-يسار */}
      <path
        d="M18 4h64a14 14 0 0 1 14 14v40a14 14 0 0 1-14 14H46l-14 16v-16H18A14 14 0 0 1 4 58V18A14 14 0 0 1 18 4z"
        fill={bg}
      />
      {/* علامة الاقتباس "❞" — منحنيين متماثلين */}
      <path
        d="M30 32c7 0 12 5 12 12 0 8-5 13-12 13-2 0-4 0-5-1 1 6 5 10 11 12l-2 6c-10-3-16-11-16-22 0-12 5-20 12-20z
           M62 32c7 0 12 5 12 12 0 8-5 13-12 13-2 0-4 0-5-1 1 6 5 10 11 12l-2 6c-10-3-16-11-16-22 0-12 5-20 12-20z"
        fill={mark}
      />
    </svg>
  );
}
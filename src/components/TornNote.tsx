import { colors, fonts } from "../design/tokens";
import UiIcon from "./UiIcon";
import leftCap from "../assets/note/note-left-cap.png";
import rightCap from "../assets/note/note-right-cap.png";
import middleTile from "../assets/note/note-middle-tile.png";
import tape from "../assets/note/note-tape.png";

interface TornNoteProps {
  text: string;
  highlightWord?: string;
  minWidth?: number; // أقل عرض ممكن للورقة — يكبر تلقائيًا لو النص أطول
}

/**
 * "ورقة ممزقة" حقيقية (صورة مقصوصة 3-slice) بدل SVG zigzag يدوي:
 * - leftCap / rightCap: صورتان ثابتتا العرض تحتويان الحافة الممزقة الفعلية
 *   (يمين/يسار)، ما تتمطط أبدًا.
 * - middleTile: شريحة نظيفة من نفس الورقة تتكرر أفقيًا (repeat-x) لتملأ أي
 *   عرض إضافي — بما إن حواف فوق/تحت شبه مستقيمة، التكرار غير ملحوظ.
 * - tape: صورة الشريط اللاصق البنفسجي، توضع فوق بموضع ثابت (لا تتمطط ولا
 *   تتحرك مع طول النص) — بنفس ميلان والحجم الأصلي من التصميم المرجعي.
 *
 * العرض الكلي = leftCap + rightCap + (عرض المنتصف المطلوب حسب طول النص)،
 * فـ الجملة ما تطلع أبدًا خارج إطار الورقة.
 */
export default function TornNote({ text, highlightWord, minWidth = 600 }: TornNoteProps) {
  const [before, after] = highlightWord ? text.split(highlightWord) : [text, ""];

  return (
    <div className="relative inline-flex" style={{ minWidth }}>
      {/* القطعة اليسار — ثابتة، فيها الحافة الممزقة */}
      <img src={leftCap} alt="" style={{ height: 210, display: "block", flexShrink: 0 }} />

      {/* المنتصف المرن — يتمدد تلقائيًا حسب طول النص */}
      <div
        className="flex items-center justify-center gap-5 flex-1"
        style={{
          backgroundImage: `url(${middleTile})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 210px",
          padding: "0 24px",
        }}
      >
        <UiIcon icon="heart" color={colors.purple} size={40} />
        <span
          className="whitespace-nowrap"
          style={{
            fontFamily: fonts.arabic,
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: "-0.3px",
            lineHeight: 1.4,
            color: colors.noteInk ?? colors.ink,
            fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
            textShadow: "0 1px 0 rgba(0,0,0,0.06)",
          }}
        >
          {before}
          {highlightWord && (
            <span className="relative inline-block">
              {highlightWord}
              <svg
                className="absolute"
                style={{ left: -4, right: -4, bottom: -10, width: "calc(100% + 8px)" }}
                height={12}
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2,6 C20,2 35,9 50,5 C65,1 80,8 98,4"
                  stroke={colors.purple}
                  strokeWidth={4}
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          )}
          {after}
        </span>
      </div>

      {/* القطعة اليمين — ثابتة، فيها الحافة الممزقة */}
      <img src={rightCap} alt="" style={{ height: 210, display: "block", flexShrink: 0 }} />

      {/* الشريط اللاصق — موضع ثابت فوق منتصف الورقة تقريبًا، ما يتأثر بطول النص */}
      <img
        src={tape}
        alt=""
        className="absolute"
        style={{ top: -34, left: "50%", transform: "translateX(-56%)", width: 150 }}
      />
    </div>
  );
}
import { colors, fonts } from "../design/tokens";
import UiIcon from "./UiIcon";
import leftCap from "../assets/note/note-left-cap.png";
import rightCap from "../assets/note/note-right-cap.png";
import middleTile from "../assets/note/note-middle-tile.png";
import tape from "../assets/note/note-tape.png";

interface TornNoteProps {
  text: string; // أسطر متعددة تُفصل بـ "\n" — كل سطر يُرسم لحاله
  highlightWord?: string; // لو موجودة بأي سطر، تتلوّن + تسطير فرشاة تحتها بذاك السطر فقط
  minWidth?: number;
}

const BASE_HEIGHT = 210; // ارتفاع الورقة الأصلي لسطر واحد — نفس القيمة القديمة بالضبط (بدون أي تغيير بصري لـ SentenceOfDay)
const EXTRA_PER_LINE = 54; // ⚠️ تقدير تقريبي (fontSize 36 × lineHeight 1.4 + gap) لكل سطر إضافي بعد الأول — يحتاج ضبط بصري بعد أول تصدير فعلي

export default function TornNote({ text, highlightWord, minWidth = 600 }: TornNoteProps) {
  const lines = text.split("\n");
  const paperHeight =
    lines.length <= 1 ? BASE_HEIGHT : BASE_HEIGHT + (lines.length - 1) * EXTRA_PER_LINE;

  return (
    <div className="relative inline-flex" style={{ minWidth }}>
      {/* القطعة اليسار — تتمدد عموديًا حسب عدد الأسطر (تكبير تناسبي، الحافة الممزقة تكبر معه بدون تشوّه) */}
      <img src={leftCap} alt="" style={{ height: paperHeight, display: "block", flexShrink: 0 }} />

      {/* المنتصف المرن — يتمدد أفقيًا حسب طول أطول سطر، وعموديًا حسب paperHeight */}
      <div
        className="flex flex-col items-center justify-center gap-2 flex-1"
        style={{
          backgroundImage: `url(${middleTile})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: `auto ${paperHeight}px`,
          padding: "0 24px",
        }}
      >
        {lines.map((line, i) => {
          const hasHighlight = highlightWord && line.includes(highlightWord);
          const [before, after] = hasHighlight ? line.split(highlightWord!) : [line, ""];

          return (
            <span
              key={i}
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
              {hasHighlight && (
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
          );
        })}
      </div>

      {/* القطعة اليمين — نفس منطق اليسار */}
      <img src={rightCap} alt="" style={{ height: paperHeight, display: "block", flexShrink: 0 }} />

      {/* الشريط اللاصق — موضعه ثابت بأعلى الورقة بغض النظر عن الارتفاع (نفس القيم القديمة) */}
      <img
        src={tape}
        alt=""
        className="absolute"
        style={{ top: -34, left: "50%", transform: "translateX(-56%)", width: 150 }}
      />
    </div>
  );
}
import Logo from "../components/Logo";
import Badge from "../components/Badge";
import QuestionNumberBadge from "../components/QuestionNumberBadge";
import QuestionBox from "../components/QuestionBox";
import AnswerOption from "../components/AnswerOption";
import { colors, fonts, layout } from "../design/tokens";
import type { QuizQuestionProps } from "../types";

export default function QuizQuestion({
  questionNumber,
  question,
  options,
  correctAnswerIndex,
  background,
}: QuizQuestionProps) {
  return (
    <div
      style={{
        width: layout.canvasSize,
        height: layout.canvasSize,
        position: "relative",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: fonts.arabic,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: layout.padding,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* اللوجو — نمط bleed القياسي */}
        <div
          className="absolute flex items-start"
          style={{ marginTop: -24, marginLeft: -20 }}
        >
          <Logo variant="dark" height={130} />
        </div>

        {/* صف البادجات */}
        <div
          style={{
            position: "absolute",
            top: 70,
            left: layout.padding,
            right: layout.padding,
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            className="absolute top-15 right-13"
            style={{
              fontSize: 60,
              color: colors.surface,
              transform: "rotate(-4deg)",
            }}
          >
            {questionNumber}
          </span>
        </div>

        {/* صندوق السؤال + الخيارات */}
        <div
          style={{
            position: "absolute",
            top: 300,
            left: layout.padding,
            right: layout.padding,
            display: "flex",
            flexDirection: "column",
            gap: 26,
          }}
        >
          <QuestionBox question={question} />
          {options.map((opt, i) => (
            <AnswerOption
              key={i}
              letter={String.fromCharCode(65 + i)}
              text={opt.text}
              mode="q"
              answer={correctAnswerIndex == i}
            />
          ))}
        </div>

        {/* الطيارة، الخط المتقطع، العلم، البرج، شريط "شارك إجابتك" — كلها بالخلفية، ما نلمسها */}
      </div>
    </div>
  );
}

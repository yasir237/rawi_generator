import Logo from "../Logo";
import Footer from "../Footer";
import { colors, fonts } from "../../design/tokens";
import { storyLayout } from "../../design/layoutStory";

interface StorySeriesFrameProps {
  badgeText: string;
  badgeColor: string;
  badgeTextColor?: string;
  emoji?: string;
  /** اتركه undefined لإخفاء عداد "n/total" (السلايدات الإضافية بعد الخمسة الأساسية) */
  progress?: { current: number; total: number };
  footerHandle?: string;
  children: React.ReactNode;
}

/** شبكة نقاط زخرفية — نفس فكرة DotGrid بـ QuizTrueFalse، رُفعت هنا لأنها الحين تُستخدم بأكثر من قالب Story */
function DotGrid({ x, y, rows = 6, cols = 3, gap = 16 }: { x: number; y: number; rows?: number; cols?: number; gap?: number }) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={c * gap} cy={r * gap} r={3.5} fill={colors.purple} opacity={0.35} />);
    }
  }
  return (
    <svg style={{ position: "absolute", left: x, top: y, zIndex: 0 }} width={cols * gap} height={rows * gap}>
      {dots}
    </svg>
  );
}

function CornerBlob({ corner }: { corner: "top-right" | "bottom-left" }) {
  const isTopRight = corner === "top-right";
  return (
    <div
      style={{
        position: "absolute",
        top: isTopRight ? -40 : undefined,
        right: isTopRight ? -40 : undefined,
        bottom: !isTopRight ? -40 : undefined,
        left: !isTopRight ? -40 : undefined,
        width: 180,
        height: 180,
        borderRadius: "50%",
        background: colors.purpleSoft,
        opacity: 0.6,
        zIndex: 0,
      }}
    />
  );
}

export default function StorySeriesFrame({
  badgeText,
  badgeColor,
  badgeTextColor = "#FFFFFF",
  emoji,
  progress,
  footerHandle = "@rawi.turkish",
  children,
}: StorySeriesFrameProps) {
  const { canvasWidth, canvasHeight } = storyLayout;
  const isLightBadge = badgeColor === colors.surface;

  return (
    <div
      style={{
        width: canvasWidth,
        height: canvasHeight,
        position: "relative",
        overflow: "hidden",
        background: colors.surface,
      }}
    >
      {/* زخارف: بلوبات للسلايدات المرقّمة (1-5)، نقاط للسلايدات الإضافية (6-8) — مطابق للمرجع البصري */}
      {progress ? (
        <>
          <CornerBlob corner="top-right" />
          <CornerBlob corner="bottom-left" />
        </>
      ) : (
        <>
          <DotGrid x={44} y={44} />
          <DotGrid x={canvasWidth - 130} y={44} />
        </>
      )}

      {progress && (
        <div
          style={{
            position: "absolute",
            top: 44,
            left: 44,
            background: colors.purpleSoft,
            color: colors.purple,
            fontFamily: fonts.latin,
            fontWeight: 700,
            fontSize: 24,
            padding: "8px 20px",
            borderRadius: 999,
            zIndex: 2,
          }}
        >
          {progress.current}/{progress.total}
        </div>
      )}

      <div style={{ position: "absolute", top: 60, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 2 }}>
        <Logo variant="dark" height={80} />
      </div>

      <div style={{ position: "absolute", top: 170, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 2 }}>
        <div
          style={{
            background: badgeColor,
            color: badgeTextColor,
            fontFamily: fonts.arabic,
            fontWeight: 700,
            fontSize: 30,
            padding: "14px 40px",
            borderRadius: 999,
            border: isLightBadge ? `2px solid ${colors.purple}` : "none",
          }}
        >
          {emoji ? `${emoji} ` : ""}
          {badgeText}
        </div>
      </div>

      <div
        className="flex flex-col items-center"
        style={{ position: "relative", zIndex: 1, paddingTop: 280, gap: 32, paddingLeft: 64, paddingRight: 64 }}
      >
        {children}
      </div>

      <div className="absolute left-16 right-16" style={{ bottom: 48 }}>
        <Footer handle={footerHandle} dark fontSize={20} align="center" />
      </div>
    </div>
  );
}
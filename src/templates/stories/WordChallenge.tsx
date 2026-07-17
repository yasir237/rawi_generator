import { colors, fonts, storyLayout } from "../../design/tokens";
import Footer from "../../components/Footer";
import UiIcon from "../../components/UiIcon";
import Logo from "../../components/Logo";
import { DotGrid } from "../../components/ui/DotGrid";
import CornerBlob from "../../components/ui/CornerBlob";
import SparkMark from "../../components/ui/SparkMark";
import CurlyArrow from "../../components/ui/CurlyArrow";
import BrushBadge from "../../components/ui/BrushBadge";
import IconCircleBadge from "../../components/ui/IconCircleBadge";
import type { WordChallengeProps } from "../../types";

export default function WordChallenge({
  title = "كم كلمة تعرف؟",
  badgeText = "تحدي الكلمات",
  subtitle = "اقرأ الكلمات التالية",
  words,
  ratingQuestion = "كم كلمة كنت تعرفها؟",
  ratingSubtitle = "اختر رقم من 0 إلى 5",
  lowEmoji = "😕",
  lowLabel = "ما أعرف",
  highEmoji = "😃",
  highLabel = "أعرف كلها",
  tipText = "كل كلمة تتعلمها اليوم تقربك من هدفك!",
  footerHandle,
}: WordChallengeProps) {
  return (
    <div
      style={{
        width: storyLayout.canvasWidth,
        height: storyLayout.canvasHeight,
        background: colors.purpleSoft,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute flex items-center"
        style={{ marginBottom: 24, marginLeft: 24 }}
      >
        <Logo variant="dark" height={180}  />
      </div>
      {/* زخارف الزوايا — bleed مقصود خارج المحتوى */}
      <div style={{ position: "absolute", top: 40, left: 40 }}>
        <DotGrid rows={5} cols={3} x={130} y={180} />
      </div>
      <CornerBlob corner="top-right" size={260} opacity={0.9} />
      <CornerBlob corner="bottom-left" size={260} opacity={0.9} />
      
      <div style={{ position: "absolute", bottom: 70, right: 60 }}>
        <CurlyArrow size={64} rotation={-20} />
      </div>

      <div style={{height: "100px"}} />
      
      {/* المحتوى */}
      <div
        className="flex flex-col items-center"
        style={{
          padding: `70px ${storyLayout.padding}px 0`,
          position: "relative",
        }}
      >
        <IconCircleBadge icon="brain" size={140} iconSize={80} />

        <div style={{ marginTop: 28 }}>
          <BrushBadge fontSize={60}>{badgeText}</BrushBadge>
        </div>

        <h1
          style={{
            fontFamily: fonts.arabic,
            fontWeight: 900,
            fontSize: 66,
            color: colors.ink,
            marginTop: 32,
            textAlign: "center",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontFamily: fonts.arabic,
            fontSize: 38,
            color: colors.purple,
            marginTop: 20,
          }}
        >
          {subtitle}
        </p>

        {/* شبكة الكلمات — مرنة، تلتف تلقائيًا (flex-wrap) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 24,
            marginTop: 48,
            maxWidth: 900,
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", left: -60, top: 40 }}>
            <SparkMark size={36} rotation={-15} />
          </div>
          <div style={{ position: "absolute", right: -60, top: 160 }}>
            <SparkMark size={36} rotation={15} />
          </div>

          {words.map((word, i) => (
            <div
              key={i}
              style={{
                width: 280,
                background: colors.surface,
                borderRadius: 24,
                padding: "32px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: colors.purpleSoft,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 56,
                }}
              >
                {word.emoji}
              </div>
              <span
                style={{
                  fontFamily: fonts.latin,
                  fontWeight: 800,
                  fontSize: 40,
                  color: colors.ink,
                }}
              >
                {word.turkish}
              </span>
            </div>
          ))}
        </div>

        {/* فاصل متقطع */}
        <div
          style={{
            width: "100%",
            maxWidth: 850,
            borderTop: `2px dashed ${colors.purpleSoft}`,
            margin: "56px 0 40px",
          }}
        />

        {/* قسم التقييم الذاتي */}
        <div style={{ position: "relative", textAlign: "center" }}>
          <div style={{ position: "absolute", top: -10, left: -50 }}>
            <CurlyArrow size={44} rotation={100} />
          </div>
          <h2
            style={{
              fontFamily: fonts.arabic,
              fontWeight: 900,
              fontSize: 42,
              color: colors.ink,
            }}
          >
            {ratingQuestion}
          </h2>
          <p
            style={{
              fontFamily: fonts.arabic,
              fontSize: 24,
              color: colors.inkMuted,
              marginTop: 12,
            }}
          >
            {ratingSubtitle}
          </p>
        </div>

        {/* دوائر 0-5 */}
        <div style={{ display: "flex", gap: 18, marginTop: 40 }}>
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                border: `2px dashed ${colors.purple}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: fonts.latin,
                fontWeight: 800,
                fontSize: 28,
                color: colors.ink,
              }}
            >
              {n}
            </div>
          ))}
        </div>

        {/* تسميات 0 و5 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 460,
            marginTop: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 32 }}>{lowEmoji}</span>
            <span
              style={{
                fontFamily: fonts.arabic,
                fontSize: 22,
                color: colors.ink,
              }}
            >
              {lowLabel}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 32 }}>{highEmoji}</span>
            <span
              style={{
                fontFamily: fonts.arabic,
                fontSize: 22,
                color: colors.ink,
              }}
            >
              {highLabel}
            </span>
          </div>
        </div>

        {/* صندوق النصيحة */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: colors.purpleSoft,
            borderRadius: 20,
            padding: "20px 32px",
            marginTop: 48,
            maxWidth: 700,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: colors.purple,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <UiIcon icon="heart" color={colors.surface} size={22} />
          </div>
          <p
            dir="rtl"
            style={{
              fontFamily: fonts.arabic,
              fontSize: 22,
              color: colors.ink,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {tipText}
          </p>
        </div>
      </div>

      <div className="absolute" style={{ bottom: 40, left: 0, right: 0 }}>
        <Footer handle={footerHandle} align="center" dark />
      </div>
    </div>
  );
}

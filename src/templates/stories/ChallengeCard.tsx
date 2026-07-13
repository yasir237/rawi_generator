import { colors, fonts, storyLayout } from "../../design/tokens";
import Footer from "../../components/Footer";
import UiIcon from "../../components/UiIcon";
import {DotGrid} from "../../components/ui/DotGrid";
import CornerBlob from "../../components/ui/CornerBlob";
import SparkMark from "../../components/ui/SparkMark";
import CurlyArrow from "../../components/ui/CurlyArrow";
import BrushBadge from "../../components/ui/BrushBadge";
import IconCircleBadge from "../../components/ui/IconCircleBadge";
import type { ChallengeCardProps } from "../../types";
import Logo from "../../components/Logo";

export default function ChallengeCard({
  icon = "lightbulb",
  badgeText = "تحدي اليوم",
  title,
  highlightText,
  highlightWord,
  items,
  question,
  footerHandle,
}: ChallengeCardProps) {
  // نفس ميكانيزم الهايلايت الموحّد المستخدم بباقي المشروع
  const renderHighlighted = (text: string, highlight?: string) => {
    if (!highlight || !text.includes(highlight)) return text;
    const [before, after] = text.split(highlight);
    return (
      <>
        {before}
        <span style={{ color: colors.primary }}>{highlight}</span>
        {after}
      </>
    );
  };

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
        style={{ marginTop: 64, marginLeft: "35%" }}
      >
        <Logo variant="dark" height={240} />
      </div>
      <div style={{height: 300}} /> 
      {/* زخارف الزوايا — نفس فلسفة WordChallenge بالضبط */}
      <div style={{ position: "absolute", top: 40, left: 40 }}>
        <DotGrid rows={5} cols={3} x={120} y={150} />
      </div>
      <CornerBlob corner="top-right" size={260} opacity={0.9} />
      <CornerBlob corner="bottom-left" size={260} opacity={0.9} />
      <div style={{ position: "absolute", bottom: 70, right: 60 }}>
        <CurlyArrow size={64} rotation={-20} />
      </div>

      {/* المحتوى */}
      <div
        className="flex flex-col items-center"
        style={{ padding: `90px ${storyLayout.padding}px 0`, position: "relative" }}
      >
        <IconCircleBadge icon={icon} size={150} iconSize={100} />

        <div style={{ marginTop: 88 }}>
          <BrushBadge fontSize={80}>{badgeText}</BrushBadge>
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

      <div style={{height: "50px"}} />

        {/* المحتوى التركي — كرت وحيد (جملة/كلمة) أو كبسولات مقارنة */}
        <div style={{ position: "relative", marginTop: 64 }}>
          <div style={{ position: "absolute", left: -70, top: -20 }}>
            <SparkMark size={66} rotation={-15} />
          </div>
          <div style={{ position: "absolute", right: -100, top: 30 }}>
            <SparkMark size={66} rotation={15} />
          </div>

          {items && items.length > 0 ? (
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: colors.surface,
                    borderRadius: 24,
                    padding: "36px 48px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.latin,
                      fontWeight: 800,
                      fontSize: 42,
                      color: colors.ink,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            highlightText && (
              <div
                style={{
                  background: colors.surface,
                  borderRadius: 28,
                  padding: "44px 56px",
                  maxWidth: 850,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                <p
                  style={{
                    fontFamily: fonts.latin,
                    fontWeight: 800,
                    fontSize: 74,
                    color: colors.ink,
                    textAlign: "center",
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {renderHighlighted(highlightText, highlightWord)}
                </p>
              </div>
            )
          )}
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

        {/* السؤال الختامي */}
        <div style={{ position: "relative", textAlign: "center" }}>
          <div style={{ position: "absolute", top: -10, left: -50 }}>
            <CurlyArrow size={44} rotation={100} />
          </div>
          <h2
            style={{
              fontFamily: fonts.arabic,
              fontWeight: 900,
              fontSize: 60,
              color: colors.ink,
            }}
          >
            {question}
          </h2>
        </div>

        {/* صندوق تفاعل بسيط (اختياري بصريًا — أيقونة + دعوة تفكير) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: colors.purpleSoft,
            borderRadius: 20,
            padding: "20px 32px",
            marginTop: 40,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: colors.purple,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <UiIcon icon="chat" color={colors.surface} size={42} />
          </div>
          <p style={{ fontFamily: fonts.arabic, fontSize: 42, color: colors.ink, margin: 0 }}>
            اكتب إجابتك في التعليقات 👇
          </p>
        </div>
      </div>

      <div className="absolute" style={{ bottom: 40, left: 0, right: 0 }}>
        <Footer handle={footerHandle} align="center" dark />
      </div>
    </div>
  );
}
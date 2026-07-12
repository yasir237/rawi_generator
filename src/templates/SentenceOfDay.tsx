import { colors, fonts, layout } from "../design/tokens";
import Logo from "../components/Logo";
import Badge from "../components/Badge";
import UiIcon from "../components/UiIcon";
import Footer from "../components/Footer";
import type { SentenceOfDayProps } from "../types";

export default function SentenceOfDay({
  turkish,
  arabic,
  badgeText = "عبارة اليوم",
  sectionTitle = "الردود الشائعة",
  items,
  footerHandle,
}: SentenceOfDayProps) {
  const cardWidth = layout.canvasSize - layout.padding * 2;

  return (
    <div
      style={{
        width: layout.canvasSize,
        height: layout.canvasSize,
        background: colors.surface,
        borderRadius: 48,
        border: `2px solid ${colors.purpleSoft}`,
        overflow: "hidden",
        position: "relative",
        fontFamily: fonts.arabic,
      }}
    >
      {/* زخرفة اقتباس أعلى-يمين */}
      <div
        style={{
          position: "absolute",
          top: 90,
          right: 50,
          transform: "rotate(180deg)",
        }}
      >
        <UiIcon icon="quote" color={colors.purpleSoft} size={210} />
      </div>

      {/* زخرفة اقتباس أسفل-يسار — نفس الأيقونة مقلوبة */}
      <div
        style={{
          position: "absolute",
          bottom: 360,
          left: 40,
        }}
      >
        <UiIcon icon="quote" color={colors.purpleSoft} size={170} />
      </div>

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
        {/* اللوجو أعلى يسار — النمط القياسي */}
        <div
          className="absolute flex items-start"
          style={{ marginTop: -24, marginLeft: -20 }}
        >
          <Logo variant="dark" height={130} />
        </div>

        {/* البادج */}
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Badge color={colors.primary} fontSize={30} padding="14px 40px">
            {badgeText}
          </Badge>
        </div>

        {/* الجملة + الترجمة */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: fonts.latin,
              fontWeight: 800,
              fontSize: 76,
              color: colors.ink,
            }}
          >
            {turkish}
          </div>
          <div
            style={{
              fontFamily: fonts.arabic,
              fontWeight: 800,
              fontSize: 64,
              color: colors.ink,
            }}
          >
            {arabic}
          </div>
        </div>

        {/* صندوق الردود/القائمة */}
        {items?.length > 0 && (
          <div
            style={{
              width: cardWidth,
              background: colors.purpleSoft,
              borderRadius: 28,
              padding: "32px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {sectionTitle && (
              <div
                style={{
                  textAlign: "center",
                  fontFamily: fonts.arabic,
                  fontWeight: 800,
                  fontSize: 30,
                  color: colors.ink,
                  marginBottom: 6,
                }}
              >
                {sectionTitle}
              </div>
            )}
            {items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: fonts.latin,
                    fontWeight: 700,
                    fontSize: 28,
                    color: colors.ink,
                  }}
                >
                  <span style={{ color: colors.purple, fontSize: 24 }}>•</span>
                  {item.turkish}
                </div>
                <div
                  dir="rtl"
                  style={{
                    fontFamily: fonts.arabic,
                    fontWeight: 700,
                    fontSize: 28,
                    color: colors.ink,
                  }}
                >
                  {item.arabic}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* الفوتر */}
        <div
          style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
        >
          <Footer handle={footerHandle} dark fontSize={13} />
        </div>
      </div>
    </div>
  );
}

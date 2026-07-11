import { colors, fonts } from "../design/tokens";
import RibbonTag from "./RibbonTag";
import InfoRow from "./InfoRow";
import CircleImage from "./CircleImage";
import UiIcon from "./UiIcon";

interface WordOfDayCardProps {
  turkish: string;
  phonetic: string;
  meaning: string;
  exampleTurkish: string;
  exampleArabic: string;
  image: string;
}

export default function WordOfDayCard({
  turkish, phonetic, meaning, exampleTurkish, exampleArabic, image,
}: WordOfDayCardProps) {
  return (
    <div
      className="relative"
      style={{ borderRadius: 40, backgroundColor: colors.surface, padding: "56px 150px 70px 150px", boxShadow: "0 20px 50px rgba(10,5,40,0.35)" }}
    >
      <RibbonTag />

      <div style={{ maxWidth: 650 }}>
        <div className="font-extrabold" style={{ fontFamily: fonts.latin, fontSize: 68, color: colors.ink, lineHeight: 1.1 }} dir="ltr">
          {turkish}
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span style={{ fontFamily: fonts.latin, fontSize: 22, color: colors.inkMuted }} dir="ltr">
            [ {phonetic} ]
          </span>
          <span className="flex items-center justify-center rounded-full" style={{ width: 30, height: 30, backgroundColor: colors.surfaceMuted }}>
            <UiIcon icon="speaker" color={colors.purple} size={16} />
          </span>
        </div>

        <div style={{ borderTop: `1.5px dashed ${colors.inkMuted}`, opacity: 0.4, margin: "32px 0" }} />

        <div className="flex flex-col gap-6">
          <InfoRow icon="translate" label="المعنى">
            <span className="font-extrabold" style={{ fontFamily: fonts.arabic, fontSize: 26, color: colors.ink }}>
              {meaning}
            </span>
          </InfoRow>

          <InfoRow icon="chat" label="مثال">
            <div className="flex flex-col gap-1">
              <span style={{ fontFamily: fonts.latin, fontSize: 22 }} dir="ltr">
                <span className="font-bold" style={{ color: colors.ink }}>{exampleTurkish}</span>
              </span>
              <span style={{ fontFamily: fonts.arabic, fontSize: 16, color: colors.inkMuted }}>{exampleArabic}</span>
            </div>
          </InfoRow>
        </div>
      </div>
      {image && (
<CircleImage src={image} />
      )}
      
    </div>
  );
}
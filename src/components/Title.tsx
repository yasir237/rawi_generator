import { colors, fonts } from "../design/tokens";

interface TitleProps {
  number: number | string;
  title: string;
  size: number;
}

export default function Title({ number, title, size = 1.0 }: TitleProps) {
  return (
    <div className="flex items-end-safe justify-end gap-3" dir="rtl">
      <span
        className="font-bold"
        style={{
          fontFamily: fonts.latin,
          fontSize: 96 * size,
          color: colors.primary,
          lineHeight: 1,
        }}
      >
        {number}
      </span>
      <span
        className="font-bold text-white mb-6"
        style={{
          fontFamily: fonts.arabic,
          fontSize: 34 * size,
          lineHeight: 1.25,
        }}
      >
        {title}
      </span>
    </div>
  );
}

import { fonts } from "../design/tokens";

interface FooterProps {
  handle?: string;
}

export default function Footer({ handle = "@rawi.turkish" }: FooterProps) {
  return (
    <div
      className="text-white/70 text-center"
      style={{ fontFamily: fonts.latin, fontSize: 13 }}
      dir="ltr"
    >
      {handle}
    </div>
  );
}
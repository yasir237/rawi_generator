import { colors } from "../design/tokens";
import UiIcon from "./UiIcon";

export default function RibbonTag({ color = colors.purple }: { color?: string }) {
  return (
    <div className="absolute" style={{ top: -0, left: 40, width: 64, zIndex: 3 }}>
      <svg width="64" height="88" viewBox="0 0 64 88">
        <path d="M0 0H64V80L32 62L0 80Z" fill={color} />
      </svg>
      <div className="absolute flex justify-center" style={{ top: 22, left: 0, width: 64 }}>
        <UiIcon icon="star" color="#fff" size={32} />
      </div>
    </div>
  );
}
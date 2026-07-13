import { colors } from "../../design/tokens";

interface CurlyArrowProps {
  size?: number;
  color?: string;
  rotation?: number;
}

export default function CurlyArrow({ size = 48, color = colors.purple, rotation = 0 }: CurlyArrowProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ transform: `rotate(${rotation}deg)` }}>
      <path d="M8 8 C8 28 20 38 38 34" stroke={color} strokeWidth={3} strokeLinecap="round" />
      <path d="M30 50 L38 34 L30 24" stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
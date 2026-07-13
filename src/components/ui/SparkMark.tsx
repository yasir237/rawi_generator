import { colors } from "../../design/tokens";

interface SparkMarkProps {
  size?: number;
  color?: string;
  rotation?: number;
}

export default function SparkMark({ size = 40, color = colors.purple, rotation = 0 }: SparkMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ transform: `rotate(${rotation}deg)` }}>
      <path d="M8 4 L14 16" stroke={color} strokeWidth={4} strokeLinecap="round" />
      <path d="M2 16 L16 20" stroke={color} strokeWidth={4} strokeLinecap="round" />
      <path d="M8 32 L16 22" stroke={color} strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
}
import { colors } from "../../design/tokens";

export function SparkleBurst({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d="M10 20 L18 10 L14 24 Z" fill={colors.purple} opacity={0.6} />
      <path d="M28 4 L30 16 L34 4 Z" fill={colors.purple} opacity={0.5} />
      <path d="M42 22 L48 30 L36 26 Z" fill={colors.purple} opacity={0.5} />
    </svg>
  );
}
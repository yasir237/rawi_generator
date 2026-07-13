import { colors } from "../../design/tokens";

export function DotGrid({
  x,
  y,
  rows = 6,
  cols = 3,
  gap = 16,
}: {
  x: number;
  y: number;
  rows?: number;
  cols?: number;
  gap?: number;
}) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * gap}
          cy={r * gap}
          r={3.5}
          fill={colors.purple}
          opacity={0.35}
        />,
      );
    }
  }
  return (
    <svg
      style={{ position: "absolute", left: x, top: y, zIndex: 0 }}
      width={cols * gap}
      height={rows * gap}
    >
      {dots}
    </svg>
  );
}

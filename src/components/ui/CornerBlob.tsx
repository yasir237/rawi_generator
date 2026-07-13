import type { CSSProperties } from "react";
import { colors } from "../../design/tokens";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface CornerBlobProps {
  corner: Corner;
  size?: number;
  color?: string;
  opacity?: number;
}

const cornerStyles: Record<Corner, CSSProperties> = {
  "top-left": { top: 0, left: 0, borderBottomRightRadius: "100%" },
  "top-right": { top: 0, right: 0, borderBottomLeftRadius: "100%" },
  "bottom-left": { bottom: 0, left: 0, borderTopRightRadius: "100%" },
  "bottom-right": { bottom: 0, right: 0, borderTopLeftRadius: "100%" },
};

export default function CornerBlob({
  corner,
  size = 220,
  color = colors.purple,
  opacity = 1,
}: CornerBlobProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        background: color,
        opacity,
        ...cornerStyles[corner],
      }}
    />
  );
}
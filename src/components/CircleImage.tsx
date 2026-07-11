import { colors } from "../design/tokens";

export default function CircleImage({ src, size = 260 }: { src: string; size?: number }) {
  const ringSize = size + 28;
  return (
    <div className="absolute" style={{ right: -120, bottom: 60, width: size, height: size, zIndex: 25 }}>
      <svg className="absolute" style={{ top: -14, left: -14, width: ringSize, height: ringSize }} viewBox={`0 0 ${ringSize} ${ringSize}`}>
        <circle
          cx={ringSize / 2}
          cy={ringSize / 2}
          r={ringSize / 2 - 2}
          fill="none"
          stroke={colors.purple}
          strokeOpacity={0.5}
          strokeWidth={1.5}
          strokeDasharray="4 6"
        />
      </svg>
      <img
        src={src}
        alt=""
        className="rounded-full"
        style={{ width: size, height: size, objectFit: "cover", border: "6px solid #fff", boxShadow: "0 10px 30px rgba(20,10,50,0.25)" }}
      />
    </div>
  );
}
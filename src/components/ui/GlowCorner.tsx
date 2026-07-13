export function GlowCorner() {
  return (
    <div
      style={{
        position: "absolute",
        top: -80,
        right: -80,
        width: 260,
        height: 260,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(124,92,219,0.16) 0%, rgba(124,92,219,0) 70%)",
        zIndex: 0,
      }}
    />
  );
}
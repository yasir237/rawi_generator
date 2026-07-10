import type { ReactNode } from "react";
import { colors } from "../design/tokens";

export type BackgroundVariant = "aurora" | "orbit" | "waves" | "dots";

export const backgroundVariants: BackgroundVariant[] = ["aurora", "orbit", "waves", "dots"];

export function getRandomBackgroundVariant(): BackgroundVariant {
  return backgroundVariants[Math.floor(Math.random() * backgroundVariants.length)];
}

interface BackgroundProps {
  variant?: BackgroundVariant;
}

/** خلفية القالب: يختار بين عدة تصاميم CSS/SVG جاهزة، بدون أي صورة خارجية */
export default function Background({ variant = "aurora" }: BackgroundProps) {
  switch (variant) {
    case "orbit":
      return <OrbitBackground />;
    case "waves":
      return <WavesBackground />;
    case "dots":
      return <DotsBackground />;
    case "aurora":
    default:
      return <AuroraBackground />;
  }
}

/** قاعدة مشتركة: التدرج الأساسي + الفينييت، تستخدمها كل الأنماط */
function BaseGradient({ children }: { children?: ReactNode }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `radial-gradient(120% 100% at 15% 0%, #3A1F8A 0%, ${colors.bgTop} 35%, ${colors.bgBottom} 75%, #120A33 100%)`,
      }}
    >
      {children}
      <div
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 180px 40px rgba(10,5,30,0.35)" }}
      />
    </div>
  );
}

/* ---------- 1. Aurora: توهجات متعددة الألوان ---------- */
function AuroraBackground() {
  return (
    <BaseGradient>
      <Glow top={-160} right={-140} size={420} color="rgba(157,120,255,0.35)" />
      <Glow top={340} right={-180} size={380} color="rgba(230,57,80,0.18)" />
      <Glow top={300} left={-180} size={360} color="rgba(109,59,255,0.30)" />
      <Glow bottom={-160} right={-100} size={460} color="rgba(255,255,255,0.05)" />
      <DotGrid top={100} left={36} size={110} spacing={18} color="rgba(255,255,255,0.4)" />
      <DotGrid bottom={260} left={20} size={70} spacing={14} color="rgba(230,57,80,0.5)" />
      <Squiggle top={165} left={150} />
      <Sparkle top={235} left={250} />
      <DashedRing bottom={480 - 90} right={60} />
    </BaseGradient>
  );
}

/* ---------- 2. Orbit: دوائر متحدة المركز ---------- */
function OrbitBackground() {
  return (
    <BaseGradient>
      <div className="absolute" style={{ top: -220, right: -220 }}>
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
          {[80, 140, 200, 260].map((r) => (
            <circle
              key={r}
              cx="250"
              cy="250"
              r={r}
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>
      <Glow bottom={-140} left={-140} size={380} color="rgba(109,59,255,0.30)" />
      <DashedRing top={130} left={130} size={130} />
      <Sparkle top={640} right={110} />
      <DotGrid bottom={300} left={30} size={80} spacing={16} color="rgba(255,255,255,0.35)" />
    </BaseGradient>
  );
}

/* ---------- 3. Waves: خطوط منحنية متدرجة ---------- */
function WavesBackground() {
  return (
    <BaseGradient>
      <svg
        className="absolute"
        style={{ bottom: -40, left: 0 }}
        width="1080"
        height="360"
        viewBox="0 0 1080 360"
        fill="none"
      >
        <path
          d="M0 220 C 180 140, 340 300, 540 220 S 900 120, 1080 220 V360 H0 Z"
          fill="rgba(109,59,255,0.18)"
        />
        <path
          d="M0 280 C 200 200, 380 340, 560 270 S 920 200, 1080 270 V360 H0 Z"
          fill="rgba(230,57,80,0.10)"
        />
      </svg>
      <Glow top={-150} right={-120} size={400} color="rgba(157,120,255,0.30)" />
      <Squiggle top={150} left={130} />
      <DotGrid top={120} left={40} size={100} spacing={17} color="rgba(255,255,255,0.35)" />
    </BaseGradient>
  );
}

/* ---------- 4. Dots: شبكة نقاط كثيفة كعنصر رئيسي ---------- */
function DotsBackground() {
  return (
    <BaseGradient>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(circle at 30% 20%, black 0%, transparent 65%)",
        }}
      />
      <Glow top={-140} right={-140} size={400} color="rgba(157,120,255,0.30)" />
      <Glow bottom={-160} left={-140} size={380} color="rgba(230,57,80,0.15)" />
      <Sparkle top={210} left={220} />
      <DashedRing bottom={90} right={90} />
    </BaseGradient>
  );
}

/* ---------- عناصر زخرفية قابلة لإعادة الاستخدام ---------- */

function Glow({
  top,
  bottom,
  left,
  right,
  size,
  color,
}: {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size: number;
  color: string;
}) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        top,
        bottom,
        left,
        right,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
}

function DotGrid({
  top,
  bottom,
  left,
  right,
  size,
  spacing,
  color,
}: {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size: number;
  spacing: number;
  color: string;
}) {
  return (
    <div
      className="absolute"
      style={{
        top,
        bottom,
        left,
        right,
        width: size,
        height: size,
        backgroundImage: `radial-gradient(${color} 2px, transparent 2px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        maskImage: "radial-gradient(circle, black 40%, transparent 80%)",
      }}
    />
  );
}

function Squiggle({ top, left }: { top: number; left: number }) {
  return (
    <svg className="absolute" style={{ top, left, opacity: 0.55 }} width="70" height="46" viewBox="0 0 70 46" fill="none">
      <path d="M2 34 Q 18 6, 34 28 T 66 16" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Sparkle({ top, left, right }: { top: number; left?: number; right?: number }) {
  return (
    <svg className="absolute" style={{ top, left, right, opacity: 0.5 }} width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 1 L13.2 8.2 L20.5 9 L14.8 13.7 L16.6 21 L11 16.8 L5.4 21 L7.2 13.7 L1.5 9 L8.8 8.2 Z"
        fill="rgba(255,255,255,0.4)"
      />
    </svg>
  );
}

function DashedRing({
  top,
  bottom,
  left,
  right,
  size = 90,
}: {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  size?: number;
}) {
  return (
    <svg
      className="absolute"
      style={{ top, bottom, left, right, opacity: 0.4 }}
      width={size}
      height={size}
      viewBox="0 0 90 90"
      fill="none"
    >
      <circle cx="45" cy="45" r="38" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="4 7" />
    </svg>
  );
}
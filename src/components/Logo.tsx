import logoOriginal from "../assets/logos/logo-original.png";
import logoWhite from "../assets/logos/logo-white.png";
import logoDark from "../assets/logos/logo-dark.png";

export type LogoVariant = "original" | "white" | "dark";

interface LogoProps {
  /**
   * white  → للمنشورات ذات الخلفية الداكنة (مثل ThreeWords)
   * dark   → للمنشورات ذات الخلفية الفاتحة
   * original → اللوجو الأصلي بألوانه الكاملة (يستخدم خارج القوالب، مثلاً بالموقع أو الهيدر)
   */
  variant?: LogoVariant;
  /** الارتفاع بالبكسل، العرض يتحسب تلقائيًا حسب أبعاد الصورة الأصلية */
  height?: number;
}

const logoSources: Record<LogoVariant, string> = {
  original: logoOriginal,
  white: logoWhite,
  dark: logoDark,
};

export default function Logo({ variant = "white", height = 36 }: LogoProps) {
  return (
    <img
      src={logoSources[variant]}
      alt="راوي"
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
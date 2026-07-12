/**
 * مصدر واحد لكل قيم الهوية البصرية.
 * ممنوع أي قالب/مكون يكتب Hex يدوي — يستورد من هنا فقط.
 */

export const colors = {
  // خلفية القالب الداكنة (تدرج بنفسجي غامق)
  bgTop: "#2A1668",
  bgBottom: "#1B0E42",

  // بطاقات المحتوى البيضاء
  surface: "#FFFFFF",
  surfaceMuted: "#F4F2FB",

  // نصوص
  ink: "#1A1233",
  inkMuted: "#7A7590",
  white: "#FFFFFF",
  
  // الأحمر الأساسي (الرقم، البادج، خط جانب البطاقة)
  primary: "#E63950",
  
  purple: "#6939F5",
  purpleSoft: "#F2EEFC",
  purpleTop: "#8261e2",

  accent: "#FF9F45",      // البرتقالي — نجمة، كلمة "هافا"، كلمة "الآن" بالـ CTA
  noteInk: "#1E1440",      // كتابة داكنة فوق الورقة الممزقة (أغمق من ink العادي، بنفسجي مطفي)
  bgDeep: "#2B145E",  
  
  success: "#22C55E",
  bgSuccess: "#e1ffc2",

  bgWrong: "#ffc2c2",
} as const;

// لون دائرة الأيقونة + بادج الرقم لكل كلمة، بالتناوب حسب الترتيب
export const wordAccentPalette = ["#6D3BFF", "#E63950", "#6D3BFF"] as const;

export function getWordAccent(index: number): string {
  return wordAccentPalette[index % wordAccentPalette.length];
}

export const fonts = {
  arabic: "'Alexandria', sans-serif",
  latin: "'Inter', sans-serif",
} as const;

export const layout = {
  canvasSize: 1080,
  padding: 64,
  radius: 24,
} as const;
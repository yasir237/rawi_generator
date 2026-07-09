// src/design/tokens.js
// مصدر واحد لكل قيم الهوية البصرية — لا تكتب Hex codes يدويًا بأي مكان ثاني.
// عدّل هنا فقط إذا تغيّرت الهوية.

export const colors = {
  primary: '#6D3BFF',
  primaryHover: '#5A2EE6',
  bg: '#FFFFFF',
  surface: '#F8F9FC',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  border: '#E5E7EB'
}

// الأحمر خاص بحساب rawi.turkish فقط. لو ضفت حساب جديد (rawi.english, rawi.quran...)
// زيد أكسنت جديد هنا وخله البنفسجي ثابت زي ما تقول القاعدة الذهبية بالوثيقة.
export const accents = {
  turkish: '#E53935',
  english: '#3B82F6',
  quran: '#22C55E',
  code: '#06B6D4'
}

export const fonts = {
  arabic: "'Alexandria', sans-serif",
  latin: "'Inter', sans-serif"
}

// المقاسات مرجعية لمنشور 1080×1080 كما بالوثيقة
export const sizes = {
  title: 60,
  subtitle: 40,
  turkishWord: 70,
  translation: 42,
  example: 32,
  smallText: 24
}

export const radius = {
  card: 24
}

export const canvas = {
  width: 1080,
  height: 1080
}
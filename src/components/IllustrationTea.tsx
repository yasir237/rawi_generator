export default function IllustrationTea() {
  return (
    <svg width="180" height="150" viewBox="0 0 180 150" fill="none">
      {/* الصحن */}
      <ellipse cx="70" cy="128" rx="66" ry="12" fill="#FFFFFF" opacity="0.95" />
      {/* السميت (خبز الدائري) */}
      <circle cx="140" cy="110" r="30" fill="#C97B3D" />
      <circle cx="140" cy="110" r="18" fill="#FFFFFF" opacity="0.9" />
      <g stroke="#8A5326" strokeWidth="2" strokeLinecap="round">
        <path d="M118 96 L124 104" />
        <path d="M158 96 L152 104" />
        <path d="M118 124 L124 116" />
        <path d="M158 124 L152 116" />
      </g>
      {/* كوب الشاي التركي */}
      <path d="M38 60 L48 118 H92 L102 60 Z" fill="#7A1620" />
      <ellipse cx="70" cy="60" rx="32" ry="8" fill="#B23A2E" />
      <ellipse cx="70" cy="118" rx="22" ry="6" fill="#5C1016" />
      {/* الصحن الصغير تحت الكوب */}
      <ellipse cx="70" cy="126" rx="34" ry="8" fill="#FFFFFF" />
    </svg>
  );
}
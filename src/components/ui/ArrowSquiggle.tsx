import { colors } from "../../design/tokens";

export function ArrowSquiggle() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <path
        d="M40 6 C34 18 20 20 10 30"
        stroke={colors.purple}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M18 26 L10 30 L14 38"
        stroke={colors.purple}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
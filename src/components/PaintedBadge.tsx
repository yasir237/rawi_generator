import badgeImage from "../assets/badges/sentence-of-day-badge.png";

interface PaintedBadgeProps {
  height?: number;
}

/**
 * بادج "جملة اليوم" — صورة PNG ثابتة (خربشة ماركر + نجمة) بدل SVG مرسوم يدويًا.
 * ثابت لأن نص البادج جزء من هوية القالب نفسه (مو بيانات متغيّرة من JSON)،
 * بنفس منطق Logo.tsx تمامًا. الصورة بخلفية شفافة، مقصوصة تلقائيًا من الحواف.
 */
export default function PaintedBadge({ height = 140 }: PaintedBadgeProps) {
  return (
    <img
      src={badgeImage}
      alt="جملة اليوم"
      style={{ height, width: "auto" }}
    />
  );
}
import { colors, fonts, layout } from "../design/tokens";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import UiIcon from "../components/UiIcon";
import Badge from "../components/Badge";
import Chip from "../components/Chip";

/**
 * WordOfDay — القالب السابع: "كلمة اليوم"، النسخة الجديدة.
 *
 * ⚠️ ملاحظة تسمية مهمة: هذا الاسم (`WordOfDay`) كان مُستخدم سابقًا لأول
 * نسخة من قالب الكلمة، وتم تحريره بالكامل (راجع Roadmap بالـ README —
 * "إعادة تسمية" تحت القالب الثاني) عشان يصير فاضي بالضبط لهذا القالب:
 * تصميم جديد كليًا، مختلف عن FeaturedWord (اللي فيه كرت أبيض + معنى/مثال
 * مفصّل). هذا القالب أبسط وأكبر تركيزًا على الكلمة نفسها كبطل التصميم،
 * أقرب لفلسفة "One Post = One Idea" المستخدمة بـ FeaturedSentence، بس
 * مطبّقة على كلمة مفردة بدل جملة.
 *
 * الفرق عن FeaturedWord:
 * - بدون كرت أبيض (الخلفية نفسها فاتحة، مو كرت داكن-على-فاتح).
 * - بدون قسم "مثال" منفصل — بس نطق + ترجمة + استخدام مختصر بشكل Chip.
 * - الكلمة نفسها أكبر عنصر بالتصميم (بعكس FeaturedWord اللي عنوان
 *   "كلمة مميزة" والـ IconPill ياخذون مساحة أعلى الكرت).
 *
 * الطبقات: خلفية فاتحة + Texture خفيف + زخارف بنفسجية بالأركان (بدون
 * صور — SVG/CSS خالص) → Logo → BrushBadge → الكلمة → النطق+سبيكر →
 * الترجمة → Chip الاستخدام → سؤال تفاعلي (تحفيز تعليقات) → Footer.
 *
 * ⚠️ السؤال التفاعلي (`engagementQuestion`) نص أطول نسبيًا وبيختلف طوله
 * حسب الكلمة نفسها — لو زاد المحتوى الكلي (كلمة طويلة + سؤال تفاعلي طويل)
 * تأكد بصريًا إنه ما يقرب من الفوتر أو يخرج عن حدود الكانفاس، خصوصًا إذا
 * غيّرت النص الافتراضي بـ prop مخصص. القياسات الحالية (fontSize 24،
 * maxWidth 720) تقدير أولي زي باقي القياسات بالمشروع.
 *
 * ⚠️ الخلفية هنا **لا تستخدم** `components/Background.tsx` (نفس استثناء
 * DontSay بالضبط، ولنفس السبب: الفلسفة "هادئة/فاتحة" مو "إعلانية داكنة").
 * لكن بعكس DontSay (خلفية صورة PNG كاملة)، هنا الطلب صريح: "بدون صور" —
 * فالتكستشر والزخارف مبنية بالكامل CSS/SVG محليًا داخل هذا الملف. لو
 * قالب مستقبلي ثاني يحتاج نفس أسلوب "خلفية فاتحة + زخارف أركان بنفسجية"،
 * الأنسب ترفع `CornerDots`/`CornerSwirl` تحت لمكوّنات عامة بدل تكرارها —
 * حاليًا خليتهم محليين لأنه أول استخدام واحد بس.
 */

function CornerDots() {
  // شبكة نقاط بنفسجية خفيفة جدًا — أسفل يسار الكانفاس
  const dots = [];
  const rows = 5;
  const cols = 5;
  const gap = 18;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * gap}
          cy={r * gap}
          r={3}
          fill={colors.purple}
          opacity={0.18}
        />
      );
    }
  }
  return (
    <svg
      width={rows * gap}
      height={cols * gap}
      className="absolute"
      style={{ left: 40, bottom: 40 }}
    >
      {dots}
    </svg>
  );
}

function CornerSwirl() {
  // حلقات متحدة المركز خفيفة — أعلى يمين الكانفاس (نفس روح "orbit" بس فاتحة)
  return (
    <svg
      width={220}
      height={220}
      viewBox="0 0 220 220"
      className="absolute"
      style={{ top: -60, right: -60 }}
    >
      <circle cx="110" cy="110" r="100" stroke={colors.purple} strokeWidth="1.5" fill="none" opacity={0.12} />
      <circle cx="110" cy="110" r="72" stroke={colors.purple} strokeWidth="1.5" fill="none" opacity={0.16} />
      <circle cx="110" cy="110" r="44" stroke={colors.purple} strokeWidth="1.5" fill="none" opacity={0.2} />
    </svg>
  );
}

function SoftTexture() {
  // Texture خفيف جدًا على كامل الكانفاس — نقاط دقيقة متكررة بشفافية شبه معدومة
  return (
    <svg width={layout.canvasSize} height={layout.canvasSize} className="absolute inset-0">
      <defs>
        <pattern id="wod-texture" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={colors.ink} opacity={0.035} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wod-texture)" />
    </svg>
  );
}

export interface WordOfDayProps {
  turkish: string; // الكلمة التركية، مثال: "Merhaba"
  phonetic: string; // النطق، مثال: "mer-ha-ba"
  translation: string; // الترجمة العربية، مثال: "مرحباً"
  usageEmoji?: string; // إيموجي الاستخدام، مثال: "👋"
  usageText: string; // نص الاستخدام، مثال: "تستخدم عند اللقاء"
  badgeText?: string; // نص البادج، افتراضي: "كلمة اليوم"
  /**
   * سؤال تفاعلي أسفل الكرت لتحفيز التعليقات، مثال:
   * "💜 هل تعرف كلمة أجمل من Merhaba؟ اكتبها في التعليقات."
   * لو ما مرّرته، يُبنى تلقائيًا من `turkish` بنفس الصيغة الافتراضية تحت.
   * مرّر `""` (نص فاضي) صراحة لو تبي تخفي هذا السطر كليًا لمنشور معيّن.
   */
  engagementQuestion?: string;
  /**
   * الكلمة المطلوب تمييزها بنفسجي داخل `engagementQuestion` (نفس ميكانيزم
   * الهايلايت الموحّد `text.split(highlight)` المستخدم بباقي القوالب).
   * افتراضي: نفس قيمة `turkish` — لأن الجملة الافتراضية تذكر الكلمة نفسها.
   */
  engagementHighlight?: string;
  footerHandle?: string;
}

export default function WordOfDay({
  turkish,
  phonetic,
  translation,
  usageEmoji,
  usageText,
  badgeText = "كلمة اليوم",
  engagementQuestion,
  engagementHighlight,
  footerHandle,
}: WordOfDayProps) {
  const resolvedEngagement =
    engagementQuestion ?? `💜 هل تعرف كلمة أجمل من ${turkish}؟ اكتبها في التعليقات.`;
  const resolvedHighlight = engagementHighlight ?? turkish;
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: layout.canvasSize,
        height: layout.canvasSize,
        background: colors.surface,
      }}
    >
      {/* خلفية: تكستشر + زخارف أركان — كل شي خلف المحتوى */}
      <SoftTexture />
      <CornerSwirl />
      <CornerDots />
 <div
        className="relative flex flex-col h-full"
        style={{ padding: layout.padding, zIndex: 10 }}
      >
      {/* اللوجو أعلى يسار — نفس النمط القياسي المتبع بكل القوالب (bleed خفيف) */}
      <div className="absolute flex items-start" style={{ marginTop: -24, marginLeft: -20, zIndex: 10 }}>
        <Logo variant="dark" height={130} />
      </div>

      {/* المحتوى الرئيسي — متمركز عموديًا وأفقيًا */}
      <div
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          zIndex: 10,
          height: "100%",
          padding: `0 ${layout.padding}px`,
          gap: 34,
        }}
      >
        <Badge children={badgeText} color={colors.purple} fontSize={40} padding="8px 45px" />

        {/* الكلمة — أكبر عنصر بالتصميم */}
        <h1
          className="font-black"
          style={{
            fontFamily: fonts.latin,
            color: colors.ink,
            fontSize: 116,
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {turkish}
        </h1>

        {/* النطق + زر سبيكر صغير */}
        <div className="flex items-center gap-3">
          <span
            style={{
              fontFamily: fonts.latin,
              color: colors.inkMuted,
              fontSize: 30,
              letterSpacing: 1,
            }}
          >
            / {phonetic} /
          </span>
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 44, height: 44, background: colors.surfaceMuted }}
          >
            <UiIcon icon="speaker" color={colors.purple} size={22} />
          </div>
        </div>

        {/* الترجمة — بنفسجي راوي (مو أحمر) */}
        <div
          className="font-black"
          style={{ fontFamily: fonts.arabic, color: colors.primary, fontSize: 84, margin: "20px auto" }}
        >
          {translation}
        </div>

        {/* الاستخدام — Chip صغير بدل مستطيل كامل العرض */}
        <Chip fontSize={30} emoji={usageEmoji} text={usageText} />

        {/* السؤال التفاعلي — يحفّز التعليقات، بالكلمة نفسها مميّزة بنفسجي
            (نفس ميكانيزم الهايلايت الموحّد: split() على الكلمة داخل الجملة) */}
        {resolvedEngagement && (
          <p
            className="font-bold"
            style={{
              fontFamily: fonts.arabic,
              color: colors.inkMuted,
              fontSize: 24,
              maxWidth: 720,
              lineHeight: 1.5,
              margin: 0,
              marginTop: "50px"
            }}
          >
            {resolvedEngagement.includes(resolvedHighlight) ? (
              <>
                {resolvedEngagement.split(resolvedHighlight)[0]}
                <span dir="rtl" style={{ color: colors.purple, fontWeight: 800 }}>
                  {resolvedHighlight}
                </span>
                {resolvedEngagement.split(resolvedHighlight)[1]}
              </>
            ) : (
              resolvedEngagement
            )}
          </p>
        )}
      </div>

      <div className="absolute" style={{ bottom: 32, left: 0, right: 0, zIndex: 10 }}>
        <Footer handle={footerHandle} dark align="center" />
      </div>
    </div>
    </div>
  );
}
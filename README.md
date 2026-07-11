# RAWI Generator — راوي

مولّد قوالب سوشال ميديا لتعليم التركية. تدخل بيانات (عنوان، كلمات، خلفية...)
ويطلع لك تصميم جاهز بمقاس Instagram (1080×1080) قابل للتصدير كصورة PNG.

**الفلسفة الأساسية:** ما نصمم صورة، نبني **مكوّنات (Layers)** قابلة لإعادة
الاستخدام. أي منشور جديد = تغيير بيانات فقط، بدون أي لمسة تصميم يدوية.

---

## المكدس التقني (Tech Stack)

- **React 19** + **Vite**
- **TypeScript**
- **Tailwind CSS v4** (بدون `tailwind.config.js` — الإعداد عبر `@theme` في CSS)
- **html-to-image** لتصدير القوالب كـ PNG بمقاس حقيقي

---

## التثبيت والتشغيل

```bash
npm install
npm run dev
```

الحزم الأساسية المطلوبة إذا ناقصة:

```bash
npm install -D typescript @types/react @types/react-dom
npm install html-to-image
```

---

## هيكل المشروع

```
public/
└── assets/                          ← صور متغيّرة حسب كل منشور (JSON-driven)
    ├── tea-simit.png                  ← صورة توضيحية لمنشور ThreeWords
    └── istanbul-tea.png                ← صورة الدائرة لمنشور WordOfDay

src/
├── assets/
│   ├── logos/
│   │   ├── logo-original.png       ← اللوجو الأصلي بالألوان الكاملة
│   │   ├── logo-white.png          ← نسخة بيضاء (للخلفيات الداكنة)
│   │   └── logo-dark.png           ← نسخة داكنة (للخلفيات الفاتحة)
│   ├── badges/
│   │   └── sentence-of-day-badge.png  ← بادج "جملة اليوم" (خربشة ماركر + نجمة + تسطير) — SentenceOfDay
│   └── note/
│       ├── note-left-cap.png          ← الحافة اليسار الممزقة (ثابتة) — TornNote
│       ├── note-right-cap.png         ← الحافة اليمين الممزقة (ثابتة) — TornNote
│       ├── note-middle-tile.png       ← نسيج ورقة متكرر (repeat-x) للمنتصف المرن — TornNote
│       └── note-tape.png              ← الشريط اللاصق البنفسجي — TornNote
│
├── design/
│   └── tokens.ts                    ← مصدر واحد لكل الألوان/الخطوط/المقاسات
│
├── types/
│   └── index.ts                      ← الأنواع المشتركة (WordItem, PostData, WordOfDayData, SentenceOfDayData...)
│
├── components/                        ← عناصر بناء صغيرة قابلة لإعادة الاستخدام
│   ├── Background.tsx                  ← نظام الخلفيات الديناميكي (5 أنماط)
│   ├── Logo.tsx                         ← شعار راوي (3 نسخ حسب الخلفية)
│   ├── Title.tsx                         ← الرقم الكبير + العنوان (يُستخدم بـ ThreeWords)
│   ├── Badge.tsx                          ← بادج أحمر بيضاوي
│   ├── WordIcon.tsx                        ← أيقونة SVG لكل كلمة (heart, handshake, sun, star, book)
│   ├── WordCard.tsx                         ← بطاقة الكلمة (تدرج + رقم + نص)
│   ├── TipBox.tsx                            ← صندوق "نصيحة اليوم" — نسخة ThreeWords (شريط جانبي)
│   ├── IllustrationTea.tsx                    ← رسمة SVG احتياطية لكوب شاي (غير مستخدمة حاليًا)
│   ├── Footer.tsx                              ← حساب السوشال ميديا
│   ├── UiIcon.tsx                               ← أيقونات واجهة عامة (star, translate, chat, speaker, calendar, lightbulb, heart, sun-cloud, quote)
│   ├── IconPill.tsx                              ← بادج بيضاوي بأيقونة دائرية + نص (مثل "Word of the Day")
│   ├── RibbonTag.tsx                              ← شكل الريبون/العلامة المثبّتة على زاوية الكرت
│   ├── InfoRow.tsx                                 ← صف "أيقونة دائرية + عنوان + محتوى" (يُستخدم لصفوف المعنى/المثال)
│   ├── CircleImage.tsx                              ← صورة دائرية بحلقة منقطة زخرفية حواليها
│   ├── TipBanner.tsx                                 ← صندوق نصيحة صلد بخلفية بنفسجية كاملة — نسخة WordOfDay
│   ├── WordOfDayCard.tsx                              ← الكرت الأبيض الكبير لقالب كلمة اليوم (يجمّع Ribbon+InfoRow+CircleImage)
│   ├── PaintedBadge.tsx                                ← بادج "جملة اليوم" — صورة PNG ثابتة (خربشة ماركر) — SentenceOfDay
│   └── TornNote.tsx                                     ← ورقة ممزقة 3-slice + شريط لاصق (تمتد حسب طول النص) — SentenceOfDay
│
├── templates/                          ← كل قالب نهائي = ملف مستقل هنا
│   ├── ThreeWords.tsx                    ← القالب الأول (3 كلمات تركية)
│   ├── ThreeWordsExample.tsx              ← معاينة + تصدير + اختيار خلفية لـ ThreeWords
│   ├── WordOfDay.tsx                       ← القالب الثاني (كلمة اليوم بشرح ومثال)
│   ├── WordOfDayExample.tsx                 ← معاينة + تصدير لـ WordOfDay
│   ├── SentenceOfDay.tsx                     ← القالب الثالث (جملة اليوم — إعلان بصري لجملة واحدة)
│   └── SentenceOfDayExample.tsx                ← معاينة + تصدير لـ SentenceOfDay
│
├── data/
│   ├── three-words-example.json        ← مثال بيانات JSON لمنشور ThreeWords جاهز
│   ├── word-of-day-example.json         ← مثال بيانات JSON لمنشور WordOfDay جاهز
│   └── sentence-of-day-example.json      ← مثال بيانات JSON لمنشور SentenceOfDay جاهز
│
├── utils/
│   └── exportImage.ts                   ← تصدير أي قالب لصورة PNG
│
├── index.css                           ← استيراد Tailwind + rawi-theme.css
├── rawi-theme.css                      ← متغيرات CSS لهوية راوي
└── main.tsx                            ← نقطة الدخول
```

---

## 1. نظام التصميم (`design/tokens.ts`)

كل قيمة بصرية (لون، خط، مقاس) تُستورد من هنا فقط. **ممنوع أي مكون أو قالب
يكتب Hex يدوي.**

```ts
colors.bgTop / colors.bgBottom   // تدرج خلفية القوالب الداكنة
colors.primary                    // الأحمر الأساسي (البادج، أيقونة النصيحة بـ ThreeWords)
colors.purple / colors.purpleTop  // البنفسجي الأساسي (يُستخدم بكثافة بـ WordOfDay: البادج، الأيقونات، TipBanner)
colors.surface / colors.surfaceMuted // أسطح بيضاء (خلفية الكرت الأبيض بـ WordOfDay، ورقة TornNote، دوائر الأيقونات)
colors.ink / colors.inkMuted      // نصوص داكنة + نصوص ثانوية (تُستخدم داخل الكرت الأبيض)
colors.accent                     // برتقالي — كلمات مميزة بـ SentenceOfDay (نطق، CTA)
colors.noteInk                    // كتابة داكنة (نيفي بنفسجي) فوق ورقة TornNote — أغمق من ink العادي
wordAccentPalette                 // ألوان تتكرر على كل كلمة (بنفسجي/أحمر بالتناوب) — WordCard فقط
fonts.arabic / fonts.latin        // Alexandria (عربي) / Inter (لاتيني)
layout.canvasSize                 // 1080 — ثابت لكل قالب
layout.padding                    // 64 — المسافة من الحواف، تُستخدم أيضًا لحساب عرض كرت WordOfDay
```

> **ملاحظة:** `WordCard` الحالي ما يستخدم `colors.surface` كخلفية —
> خلفيته بالكامل تدرج مبني من `getWordAccent()`. بالمقابل `WordOfDayCard`
> يستخدم `colors.surface` كخلفية بيضاء صلدة كاملة (بدون تدرج).

---

## 2. المكونات (`components/`)

| المكون | الوصف | يُستخدم بـ |
|---|---|---|
| `Background` | نظام خلفيات ديناميكي — انظر القسم 3 | كل القوالب |
| `Logo` | يقبل `variant`: `"white"` \| `"dark"` \| `"original"`، و `height` | كل القوالب |
| `Footer` | نص حساب السوشال ميديا (`@rawi.turkish`) | كل القوالب |
| `Title` | يعرض رقم أحمر كبير (عدد الكلمات) + عنوان أبيض | ThreeWords |
| `Badge` | بادج أحمر بيضاوي (مثلاً "تستخدمها كل يوم") | ThreeWords |
| `WordIcon` | أيقونة SVG بلون ديناميكي (`heart`, `handshake`, `sun`, `star`, `book`) — مخصصة لكلمات WordCard | ThreeWords |
| `WordCard` | بطاقة الكلمة — تصميم بتدرج موحّد كامل | ThreeWords |
| `TipBox` | صندوق نصيحة — شريط جانبي صلد + خلفية شبه شفافة | ThreeWords |
| `IllustrationTea` | رسمة SVG احتياطية لكوب شاي (غير مفعّلة حاليًا) | — |
| `UiIcon` | أيقونات واجهة عامة SVG يدوية موحّدة — انظر تفاصيلها تحت | WordOfDay, SentenceOfDay |
| `IconPill` | بادج بيضاوي بخلفية ملونة، دائرة أيقونة صغيرة + نص لاتيني | WordOfDay |
| `RibbonTag` | شكل ريبون (علامة) مثلث الأسفل، يطلع فوق حافة الكرت شوي، فيه أيقونة نجمة | WordOfDay |
| `InfoRow` | صف: دائرة أيقونة ملونة + تسمية (label) + محتوى حر (children) | WordOfDay |
| `CircleImage` | صورة دائرية بحدود بيضاء سميكة + حلقة منقطة زخرفية أكبر حواليها، تتكئ على زاوية الكرت | WordOfDay |
| `TipBanner` | صندوق نصيحة بخلفية بنفسجية صلدة كاملة (مختلف عن `TipBox` عمدًا — نفس الفكرة بلغة تصميم مختلفة حسب القالب) | WordOfDay |
| `WordOfDayCard` | يجمّع `RibbonTag` + `InfoRow` (مرتين) + `CircleImage` داخل كرت أبيض واحد | WordOfDay |
| `PaintedBadge` | بادج "جملة اليوم" — صورة PNG ثابتة (نجمة + خربشة ماركر + تسطير مزدوج) | SentenceOfDay |
| `TornNote` | ورقة ممزقة 3-slice (صور حقيقية) تتمدد تلقائيًا حسب طول النص + شريط لاصق ثابت الموضع | SentenceOfDay |

### تصميم `WordCard` بالتفصيل

البطاقة **بالكامل تدرج واحد موحّد** (مصدر واحد، بدون طبقتين تدرج منفصلتين
تسببان اختلاف لون) — مبني هيك:

```
┌─────────────────────────────────────────────┐
│ [تدرج accent كامل الكرت — نفس الاتجاه للكرت والرقم]│
│  ┌────────┐  ⬤ ← دائرة بيضاء (أيقونة) متراكبة   │
│  │   1    │     على حافة منطقة الرقم/النص      │
│  │(رقم أبيض)│  Teşekkürler   (أبيض)              │
│  └────────┘  شكراً           (أبيض شفاف 85%)     │
└─────────────────────────────────────────────┘
```

- **الخلفية الكاملة للكرت** (`background: gradient`) — تدرج `150deg` من
  `accent` إلى نسخة أغمق منه عبر `color-mix(in srgb, accent 65%, black)`.
- **صندوق النص شفاف بالكامل** (بدون أي خلفية بيضاء) — يبين التدرج من ورا
  النص مباشرة، بدون أي قطع لوني.
- **النصوص بيضاء** (مو داكنة) لأن الخلفية صارت ملوّنة بالكامل — التركية
  أبيض 100%، الترجمة العربية أبيض بشفافية 85%.
- **الدائرة البيضاء** (`ICON_SIZE = 80px`) هي العنصر الأبيض الوحيد في
  البطاقة، تحتوي على `WordIcon` بلون الـ accent.
- **النقاط الزخرفية** يمين البطاقة بيضاء شفافة (`opacity: 0.3`)، مو بلون
  accent (لأنها كانت تختفي فوق خلفية بنفس اللون تقريبًا).

```tsx
<WordCard index={1} turkish="Teşekkürler" arabic="شكراً" icon="heart" />
```

### تصميم `TipBox` بالتفصيل (ThreeWords)

بعد رفض تصميمين أوليين (Glassmorphism + دائرة تدرج مع `blur` — نمط شائع
جدًا في تصاميم AI العامة)، التصميم الحالي مبني بنفس **لغة WordCard** بدل
عناصر زخرفية عامة:

- شريط لوني صلد رفيع (`8px`) بلون `colors.purple`، ملاصق بزاوية دائرية
  من جهة واحدة فقط.
- بدون أي دائرة تدرج، بدون `backdrop-filter`/`blur`.
- عنوان صغير ("نصيحة اليوم") بحجم *eyebrow* فوق النص الأساسي — نمط
  تحريري بدل بطاقة تنبيه عامة.

```tsx
<TipBox text="احفظ كلمة واحدة واستخدمها اليوم في محادثتك" />
```

### تصميم `WordOfDayCard` بالتفصيل

الكرت الأبيض الكبير مبني كطبقات فوق بعضها (`position: relative` +
عناصر `absolute` بداخله):

```
┌───────────────────────────────────────────┐
│ 🏷️(Ribbon فوق الحافة شوي)                    │
│                                              │
│   Günaydın            (عنوان لاتيني ضخم)      │
│   [ gün-ay-dın ] 🔊                           │
│   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄            │
│   ⬤ المعنى                    ⬤(صورة دائرية) │
│      صباح الخير                 تتكئ على     │
│   ⬤ مثال                        زاوية الكرت   │
│      Günaydın, nasılsın?        من تحت-يمين   │
│      صباح الخير، كيف حالك؟                    │
└───────────────────────────────────────────┘
```

- **عرض الكرت ثابت** = `layout.canvasSize - layout.padding * 2` (952px) —
  نفس منطق الـ padding المستخدم ببقية القوالب، **ما يُكتب رقم يدوي منفصل**.
- **`RibbonTag`** موضعه `top: -24` (يطلع فوق حافة الكرت العلوية بمقدار
  24px عمدًا) و `left: 40` — يعطي إحساس "علامة مثبّتة" على الكرت.
- **عمود النص محدود العرض عمدًا** (`maxWidth: width - 70 - 260`) عشان ما
  يتداخل نص "مثال"/"المعنى" مع `CircleImage` المتكئة يمين-تحت.
- **`CircleImage`** موضعها `right: -60, bottom: -70` — تتكئ على زاوية
  الكرت من برّه (bleed مقصود، بنفس فلسفة `teaImage` بـ ThreeWords)، مع
  حلقة SVG منقطة أكبر منها بـ 40px حواليها.
- **`InfoRow`** تتكرر مرتين (المعنى / مثال)، كل صف = دائرة أيقونة ملونة
  + تسمية + محتوى حر (`children`) يسمح بتنسيق مختلف لكل صف (نص واحد
  للمعنى، سطرين تركي+عربي للمثال).

```tsx
<WordOfDayCard
  width={952}
  turkish="Günaydın"
  phonetic="gün-ay-dın"
  meaning="صباح الخير"
  exampleHighlight="Günaydın,"
  exampleRest="nasılsın?"
  exampleArabic="صباح الخير، كيف حالك؟"
  image="/assets/istanbul-tea.png"
/>
```

### تصميم `TipBanner` بالتفصيل (WordOfDay)

نسخة ثانية عن فكرة "نصيحة اليوم"، لكن بلغة تصميم مختلفة عمدًا عن
`TipBox` — كل قالب يقدر يستخدم أسلوب النصيحة الأنسب لهويته البصرية
الداخلية (`TipBox` = شريط جانبي على خلفية شبه شفافة، `TipBanner` = صندوق
بنفسجي صلد كامل بعرض ثابت متمركز):

```tsx
<TipBanner text="استخدمها في الصباح عند التحدث مع الأصدقاء أو شراء شيء." />
```

### تصميم `UiIcon` بالتفصيل — مكوّن أيقونات عام موحّد

**قاعدة مهمة:** أي أيقونة زخرفية عامة (مو مرتبطة بكلمة معينة زي
`WordIcon`) تُضاف هنا، **ما تُنشأ كمكوّن منفصل جديد**. سبق وجرّبنا إنشاء
مكوّن `DecorIcon` منفصل وقت بناء `SentenceOfDay`، واكتشفنا إنه يخالف
القاعدة الذهبية (تكرار نظام أيقونات بدل توسيع الموجود) — فتم دمجه داخل
`UiIcon` وحذف `DecorIcon` نهائيًا.

```ts
export type UiIconKey =
  | "star" | "translate" | "chat" | "speaker" | "calendar" | "lightbulb" // الأصلية
  | "heart" | "sun-cloud" | "quote";                                     // أُضيفت لأجل SentenceOfDay
```

- كل أيقونة مسار (`path`) واحد داخل `viewBox="0 0 20 20"` — أي أيقونة
  جديدة مستقبلية لازم تُصمَّم بنفس المقياس عشان تنسجم بصريًا مع الباقي.
- `filledIcons` (حاليًا: `star`, `heart`) هي الأيقونات المصمتة (fill
  بدون stroke منطقي) — البقية outline (stroke بدون fill).
- شكل `heart` مصمم بمنحنيين Bezier متناظرين تمامًا حول المحور العمودي
  (كل إحداثية يسار لها مرآة يمين مطابقة رياضيًا: `x` و `20-x`) — أي
  تعديل مستقبلي على القلب لازم يحافظ على هذا التناظر وإلا يطلع القلب مايل.

```tsx
<UiIcon icon="heart" color={colors.purple} size={40} />
<UiIcon icon="sun-cloud" color={colors.purpleTop} size={80} />
<UiIcon icon="quote" color={colors.purpleTop} size={56} />
```

---

## 3. نظام الخلفيات الديناميكي (`components/Background.tsx`)

5 أنماط جاهزة، كلها CSS/SVG خالص بدون أي صورة خارجية:

| النمط | الوصف |
|---|---|
| `aurora` | توهجات ملونة متعددة (بنفسجي/أحمر) — افتراضي ThreeWords |
| `orbit` | دوائر متحدة المركز أعلى الزاوية — افتراضي WordOfDay |
| `waves` | موجات منحنية متدرجة أسفل القالب |
| `dots` | شبكة نقاط كثيفة كعنصر رئيسي |
| `swoosh` | أقواس بنفسجية خفيفة أعلى-يمين وأسفل-يسار + شبكة نقاط بالزوايا — افتراضي SentenceOfDay |

```tsx
<Background variant="orbit" />
```

اختيار عشوائي (مفيد لاحقًا بالـ Engine):

```ts
import { getRandomBackgroundVariant } from "../components/Background";
const bg = getRandomBackgroundVariant();
```

كل الأنماط تشترك بقاعدة تدرج واحدة (`BaseGradient`) + فينييت خفيف بالحواف،
وتستخدم عناصر زخرفية قابلة لإعادة الاستخدام: `Glow`, `DotGrid`, `Squiggle`,
`Sparkle`, `DashedRing`.

---

## 4. القوالب (`templates/`)

### ThreeWords

القالب الأول — يعرض 3 (أو أي عدد) كلمات تركية بترتيب:

```
Logo (أعلى يسار، قريب من الحافة)
  → Title + Badge (عمود واحد، منزاح شوي يسار عن المنتصف)
  → قائمة WordCard (كلمة تلو الثانية، بتدرج موحّد لكل بطاقة)
  → TipBox (أسفل يسار — يظهر دائمًا إذا تم تمرير `tip`)
  → صورة توضيحية (`teaImage`, أسفل يمين — ملتصقة بالحافة تمامًا، بدون
    أي padding/margin، خارج حاوية `layout.padding`)
  → Footer (أسفل المنتصف)
```

```tsx
<ThreeWords
  title="كلمات تركية"
  badge="تستخدمها كل يوم"
  background="aurora"
  footerHandle="@rawi.turkish"
  tip="احفظ كلمة واحدة واستخدمها اليوم في محادثتك"
  teaImage="/assets/tea-simit.png"
  words={[
    { turkish: "Teşekkürler", arabic: "شكراً", icon: "heart" },
    { turkish: "Rica ederim", arabic: "العفو", icon: "handshake" },
    { turkish: "İyi günler", arabic: "يوم سعيد", icon: "sun" },
  ]}
/>
```

> **مهم — طبقات الـ z-index بـ `ThreeWords`:**
> الصورة التوضيحية (`teaImage`) على `z-index: 20`، والمحتوى الرئيسي
> (اللوجو، البطاقات، الفوتر) على `z-index: 10` داخل حاوية منفصلة.
> بمعنى: الصورة تعوم **فوق** المحتوى بصريًا إذا تداخلوا مكانيًا. لو تبي
> العكس (المحتوى فوق الصورة دائمًا)، بدّل الرقمين.

### ThreeWordsExample

معاينة جاهزة تقرأ من `data/three-words-example.json`، فيها أزرار لتبديل
نمط الخلفية حيًا، وزر "تصدير PNG".

**قاعدة مهمة:** مرّر بيانات الـ JSON للقالب بصيغة **spread كامل**
(`{...data}`) بدل استخراج كل حقل يدويًا — لأنه أي حقل جديد تضيفه بالـ
JSON مستقبلاً ينوصل تلقائيًا للقالب بدون ما تحتاج تعدّل ملف الـ Example
كل مرة وتنسى حقل:

```tsx
// ✅ صح — يوصل كل حقل تلقائيًا
<ThreeWords {...data} background={background} />

// ❌ خطأ شائع — لازم تتذكر تضيف كل حقل جديد يدويًا، وسهل تنسى وحد
<ThreeWords
  title={data.title}
  badge={data.badge}
  words={data.words}
  footerHandle={data.footerHandle}
  tip={data.tip}
  // teaImage نسيته هنا مثلاً → الصورة ما تطلع أبدًا رغم وجودها بالـ JSON
/>
```

### WordOfDay

القالب الثاني — يعرض كلمة تركية واحدة بشرح مفصّل (لفظ، معنى، مثال) داخل
كرت أبيض، بترتيب:

```
Logo (أعلى يسار، خارج حاوية المحتوى الرئيسية)
  → عنوان "كلمة اليوم" + IconPill "Word of the Day" (عمود واحد، متمركز)
  → WordOfDayCard (الكرت الأبيض الكبير — يحتوي Ribbon + عنوان الكلمة +
    لفظها + صفي InfoRow (معنى/مثال) + CircleImage متكئة على الزاوية)
  → TipBanner (صندوق نصيحة بنفسجي صلد، عرض ثابت متمركز)
  → Footer (أسفل المنتصف، `position: absolute` عند `bottom: 32`)
```

```tsx
<WordOfDay
  turkish="Günaydın"
  phonetic="gün-ay-dın"
  meaning="صباح الخير"
  exampleHighlight="Günaydın,"
  exampleRest="nasılsın?"
  exampleArabic="صباح الخير، كيف حالك؟"
  tip="استخدمها في الصباح عند التحدث مع الأصدقاء أو شراء شيء."
  image="/assets/istanbul-tea.png"
  footerHandle="@rawi.turkish"
  background="orbit"
/>
```

> **ملاحظة تصميم — لماذا `exampleHighlight` و`exampleRest` منفصلين؟**
> جملة المثال اللاتينية (`Günaydın, nasılsın?`) فيها جزء ملوّن بنفسجي
> (الكلمة نفسها) وجزء عادي (باقي الجملة). بدل ما نمرر HTML خام أو نعمل
> Parsing داخل المكوّن، نمرر الحقلين منفصلين بالبيانات ونلوّنهم بالكود —
> نفس فلسفة المشروع بعدم وجود أي منطق تصميم مخفي جوه الـ JSON.
>
> **تحديث لاحق (SentenceOfDay):** بعد بناء قالب SentenceOfDay اكتشفنا
> طريقة أفضل تحل نفس المشكلة بمرونة أعلى — انظر "ميكانيزم الهايلايت
> الموحّد" تحت. النمط القديم (`exampleHighlight`/`exampleRest`) يضل شغّال
> بـ WordOfDay لأنه ما يحتاج تعديل، بس أي قالب جديد لازم يستخدم النمط
> الجديد بدل هذا.

> **ملاحظة تصميم — لماذا عرض `WordOfDayCard` يُمرَّر كـ prop (`width`)
> بدل ما يُحسب جوّا المكوّن؟**
> عشان `WordOfDayCard` يضل مكوّن عام قابل لإعادة الاستخدام بأي عرض مستقبلاً
> (مثلاً لو صار فيه قالب ثاني بعرض كرت مختلف)، والقالب (`WordOfDay.tsx`)
> هو المسؤول عن حساب العرض حسب `layout.padding` — نفس مبدأ "التصميم
> يُحسب بالقالب، المكوّن ينفّذ بس".

### WordOfDayExample

معاينة جاهزة تقرأ من `data/word-of-day-example.json`، بنفس فلسفة
`ThreeWordsExample` (زر "تصدير PNG"، وتقدر تضيف لها لاحقًا أزرار تبديل
خلفية حيّة بنفس طريقة `backgroundVariants`).

```tsx
<WordOfDay {...data} />
```

### SentenceOfDay

القالب الثالث — منشور "إعلاني" هدفه إيقاف المستخدم عن التمرير خلال ثانية:
جملة تركية واحدة كبيرة جدًا (البطل الحقيقي للتصميم)، بدون أي معلومات
إضافية (بدون تفكيك، بدون قواعد، بدون أمثلة — هذي تروح لمنشورات ثانية).
الفلسفة: **One Post = One Idea**. بترتيب:

```
Logo (أعلى يسار)
  → PaintedBadge "جملة اليوم" (صورة ثابتة فيها النجمة + التسطير)
  → الجملة التركية (أكبر عنصر، بدون Card ولا إطار، بيضاء + كلمة بنفسجية)
    + UiIcon "quote" (زخرفة أعلى-يسار) و"sun-cloud" (زخرفة أعلى-يمين)
    + خط فرشاة تحتها
  → PhoneticCapsule (Pill شفاف بحدود + زر سبيكر دائري متدرج + نطق عربي)
  → TornNote (ورقة ممزقة حقيقية فيها الترجمة + شريط لاصق)
  → CTA (نص + كلمة مميزة برتقالي + أيقونة Bookmark بدائرة بنفسجية)
  → Footer (أسفل المنتصف)
```

```tsx
<SentenceOfDay
  turkishSentence="Bugün hava çok güzel."
  turkishHighlight="hava"
  phonetic="بوغون هافا تشوك غوزال"
  phoneticHighlight="هافا"
  translation="الجو اليوم جميل جداً"
  translationHighlightWord="جميل"
  cta="احفظها الآن و استخدمها في حياتك اليومية!"
  ctaHighlight="الآن"
  footerHandle="@rawi.turkish"
  background="swoosh"
/>
```

#### ميكانيزم الهايلايت الموحّد (جملة كاملة + كلمة هايلايت)

**قاعدة مهمة لأي قالب جديد بعد هذا:** لتلوين كلمة وحدة داخل جملة، مرّر
**الجملة كاملة كنص طبيعي متواصل** + **الكلمة المطلوب تمييزها لحالها**،
والمكوّن نفسه يسوي `text.split(highlightWord)` ويلوّن الجزء الوسط:

```tsx
const [before, after] = turkishSentence.split(turkishHighlight);
// ...
<span>{before}<span style={{ color: colors.purpleTop }}>{turkishHighlight}</span>{after}</span>
```

**ليش هذا أفضل من تقسيم الجملة يدويًا لحقول منفصلة (`beforeHighlight`/
`afterHighlight`)؟**
- أول نسخة من `SentenceOfDay` كانت تستخدم 3 حقول منفصلة
  (`turkishBeforeHighlight`/`turkishHighlight`/`turkishAfterHighlight`)
  + `<br />` **مثبت بالكود** بين الأجزاء — هذا سبّب مشكلة: كسر السطر كان
  مفروض يدويًا بغض النظر عن طول النص الفعلي، فيطلع القطع "مقطّع" وغير
  طبيعي.
- بعد التوحيد: الجملة نص واحد متواصل، والالتفاف (wrap) للسطر التالي صار
  طبيعي بالكامل حسب `maxWidth` بالحاوية — بدون أي منطق تصميم مخفي بالـ JSON.
- **أي قالب جديد يحتاج تلوين كلمة داخل جملة يستخدم هذا النمط**، مو نمط
  `exampleHighlight`/`exampleRest` القديم بـ WordOfDay (يضل موجود بس
  لأجل التوافق العكسي فقط).

#### تصميم `PaintedBadge` بالتفصيل

بادج "جملة اليوم" — **صورة PNG ثابتة**، مو SVG مرسوم بالكود، ومو نص +
مكوّن ديناميكي. القرار هذا مقصود:

- النص ثابت دائمًا ("جملة اليوم") — هذا عنوان القالب نفسه، مو بيانات
  متغيّرة حسب كل منشور (بعكس `turkishSentence` مثلاً)، فما نخسر أي مرونة
  بتثبيته كصورة.
- محاولة تقليد خربشة فرشاة AI بدقة عبر SVG path يدوي ما توصل لنفس
  الملمس الحقيقي (تدرج سماكة الحبر، تفاصيل حواف النجمة) مهما حاولنا —
  فالحل الأنسب صورة جاهزة مطابقة تمامًا للمرجع.
- نفس منطق `Logo.tsx` بالضبط: صورة PNG شفافة الخلفية، `import` عادي من
  `src/assets/`.

```tsx
<PaintedBadge height={140} />
```

⚠️ **مهم:** الصورة المصدر (لو جاية من أداة توليد صور AI) قد تحتوي على
خلفية بيضاء صلدة بدل شفافة — تأكد قبل الاستخدام إن قناة alpha فعلاً
شفافة بالزوايا (افحص بـ `img.getpixel()` أو أداة مشابهة)، وإلا الصورة
تطلع بمربع أبيض حولها فوق أي خلفية داكنة.

#### تصميم `TornNote` بالتفصيل — تقنية 3-Slice بصور حقيقية

الترجمة تظهر داخل "ورقة ممزقة" واقعية — بُنيت من **صور مقصوصة حقيقية**
(مو SVG zigzag يدوي) لأن الملمس الفعلي لتمزق الورق صعب محاكاته بمنحنيات
SVG بنفس مستوى الواقعية. لحل مشكلة "كيف تتمدد الورقة حسب طول النص بدون
ما تتمطط الحواف الممزقة نفسها":

```
┌────┐┌─────────────────────────┐┌────┐
│Left││   Middle (flex-1)        ││Right│
│Cap ││   نسيج متكرر repeat-x    ││ Cap │
│ثابت││   يتمدد حسب طول النص      ││ثابت │
└────┘└─────────────────────────┘└────┘
        [الشريط اللاصق — موضع ثابت فوق]
```

- **`note-left-cap.png` / `note-right-cap.png`**: قطعتان ثابتتا العرض،
  كل وحدة فيها الحافة الممزقة **الحقيقية** (يسار/يمين) من الصورة
  الأصلية — ما تتمطط أبدًا بغض النظر عن طول النص.
- **`note-middle-tile.png`**: شريحة نظيفة من نفس الورقة (مقصوصة من
  منطقة بعيدة عن الشريط اللاصق)، توضع كـ `background-image` بخاصية
  `background-repeat: repeat-x` على `div` بـ `flex: 1` — يتمدد أوتوماتيكي
  حسب عرض النص الفعلي. هذا ينفع فقط لأن حواف الورقة **فوق وتحت** شبه
  مستقيمة (التمزق الحقيقي بس بالحواف الجانبية يسار/يمين) — تأكد من هذا
  الشرط قبل تطبيق نفس التقنية على شكل ورقة ثاني.
- **`note-tape.png`**: صورة الشريط اللاصق منفصلة تمامًا، توضع فوق
  بـ `position: absolute` بموضع ثابت (`left: 50%`) — **ما يتحرك ولا
  يتمدد** مع طول النص.
- **النتيجة:** الجملة **ما تطلع أبدًا خارج إطار الورقة**، لأن العرض
  الكلي = leftCap + rightCap + (عرض المنتصف المطلوب فعليًا حسب طول النص).

```tsx
<TornNote
  text="الجو اليوم جميل جداً"
  highlightWord="جميل"
  minWidth={600} // أقل عرض ممكن — يكبر تلقائيًا لو النص أطول
/>
```

> **كيف تقص صور 3-slice جديدة لشكل ورقة/شريط مختلف مستقبلاً؟**
> 1. تأكد الصورة المصدر عندها قناة alpha شفافة فعليًا (مو خلفية بيضاء
>    صلدة) — افحص بالبكسل قبل أي شي.
>    `img.getbbox()` بمكتبة Pillow يقص حسب المحتوى الفعلي تلقائيًا.
> 2. افحص بصريًا وين التمزق/التفاصيل غير القابلة للتكرار (عادة الحواف
>    الجانبية بشريط أفقي طويل) وقصّها كقطعتين ثابتتين (`leftCap`/`rightCap`).
> 3. قص شريحة نظيفة من منطقة "عادية" بالمنتصف (بعيدة عن أي عنصر ثاني
>    زي شريط لاصق) لتصير قطعة التكرار (`middleTile`).
> 3. أي عنصر إضافي فوق (شريط لاصق، ختم، ريبون...) يُقص لحاله كصورة
>    منفصلة ويوضع بـ `position: absolute` بموضع ثابت.

#### تصميم النطق (`PhoneticCapsule`) والـ CTA

- **كبسولة النطق**: Pill بحدود شفافة رفيعة (`rgba(255,255,255,0.18)`)،
  زر سبيكر دائري بتدرج `purpleTop → purple`، النص محاط بأقواس `[ ]`
  والكلمة المميزة بلون `colors.accent` (برتقالي).
- **CTA**: نص أبيض + كلمة مميزة برتقالي (نفس `colors.accent`) + أيقونة
  Bookmark بدائرة بنفسجية صلدة — نفس ميكانيزم `split()` الموحّد المذكور
  فوق.

#### طباعة النص العربي — دروس مستفادة (`TornNote`)

النص العربي داخل الورقة الممزقة مرّ بتحسينات طباعة محددة بعد ملاحظة إنه
يحس "خشن":

| القيمة | قبل | بعد | السبب |
|---|---|---|---|
| `fontWeight` | 900 (`font-extrabold`) | `700` | الوزن الأثقل بالعربي يلاصق الحروف ببعض بالأحجام الكبيرة، يفقدها رشاقتها |
| `letterSpacing` | (بدون) | `-0.3px` | تقارب خفيف يخلي الكلمة تحس متماسكة كوحدة بصرية |
| `lineHeight` | (بدون تحديد) | `1.4` | مساحة تنفس فوق/تحت النص |
| `fontFeatureSettings` | (بدون) | `"kern" 1, "liga" 1, "calt" 1` | تفعيل الربط والتموضع الدقيق بين الحروف المتجاورة — بعض المتصفحات تعطّلها افتراضيًا |
| `textShadow` | (بدون) | `0 1px 0 rgba(0,0,0,0.06)` | ظل خفيف جدًا يعطي إحساس حبر حقيقي على الورقة بدل نص رقمي مسطّح |

> **قاعدة عامة لأي نص عربي كبير بقالب جديد:** ما يكفي بس اختيار
> `fonts.arabic` والوزن — راجع الجدول فوق كنقطة انطلاق لأي نص عربي
> بحجم كبير (فوق 28px تقريبًا) يحتاج يحس "مصمم" مو "مطبوع افتراضي".

#### تسطير الكلمات المميزة — خط فرشاة مو مستقيم

أي تسطير تحت كلمة مميزة (بالجملة التركية أو بالترجمة العربية) يُرسم
بمنحنى SVG (`path` بمنحنيات بسيطة) **مو** بـ `div` مستطيل مستقيم — نفس
لغة التصميم "المرسوم باليد" المستخدمة بباقي عناصر القالب (خط الفرشاة
تحت الجملة، التسطير المزدوج بالبادج). التسطير يمتد تلقائيًا بعرض الكلمة
عبر `preserveAspectRatio="none"` على الـ `viewBox`:

```tsx
<svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ width: "calc(100% + 8px)" }}>
  <path d="M2,6 C20,2 35,9 50,5 C65,1 80,8 98,4" stroke={colors.purple} strokeWidth={4} fill="none" strokeLinecap="round" />
</svg>
```

### SentenceOfDayExample

معاينة جاهزة تقرأ من `data/sentence-of-day-example.json`، بنفس فلسفة
`ThreeWordsExample` (أزرار تبديل خلفية حيّة عبر `backgroundVariants`، زر
"تصدير PNG"، تمرير البيانات بصيغة `{...data}` كاملة).

```tsx
<SentenceOfDay {...data} background={background} />
```

---

## 5. البيانات (JSON-driven)

كل منشور = ملف JSON واحد، بدون لمس أي كود.

### مثال ThreeWords

```json
{
  "type": "three-words",
  "title": "كلمات تركية",
  "badge": "تستخدمها كل يوم",
  "footerHandle": "@rawi.turkish",
  "background": "aurora",
  "tip": "احفظ كلمة واحدة واستخدمها اليوم في محادثتك",
  "teaImage": "/assets/tea-simit.png",
  "words": [
    { "turkish": "Teşekkürler", "arabic": "شكراً", "icon": "heart" },
    { "turkish": "Rica ederim", "arabic": "العفو", "icon": "handshake" },
    { "turkish": "İyi günler", "arabic": "يوم سعيد", "icon": "sun" }
  ]
}
```

### مثال WordOfDay

```json
{
  "type": "word-of-day",
  "turkish": "Günaydın",
  "phonetic": "gün-ay-dın",
  "meaning": "صباح الخير",
  "exampleHighlight": "Günaydın,",
  "exampleRest": "nasılsın?",
  "exampleArabic": "صباح الخير، كيف حالك؟",
  "tip": "استخدمها في الصباح عند التحدث مع الأصدقاء أو شراء شيء.",
  "image": "/assets/istanbul-tea.png",
  "footerHandle": "@rawi.turkish",
  "background": "orbit"
}
```

### مثال SentenceOfDay

```json
{
  "type": "sentence-of-day",
  "turkishSentence": "Bugün hava çok güzel.",
  "turkishHighlight": "hava",
  "phonetic": "بوغون هافا تشوك غوزال",
  "phoneticHighlight": "هافا",
  "translation": "الجو اليوم جميل جداً",
  "translationHighlightWord": "جميل",
  "cta": "احفظها الآن و استخدمها في حياتك اليومية!",
  "ctaHighlight": "الآن",
  "footerHandle": "@rawi.turkish",
  "background": "swoosh"
}
```

> لاحظ: `turkishSentence`/`turkishHighlight` وكذلك
> `translation`/`translationHighlightWord` و`cta`/`ctaHighlight` كلهم
> يتبعون نفس نمط "جملة كاملة + كلمة هايلايت" الموحّد (انظر القسم 4).

الأنواع المطابقة بـ TypeScript موجودة بـ `types/index.ts`:
- `PostData` → مرتبط بـ `ThreeWords` (`type: "three-words"`)
- `WordOfDayData` → مرتبط بـ `WordOfDay` (`type: "word-of-day"`)
- `SentenceOfDayData` → مرتبط بـ `SentenceOfDay` (`type: "sentence-of-day"`)

```ts
export interface SentenceOfDayProps {
  turkishSentence: string;
  turkishHighlight: string;
  phonetic: string;
  phoneticHighlight: string;
  translation: string;
  translationHighlightWord?: string;
  cta: string;
  ctaHighlight: string;
  footerHandle: string;
  background: BackgroundVariant;
}

export interface SentenceOfDayData extends Omit<SentenceOfDayProps, "background"> {
  type: "sentence-of-day";
  background?: BackgroundVariant;
}
```

ولازم كل نوع يتضمن أي حقل جديد تضيفه بالـ JSON الخاص فيه (`?` اختياري)
وإلا TypeScript ما يعطيك تحذير عند الاستخدام وبيصير الحقل يوصل
`undefined` بصمت.

### ⚠️ قاعدة ذهبية: مسارات الصور حسب المصدر

فيه فرق جوهري بين نوعين من الصور بالمشروع، ولازم تختار المسار الصح حسب
النوع وإلا الصورة **ما تظهر أبدًا** حتى لو الملف موجود فعليًا على القرص:

| نوع الصورة | وين تُحفظ | كيف تُستخدم | مثال |
|---|---|---|---|
| **ثابتة بالتصميم نفسه** (لوجو، بادجات، أجزاء مكوّنات) | `src/assets/...` | `import` عادي بالكود | `import logo from "../assets/logos/logo-white.png"`, `import leftCap from "../assets/note/note-left-cap.png"` |
| **متغيّرة حسب كل منشور** (صور جايه من JSON) | `public/assets/...` | مسار نصي مطلق يبدأ بـ `/` | `"teaImage": "/assets/tea-simit.png"`, `"image": "/assets/istanbul-tea.png"` |

**السبب التقني:** أي مسار نص عادي (string) جاي من JSON ما يمر على Vite
وقت البناء (`import` هو الوحيد اللي Vite يتعرف عليه ويحوّله)، فلازم يكون
مسار جاهز يفهمه المتصفح مباشرة من جذر الموقع — وهذا بالضبط اللي يوفره
مجلد `public/`، لأن Vite يخدمه مباشرة من `/` بدون أي معالجة.

**قبل ما تفتح تذكرة مشكلة "الصورة ما تطلع"، تأكد بالترتيب:**
1. الصورة تفتح لحالها بالمتصفح على `http://localhost:5173/assets/xxx.png`؟
2. المكوّن يستقبل الـ prop فعليًا (افحص بـ Inspector إذا `<img src=...>`
   موجود بالـ DOM وقيمة `src` مو فاضية/`undefined`)؟
3. الملف اللي يمرر البيانات للقالب (`ThreeWordsExample.tsx` أو
   `WordOfDayExample.tsx` أو `SentenceOfDayExample.tsx`) يمرر الحقل
   فعليًا — أفضل حل: استخدم `{...data}` بدل استخراج يدوي (انظر القسم 4).
4. لو الصورة صورة PNG ثابتة (`src/assets`) جاية من أداة توليد صور AI:
   تأكد قناة alpha فيها شفافة فعليًا بالزوايا (مو خلفية بيضاء صلدة) قبل
   الاستيراد — وإلا تطلع بمربع أبيض حولها فوق أي خلفية داكنة.

> **المرحلة القادمة (Engine):** محرك يقرأ `type` من ملف JSON ويختار القالب
> المناسب تلقائيًا (`three-words` → `ThreeWords`, `word-of-day` →
> `WordOfDay`, `sentence-of-day` → `SentenceOfDay`, وقوالب مستقبلية زي
> `quiz`, `conversation`...)، يملأه بالبيانات، ويصدّر PNG. حاليًا كل
> قالب يُستدعى يدويًا بملف Example خاص فيه.

---

## 6. تصدير الصورة (`utils/exportImage.ts`)

```ts
import { exportNodeAsPng } from "../utils/exportImage";

exportNodeAsPng(cardRef.current, "word-of-day.png");
```

يصدّر بمقاس `1080×1080` حقيقي (`pixelRatio: 1`) لأن القالب مبني أصلًا
بهذا المقاس. لدقة أعلى (طباعة مثلًا)، زوّد `pixelRatio` بالخيارات:

```ts
exportNodeAsPng(node, "file.png", { pixelRatio: 2 });
```

> **تنبيه توافق:** إذا أي مكوّن مستقبلي يستخدم `backdrop-filter`/`blur`
> (تم تجنّبه عمدًا بـ `TipBox` و`TipBanner` الحاليين لهذا السبب بالضبط)،
> تأكد يظهر صح بالـ PNG المصدّر — بعض مكتبات التصدير ما تدعمه بشكل كامل
> بكل المتصفحات.

---

## 7. اللوجو (`components/Logo.tsx`)

3 نسخ لازم تكون موجودة فعليًا بـ `src/assets/logos/` بنفس الأسماء:

```
logo-original.png   ← الأصلي
logo-white.png       ← للخلفيات الداكنة (شفاف PNG)
logo-dark.png        ← للخلفيات الفاتحة (شفاف PNG)
```

```tsx
<Logo />                     // white افتراضيًا
<Logo variant="dark" />
<Logo variant="original" height={50} />
```

---

## القاعدة الذهبية — إضافة قالب جديد

أي قالب جديد (Quote card، آية، اختبار، محادثة...) لازم يلتزم بـ:

1. أبعاد ثابتة `1080×1080` ونفس الـ `padding` من `layout.padding` (إلا
   للعناصر المقصود إلصاقها بالحافة أو زاوية عنصر تمامًا، زي `teaImage`
   بـ ThreeWords أو `CircleImage` بـ WordOfDay — تُبنى خارج حاوية الـ
   padding عمدًا كـ "bleed" مقصود).
2. نفس فلسفة الطبقات: `Background → Logo → عنوان/بادج → Content → Tip/Illustration → Footer`.
3. الألوان والخطوط تُستورد دايمًا من `design/tokens.ts` — **ممنوع Hex
   يدوي**. الاستثناء الوحيد المقبول: تدرجات مبنية ديناميكيًا من token
   موجود عبر `color-mix()` (زي `WordCard`).
4. القالب يُبنى من مكونات `components/` الموجودة قدر الإمكان بدل تكرار
   الكود — ولو احتجت مكوّن عام جديد (زي `UiIcon`/`InfoRow`)، خليه عام
   وقابل لإعادة الاستخدام من أي قالب مستقبلي، مو مقفول على قالب وحيد.
   **مثال فعلي على هالقاعدة:** أيقونات `heart`/`sun-cloud`/`quote`
   اتضافت لـ `UiIcon` الموجود بدل إنشاء مكوّن `DecorIcon` منفصل — راجع
   قسم "تصميم `UiIcon` بالتفصيل" فوق.
5. أي حقل بيانات جديد للقالب يُضاف لنوعه الخاص بـ `types/index.ts` كـ
   اختياري (`?`) أول ما يُنشأ، وتُستخدم `{...data}` بدل تمرير حقول يدويًا.
6. تجنّب عناصر زخرفية "عامة" (دوائر تدرج + `blur` زجاجي) بدون مبرر مرتبط
   بهوية راوي تحديدًا — استخدم نفس لغة التصميم الموجودة (تدرجات
   `WordCard`، الأشرطة اللونية الصلدة، الدوائر المتقطعة حوالين اللوجو
   أو `CircleImage`).
7. أي عنصر يتكئ على حافة/زاوية عنصر ثاني (bleed) لازم يُحسب موضعه بالنسبة
   لأبعاد فعلية (عرض/ارتفاع الكرت أو الكانفاس)، مو أرقام عشوائية — قِس
   من التصميم المرجعي أول لو موجود.
8. **لتلوين كلمة وحدة داخل جملة/نص**، استخدم ميكانيزم "جملة كاملة +
   كلمة هايلايت" الموحّد (`text.split(highlightWord)` داخل المكوّن) —
   **مو** تقسيم النص يدويًا لحقول منفصلة (`beforeX`/`afterX`) بالـ JSON.
   راجع قسم "ميكانيزم الهايلايت الموحّد" بقالب SentenceOfDay.
9. لو القالب يحتاج عنصر بصري صعب محاكاته بـ SVG بواقعية كافية (ورق ممزق،
   خامات، ظلال معقّدة)، استخدم **صورة حقيقية مقصوصة** بدل SVG يدوي —
   وإذا العنصر يحتاج يتمدد حسب طول النص، طبّق تقنية **3-slice** (قطعتين
   ثابتتين بالحواف + منتصف متكرر `repeat-x`) بدل تمطيط الصورة كاملة.
   راجع `TornNote` كمثال مرجعي كامل.
10. بمجرد ما القالب يصير جاهز ومطابق لهذي القواعد، تعبّيه بالبيانات بس —
    بدون أي لمسة تصميم يدوية بعدها.

---

## خارطة الطريق (Roadmap)

- [x] Design System: Logo, Title, Badge, WordCard, Background, Footer
- [x] القالب الأول: ThreeWords
- [x] نظام خلفيات ديناميكي (5 أنماط: aurora, orbit, waves, dots, swoosh)
- [x] تصدير PNG
- [x] WordCard بتدرج موحّد (بدون طبقتين تدرج منفصلتين)
- [x] TipBox — صندوق نصيحة بلغة تصميم راوي (بدون عناصر AI عامة)
- [x] دعم صور متغيّرة حسب المنشور عبر `public/assets` + مسارات JSON
- [x] القالب الثاني: WordOfDay (كلمة اليوم — لفظ/معنى/مثال + صورة دائرية)
- [x] مكونات واجهة عامة قابلة لإعادة الاستخدام: UiIcon, IconPill, InfoRow, RibbonTag, CircleImage, TipBanner
- [x] القالب الثالث: SentenceOfDay (جملة اليوم — منشور "إعلاني" بجملة واحدة كبيرة)
- [x] توسيع UiIcon بأيقونات heart/sun-cloud/quote (بدل نظام أيقونات منفصل)
- [x] تقنية 3-slice للعناصر الواقعية (ورق ممزق، شريط لاصق) — `TornNote`
- [x] ميكانيزم هايلايت موحّد (جملة كاملة + كلمة مفردة عبر `split()`)
- [ ] Engine: قراءة JSON واختيار القالب المناسب تلقائيًا حسب `type`
- [ ] قوالب إضافية: اختبار (Quiz)، محادثة (Conversation)
// design/layoutStory.ts
// أبعاد ومقاسات مخصصة لقوالب Instagram Story (9:16)
// منفصل تمامًا عن layout.canvasSize المستخدم بالقوالب المربعة (1080×1080)
// عشان ما نلمس أو نأثر على القوالب الموجودة إطلاقًا.

export const storyLayout = {
  canvasWidth: 1080,
  canvasHeight: 1920,
  padding: 64, // نفس قيمة layout.padding بالمربعات، للاتساق البصري بمسافة الحواف
};
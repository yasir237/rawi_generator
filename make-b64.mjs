const data = {
  type: "challenge-card",
  icon: "chat",
  badgeText: "أيهما أكثر؟",
  title: "أي كلمة تُستخدم أكثر؟",
  items: ["Merhaba", "Selam"],
  question: "خمّن قبل ما تشوف الإجابة 👀",
  footerHandle: "@rawi.turkish"
};

const b64 = Buffer.from(JSON.stringify(data), "utf-8").toString("base64");
console.log(b64);
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = new FormData(contactForm);
  const getValue = (field) => fields.get(field).trim();
  const body = [
    `会社名：${getValue("organization")}`,
    `お名前：${getValue("name")}`,
    `返信先メールアドレス：${getValue("email")}`,
    "",
    "ご相談内容",
    getValue("message").replace(/\r?\n/g, "\r\n"),
  ].join("\r\n");
  const subject = encodeURIComponent(getValue("topic"));

  contactStatus.textContent = "メールアプリで下書きを開きます。開かない場合は、記載のメールアドレスに直接お送りください。";
  window.location.href = `${contactForm.action}?subject=${subject}&body=${encodeURIComponent(body)}`;
});

contactForm.hidden = false;

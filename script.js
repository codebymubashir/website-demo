const topics = {
  order:     { email: "orders@rangeen.studio",  eta: "usual reply time is under a day.",              field: "Order number (optional)" },
  wholesale: { email: "trade@rangeen.studio",    eta: "our trade team replies within 2 business days.", field: "Company / store name" },
  press:     { email: "press@rangeen.studio",    eta: "for interviews and features, allow 3–5 days.",   field: "Publication or outlet" },
  general:   { email: "hello@rangeen.studio",    eta: "usual reply time is under a day.",              field: "Anything we should know (optional)" }
};

const chips      = document.querySelectorAll(".chip");
const infoRows   = document.querySelectorAll(".info-row");
const routeText  = document.getElementById("routeText");
const orderLabel = document.getElementById("orderFieldLabel");

function setTopic(key){
  const data = topics[key];
  if(!data) return;

  chips.forEach(c => c.classList.toggle("active", c.dataset.topic === key));
  infoRows.forEach(r => r.classList.toggle("is-linked", r.dataset.topic === key));

  routeText.innerHTML = `Sent to <strong>${data.email}</strong> — ${data.eta}`;
  orderLabel.textContent = data.field;
}

chips.forEach(chip => {
  chip.addEventListener("click", () => setTopic(chip.dataset.topic));
});

// initialise default state
setTopic("order");

// live character counter for the message box
const messageBox  = document.getElementById("messageBox");
const charCount   = document.getElementById("charCount");

messageBox.addEventListener("input", () => {
  charCount.textContent = messageBox.value.length;
});

// friendly (front-end only) submit confirmation
const form       = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", () => {
  formStatus.textContent = "Message sent — we'll be in touch soon.";
  form.reset();
  charCount.textContent = "0";
  setTimeout(() => { formStatus.textContent = ""; }, 4000);
});

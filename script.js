// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navLinks.classList.toggle("active");
});
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // close mobile menu
    if (hamburger && navLinks) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.closest(".faq-item");

    if (!faqItem) return;

    faqItem.classList.toggle("active");
  });
});

// Booking form logic
document.addEventListener("DOMContentLoaded", () => {
const typeSelect = document.getElementById("type");
const placeGroup = document.getElementById("place-group");
const placeInput = document.getElementById("place");

if (typeSelect && placeGroup && placeInput) {
function updateTeachingMode() {
if (typeSelect.value === "lahi") {
placeGroup.style.display = "flex";
placeInput.required = true;
} else {
placeGroup.style.display = "none";
placeInput.required = false;
placeInput.value = "";
}
}

typeSelect.addEventListener("change", updateTeachingMode);

updateTeachingMode();

}
});

const GA_ID = "G-FSRPD091LM";

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
window.gtag = gtag;

gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});

/* -----------------------------
   STATE STORAGE
------------------------------ */
const CONSENT_VERSION = "v1";

function saveConsent(state) {
  localStorage.setItem("cookie_consent", JSON.stringify({
    version: CONSENT_VERSION,
    analytics: state.analytics,
    timestamp: Date.now()
  }));
}

function getConsent() {
  const raw = localStorage.getItem("cookie_consent");
  if (!raw) return null;
  return JSON.parse(raw);
}

/* -----------------------------
   GA LOADER
------------------------------ */
function loadGA() {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
}

/* -----------------------------
   CONSENT APPLY
------------------------------ */
function applyConsent(analyticsAllowed) {
  gtag('consent', 'update', {
    analytics_storage: analyticsAllowed ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  if (analyticsAllowed) {
    loadGA();
  }
}

/* -----------------------------
   UI HELPERS
------------------------------ */
function show(el) { if (el) el.style.display = "block"; }
function hide(el) { if (el) el.style.display = "none"; }

/* -----------------------------
   INIT
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {

  const banner = document.getElementById("cookie-banner");
  const modal = document.getElementById("cookie-modal");

  const acceptBtn = document.getElementById("cookie-accept");
  const rejectBtn = document.getElementById("cookie-reject");
  const settingsBtn = document.getElementById("cookie-settings");

  const saveBtn = document.getElementById("cookie-save");
  const analyticsToggle = document.getElementById("analytics-toggle");

  const existing = getConsent();

  if (!existing) {
    show(banner);
  } else {
    applyConsent(existing.analytics);
  }

  /* -------------------------
     MAIN BUTTONS
  -------------------------- */

  acceptBtn?.addEventListener("click", () => {
    saveConsent({ analytics: true });
    applyConsent(true);
    hide(banner);
  });

  rejectBtn?.addEventListener("click", () => {
    saveConsent({ analytics: false });
    applyConsent(false);
    hide(banner);
  });

  settingsBtn?.addEventListener("click", () => {
    analyticsToggle.checked = getConsent()?.analytics || false;
    show(modal);
  });

  saveBtn?.addEventListener("click", () => {
    const value = analyticsToggle.checked;

    saveConsent({ analytics: value });
    applyConsent(value);

    hide(modal);
    hide(banner);
  });

});
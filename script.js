// Reset scroll to top on page load/refresh
window.history.scrollRestoration = 'manual';
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// Translation system
const translations = {
  fi: {
    nav_about: "Tietoa opetuksesta",
    nav_pricing: "Hinnasto",
    nav_faq: "UKK",
    nav_contact: "Ota yhteyttä",
    hero_title: "Matematiikan tukiopetusta, joka auttaa ymmärtämään",
    hero_desc: "Selkeää ja yksilöllistä opetusta peruskoulun 1.–9. luokille Espoossa, Helsingissä, Vantaalla sekä etänä.",
    hero_btn_book: "Varaa tutustumistunti",
    hero_btn_pricing: "Hinnasto",
    about_title: "Tietoa opetuksesta",
    about_h3_1: "AbMatikka",
    about_p1: "AbMatikka tarjoaa selkeää ja yksilöllistä matematiikan opetusta peruskoulun oppilaille.",
    about_p2: "Opiskelen tällä hetkellä lukiossa ja tarjoan matematiikan tukiopetusta peruskoululaisille.",
    about_p3: "Tarjoan matematiikan yksityisopetusta ja tukiopetusta peruskoulun oppilaille Espoossa, Helsingissä, Vantaalla sekä etänä kaikkialle Suomeen.",
    about_h3_2: "Opetusmenetelmä",
    about_method_intro: "Opetus etenee vaiheittain:",
    method_1: "Lähtötason kartoitus",
    method_2: "Ongelmien tunnistaminen",
    method_3: "Selkeä vaiheittainen opetus",
    method_4: "Itsenäinen osaaminen",
    about_h3_3: "Lisätiedot",
    about_extra: "Opetus onnistuu suomeksi, englanniksi ja arabiaksi. Saatavilla Espoossa, Helsingissä, Vantaalla sekä etänä.",
    pricing_title: "Hinnasto",
    pricing_free_title: "Tutustumistunti",
    pricing_free_price: "45 min – Ilmainen",
    pricing_free_desc: "Ensimmäinen tapaaminen ja lähtötason kartoitus",
    pricing_private_title: "Yksityisopetus",
    pricing_private_price: "25 € / 60 min",
    pricing_private_desc: "Yksilöllinen matematiikan opetus",
    payment_methods: "Maksutavat: MobilePay • Tilisiirto • Käteinen • Lasku",
    faq_title: "Usein kysytyt kysymykset",
    faq_q1: "Kenelle opetus sopii?",
    faq_a1: "Peruskoulun oppilaille (1.–9. luokka), jotka tarvitsevat tukea matematiikassa.",
    faq_q2: "Voiko opetusta saada etänä?",
    faq_a2: "Kyllä. Opetus onnistuu sekä etänä että lähiopetuksena Espoossa, Helsingissä ja Vantaalla.",
    faq_q3: "Mitä kieliä opetuksessa käytetään?",
    faq_a3: "Opetus onnistuu suomeksi, englanniksi ja arabiaksi.",
    faq_q4: "Miten maksu toimii?",
    faq_a4: "Maksu onnistuu MobilePaylla, tilisiirrolla, käteisellä tai laskulla.",
    faq_q5: "Voiko tulla vain ennen koetta?",
    faq_a5: "Kyllä. Yksittäiset tunnit ja kertaluonteinen tuki ovat täysin mahdollisia.",
    faq_q6: "Tarvitseeko oppilaan olla hyvä matematiikassa?",
    faq_a6: "Ei tarvitse. Opetus mukautetaan aina oppilaan lähtötasoon.",
    faq_q7: "Miten ensimmäinen tunti toimii?",
    faq_a7: "Ensimmäinen tutustumistunti sisältää lähtötason kartoituksen ja suunnitelman tekemisen tulevaa opetusta varten.",
    contact_title: "Ota yhteyttä / Varaa tunti",
    form_student_label: "Oppilaan nimi*",
    form_parent_label: "Huoltajan nimi (valinnainen)",
    form_email_label: "Sähköposti*",
    form_phone_label: "Puhelinnumero*",
    form_grade_label: "Luokka-aste*",
    form_select_default: "Valitse",
    form_type_label: "Opetusmuoto*",
    form_type_onsite: "Lähiopetus",
    form_type_online: "Etäopetus",
    form_city_label: "Kaupunki*",
    form_issues_label: "Suurimmat haasteet matematiikassa*",
    form_days_label: "Toivotut päivät (valinnainen)",
    form_times_label: "Toivotut ajat (valinnainen)",
    form_billing_label: "Laskutustiedot (valinnainen)",
    form_message_label: "Lisätiedot (valinnainen)",
    form_note: "Yhteydenotto ei sido sinua mihinkään.",
    form_submit: "Lähetä yhteydenotto",
    footer_copyright: "© 2026 Abdulrahman Al-Mafrachi. Kaikki oikeudet pidätetään.",
  },
  en: {
    nav_about: "About Tutoring",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_title: "Math tutoring that helps you understand",
    hero_desc: "Clear and personalized teaching for grades 1-9 in Espoo, Helsinki, Vantaa and online.",
    hero_btn_book: "Book an intro session",
    hero_btn_pricing: "Pricing",
    about_title: "About Tutoring",
    about_h3_1: "AbMatikka",
    about_p1: "AbMatikka provides clear and personalized math tutoring for primary school students.",
    about_p2: "I am currently studying in upper secondary school and offer math tutoring to elementary school students.",
    about_p3: "I offer private math tutoring for elementary school students in Espoo, Helsinki, Vantaa and online throughout Finland.",
    about_h3_2: "Teaching Method",
    about_method_intro: "Teaching progresses in stages:",
    method_1: "Baseline assessment",
    method_2: "Problem identification",
    method_3: "Clear step-by-step teaching",
    method_4: "Independent learning",
    about_h3_3: "Additional Information",
    about_extra: "Teaching is available in Finnish, English and Arabic. Available in Espoo, Helsinki, Vantaa and online.",
    pricing_title: "Pricing",
    pricing_free_title: "Intro Session",
    pricing_free_price: "45 min – Free",
    pricing_free_desc: "First meeting and baseline assessment",
    pricing_private_title: "Private Tutoring",
    pricing_private_price: "25 € / 60 min",
    pricing_private_desc: "Personalized math teaching",
    payment_methods: "Payment methods: MobilePay • Bank transfer • Cash • Invoice",
    faq_title: "Frequently Asked Questions",
    faq_q1: "Who is the tutoring suitable for?",
    faq_a1: "For primary school students (grades 1-9) who need help with math.",
    faq_q2: "Can I get tutoring online?",
    faq_a2: "Yes. Tutoring is available both online and in-person in Espoo, Helsinki and Vantaa.",
    faq_q3: "What languages is teaching available in?",
    faq_a3: "Teaching is available in Finnish, English and Arabic.",
    faq_q4: "How does payment work?",
    faq_a4: "Payment is available via MobilePay, bank transfer, cash or invoice.",
    faq_q5: "Can I just come before an exam?",
    faq_a5: "Yes. Individual sessions and one-time support are completely possible.",
    faq_q6: "Do I need to be good at math?",
    faq_a6: "No. Teaching is always adapted to your level.",
    faq_q7: "How does the first lesson work?",
    faq_a7: "The first intro session includes a baseline assessment and planning for future tutoring.",
    contact_title: "Contact / Book a Session",
    form_student_label: "Student name*",
    form_parent_label: "Guardian name (optional)",
    form_email_label: "Email*",
    form_phone_label: "Phone number*",
    form_grade_label: "Grade level*",
    form_select_default: "Select",
    form_type_label: "Teaching format*",
    form_type_onsite: "In-person",
    form_type_online: "Online",
    form_city_label: "City*",
    form_issues_label: "Main challenges in math*",
    form_days_label: "Preferred days (optional)",
    form_times_label: "Preferred times (optional)",
    form_billing_label: "Billing details (optional)",
    form_message_label: "Additional information (optional)",
    form_note: "This inquiry does not bind you to anything.",
    form_submit: "Send inquiry",
    footer_copyright: "© 2026 Abdulrahman Al-Mafrachi. All rights reserved.",
  }
};

// Language switching function
function setLanguage(lang) {
  localStorage.setItem('preferred_language', lang);
  document.documentElement.lang = lang;
  
  // Update all elements with data-key attribute
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'OPTION' || element.tagName === 'INPUT') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('preferred_language') || 'fi';
  setLanguage(savedLanguage);

  // Add click listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Smooth scroll navigation with configurable offsets
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    if (!targetId.startsWith("#")) return;

    e.preventDefault();

    const target = document.querySelector(targetId);
    if (!target) return;

    // Get offset from data attribute, default to 90px
    const customOffset = parseInt(link.getAttribute("data-offset")) || 90;

    const top = target.getBoundingClientRect().top + window.pageYOffset - customOffset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });

    link.classList.add("clicked");
    setTimeout(() => link.classList.remove("clicked"), 200);

    // Close hamburger menu on mobile when a link is clicked
    if (hamburger && navLinks) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});

// FAQ toggle functionality
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", (e) => {
    const faqItem = button.closest(".faq-item");
    if (!faqItem) return;

    const isActive = faqItem.classList.contains("active");
    
    // Close all other FAQ items
    document.querySelectorAll(".faq-item.active").forEach(item => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
    
    // Toggle current FAQ item
    faqItem.classList.toggle("active");
  });
});
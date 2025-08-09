// assets/js/lang.js
document.addEventListener('DOMContentLoaded', () => {
  const langToggleBtn = document.getElementById('lang-toggle');
  const langOptions = document.getElementById('lang-options');
  const langButtons = document.querySelectorAll('.lang-option');

  // translations keys MUST match the data-i18n attributes in your HTML (use underscores)
  const translations = {
    en: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About Us",
      contact: "Contact",
      menu: "MarketX Menu",
      aboutText: "We are a full-service marketing agency helping businesses grow through data-driven strategies and creative campaigns.",
      who_we_are: "Who We Are",
      who_we_are_text: "We are a creative and experienced marketing agency helping brands reach their full potential through innovative solutions and strategic thinking.",
      testimonials_title: "What Our Clients Say",
      testimonial_1: "Working with your agency was the best decision we made. The results speak for themselves!",
      testimonial_1_role: "Marketing Director, Alpha Co.",
      testimonial_2: "Creative, reliable, and always on time. Highly recommended!",
      testimonial_2_role: "CEO, VisionTech",
      testimonial_3: "They truly understood our brand and delivered beyond expectations.",
      testimonial_3_role: "Founder, StyleSense",
      team_title: "Meet Our Team",
      ceo: "CEO",
      marketing_lead: "Marketing Lead",
      creative_director: "Creative Director",
      client_manager: "Client Manager",
      why_choose_us: "Why Choose Us",
      creative_ideas: "Creative Ideas",
      creative_ideas_text: "We offer unique and tailored solutions.",
      targeted_strategy: "Targeted Strategy",
      targeted_strategy_text: "Focused and result-driven campaigns.",
      expert_team: "Expert Team",
      expert_team_text: "Passionate and experienced professionals.",
      vision_title: "Our Vision",
      vision_text: "To be the leading marketing agency that redefines brand presence in the digital era.",
      mission_title: "Our Mission",
      mission_text: "Empowering businesses with tailored marketing strategies that drive growth, engagement, and long-term success.",
      core_values_title: "Our Core Values",
      innovation: "Innovation",
      innovation_text: "We thrive on creativity and bold ideas.",
      integrity: "Integrity",
      integrity_text: "Honesty and transparency are key in all we do.",
      results: "Results",
      results_text: "Driven by performance and measurable outcomes.",
      teamwork: "Teamwork",
      teamwork_text: "Collaboration is the foundation of our success."
    },
    ar: {
      home: "الرئيسية",
      services: "الخدمات",
      projects: "المشاريع",
      about: "من نحن",
      contact: "تواصل معنا",
      menu: "قائمة MarketX",
      aboutText: "نحن وكالة تسويق شاملة نساعد الشركات على النمو من خلال استراتيجيات مدروسة وحملات إبداعية.",
      who_we_are: "من نحن",
      who_we_are_text: "نحن وكالة تسويق إبداعية وذات خبرة نساعد العلامات التجارية على تحقيق كامل إمكاناتها من خلال حلول مبتكرة وتفكير استراتيجي.",
      testimonials_title: "ماذا يقول عملاؤنا",
      testimonial_1: "العمل مع وكالتكم كان أفضل قرار اتخذناه. النتائج تتحدث عن نفسها!",
      testimonial_1_role: "مديرة التسويق، شركة ألفا",
      testimonial_2: "مبدعون، موثوقون، ودائمًا في الوقت المحدد. أنصح بشدة!",
      testimonial_2_role: "الرئيس التنفيذي، VisionTech",
      testimonial_3: "لقد فهموا علامتنا التجارية حقًا وتجاوزوا التوقعات.",
      testimonial_3_role: "المؤسسة، StyleSense",
      team_title: "قابل فريقنا",
      ceo: "المدير التنفيذي",
      marketing_lead: "رئيس التسويق",
      creative_director: "المدير الإبداعي",
      client_manager: "مديرة العملاء",
      why_choose_us: "لماذا تختارنا",
      creative_ideas: "أفكار إبداعية",
      creative_ideas_text: "نقدم حلولاً فريدة ومخصصة.",
      targeted_strategy: "استراتيجية موجهة",
      targeted_strategy_text: "حملات مركزة ونتائج مضمونة.",
      expert_team: "فريق خبراء",
      expert_team_text: "محترفون شغوفون وذوو خبرة.",
      vision_title: "رؤيتنا",
      vision_text: "أن نكون وكالة التسويق الرائدة التي تعيد تعريف الحضور الرقمي للعلامات التجارية.",
      mission_title: "مهمتنا",
      mission_text: "تمكين الشركات من خلال استراتيجيات تسويق مخصصة تدفع النمو والمشاركة والنجاح طويل الأمد.",
      core_values_title: "قيمنا الأساسية",
      innovation: "الابتكار",
      innovation_text: "نتميز بالإبداع والأفكار الجريئة.",
      integrity: "النزاهة",
      integrity_text: "الصدق والشفافية هما أساس عملنا.",
      results: "النتائج",
      results_text: "نقيس النجاح بالأداء والنتائج الملموسة.",
      teamwork: "العمل الجماعي",
      teamwork_text: "التعاون هو أساس نجاحنا."
    }
  };

  // guard for missing elements
  function safe(el) { return el !== null && el !== undefined; }

  // toggle dropdown
  if (safe(langToggleBtn) && safe(langOptions)) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langOptions.style.display = langOptions.style.display === 'flex' ? 'none' : 'flex';
    });

    // close when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#lang-options') && e.target !== langToggleBtn) {
        langOptions.style.display = 'none';
      }
    });
  }

  // helper: set element text while preserving leading <i> icon if present
  function setElementTextPreserveIcon(el, text) {
    if (text === undefined) return;
    const firstChildElem = el.firstElementChild;
    if (firstChildElem && firstChildElem.tagName.toLowerCase() === 'i') {
      el.innerHTML = firstChildElem.outerHTML + ' ' + text;
    } else {
      el.textContent = text;
    }
  }

  function applyTranslation(lang) {
    const t = translations[lang];
    if (!t) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Translate all elements that have data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        setElementTextPreserveIcon(el, t[key]);
      }
    });

    // placeholders (if any inputs with these ids exist)
    const placeholders = {
      name: t.contact_name_placeholder,
      email: t.contact_email_placeholder,
      message: t.contact_message_placeholder
    };
    Object.entries(placeholders).forEach(([id, text]) => {
      const input = document.getElementById(id);
      if (input && text !== undefined) input.placeholder = text;
    });

    // reposition language switcher & back-to-top (optional)
    const langSwitcher = document.querySelector('.language-switcher');
    const backToTopBtn = document.getElementById('scroll-top-btn');
    if (langSwitcher) {
      if (lang === 'ar') {
        langSwitcher.style.left = 'unset';
        langSwitcher.style.right = '20px';
        if (langOptions) { langOptions.style.left = 'unset'; langOptions.style.right = '0'; }
      } else {
        langSwitcher.style.right = 'unset';
        langSwitcher.style.left = '20px';
        if (langOptions) { langOptions.style.right = 'unset'; langOptions.style.left = '0'; }
      }
    }
    if (backToTopBtn) {
      if (lang === 'ar') { backToTopBtn.style.right = 'unset'; backToTopBtn.style.left = '20px'; }
      else { backToTopBtn.style.left = 'unset'; backToTopBtn.style.right = '20px'; }
    }

    // hide dropdown after change
    if (langOptions) langOptions.style.display = 'none';

    // save
    localStorage.setItem('lang', lang);
  }

  // handle click on language buttons (use event delegation if needed)
  if (langButtons && langButtons.length) {
    langButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = btn.dataset.lang;
        applyTranslation(lang);
      });
    });
  } else {
    // fallback: if no .lang-option buttons, you can add them or open devtools
    // console.warn('No language buttons found (.lang-option)');
  }

  // apply saved lang or default to 'en'
  const saved = localStorage.getItem('lang') || 'en';
  applyTranslation(saved);
});

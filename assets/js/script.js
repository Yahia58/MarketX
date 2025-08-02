function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}
 const scrollTopBtn = document.getElementById('scroll-top-btn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Language toggle already exists in previous code (keep it as is)
 
  const langToggleBtn = document.getElementById('lang-toggle');
  const langOptions = document.getElementById('lang-options');
  const langButtons = document.querySelectorAll('.lang-option');

  // Toggle dropdown
  langToggleBtn.addEventListener('click', () => {
    langOptions.style.display = langOptions.style.display === 'flex' ? 'none' : 'flex';
  });

  // Language content switching
  const translations = {
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      contact: 'تواصل معنا',
      grow:'نمي وطور مشاريعك معانا',
      getStarted: 'ابدأ الآن',
      aboutText: 'نحن وكالة تسويق كاملة الخدمات نساعد الشركات على النمو من خلال استراتيجيات مدروسة وحملات إبداعية.',
      service1: 'تحسين محركات البحث',
      service2: 'وسائل التواصل الاجتماعي',
      service3: 'حملات الإعلانات',
      serviceDesc1: 'حسّن ظهورك وتصدر نتائج البحث.',
      serviceDesc2: 'تفاعل مع جمهورك من خلال استراتيجيات فعالة.',
      serviceDesc3: 'اجلب الزوار من خلال حملات إعلانية موجهة.',
      ourServices:' خدماتنا',
      ourProjects:'مشاريعنا',
      contactUs: 'تواصل معنا',
      contact_name_placeholder: "اكتب اسمك",
      contact_email_placeholder: "اكتب بريدك الإلكتروني",
      contact_message_placeholder: "اكتب رسالتك",
      send: 'إرسال'
    },
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      grow: 'Grow Your Business With Us',
      getStarted:'Get Started',
      aboutText: 'We are a full-service marketing agency helping businesses grow through data-driven strategies and creative campaigns.',
      service1: 'SEO',
      service2: 'Social Media',
      service3: 'Ads Campaigns',
      serviceDesc1: 'Improve your visibility and rank higher on search engines.',
      serviceDesc2: 'Engage your audience through powerful social media strategies.',
      serviceDesc3: 'Drive traffic with targeted advertising campaigns.',
      ourServices:'Our Services',
      ourProjects:'Our Projects',
      contactUs: 'Contact Us',
      contact_name_placeholder: "Your Name",
      contact_email_placeholder: "Your Email",
      contact_message_placeholder: "Your Message",
      send: 'Send'
    }
  };
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedLang = btn.dataset.lang;
    const t = translations[selectedLang];

    document.documentElement.lang = selectedLang;
    document.documentElement.dir = selectedLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelector('[href="#home"]').textContent = t.home;
    document.querySelector('[href="#about"]').textContent = t.about;
    document.querySelector('[href="#services"]').textContent = t.services;
    document.querySelector('[href="#projects"]').textContent = t.projects;
    document.querySelector('[href="#contact"]').textContent = t.contact;
    document.querySelector('#home h1').textContent = t.grow;
    document.querySelector('#home p').textContent =
      selectedLang === 'en'
        ? 'Digital marketing solutions that deliver real results'
        : 'حلول تسويق رقمي تحقق نتائج ملموسة';
    document.querySelector('#about p').textContent = t.aboutText;
    document.querySelectorAll('.service-card h4')[0].textContent = t.service1;
    document.querySelectorAll('.service-card h4')[1].textContent = t.service2;
    document.querySelectorAll('.service-card h4')[2].textContent = t.service3;
    document.querySelectorAll('.service-card p')[0].textContent = t.serviceDesc1;
    document.querySelectorAll('.service-card p')[1].textContent = t.serviceDesc2;
    document.querySelectorAll('.service-card p')[2].textContent = t.serviceDesc3;
    document.querySelector('#contact h2').textContent = t.contactUs;
    document.querySelector('button[type="submit"]').textContent = t.send;
    document.getElementById('hero-title').textContent = t.grow;
    document.getElementById('about-title').textContent = t.about;
    document.getElementById('services-title').textContent = t.ourServices;
    document.getElementById('projects-title').textContent = t.ourProjects;
    document.getElementById("get-started-btn").textContent = t.getStarted;
    document.getElementById("name").placeholder = t.contact_name_placeholder;
    document.getElementById("email").placeholder = t.contact_email_placeholder;
    document.getElementById("message").placeholder = t.contact_message_placeholder;

    // Move the language switcher
    const langSwitcher = document.querySelector('.language-switcher');
    const langop = document.getElementById("lang-options");
    if (selectedLang === 'ar') {
      langSwitcher.style.left = 'unset';
      langSwitcher.style.right = '20px';
      langop.style.left='unset';
      langop.style.right='0px';
      } else {
      langSwitcher.style.right = 'unset';
      langSwitcher.style.left = '20px';
      langop.style.right='unset';
      langop.style.left='0px';
    }
const backToTopBtn = document.getElementById("scroll-top-btn");
if (selectedLang === "ar") {
  backToTopBtn.style.right = "unset";
  backToTopBtn.style.left = "20px";
} else {
  backToTopBtn.style.left = "unset";
  backToTopBtn.style.right = "20px";
}

    langOptions.style.display = 'none';
  });
});
 AOS.init();
 
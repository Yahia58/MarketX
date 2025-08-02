 
     // Scroll-to-top
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
 
  const langToggleBtn = document.getElementById('lang-toggle');
  const langOptions = document.getElementById('lang-options');
  const langButtons = document.querySelectorAll('.lang-option');

  // Toggle dropdown
  langToggleBtn.addEventListener('click', () => {
    langOptions.style.display = langOptions.style.display === 'flex' ? 'none' : 'flex';
  });

  const translations = {
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      contact: 'تواصل معنا',
      grow: 'نمي وطور مشاريعك معانا',
      getStarted: 'ابدأ الآن',
      aboutText: 'نحن وكالة تسويق كاملة الخدمات نساعد الشركات على النمو من خلال استراتيجيات مدروسة وحملات إبداعية.',
      service1: 'تحسين محركات البحث',
      service2: 'وسائل التواصل الاجتماعي',
      service3: 'حملات الإعلانات',
      serviceDesc1: 'حسّن ظهورك وتصدر نتائج البحث.',
      serviceDesc2: 'تفاعل مع جمهورك من خلال استراتيجيات فعالة.',
      serviceDesc3: 'اجلب الزوار من خلال حملات إعلانية موجهة.',
      ourServices: 'خدماتنا',
      ourProjects: 'مشاريعنا',
      contactUs: 'تواصل معنا',
      contact_name_placeholder: "اكتب اسمك",
      contact_email_placeholder: "اكتب بريدك الإلكتروني",
      contact_message_placeholder: "اكتب رسالتك",
      send: 'إرسال',
      // Footer Content
    footer_logo: "ماركت x",
    footer_tagline: "وكالة تسويق",
    footer_address: "مصر، الاقصر، شارع رقم 1",
    footer_email: "marketx@gmail.com",
    footer_phone: "01111111111",

    footer_links_title: "روابط سريعة",
    footer_link_about: "من نحن",
    footer_link_contact: "تواصل معنا",
    footer_link_portfolio: "أعمالنا",
    footer_link_faqs: "الأسئلة الشائعة",
    footer_link_services: "الخدمات",
    footer_link_social: "إدارة وسائل التواصل",
    footer_link_printing: "خدمات الطباعة",
    footer_link_website: "تطوير المواقع",
    footer_link_advertising: "الإعلان والترويج",
    footer_link_design: "التصميم والعلامة التجارية",
    footer_link_marketing: "حلول التسويق",
    footer_link_manufacturing: "التصنيع",
    footer_link_installations: "التركيبات",
    footer_link_photography: "التصوير والتحرير",
    footer_workdays_title: "أيام العمل",
    footer_workdays_value: "من الأحد إلى الخميس، 10:00 - 18:00",
    footer_contact_us: "تواصل معنا",
    footer_copyright:
      "© 2025 ماركت x. جميع الحقوق محفوظة. صُمم بواسطة فريق مطوري ماركت X – 2025"
   
    },
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      grow: 'Grow Your Business With Us',
      getStarted: 'Get Started',
      aboutText: 'We are a full-service marketing agency helping businesses grow through data-driven strategies and creative campaigns.',
      service1: 'SEO',
      service2: 'Social Media',
      service3: 'Ads Campaigns',
      serviceDesc1: 'Improve your visibility and rank higher on search engines.',
      serviceDesc2: 'Engage your audience through powerful social media strategies.',
      serviceDesc3: 'Drive traffic with targeted advertising campaigns.',
      ourServices: 'Our Services',
      ourProjects: 'Our Projects',
      contactUs: 'Contact Us',
      contact_name_placeholder: "Your Name",
      contact_email_placeholder: "Your Email",
      contact_message_placeholder: "Your Message",
      send: 'Send',
      // Footer Content
    footer_logo: "MarketX",
    footer_tagline: "Marketing Agency",
    footer_address: "Egypt, Luxor, street 1",
    footer_email: "MarketX@gmail.com",
    footer_phone: "01111111111",

    footer_links_title: "Quick Links",
    footer_link_about: "About",
    footer_link_contact: "Contact",
    footer_link_portfolio: "Portfolio",
    footer_link_faqs: "FAQs",
    footer_link_services: "Services",
    footer_link_social: "Social Media Management",
    footer_link_printing: "Printing Services",
    footer_link_website: "Website Development",
    footer_link_advertising: "Advertising & Promotion",
    footer_link_design: "Design & Branding",
    footer_link_marketing: "Marketing Solutions",
    footer_link_manufacturing: "Manufacturing",
    footer_link_installations: "Installations",
    footer_link_photography: "Photography & Editing",

    footer_workdays_title: "Work Days",
    footer_workdays_value: "Sun to Thu, 10:00 - 18:00",

    footer_contact_us: "Contact Us",
    footer_copyright:
      "2025 © MarketX. All rights reserved. Designed by the MarketX Developer Team – 2025"
    
    }
  };

  function applyTranslation(selectedLang) {
    const t = translations[selectedLang];
    document.documentElement.lang = selectedLang;
    document.documentElement.dir = selectedLang === 'ar' ? 'rtl' : 'ltr';

    
    const footers = {
      footer_address: t.footer_address,
      footer_contact_us: t.footer_contact_us,
      footer_copyright: t.footer_copyright,
      footer_email:t.footer_email,
      footer_link_about:t.footer_link_about,
      footer_link_advertising:t.footer_link_advertising,
      footer_link_contact:t.footer_link_contact,
      footer_link_design:t.footer_link_design,
      footer_link_faqs:t.footer_link_faqs,
      footer_link_installations:t.footer_link_installations,
      footer_link_manufacturing:t.footer_link_manufacturing,
      footer_link_marketing:t.footer_link_marketing,
      footer_link_photography:t.footer_link_photography,
      footer_link_portfolio:t.footer_link_portfolio,
      footer_link_printing:t.footer_link_printing,
      footer_link_services:t.footer_link_services,
      footer_link_social:t.footer_link_social,
      footer_link_website:t.footer_link_website,
      footer_links_title:t.footer_links_title,
      footer_logo:t.footer_logo,
      footer_phone:t.footer_phone,
      footer_tagline:t.footer_tagline,
      footer_workdays_title:t.footer_workdays_title,
      footer_workdays_value:t.footer_workdays_value,
    };
    Object.entries(footers).forEach(([id, text]) => {
      const el = document.getElementById(id);
     if (el) el.textContent = text;
    });
    // Navbar links by href
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href.includes('index.html')) link.textContent = t.home;
      else if (href.includes('about.html')) link.textContent = t.about;
      else if (href.includes('services.html')) link.textContent = t.services;
      else if (href.includes('projects.html')) link.textContent = t.projects;
      else if (href.includes('contact.html')) link.textContent = t.contact;
    });

    const homeTitle = document.getElementById('hero-title');
    if (homeTitle) homeTitle.textContent = t.grow;

    const aboutText = document.querySelector('#about p');
    if (aboutText) aboutText.textContent = t.aboutText;

    const services = document.querySelectorAll('.service-card h4');
    if (services.length >= 3) {
      services[0].textContent = t.service1;
      services[1].textContent = t.service2;
      services[2].textContent = t.service3;
    }

    const serviceDescs = document.querySelectorAll('.service-card p');
    if (serviceDescs.length >= 3) {
      serviceDescs[0].textContent = t.serviceDesc1;
      serviceDescs[1].textContent = t.serviceDesc2;
      serviceDescs[2].textContent = t.serviceDesc3;
    }

    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = t.contactUs;

    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = t.send;

    const getStartedBtn = document.getElementById("get-started-btn");
    if (getStartedBtn) getStartedBtn.textContent = t.getStarted;

    const placeholders = {
      name: t.contact_name_placeholder,
      email: t.contact_email_placeholder,
      message: t.contact_message_placeholder
    };
    Object.entries(placeholders).forEach(([id, text]) => {
      const el = document.getElementById(id);
      if (el) el.placeholder = text;
    });

    const sectionTitles = {
      'about-title': t.about,
      'services-title': t.ourServices,
      'projects-title': t.ourProjects
    };
    Object.entries(sectionTitles).forEach(([id, text]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    });

    // Language switcher position
    const langSwitcher = document.querySelector('.language-switcher');
    const langop = document.getElementById("lang-options");
    if (selectedLang === 'ar') {
      langSwitcher.style.left = 'unset';
      langSwitcher.style.right = '20px';
      langop.style.left = 'unset';
      langop.style.right = '0px';
    } else {
      langSwitcher.style.right = 'unset';
      langSwitcher.style.left = '20px';
      langop.style.right = 'unset';
      langop.style.left = '0px';
    }

    // Scroll-top button RTL
    const backToTopBtn = document.getElementById("scroll-top-btn");
    if (backToTopBtn) {
      if (selectedLang === "ar") {
        backToTopBtn.style.right = "unset";
        backToTopBtn.style.left = "20px";
      } else {
        backToTopBtn.style.left = "unset";
        backToTopBtn.style.right = "20px";
      }
    }

    langOptions.style.display = 'none';
  }

  // Change language on click
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.dataset.lang;
      localStorage.setItem('lang', selectedLang);
      applyTranslation(selectedLang);
    });
  });

  // Apply language on load
  const savedLang = localStorage.getItem('lang') || 'en';
  applyTranslation(savedLang);
 
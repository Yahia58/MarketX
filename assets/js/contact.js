
  const translations = {
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      contact: 'تواصل معنا',
      contactUs: 'تواصل معنا',
      location: 'الموقع',
      location_address: 'مصر، الأقصر',
      phone: 'الهاتف',
      phone_number: '+20 111111111',
      emaill: 'البريد الإلكتروني',
      email_address: 'info@MarketX.com',
      work_days: 'أيام العمل',
      work_hours: 'من الأحد إلى الخميس، 10:00 - 18:00',
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
      contactUs: 'Contact Us',
      location: 'Location',
      location_address: 'Egypt, Luxor',
      phone: 'Phone',
      phone_number: '+20 111111111',
      emaill: 'Email',
      email_address: 'info@MarketX.com',
      work_days: 'Work Days',
      work_hours: 'Sun - Thu, 10:00 - 18:00',
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

  const langToggleBtn = document.getElementById('lang-toggle');
  const langOptions = document.getElementById('lang-options');
  const langButtons = document.querySelectorAll('.lang-option');

  langToggleBtn.addEventListener('click', () => {
    langOptions.style.display = langOptions.style.display === 'flex' ? 'none' : 'flex';
  });

  function applyTranslation(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    
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
    const map = {
      'contact-title': t.contactUs,
      'location': t.location,
      'location-address': t.location_address,
      'phone': t.phone,
      'phone-number': t.phone_number,
      'emaill': t.emaill,
      'email-address': t.email_address,
      'work_days': t.work_days,
      'work_hours': t.work_hours,
      'send-btn': t.send
    };

    Object.entries(map).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    });

    const placeholders = {
      name: t.contact_name_placeholder,
      email: t.contact_email_placeholder,
      message: t.contact_message_placeholder
    };
    Object.entries(placeholders).forEach(([id, text]) => {
      const el = document.getElementById(id);
      if (el) el.placeholder = text;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href.includes('index.html')) link.textContent = t.home;
      else if (href.includes('about.html')) link.textContent = t.about;
      else if (href.includes('services.html')) link.textContent = t.services;
      else if (href.includes('projects.html')) link.textContent = t.projects;
      else if (href.includes('contact.html')) link.textContent = t.contact;
    });

    // Adjust switcher and scroll-top button
    const langSwitcher = document.querySelector('.language-switcher');
    const scrollBtn = document.getElementById("scroll-top-btn");
    if (lang === 'ar') {
      langSwitcher.style.left = 'unset'; langSwitcher.style.right = '20px';
      langOptions.style.left = 'unset'; langOptions.style.right = '0px';
      scrollBtn.style.right = 'unset'; scrollBtn.style.left = '20px';
    } else {
      langSwitcher.style.right = 'unset'; langSwitcher.style.left = '20px';
      langOptions.style.right = 'unset'; langOptions.style.left = '0px';
      scrollBtn.style.left = 'unset'; scrollBtn.style.right = '20px';
    }

    langOptions.style.display = 'none';
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      localStorage.setItem('lang', lang);
      applyTranslation(lang);
      
    });
  });

  const savedLang = localStorage.getItem('lang') || 'en';
  applyTranslation(savedLang);
 
  document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault(); // منع التحويل

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/mblkkppa', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      document.getElementById('form-message').style.display = 'block';
    } else {
      alert('❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
    }
  });

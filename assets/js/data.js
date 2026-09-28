/* =========================================================
   Bilingual data (AR / EN)
   ========================================================= */
window.PORTFOLIO_DATA = {
  ar: {
    dir: "rtl",
    lang: "ar",
    brandName: "عبدالله الموسى",
    "loader.text": "جارٍ تجهيز التجربة…",
    "skip": "تخطَّ إلى المحتوى",

    "nav.home": "الرئيسية",
    "nav.about": "عنّي",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.resume": "السيرة",
    "nav.contact": "تواصل",
    "nav.cv": "تحميل السيرة",

    "hero.status": "متاح للعمل",
    "hero.eyebrow": "مرحبًا، أنا",
    "hero.name": "عبدالله أحمد الموسى",
    "hero.role": "مطوّر .NET",
    "hero.bio": "مطوّر .NET شغوف ببناء تطبيقات ويب نظيفة وقابلة للتوسع باستخدام C# و ASP.NET Core MVC و Entity Framework Core.",
    "hero.ctaProjects": "استعرض مشاريعي",
    "hero.ctaContact": "تواصل معي",
    "hero.scroll": "اسحب للأسفل",
    "hero.socials": [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/abdullah-almousa" },
      { label: "GitHub", url: "https://github.com/" },
      { label: "Email", url: "mailto:abdullah.a.hussain.a@gmail.com" }
    ],

    "about.tag": "عنّي",
    "about.title": "نظرة سريعة",
    "about.approachTitle": "منهجيتي",
    about: {
      bio: "مطوّر .NET مقيم في المملكة العربية السعودية، أركّز على بناء تطبيقات ويب عملية وأنيقة. أستمتع بتحويل المتطلبات المعقّدة إلى حلول بسيطة وقابلة للصيانة.",
      experience: "خبرة عملية في تطوير تطبيقات ASP.NET Core MVC و Web API، مع تصميم قواعد بيانات SQL Server وكتابة استعلامات فعّالة باستخدام Entity Framework Core.",
      education: "بكالوريوس علوم الحاسب — جامعة الملك فيصل.",
      approach: "أبدأ دائمًا بفهم المشكلة قبل كتابة أي سطر كود. أكتب اختبارات، أُحسّن الأداء، وأترك الكود أنظف مما وجدته."
    },

    "projects.tag": "أعمال منتقاة",
    "projects.title": "مشاريعي",
    projects: [
      {
        title: "نظام إدارة المتاجر الإلكترونية",
        role: "مطوّر متكامل (Full-Stack)",
        category: "ويب",
        desc: "منصة متكاملة لإدارة المنتجات والطلبات والمخزون، مع لوحة تحكم للمشرف وواجهة للعملاء.",
        challenge: "التحدي: إدارة علاقات معقّدة بين المنتجات والطلبات مع الحفاظ على أداء سريع.",
        solution: "الحل: استخدام EF Core مع تحميل انتقائي للبيانات، وفهرسة ذكية في SQL Server.",
        skills: ["C#", "ASP.NET Core MVC", "EF Core", "SQL Server", "Identity"],
        impact: [
          "تقليل زمن تحميل الصفحات بنسبة 40%",
          "دعم أكثر من 500 منتج بدون تأخير",
          "نظام صلاحيات مرن للأدوار"
        ]
      },
      {
        title: "واجهة برمجية لإدارة المهام",
        role: "مطوّر Backend",
        category: "API",
        desc: "RESTful API لإدارة المهام والمشاريع مع مصادقة JWT ووثائق Swagger.",
        challenge: "التحدي: تصميم API آمن وقابل للتوسع مع دعم عملاء متعددين.",
        solution: "الحل: اعتماد Clean Architecture وRepository Pattern مع تسجيل شامل.",
        skills: ["ASP.NET Core Web API", "JWT", "EF Core", "Swagger"],
        impact: [
          "زمن استجابة أقل من 100ms",
          "توثيق تفاعلي كامل عبر Swagger",
          "اختبارات وحدة بنسبة تغطية 85%"
        ]
      },
      {
        title: "نظام إدارة المكتبات",
        role: "مطوّر متكامل",
        category: "ويب",
        desc: "نظام لإدارة الكتب والأعضاء والإعارات مع تقارير تفصيلية.",
        challenge: "التحدي: تتبّع الإعارات المتأخرة وحساب الغرامات تلقائيًا.",
        solution: "الحل: مهام مجدولة (Background Jobs) مع إشعارات بريد إلكتروني.",
        skills: ["C#", "ASP.NET Core MVC", "EF Core", "Bootstrap"],
        impact: [
          "أتمتة 90% من العمليات اليدوية",
          "تقارير فورية للإدارة",
          "واجهة مستخدم بسيطة وسريعة"
        ]
      },
      {
        title: "موقع شخصي (هذا الموقع)",
        role: "مصمّم ومطوّر",
        category: "ويب",
        desc: "موقع شخصي بتجربة ثلاثية الأبعاد باستخدام Three.js، يعمل بدون أي إطار عمل.",
        challenge: "التحدي: تقديم تجربة 3D غنية على موقع static خفيف.",
        solution: "الحل: Three.js مباشرة عبر CDN مع رسم بالجسيمات وأشكال شبكية.",
        skills: ["Three.js", "JavaScript", "CSS", "WebGL"],
        impact: [
          "أداء سلس على الأجهزة المحمولة",
          "دعم كامل للعربية والإنجليزية",
          "بدون أي خطوة build"
        ]
      }
    ],

    "cta.title": "أعجبك شيء من أعمالي؟",
    "cta.text": "أنا جاهز لفرصة عمل أو تعاون — خلنا نتحدث.",
    "cta.btn": "تواصل معي",

    "skills.tag": "أدواتي",
    "skills.title": "المهارات التقنية",
    skills: [
      {
        group: "اللغات",
        items: [
          { name: "C#", level: 90 },
          { name: "SQL", level: 82 },
          { name: "JavaScript", level: 72 },
          { name: "HTML / CSS", level: 85 }
        ]
      },
      {
        group: "الأطر",
        items: [
          { name: "ASP.NET Core MVC", level: 88 },
          { name: "Entity Framework Core", level: 82 },
          { name: "ASP.NET Web API", level: 78 }
        ]
      },
      {
        group: "قواعد البيانات",
        items: [
          { name: "SQL Server", level: 82 },
          { name: "LINQ", level: 80 }
        ]
      },
      {
        group: "الأدوات",
        items: [
          { name: "Visual Studio", level: 90 },
          { name: "Git / GitHub", level: 85 },
          { name: "Postman / Swagger", level: 78 }
        ]
      }
    ],

    "resume.tag": "مسيرتي",
    "resume.title": "السيرة الذاتية",
    "resume.download": "تحميل السيرة الكاملة (PDF)",
    resume: [
      {
        type: "التعليم",
        title: "بكالوريوس علوم الحاسب",
        org: "جامعة الملك فيصل",
        date: "2019 — 2023",
        desc: "تركيز على هندسة البرمجيات وقواعد البيانات وتطوير الويب."
      },
      {
        type: "تدريب",
        title: "متدرب تطوير .NET",
        org: "شركة تقنية (تدريب صيفي)",
        date: "2022",
        desc: "المشاركة في تطوير وحدات داخل نظام إداري باستخدام ASP.NET Core و EF Core."
      },
      {
        type: "شهادة",
        title: "Microsoft Certified: Azure Fundamentals",
        org: "Microsoft",
        date: "2023",
        desc: "أساسيات الحوسبة السحابية وخدمات Azure."
      }
    ],

    "contact.tag": "لنبدأ حوارًا",
    "contact.title": "تواصل معي",
    "contact.lead": "سعيد بسماع أفكارك ومشاريعك. اترك رسالة أو راسلني مباشرة.",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.send": "إرسال الرسالة",
    "contact.direct": "أو راسلني مباشرة على",
    "contact.copy": "نسخ الإيميل",

    "footer.copy": "© 2025 عبدالله أحمد الموسى. جميع الحقوق محفوظة.",
    "footer.top": "العودة للأعلى ↑",
    "footer.socials": [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/abdullah-almousa" },
      { label: "GitHub", url: "https://github.com/" }
    ]
  },

  en: {
    dir: "ltr",
    lang: "en",
    brandName: "Abdullah AlMousa",
    "loader.text": "Preparing the experience…",
    "skip": "Skip to content",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "nav.cv": "Download CV",

    "hero.status": "Available for work",
    "hero.eyebrow": "Hello, I'm",
    "hero.name": "Abdullah Ahmad AlMousa",
    "hero.role": ".NET Developer",
    "hero.bio": "A passionate .NET developer building clean, scalable web apps with C#, ASP.NET Core MVC, and Entity Framework Core.",
    "hero.ctaProjects": "View my work",
    "hero.ctaContact": "Get in touch",
    "hero.scroll": "Scroll down",
    "hero.socials": [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/abdullah-almousa" },
      { label: "GitHub", url: "https://github.com/" },
      { label: "Email", url: "mailto:abdullah.a.hussain.a@gmail.com" }
    ],

    "about.tag": "About",
    "about.title": "A quick look",
    "about.approachTitle": "My approach",
    about: {
      bio: "A .NET developer based in Saudi Arabia, focused on building practical, elegant web applications. I enjoy turning complex requirements into simple, maintainable solutions.",
      experience: "Hands-on experience building ASP.NET Core MVC and Web API applications, designing SQL Server databases, and writing efficient EF Core queries.",
      education: "B.Sc. in Computer Science — King Faisal University.",
      approach: "I always start by understanding the problem before writing any code. I test, optimize, and leave the code cleaner than I found it."
    },

    "projects.tag": "Selected work",
    "projects.title": "My projects",
    projects: [
      {
        title: "E-Commerce Management System",
        role: "Full-Stack Developer",
        category: "Web",
        desc: "An end-to-end platform for managing products, orders, and inventory with an admin panel and customer storefront.",
        challenge: "Challenge: managing complex product/order relationships while keeping fast performance.",
        solution: "Solution: EF Core with selective loading and smart SQL Server indexing.",
        skills: ["C#", "ASP.NET Core MVC", "EF Core", "SQL Server", "Identity"],
        impact: [
          "40% faster page loads",
          "Handles 500+ products smoothly",
          "Flexible role-based permissions"
        ]
      },
      {
        title: "Task Management API",
        role: "Backend Developer",
        category: "API",
        desc: "A RESTful API for managing tasks and projects with JWT auth and Swagger docs.",
        challenge: "Challenge: designing a secure, scalable API with multi-client support.",
        solution: "Solution: Clean Architecture and Repository Pattern with comprehensive logging.",
        skills: ["ASP.NET Core Web API", "JWT", "EF Core", "Swagger"],
        impact: [
          "Sub-100ms response times",
          "Interactive Swagger docs",
          "85% unit test coverage"
        ]
      },
      {
        title: "Library Management System",
        role: "Full-Stack Developer",
        category: "Web",
        desc: "A system to manage books, members, and loans with detailed reports.",
        challenge: "Challenge: tracking overdue loans and calculating fines automatically.",
        solution: "Solution: background jobs with email notifications.",
        skills: ["C#", "ASP.NET Core MVC", "EF Core", "Bootstrap"],
        impact: [
          "90% of manual work automated",
          "Real-time reports for admins",
          "Simple and fast UI"
        ]
      },
      {
        title: "Personal Portfolio (this site)",
        role: "Designer & Developer",
        category: "Web",
        desc: "A personal portfolio with a 3D experience using Three.js, running with no framework.",
        challenge: "Challenge: delivering a rich 3D experience on a lightweight static site.",
        solution: "Solution: Three.js directly via CDN with particles and wireframe geometry.",
        skills: ["Three.js", "JavaScript", "CSS", "WebGL"],
        impact: [
          "Smooth on mobile devices",
          "Full AR/EN support",
          "Zero build step"
        ]
      }
    ],

    "cta.title": "Like what you see?",
    "cta.text": "I'm ready for a job or collaboration — let's talk.",
    "cta.btn": "Get in touch",

    "skills.tag": "My tools",
    "skills.title": "Technical skills",
    skills: [
      {
        group: "Languages",
        items: [
          { name: "C#", level: 90 },
          { name: "SQL", level: 82 },
          { name: "JavaScript", level: 72 },
          { name: "HTML / CSS", level: 85 }
        ]
      },
      {
        group: "Frameworks",
        items: [
          { name: "ASP.NET Core MVC", level: 88 },
          { name: "Entity Framework Core", level: 82 },
          { name: "ASP.NET Web API", level: 78 }
        ]
      },
      {
        group: "Databases",
        items: [
          { name: "SQL Server", level: 82 },
          { name: "LINQ", level: 80 }
        ]
      },
      {
        group: "Tools",
        items: [
          { name: "Visual Studio", level: 90 },
          { name: "Git / GitHub", level: 85 },
          { name: "Postman / Swagger", level: 78 }
        ]
      }
    ],

    "resume.tag": "My journey",
    "resume.title": "Resume",
    "resume.download": "Download full CV (PDF)",
    resume: [
      {
        type: "Education",
        title: "B.Sc. Computer Science",
        org: "King Faisal University",
        date: "2019 — 2023",
        desc: "Focus on software engineering, databases, and web development."
      },
      {
        type: "Internship",
        title: ".NET Development Intern",
        org: "Tech Company (Summer)",
        date: "2022",
        desc: "Contributed to modules in an internal admin system using ASP.NET Core and EF Core."
      },
      {
        type: "Certification",
        title: "Microsoft Certified: Azure Fundamentals",
        org: "Microsoft",
        date: "2023",
        desc: "Cloud computing fundamentals and Azure services."
      }
    ],

    "contact.tag": "Let's talk",
    "contact.title": "Get in touch",
    "contact.lead": "Happy to hear about your ideas and projects. Leave a message or reach out directly.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.direct": "Or email me directly at",
    "contact.copy": "Copy email",

    "footer.copy": "© 2025 Abdullah Ahmad AlMousa. All rights reserved.",
    "footer.top": "Back to top ↑",
    "footer.socials": [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/abdullah-almousa" },
      { label: "GitHub", url: "https://github.com/" }
    ]
  }
};
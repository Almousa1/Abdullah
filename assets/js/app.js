/* =========================================================
   Abdullah AlMousa — Portfolio.Static
   Bilingual content + i18n toggle + rendering + contact form
   ========================================================= */

/* ----------------------------- DATA ----------------------------- */
const DATA = {
  brandName: { ar: "عبدالله الموسى", en: "Abdullah Almousa" },
  meta: {
    email: "abdullah.a.hussain.a@gmail.com",
    linkedin: "https://www.linkedin.com/in/abdullah-almousa",
    github: "https://github.com/"
  },
  ui: {
    skip: { ar: "تخطَّ إلى المحتوى", en: "Skip to content" },
    "nav.home": { ar: "الرئيسية", en: "Home" },
    "nav.about": { ar: "عني", en: "About" },
    "nav.projects": { ar: "المشاريع", en: "Projects" },
    "nav.skills": { ar: "المهارات", en: "Skills" },
    "nav.resume": { ar: "السيرة", en: "Resume" },
    "nav.contact": { ar: "تواصل", en: "Contact" },
    "nav.cv": { ar: "تحميل السيرة", en: "Download CV" },
    "hero.ctaProjects": { ar: "استعرض مشاريعي", en: "View my projects" },
    "hero.ctaContact": { ar: "تواصل معي", en: "Get in touch" },
    "hero.status": { ar: "متاح للعمل", en: "Open to work" },
    "about.tag": { ar: "عني", en: "About" },
    "about.approachTitle": { ar: "منهجيتي", en: "My approach" },
    "projects.tag": { ar: "أعمال مختارة", en: "Selected work" },
    "projects.title": { ar: "مشاريعي", en: "Projects" },
    "skills.tag": { ar: "أدواتي", en: "Toolkit" },
    "skills.title": { ar: "المهارات التقنية", en: "Technical skills" },
    "resume.tag": { ar: "مسيرتي", en: "Career" },
    "resume.title": { ar: "السيرة الذاتية", en: "Resume" },
    "resume.download": { ar: "تحميل السيرة الكاملة (PDF)", en: "Download full CV (PDF)" },
    "contact.tag": { ar: "لنبدأ حوارًا", en: "Let's talk" },
    "contact.title": { ar: "تواصل معي", en: "Contact me" },
    "contact.name": { ar: "الاسم", en: "Name" },
    "contact.email": { ar: "البريد الإلكتروني", en: "Email" },
    "contact.message": { ar: "الرسالة", en: "Message" },
    "contact.send": { ar: "إرسال الرسالة", en: "Send message" },
    "contact.direct": { ar: "أو راسلني مباشرة على", en: "Or email me directly at" },
    "footer.top": { ar: "العودة للأعلى ↑", en: "Back to top ↑" }
  },
  hero: {
    eyebrow: { ar: "مرحبًا، أنا", en: "Hi, I'm" },
    name: { ar: "عبدالله أحمد الموسى", en: "Abdullah Ahmad Almousa" },
    role: { ar: "مطوّر .NET", en: ".NET Developer" },
    bio: {
      ar: "مطوّر .NET  بخبرة عملية في بناء تطبيقات الويب والحلول المعتمدة على قواعد البيانات باستخدام C# وASP.NET Core MVC وEntity Framework Core وSQL Server.",
      en: " .NET Developer with hands-on experience building web applications and database-driven solutions using C#, ASP.NET Core MVC, Entity Framework Core, and SQL Server."
    },
    stats: [
      { value: "2+", label: { ar: "مشاريع مختارة", en: "Selected projects" } },
      { value: "15", label: { ar: "مهارة تقنية", en: "Tech skills" } },
      { value: ".NET", label: { ar: "التركيز التقني", en: "Core focus" } },
      { value: "2026", label: { ar: "سنة التخرج", en: "Grad year" } }
    ]
  },
  about: {
    title: { ar: "نظرة سريعة", en: "A quick look" },
    bio: {
      ar: "أنا مطور .NET  ولدي خبرة عملية في بناء تطبيقات الويب والحلول المعتمدة على قواعد البيانات باستخدام C# وASP.NET Core MVC وEntity Framework Core وSQL Server. أركز على تطوير الخلفية وتطبيقات الويب مع أساس قوي في مبادئ هندسة البرمجيات والبرمجة كائنية التوجه.",
      en: "I am a  .NET Developer with hands-on experience building web applications and database-driven solutions using C#, ASP.NET Core MVC, Entity Framework Core, and SQL Server. I focus on backend and web application development with a solid foundation in software engineering principles and object-oriented programming."
    },
    experience: {
      ar: "من خلال تدريب هندسة البرمجيات ومشاريع التطوير الشخصية، عملت على تصميم سير العمل التجاري، وبناء ميزات التطبيق، وتطبيق مسارات الصلاحيات، وإنشاء واجهات متجاوبة، وتحسين جودة البرمجيات عبر الاختبار وتصحيح الأخطاء.",
      en: "Through a Software Engineering internship and personal development projects, I worked on designing business workflows, building application features, implementing authorization flows, creating responsive interfaces, and improving software quality through testing and debugging."
    },
    education: {
      ar: "بكالوريوس علوم الحاسب، جامعة الملك فيصل (يناير 2026).",
      en: "Bachelor of Science in Computer Science, King Faisal University (January 2026)."
    },
    approach: {
      ar: "أتبع في التطوير منهجية تحويل متطلبات الأعمال إلى حلول تقنية قابلة للصيانة، بالاعتماد على ممارسات معمارية نظيفة، وتصميم قواعد بيانات منظم، ودورات متكررة من الاختبار وتصحيح الأخطاء لتقديم برمجيات موثوقة.",
      en: "I approach development by translating business requirements into maintainable technical solutions, using clean architecture practices, structured database design, and iterative debugging/testing to deliver reliable software."
    }
  },
  projects: [
    {
      title: { ar: "منصة خبرتك لإدارة التدريب", en: "Khbrtik Internship Management Platform" },
      category: { ar: "تطبيق ويب", en: "Web Application" },
      role: { ar: "متدرب هندسة برمجيات / مطور .NET", en: "Software Engineering Intern / .NET Developer" },
      description: {
        ar: "ساهمت في تطوير وصيانة منصة ويب لإدارة التدريب، تُستخدم لمعالجة طلبات الطلاب، وتوزيعهم على الشركات، وإدارة إجراءات التدريب من البداية إلى النهاية.",
        en: "Contributed to developing and maintaining a web-based internship management platform for handling student applications, company placements, and end-to-end internship workflows."
      },
      challenge: {
        ar: "احتاجت المنصة إلى إدارة موثوقة لمراحل متعددة في سير عمل التدريب، وعمليات تعتمد على الأدوار، واتساق عالٍ في قاعدة البيانات، مع الحفاظ على واجهات متجاوبة وقابلة للصيانة.",
        en: "The platform required reliable handling of multiple internship workflow stages, role-based operations, and database consistency while keeping the UI responsive and maintainable."
      },
      solution: {
        ar: "قمت ببناء وصيانة مكونات التطبيق باستخدام ASP.NET Core MVC وEF Core، وتصميم جداول وعلاقات واستعلامات قاعدة البيانات في SQL Server، وتطوير واجهات متجاوبة وفق تصاميم Figma، وتحسين الاعتمادية عبر الاختبار وتصحيح الأخطاء مع الالتزام بمعمارية MVC ونمط Repository.",
        en: "Built and maintained application components using ASP.NET Core MVC and EF Core, designed relational database structures and queries in SQL Server, implemented responsive UI based on Figma designs, and improved reliability through debugging and testing while following MVC and Repository Pattern practices."
      },
      skillIDs: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "LINQ", "HTML", "CSS", "Bootstrap", "MVC Architecture", "Repository Pattern"],
      impact: {
        ar: ["أتمتة سير عمل التدريب بالكامل", "واجهات متجاوبة وفق مواصفات Figma", "اتساق عالٍ للبيانات في SQL Server"],
        en: ["End-to-end internship workflow automated", "Figma-accurate responsive UI", "High data consistency in SQL Server"]
      }
    },
    {
      title: { ar: "نظام حجز وإدارة صُنّاع المحتوى", en: "Content Creators Booking & Management System" },
      category: { ar: "تطبيق ويب متكامل", en: "Full-Stack Web Application" },
      role: { ar: "مطور .NET متكامل", en: "Full-Stack .NET Developer" },
      description: {
        ar: "طورت نظاماً متكاملاً للحجز وإدارة سير العمل لمعالجة الجدولة والموافقات والإجراءات التشغيلية الخاصة بإدارة صُنّاع المحتوى.",
        en: "Developed a full-stack booking and workflow management system to handle scheduling, approvals, and operational processes for content creator management."
      },
      challenge: {
        ar: "كان مطلوباً من النظام دعم أدوار متعددة بصلاحيات مختلفة، وواجهات ثنائية اللغة (RTL/LTR)، مع تبسيط مسارات الموافقة والتحقق دون خلق اختناقات تشغيلية.",
        en: "The system needed to support multiple user roles with distinct permissions, bilingual interfaces (RTL/LTR), and streamlined approval/validation flows without introducing process bottlenecks."
      },
      solution: {
        ar: "نفذت آليات وصول مبنية على الأدوار لمسارات عمل Admin وManager وContent Creator، وبنيت تجربة مستخدم متعددة اللغات تدعم RTL/LTR، كما قمت بأتمتة خطوات الموافقة والتحقق لرفع كفاءة العمليات وإدارة المستخدمين.",
        en: "Implemented role-based access control workflows for Admin, Manager, and Content Creator roles, built multilingual UX with RTL/LTR support, and automated approval and validation steps to improve process efficiency and user management."
      },
      skillIDs: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "JavaScript", "HTML", "CSS", "Bootstrap", "MVC Architecture"],
      impact: {
        ar: ["صلاحيات بأدوار (Admin/Manager/Creator)", "دعم RTL/LTR ثنائي اللغة", "أتمتة الموافقات والتحقق"],
        en: ["Role-based access (Admin/Manager/Creator)", "Bilingual RTL/LTR support", "Automated approvals & validation"]
      }
    }
  ],
  skills: [
    { name: "C#", nameAr: "سي شارب", category: "Programming", categoryAr: "البرمجة", proficiency: 4 },
    { name: "SQL", nameAr: "إس كيو إل", category: "Programming", categoryAr: "البرمجة", proficiency: 4 },
    { name: "JavaScript", nameAr: "جافاسكربت", category: "Programming", categoryAr: "البرمجة", proficiency: 3 },
    { name: "ASP.NET Core MVC", nameAr: "إيه إس بي دوت نت كور إم في سي", category: "Frameworks & Technologies", categoryAr: "الأطر والتقنيات", proficiency: 4 },
    { name: "Entity Framework Core", nameAr: "إنتيتي فريمورك كور", category: "Frameworks & Technologies", categoryAr: "الأطر والتقنيات", proficiency: 4 },
    { name: "SQL Server", nameAr: "إس كيو إل سيرفر", category: "Frameworks & Technologies", categoryAr: "الأطر والتقنيات", proficiency: 4 },
    { name: "HTML", nameAr: "إتش تي إم إل", category: "Web Development", categoryAr: "تطوير الويب", proficiency: 4 },
    { name: "CSS", nameAr: "سي إس إس", category: "Web Development", categoryAr: "تطوير الويب", proficiency: 4 },
    { name: "Bootstrap", nameAr: "بوتستراب", category: "Web Development", categoryAr: "تطوير الويب", proficiency: 4 },
    { name: "Git", nameAr: "جيت", category: "Tools", categoryAr: "الأدوات", proficiency: 3 },
    { name: "GitHub", nameAr: "جيت هب", category: "Tools", categoryAr: "الأدوات", proficiency: 3 },
    { name: "Visual Studio", nameAr: "فيجوال ستوديو", category: "Tools", categoryAr: "الأدوات", proficiency: 4 },
    { name: "MVC Architecture", nameAr: "معمارية إم في سي", category: "Software Design", categoryAr: "تصميم البرمجيات", proficiency: 4 },
    { name: "Repository Pattern", nameAr: "نمط المستودع", category: "Software Design", categoryAr: "تصميم البرمجيات", proficiency: 4 },
    { name: "LINQ", nameAr: "لينك", category: "Frameworks & Technologies", categoryAr: "الأطر والتقنيات", proficiency: 4 }
  ],
  resume: [
    {
      type: { ar: "خبرة", en: "Experience" },
      title: { ar: "متدرب هندسة برمجيات", en: "Software Engineering Intern" },
      organization: { ar: "عمادة تقنية المعلومات، جامعة الملك فيصل", en: "Deanship of Information Technology, King Faisal University" },
      description: {
        ar: "طورت ميزات لمنصة خبرتك للتدريب، وصنت مكونات ASP.NET Core MVC، وصممت هياكل قاعدة بيانات SQL Server، ونفذت واجهات متجاوبة، وحسنت الاعتمادية عبر الاختبار وتصحيح الأخطاء.",
        en: "Developed features for the Khbrtik internship platform, maintained ASP.NET Core MVC components, designed SQL Server database structures, implemented responsive UI, and improved reliability through testing and debugging."
      },
      start: "2025-06", end: "2025-12"
    },
    {
      type: { ar: "تعليم", en: "Education" },
      title: { ar: "بكالوريوس علوم الحاسب", en: "Bachelor of Science in Computer Science" },
      organization: { ar: "جامعة الملك فيصل", en: "King Faisal University" },
      description: {
        ar: "خريج علوم حاسب مع خبرة عملية في هندسة البرمجيات وتطوير تطبيقات الويب.",
        en: "Computer Science graduate with practical experience in software engineering and web application development."
      },
      start: "2019-09", end: "2026-01"
    }
  ],
  contact: {
    lead: {
      ar: "هل لديك فكرة مشروع أو فرصة عمل؟ املأ النموذج أو راسلني مباشرة — يسعدني الرد خلال يومين.",
      en: "Have a project idea or a job opportunity? Fill the form or email me directly — I usually reply within two days."
    }
  },
  footer: {
    copy: { ar: "© 2026 عبدالله الموسى — جميع الحقوق محفوظة.", en: "© 2026 Abdullah AlMousa — All rights reserved." }
  }
};

/* --------------------------- Optional Formspree --------------------------- */
/* Free upgrade: create a form at https://formspree.io (free tier), then paste
   the form ID below (the part after /f/). Leave empty to use the zero-config
   mailto fallback that opens the visitor's email client. */
const FORMSPREE_ID = "";

/* ----------------------------- i18n core ----------------------------- */
let lang = "ar"; // AR is the default, matching the .NET app

const t = (key) => (DATA.ui[key] ? DATA.ui[key][lang] : key);
const L = (obj) => (obj && typeof obj === "object" ? obj[lang] : obj);

function getPath(o, p) { return p.split(".").reduce((a, k) => (a == null ? a : a[k]), o); }

function applyStatic() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dataset.lang = lang;
  document.querySelector("title").textContent =
    lang === "ar" ? "عبدالله احمد الموسى — مطور .NET" : "Abdullah Ahmad Almousa — .NET Developer";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  document.querySelectorAll("[data-bind]").forEach((el) => {
    const key = el.getAttribute("data-bind");
    const val = getPath(DATA, key);
    if (key === "contact.email") {
      el.textContent = DATA.meta.email;
      el.href = "mailto:" + DATA.meta.email;
    } else if (el.dataset.bind === "hero.socials" || el.dataset.bind === "footer.socials") {
      el.innerHTML = socialsHTML();
    } else if (el.dataset.bind === "hero.stats") {
      el.innerHTML = (val || []).map((s) =>
        `<li class="hero__stat"><span class="hero__stat-val">${L(s.value)}</span><span class="hero__stat-label">${L(s.label)}</span></li>`
      ).join("");
    } else if (Array.isArray(val)) {
      return; // rendered separately
    } else {
      el.textContent = L(val);
    }
  });

  document.getElementById("langSwitch").textContent = lang === "ar" ? "EN" : "ع";
}

function socialsHTML() {
  const linkedin = `<a href="${DATA.meta.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`;
  const github = `<a href="${DATA.meta.github}" target="_blank" rel="noopener">GitHub</a>`;
  const mail = `<a href="mailto:${DATA.meta.email}">${DATA.meta.email}</a>`;
  return [linkedin, github, mail].join("");
}

/* ----------------------------- renderers ----------------------------- */
function projectThumbSVG(i) {
  const id = "pth" + i;
  const base = i % 2 ? "#0e2a33" : "#10243a";
  return `
  <svg class="project__thumb" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#15233f"/>
        <stop offset="1" stop-color="${base}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="200" fill="url(#${id})"/>
    <g transform="translate(58 40)">
      <rect width="284" height="124" rx="12" fill="#0b1120" stroke="#1f2c47"/>
      <circle cx="20" cy="20" r="5" fill="#f87171"/>
      <circle cx="38" cy="20" r="5" fill="#fbbf24"/>
      <circle cx="56" cy="20" r="5" fill="#34d399"/>
      <rect x="16" y="44" width="120" height="8" rx="4" fill="#2dd4bf"/>
      <rect x="16" y="62" width="184" height="8" rx="4" fill="#1f2c47"/>
      <rect x="16" y="80" width="150" height="8" rx="4" fill="#1f2c47"/>
      <rect x="16" y="98" width="92" height="8" rx="4" fill="#38bdf8"/>
    </g>
  </svg>`;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = DATA.projects.map((p, i) => {
    const skills = p.skillIDs.map((id) => {
      const s = DATA.skills.find((x) => x.name === id);
      const label = s ? L({ ar: s.nameAr, en: s.name }) : id;
      return `<span>${label}</span>`;
    }).join("");
    return `
      <article class="project">
        <div class="project__media">
          <span class="project__cat">${L(p.category)}</span>
          ${projectThumbSVG(i)}
        </div>
        <div class="project__body">
          <h3 class="project__title">${L(p.title)}</h3>
          <p class="project__role">${L(p.role)}</p>
          <p class="project__desc">${L(p.description)}</p>
          <p class="project__challenge"><b>${lang === "ar" ? "التحدي:" : "Challenge:"}</b> ${L(p.challenge)}</p>
          <p class="project__solution"><b>${lang === "ar" ? "الحل:" : "Solution:"}</b> ${L(p.solution)}</p>
          <div class="project__impact">
            <span class="project__impact-label">${lang === "ar" ? "أثر المشروع" : "Impact"}</span>
            <ul>${p.impact[lang].map((m) => `<li>${m}</li>`).join("")}</ul>
          </div>
          <div class="project__skills">${skills}</div>
        </div>
      </article>`;
  }).join("");
}

function renderSkills() {
  const wrap = document.getElementById("skillsWrap");
  const groups = {};
  DATA.skills.forEach((s) => {
    const key = s.category;
    (groups[key] = groups[key] || []).push(s);
  });
  wrap.innerHTML = Object.keys(groups).map((cat) => {
    const items = groups[cat].map((s) => {
      const pct = Math.round((s.proficiency / 4) * 100);
      const label = lang === "ar" ? s.nameAr : s.name;
      return `
        <div class="skill">
          <div class="skill__top">
            <span class="skill__name">${label}</span>
            <span class="skill__pct">${s.proficiency}/4</span>
          </div>
          <div class="skill__bar"><div class="skill__fill" style="width:${pct}%"></div></div>
        </div>`;
    }).join("");
    const catLabel = lang === "ar"
      ? (DATA.skills.find((x) => x.category === cat)?.categoryAr || cat)
      : cat;
    return `<div class="skills__group"><h3>${catLabel}</h3><div class="skills__list">${items}</div></div>`;
  }).join("");
}

function renderResume() {
  const tl = document.getElementById("resumeTimeline");
  tl.innerHTML = DATA.resume.map((r) => `
    <div class="resume__item">
      <div class="resume__meta">
        <span class="resume__type">${L(r.type)}</span>
        <span class="resume__title">${L(r.title)}</span>
        <span class="resume__org">${L(r.organization)}</span>
        <span class="resume__date">${r.start} — ${r.end}</span>
      </div>
      <p class="resume__desc">${L(r.description)}</p>
    </div>`).join("");
}

function renderAll() {
  applyStatic();
  renderProjects();
  renderSkills();
  renderResume();
}

/* ----------------------------- interactions ----------------------------- */
function initLangSwitch() {
  document.getElementById("langSwitch").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    renderAll();
  });
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
  // solid background + shadow once the user scrolls past the hero edge
  const onScroll = () => nav.classList.toggle("nav--scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initScrollSpy() {
  const navLinks = Array.from(document.querySelectorAll(".nav__links a[data-nav]"));
  const map = new Map(navLinks.map((a) => [a.dataset.nav, a]));
  const sections = navLinks
    .map((a) => document.getElementById(a.dataset.nav))
    .filter(Boolean);
  if (!("IntersectionObserver" in window) || !sections.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove("active"));
          const link = map.get(e.target.id);
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => obs.observe(s));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries, o) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          o.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => obs.observe(el));
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form-status";
    status.textContent = "";

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      status.className = "form-status err";
      status.textContent = lang === "ar" ? "الرجاء تعبئة جميع الحقول." : "Please fill in all fields.";
      return;
    }

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message })
        });
        if (res.ok) {
          form.reset();
          status.className = "form-status ok";
          status.textContent = lang === "ar" ? "شكرًا! وصلت رسالتك." : "Thanks! Your message was sent.";
        } else {
          throw new Error("bad");
        }
      } catch {
        status.className = "form-status err";
        status.textContent = lang === "ar" ? "تعذّر الإرسال، حاول عبر بريدي مباشرة." : "Could not send, try my email directly.";
      }
    } else {
      // Zero-config fallback: open the visitor's email client.
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:${DATA.meta.email}?subject=${subject}&body=${body}`;
      status.className = "form-status ok";
      status.textContent = lang === "ar" ? "جارٍ فتح تطبيق البريد…" : "Opening your email app…";
    }
  });
}

/* ----------------------------- boot ----------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  initLangSwitch();
  initNav();
  initScrollSpy();
  initReveal();
  initContactForm();
});

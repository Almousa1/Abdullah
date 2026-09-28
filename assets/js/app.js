/* =========================================================
   App — bilingual, nav, reveal, tilt, form
   Depends on: data.js (window.PORTFOLIO_DATA)
   ========================================================= */
(function () {
  'use strict';

  const DATA = window.PORTFOLIO_DATA;
  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  // ---------- State ----------
  let currentLang = localStorage.getItem('lang') || 'ar';

  // ---------- Helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function getByPath(obj, path) {
    return path.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
  }

  // ---------- Loader ----------
  const loader = $('#loader');
  let loaderHidden = false;
  function hideLoader() {
    if (loaderHidden || !loader) return;
    loaderHidden = true;
    loader.classList.add('is-hidden');
  }
  document.addEventListener('three:ready', hideLoader);
  window.addEventListener('load', () => setTimeout(hideLoader, 900));
  setTimeout(hideLoader, 4000); // absolute fallback

  // ---------- i18n ----------
  function applyLang(lang) {
    const dict = DATA[lang];
    if (!dict) return;

    htmlEl.lang = dict.lang;
    htmlEl.dir = dict.dir;
    bodyEl.dataset.lang = lang;
    localStorage.setItem('lang', lang);

    // Simple string bindings
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (typeof val === 'string') el.textContent = val;
    });

    // Path bindings (data-bind="hero.name", "about.title", etc.)
    $$('[data-bind]').forEach((el) => {
      const path = el.getAttribute('data-bind');
      const val = getByPath(dict, path);
      if (typeof val === 'string') el.textContent = val;
    });

    // Dynamic sections
    renderProjects(dict.projects);
    renderSkills(dict.skills);
    renderResume(dict.resume);

    // Social lists
    renderSocials('hero.socials', dict.hero?.socials || []);
    renderSocials('footer.socials', dict['footer.socials'] || []);

    // Language switch button label
    const sw = $('#langSwitch');
    if (sw) sw.textContent = lang === 'ar' ? 'EN' : 'ع';

    // Re-arm reveals for freshly rendered content
    observeReveals();
  }

  // ---------- Renderers ----------
  function renderProjects(list) {
    const wrap = $('#projectsGrid');
    if (!wrap || !Array.isArray(list)) return;

    wrap.innerHTML = list
      .map(
        (p) => `
      <article class="project" data-tilt>
        <div class="project__media">
          <span class="project__cat">${escapeHtml(p.category || '')}</span>
          <svg class="project__thumb" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="g-${slug(p.title)}" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stop-color="#15233f"/>
                <stop offset="1" stop-color="#0e1830"/>
              </linearGradient>
            </defs>
            <rect width="400" height="200" fill="url(#g-${slug(p.title)})"/>
            <g stroke="#2dd4bf" stroke-opacity="0.35" fill="none">
              <rect x="40" y="50" width="120" height="80" rx="8"/>
              <rect x="180" y="70" width="90" height="50" rx="6"/>
              <rect x="290" y="40" width="70" height="110" rx="6"/>
              <circle cx="100" cy="90" r="12"/>
              <circle cx="225" cy="95" r="8"/>
              <line x1="40" y1="150" x2="360" y2="150" stroke-dasharray="4 4"/>
            </g>
          </svg>
        </div>
        <div class="project__body">
          <h3 class="project__title">${escapeHtml(p.title)}</h3>
          <span class="project__role">${escapeHtml(p.role)}</span>
          <p class="project__desc">${escapeHtml(p.desc)}</p>
          ${p.challenge ? `<p class="project__challenge"><b>${escapeHtml(p.challenge)}</b></p>` : ''}
          ${p.solution ? `<p class="project__solution"><b>${escapeHtml(p.solution)}</b></p>` : ''}
          ${
            Array.isArray(p.skills) && p.skills.length
              ? `<div class="project__skills">${p.skills
                  .map((s) => `<span>${escapeHtml(s)}</span>`)
                  .join('')}</div>`
              : ''
          }
          ${
            Array.isArray(p.impact) && p.impact.length
              ? `<div class="project__impact">
                   <span class="project__impact-label">Impact</span>
                   <ul>${p.impact.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul>
                 </div>`
              : ''
          }
        </div>
      </article>`
      )
      .join('');
  }

  function renderSkills(groups) {
    const wrap = $('#skillsWrap');
    if (!wrap || !Array.isArray(groups)) return;

    wrap.innerHTML = groups
      .map(
        (g) => `
      <div class="skills__group">
        <h3>${escapeHtml(g.group)}</h3>
        <div class="skills__list">
          ${g.items
            .map(
              (s) => `
            <div class="skill">
              <div class="skill__top">
                <span class="skill__name">${escapeHtml(s.name)}</span>
                <span class="skill__pct">${s.level}%</span>
              </div>
              <div class="skill__bar"><div class="skill__fill" data-level="${s.level}"></div></div>
            </div>`
            )
            .join('')}
        </div>
      </div>`
      )
      .join('');
  }

  function renderResume(list) {
    const wrap = $('#resumeTimeline');
    if (!wrap || !Array.isArray(list)) return;

    wrap.innerHTML = list
      .map(
        (r) => `
      <div class="resume__item">
        <div class="resume__meta">
          <span class="resume__type">${escapeHtml(r.type)}</span>
          <span class="resume__title">${escapeHtml(r.title)}</span>
          <span class="resume__org">${escapeHtml(r.org)}</span>
          <span class="resume__date">${escapeHtml(r.date)}</span>
        </div>
        <p class="resume__desc">${escapeHtml(r.desc)}</p>
      </div>`
      )
      .join('');
  }

  function renderSocials(path, list) {
    const el = $(`[data-bind="${path}"]`);
    if (!el) return;
    el.innerHTML = list
      .map(
        (s) =>
          `<li><a href="${escapeAttr(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            s.label
          )}</a></li>`
      )
      .join('');
  }

  // ---------- Utils ----------
  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  function escapeAttr(str) {
    return escapeHtml(str);
  }
  function slug(str) {
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'x';
  }

  // ---------- Reveal on scroll ----------
  let revealObserver;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // animate skill bars inside
            $$('.skill__fill', entry.target).forEach((bar) => {
              const lvl = bar.getAttribute('data-level') || 0;
              bar.style.width = lvl + '%';
            });
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    $$('.reveal').forEach((el) => revealObserver.observe(el));
  }

  // ---------- Tilt on hover (subtle 3D) ----------
  function initTilt() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = () => $$('[data-tilt], .project');
    document.addEventListener('mousemove', (e) => {
      targets().forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > window.innerHeight + 100) return;
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) / r.width;
        const dy = (e.clientY - cy) / r.height;
        const rx = Math.max(-6, Math.min(6, -dy * 6));
        const ry = Math.max(-6, Math.min(6, dx * 6));
        el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      });
    });
    document.addEventListener('mouseleave', () => {
      targets().forEach((el) => (el.style.transform = ''));
    });
  }

  // ---------- Nav ----------
  function initNav() {
    const toggle = $('#navToggle');
    const links = $('#navLinks');
    if (toggle && links) {
      toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
      });
      links.querySelectorAll('a').forEach((a) =>
        a.addEventListener('click', () => {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        })
      );
    }

    const nav = $('#nav');
    const onScroll = () => {
      if (window.scrollY > 12) nav?.classList.add('nav--scrolled');
      else nav?.classList.remove('nav--scrolled');

      // Scroll progress bar
      const bar = $('#scrollProgress');
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        bar.style.width = pct.toFixed(2) + '%';
      }

      // Active nav link
      const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact'];
      let active = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - 120 <= 0) active = id;
      }
      $$('[data-nav]').forEach((a) => {
        a.classList.toggle('active', a.getAttribute('data-nav') === active);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- Language switch ----------
  function initLangSwitch() {
    const btn = $('#langSwitch');
    if (!btn) return;
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLang(currentLang);
    });
  }

  // ---------- Contact form ----------
  function initForm() {
    const form = $('#contactForm');
    const status = $('#formStatus');
    if (!form || !status) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      status.className = 'form-status';

      if (!name || !email || !message) {
        status.textContent = currentLang === 'ar' ? 'الرجاء تعبئة جميع الحقول.' : 'Please fill in all fields.';
        status.classList.add('err');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = currentLang === 'ar' ? 'البريد الإلكتروني غير صالح.' : 'Invalid email.';
        status.classList.add('err');
        return;
      }

      // mailto fallback (static hosting friendly)
      const subject = encodeURIComponent(`Portfolio contact — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:abdullah.a.hussain.a@gmail.com?subject=${subject}&body=${body}`;

      status.textContent = currentLang === 'ar' ? 'سأفتح بريدك لإكمال الإرسال…' : 'Opening your email client…';
      status.classList.add('ok');
      form.reset();
    });
  }

  // ---------- Copy email ----------
  function initCopy() {
    const btn = $('#copyEmail');
    if (!btn) return;
    btn.addEventListener('click', async () => {
      const email = 'abdullah.a.hussain.a@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const orig = btn.textContent;
        btn.textContent = currentLang === 'ar' ? 'تم النسخ ✓' : 'Copied ✓';
        setTimeout(() => (btn.textContent = orig), 1600);
      } catch {
        window.prompt('Copy email:', email);
      }
    });
  }

  // ---------- Init ----------
  function boot() {
    applyLang(currentLang);
    initNav();
    initLangSwitch();
    initForm();
    initCopy();
    initTilt();
    observeReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
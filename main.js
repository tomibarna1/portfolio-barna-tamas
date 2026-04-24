const moonSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const sunSVG  = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

// ── THEME ──
const html = document.documentElement;
const themeBtn = document.getElementById('themeToggle');

function updateThemeIcon() {
  if (!themeBtn) return;
  themeBtn.innerHTML = html.classList.contains('dark') ? sunSVG : moonSVG;
}

updateThemeIcon();

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
  });
}

// ── TRANSLATIONS ──
const T = {
  hu: {
    'nav-munkak':       'Munkáim',
    'nav-rolam':        'Rólam',
    'nav-kapcsolat':    'Kapcsolat',
    'hero-label':       'Fotó · Videó — Autó · Motor',
    'hero-tagline':     'Az autók és motorok iránti szenvedélyem nem háttér — ez az alapja minden képnek, minden döntésnek.',
    'btn-munkak':       'Munkáim',
    'btn-kapcsolat':    'Kapcsolat',
    'marquee-all':      'Összes kép',
    'cta-title':        'Legyen szó sportautóról,<br>oldtimeről vagy éjszakai motorozásról.',
    'cta-allphoto':     'Összes fotó',
    'cta-contact':      'Írj nekem',
    'tab-foto':         'Fotók',
    'tab-video':        'Videók',
    'filter-osszes':    'Összes',
    'filter-auto':      'Autó',
    'filter-motor':     'Motor',
    'filter-egyeb':     'Egyéb',
    'yt-label':         'YouTube',
    'local-label':      'Shortok',
    'moto-caption':     '',
    'rolam-quote':      '&ldquo;Kevesebb sablon, több gondolkodás. Minden kép egyedi megközelítést kap.&rdquo;',
    'about-p1':         'Az autók és motorok kiskorom óta a szenvedélyeim. Amikor később egy kamera is a kezembe került, onnantól tudtam, hogy ezzel szeretnék foglalkozni — nem hobbiként, nem mellékesen, hanem teljes elhivatottsággal.',
    'about-p2':         'A szerkesztés során képes vagyok órákat tölteni egyetlen részlettel, mert pontosan tudom, mi a különbség a jó kép és az emlékezetes kép között. Nem dolgozom presetek és sablonok alapján — minden anyag egyedi megközelítést kap.',
    'about-p3':         'Napi szinten dolgozom Lightroom-ban, Premiere Pro-ban és After Effects-ben. A szerkesztés ugyanolyan szenvedélyem, mint maga a fotózás — addig nem állok meg, amíg a kép nem mutatja azt, amit én éreztem a helyszínen.',
    'tag-egyedi':       'Egyedi szerkesztés',
    'tag-biztos':       'Biztos eredmény',
    'tag-esztetikus':   'Esztétikus',
    'tag-benzines':     'Benzines',
    'tag-igenyes':      'Igényes',
    'spec-szak-title':  'Szakterület',
    'spec-szak-1':      'Autófotózás',
    'spec-szak-2':      'Motorfotózás',
    'spec-szak-3':      'Videókészítés',
    'spec-szak-5':      'Termékfotózás',
    'spec-sw-title':    'Szoftverek',
    'spec-gear-title':  'Felszerelés',
    'kapcsolat-label':  'Kapcsolat',
    'kapcsolat-title':  'Dolgozzunk<br>együtt.',
    'kapcsolat-intro':  'Van egy autód vagy motorod, amelyről igazán méltó képet vagy videót szeretnél? Keress meg — meghallgatom az elképzelésed és megtaláljuk a legjobb megközelítést.<br><br>A lehető leggyorsabban válaszolok.',
    'chip-label':       'Mivel kapcsolatban érdeklődsz?',
    'chip-label-szolg': 'Melyik szolgáltatás érdekel?',
    'chip-auto':        'Autó',
    'chip-motor':       'Motor',
    'chip-auto-motor':  'Autó+Motor',
    'chip-egyeb':       'Egyéb',
    'chip-foto':        'Fotó',
    'chip-video':       'Videó',
    'chip-foto-video':  'Fotó+Videó',
    'chip-szolg-egyeb': 'Egyéb',
    'label-nev':        'Név *',
    'label-email':      'Email *',
    'label-uzenet':     'Üzenet *',
    'placeholder-nev':      'A te neved / Cégnév',
    'placeholder-email':    'Email címed (erre fog érkezni a válasz)',
    'placeholder-uzenet':   'Ide írd a munkát amit szeretnél / kérdésed',
    'btn-kuldes':       'Küldés',
    'form-success':     'Köszönöm az üzeneted — hamarosan jelentkezem!',
  },
  en: {
    'nav-munkak':       'My Work',
    'nav-rolam':        'About',
    'nav-kapcsolat':    'Contact',
    'hero-label':       'Photo · Video — Cars · Bikes',
    'hero-tagline':     "My passion for cars and motorcycles isn't a backdrop — it's the foundation of every shot, every decision.",
    'btn-munkak':       'My Work',
    'btn-kapcsolat':    'Contact',
    'marquee-all':      'All photos',
    'cta-title':        "Whether it's a sports car,<br>a classic or a night ride.",
    'cta-allphoto':     'All photos',
    'cta-contact':      'Get in touch',
    'tab-foto':         'Photos',
    'tab-video':        'Videos',
    'filter-osszes':    'All',
    'filter-auto':      'Cars',
    'filter-motor':     'Bikes',
    'filter-egyeb':     'Other',
    'yt-label':         'YouTube',
    'local-label':      'Shortok',
    'moto-caption':     '',
    'rolam-quote':      '&ldquo;Less template, more thinking. Every photo gets a unique approach.&rdquo;',
    'about-p1':         "Cars and motorcycles have been my passions since childhood. When a camera later ended up in my hands, I knew right away that this is what I wanted to do — not as a hobby, not on the side, but with full dedication.",
    'about-p2':         "During editing I can spend hours on a single detail, because I know exactly what separates a good photo from a memorable one. I don't work with presets or templates — every project gets a unique approach.",
    'about-p3':         "I work daily in Lightroom, Premiere Pro and After Effects. Editing is as much a passion for me as the photography itself — I don't stop until the image shows what I felt on location.",
    'tag-egyedi':       'Custom editing',
    'tag-biztos':       'Reliable results',
    'tag-esztetikus':   'Aesthetic',
    'tag-benzines':     'Petrolhead',
    'tag-igenyes':      'Refined',
    'spec-szak-title':  'Expertise',
    'spec-szak-1':      'Car photography',
    'spec-szak-2':      'Motorcycle photography',
    'spec-szak-3':      'Video production',
    'spec-szak-5':      'Product photography',
    'spec-sw-title':    'Software',
    'spec-gear-title':  'Gear',
    'kapcsolat-label':  'Contact',
    'kapcsolat-title':  "Let's work<br>together.",
    'kapcsolat-intro':  "Do you have a car or motorcycle that deserves truly worthy photos or videos? Reach out — I'll listen to your vision and we'll find the best approach.<br><br>I'll get back to you as soon as possible.",
    'chip-label':       'What are you interested in?',
    'chip-label-szolg': 'Which service interests you?',
    'chip-auto':        'Car',
    'chip-motor':       'Bike',
    'chip-auto-motor':  'Car+Bike',
    'chip-egyeb':       'Other',
    'chip-foto':        'Photo',
    'chip-video':       'Video',
    'chip-foto-video':  'Photo+Video',
    'chip-szolg-egyeb': 'Other',
    'label-nev':        'Name *',
    'label-email':      'Email *',
    'label-uzenet':     'Message *',
    'placeholder-nev':      'Your name / Company',
    'placeholder-email':    'Your email (reply will be sent here)',
    'placeholder-uzenet':   'Describe the work you need / your question',
    'btn-kuldes':       'Send',
    'form-success':     "Thank you for your message — I'll get back to you soon!",
  }
};

let currentLang = localStorage.getItem('lang') || 'hu';
const langBtn = document.getElementById('langToggle');

function applyLang(l) {
  currentLang = l;
  if (langBtn) langBtn.textContent = l === 'hu' ? 'EN' : 'HU';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[l][key] !== undefined) el.innerHTML = T[l][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (T[l][key] !== undefined) el.placeholder = T[l][key];
  });
}

applyLang(currentLang);

if (langBtn) {
  langBtn.addEventListener('click', () => {
    const next = currentLang === 'hu' ? 'en' : 'hu';
    localStorage.setItem('lang', next);
    applyLang(next);
  });
}

// ── HAMBURGER (mobile nav) ──
const hamburger = document.getElementById('hamburgerToggle');
const navEl = document.querySelector('nav');
if (hamburger && navEl) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navEl.classList.toggle('open');
  });
  navEl.querySelectorAll('ul a').forEach(a =>
    a.addEventListener('click', () => navEl.classList.remove('open'))
  );
  document.addEventListener('click', (e) => {
    if (!navEl.contains(e.target)) navEl.classList.remove('open');
  });
}

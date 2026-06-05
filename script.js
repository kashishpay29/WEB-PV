function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('open');
}

function handleSubmit(btn) {
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Message Sent';
    btn.style.background = '#0F6E56';
  }, 1500);
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) cur = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--blue-600)' : '';
  });
});

const ALL_BRANDS = [
  { name: 'Accops',                 logo: "images/products/accops.jpeg",           cover: true  },
  { name: 'Alteryx',               logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Alteryx_logo.svg', cover: false },
  { name: 'Altros',                logo: "images/products/altos.jpg",              cover: true  },
  { name: 'APC by Schneider',      logo: "images/products/APC.jpg",               cover: true  },
  { name: 'Aruba',                 logo: "images/products/ARUBA.jpg",              cover: true  },
  { name: 'ASUS',                  logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg', cover: false },
  { name: 'ATEN',                  logo: 'images/products/ATEN.jpg',               cover: true  },
  { name: 'Avaya',                 logo: 'images/products/AVAYA.jpg',              cover: true  },
  { name: 'Azure DevOps',          logo: 'images/products/AZUREDEVOPS.jpg',        cover: true  },
  { name: 'Belkin',                logo: 'images/products/BELKIN.jpg',             cover: true  },
  { name: 'BenQ',                  logo: 'images/products/BENQ.jpg',               cover: true  },
  { name: 'Bose Professional',     logo: 'images/products/BOSE.jpg',               cover: true  },
  { name: 'Cato Networks',         logo: "images/products/CATONETS.jpg",           cover: true  },
  { name: 'Check Point',           logo: 'images/products/checkp.jpeg',            cover: true  },
  { name: 'Citrix',                logo: 'images/products/Citrix.jpg',             cover: true  },
  { name: 'Cohesity',              logo: "images/products/cohesity.jpg",           cover: true  },
  { name: 'CommScope',             logo: 'images/products/CommScope.jpg',          cover: true  },
  { name: 'D-Link',                logo: 'images/products/D-LINK.jpg',             cover: true  },
  { name: 'Dell Technologies',     logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg', cover: false },
  { name: 'Fortinet',              logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg', cover: false },
  { name: 'Freshsales',            logo: "images/products/freshsales.jpg",         cover: true  },
  { name: 'Freshworks',            logo: "images/products/freshworks.jpg",         cover: true  },
  { name: 'Group-IB',              logo: "images/products/groupib.jpeg",           cover: true  },
  { name: 'Hammerspace',           logo: "images/products/hammerspacess.jpeg",     cover: true  },
  { name: 'HFCL',                  logo: "images/products/hfcl.jpg",               cover: true  },
  { name: 'HP',                    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg', cover: false },
  { name: 'HPE',                   logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg', cover: false },
  { name: 'HPE Aruba Networking',  logo: "images/products/hpearuba.jpeg",          cover: true  },
  { name: 'IBM',                   logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', cover: false },
  { name: 'Idea Forge',            logo: "images/products/ideaforde.jpeg",         cover: true  },
  { name: 'Infinidat',             logo: "images/products/infinidat.jpeg",         cover: true  },
  { name: 'Kaspersky',             logo: 'images/products/Kaspersky.jpg',          cover: true  },
  { name: 'LeadSquared',           logo: "images/products/leadsquared.jpeg",       cover: true  },
  { name: 'Lenovo',                logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg', cover: false },
  { name: 'LG Electronics',        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg', cover: false },
  { name: 'Liongard',              logo: "images/products/liongard.jpeg",          cover: true  },
  { name: 'Logitech',              logo: 'images/products/logitech.jpg',           cover: true  },
  { name: 'MAXHUB',                logo: 'images/products/maxhub.jpg',             cover: true  },
  { name: 'Microsoft',             logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', cover: false },
  { name: 'Microsoft Azure',       logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg', cover: false },
  { name: 'Microsoft Dynamics 365',logo: 'images/products/microsoftdynamics.jpg', cover: true  },
  { name: 'Microsoft Fabric',      logo: "images/products/microsoftfabric.jpeg",   cover: true  },
  { name: 'Microsoft Flow',        logo: "images/products/microsoftflow.jpeg",     cover: true  },
  { name: 'Microsoft Teams',       logo: 'images/products/msteams.jpg',            cover: true  },
  { name: 'Motadata',              logo: "images/products/motadata.jpeg",          cover: true  },
  { name: 'Okta',                  logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Okta_logo.svg', cover: false },
  { name: 'Optoma',                logo: 'images/products/optoma.jpg',             cover: true  },
  { name: 'Panasonic',             logo: 'images/products/panasonic.jpg',          cover: true  },
  { name: 'Poly',                  logo: 'images/products/poly.jpg',               cover: true  },
  { name: 'Power BI',              logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', cover: false },
  { name: 'Samsung',               logo: 'images/products/samsung.jpg',            cover: true  },
  { name: 'SanDisk',               logo: 'images/products/sandisk.jpg',            cover: true  },
  { name: 'Scality',               logo: "images/products/scality.jpeg",           cover: true  },
  { name: 'Seceon',                logo: 'images/products/seceon.jpeg',            cover: true  },
  { name: 'SolarWinds',            logo: 'images/products/solarwinds.jpg',         cover: true  },
  { name: 'Trellix',               logo: "images/products/trellix.jpeg",           cover: true  },
  { name: 'UniFi',                 logo: 'images/products/unifi.jpg',              cover: true  },
  { name: 'VAST Data',             logo: "images/products/vast.jpeg",              cover: true  },
  { name: 'Veeam',                 logo: 'images/products/veeam.jpg',              cover: true  },
  { name: 'Vertiv',                logo: "images/products/vertiv.jpg",             cover: true  },
  { name: 'Zoom',                  logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Zoom_Logo_2022.svg', cover: false },
  { name: 'Zoho',                  logo: 'images/products/zoho.jpeg',              cover: true  },
];

// ── COUNTER ANIMATION ────────────────────────────────────────────────────────
function animateCounters() {
  const counters = document.querySelectorAll('.why-counter-num');
  counters.forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const text = el.dataset.text;
    if (text) return;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

const whySection = document.querySelector('.why');
if (whySection) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(whySection);
}

// ── MARQUEE RENDERER ─────────────────────────────────────────────────────────
function makeCard(brand) {
  const style = brand.cover ? 'cover' : 'contain';
  return `
    <div class="marquee-card marquee-card--${style}">
      <img
        src="${brand.logo}"
        alt="${brand.name}"
        class="marquee-logo"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <span class="marquee-fallback" style="display:none">${brand.name}</span>
    </div>`;
}

function renderMarquee() {
  // Hide old solutions grid tabs
  const tabs = document.getElementById('catTabs');
  if (tabs) tabs.style.display = 'none';

  const row1El = document.getElementById('marqueeRow1');
  const row2El = document.getElementById('marqueeRow2');
  if (!row1El || !row2El) return;

  // Split brands into two rows
  const mid = Math.ceil(ALL_BRANDS.length / 2);
  const row1Brands = ALL_BRANDS.slice(0, mid);
  const row2Brands = ALL_BRANDS.slice(mid);

  // Duplicate each set for seamless loop
  const row1HTML = [...row1Brands, ...row1Brands].map(makeCard).join('');
  const row2HTML = [...row2Brands, ...row2Brands].map(makeCard).join('');

  row1El.innerHTML = row1HTML;
  row2El.innerHTML = row2HTML;
}

renderMarquee();
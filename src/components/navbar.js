import { assets, contact, navLinks, whatsappHref } from '../data/site-data.js';

const menuIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`;

const closeIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`;

export function Navbar() {
  const links = navLinks
    .map((item) => `<a href="${item.href}" class="menu-link">${item.label}</a>`)
    .join('');

  return `
    <div class="navbar-shell">
      <header class="navbar" id="navbar">
        <a href="#inicio" class="nav-logo" aria-label="Voltar ao início">
          <img src="${assets.logos.simple}" width="64" height="64" alt="${contact.name}" />
        </a>
        <div class="nav-actions">
          <a
            href="${whatsappHref('generic')}"
            class="btn btn-whatsapp nav-cta"
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click"
            data-track-source="navbar"
          >
            <img src="${assets.icons.whatsapp}" width="18" height="18" alt="" class="btn-icon-img" />
            Consulta
          </a>
          <button class="btn-menu" id="menu-open" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="site-menu">
            ${menuIcon}
          </button>
        </div>
      </header>
    </div>

    <div class="menu-overlay" id="menu-overlay" hidden></div>
    <nav class="site-menu" id="site-menu" aria-label="Menu principal" aria-hidden="true" hidden>
      <div class="site-menu__header">
        <img src="${assets.logos.simple}" width="64" height="64" alt="${contact.name}" class="site-menu__logo" />
        <button class="btn-icon" id="menu-close" type="button" aria-label="Fechar menu">
          ${closeIcon}
        </button>
      </div>
      <div class="site-menu__links">
        ${links}
      </div>
    </nav>
  `;
}

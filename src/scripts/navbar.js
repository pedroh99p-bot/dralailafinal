import { qs, qsa } from './helpers.js';

export function initNavbar() {
  const shell = qs('.navbar-shell');
  const openButton = qs('#menu-open');
  const closeButton = qs('#menu-close');
  const menu = qs('#site-menu');
  const overlay = qs('#menu-overlay');
  const menuLinks = qsa('.menu-link');

  if (!shell || !openButton || !closeButton || !menu || !overlay) return;

  let lastScrollY = window.scrollY;

  function openMenu() {
    overlay.hidden = false;
    menu.hidden = false;
    window.requestAnimationFrame(() => {
      overlay.classList.add('is-open');
      menu.classList.add('is-open');
      document.body.classList.add('menu-open');
      openButton.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
    });
  }

  function closeMenu() {
    overlay.classList.remove('is-open');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    openButton.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    window.setTimeout(() => {
      overlay.hidden = true;
      menu.hidden = true;
    }, 300);
  }

  openButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
  openButton.dataset.ready = 'true';

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      openButton.focus();
    }
  });

  window.addEventListener(
    'scroll',
    () => {
      const currentScrollY = window.scrollY;
      const shouldHide = currentScrollY > 120 && currentScrollY > lastScrollY;
      shell.classList.toggle('is-hidden', shouldHide);
      shell.classList.toggle('is-compact', currentScrollY > 40);
      lastScrollY = currentScrollY;
    },
    { passive: true },
  );
}

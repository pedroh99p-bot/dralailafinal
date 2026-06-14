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
  let ticking = false;
  let closeTimer = 0;

  function syncMenuState(isOpen) {
    document.body.classList.toggle('menu-open', isOpen);
    openButton.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-hidden', String(!isOpen));
  }

  function openMenu() {
    window.clearTimeout(closeTimer);
    overlay.hidden = false;
    menu.hidden = false;
    window.requestAnimationFrame(() => {
      overlay.classList.add('is-open');
      menu.classList.add('is-open');
      syncMenuState(true);
    });
  }

  function closeMenu() {
    overlay.classList.remove('is-open');
    menu.classList.remove('is-open');
    syncMenuState(false);
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      overlay.hidden = true;
      menu.hidden = true;
    }, 320);
  }

  function updateOnScroll() {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const shouldHide = currentScrollY > 140 && scrollingDown;
    shell.classList.toggle('is-hidden', shouldHide);
    shell.classList.toggle('is-compact', currentScrollY > 36);
    lastScrollY = currentScrollY;
    ticking = false;
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
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateOnScroll);
    },
    { passive: true },
  );

  updateOnScroll();
}

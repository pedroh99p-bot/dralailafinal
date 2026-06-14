import { qs } from './helpers.js';

export function initPreloader() {
  const preloader = qs('#preloader');
  if (!preloader) {
    document.documentElement.classList.add('page-ready');
    return;
  }

  let hidden = false;

  const hide = () => {
    if (hidden) return;
    hidden = true;
    preloader.classList.add('is-hidden');
    window.setTimeout(() => document.documentElement.classList.add('page-ready'), 220);
    window.setTimeout(() => preloader.remove(), 700);
  };

  window.addEventListener('load', () => window.setTimeout(hide, 1500), { once: true });
  window.setTimeout(hide, 2400);
}

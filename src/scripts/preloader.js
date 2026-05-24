import { qs } from './helpers.js';

export function initPreloader() {
  const preloader = qs('#preloader');
  if (!preloader) return;

  const hide = () => {
    preloader.classList.add('is-hidden');
    window.setTimeout(() => preloader.remove(), 700);
  };

  window.addEventListener('load', () => window.setTimeout(hide, 650), { once: true });
  window.setTimeout(hide, 2500);
}

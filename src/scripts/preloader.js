import { qs } from './helpers.js';

export function initPreloader() {
  const preloader = qs('#preloader');
  if (!preloader) return;

  let hidden = false;

  const hide = () => {
    if (hidden) return;
    hidden = true;
    preloader.classList.add('is-hidden');
    window.setTimeout(() => preloader.remove(), 700);
  };

  window.addEventListener('load', () => window.setTimeout(hide, 1500), { once: true });
  window.setTimeout(hide, 2400);
}

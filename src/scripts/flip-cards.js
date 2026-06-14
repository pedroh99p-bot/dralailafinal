import { qs, qsa } from './helpers.js';

export function initFlipCards() {
  qsa('.flip-card').forEach((card) => {
    const trigger = qs('.flip-card__trigger', card);
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = card.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

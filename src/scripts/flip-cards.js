import { qsa } from './helpers.js';

export function initFlipCards() {
  qsa('.flip-card').forEach((card) => {
    const toggle = () => {
      const isFlipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', String(isFlipped));
    };

    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      toggle();
    });

    card.addEventListener('keydown', (event) => {
      if (event.target.closest('a')) return;
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      toggle();
    });

    qsa('a', card).forEach((link) => {
      link.addEventListener('click', (event) => event.stopPropagation());
    });
  });
}

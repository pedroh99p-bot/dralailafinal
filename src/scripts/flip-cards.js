import { qs, qsa } from './helpers.js';

export function initFlipCards() {
  const cards = qsa('.flip-card');
  if (!cards.length) return;

  const desktopQuery = window.matchMedia('(min-width: 1100px)');

  function closeOtherCards(activeCard) {
    cards.forEach((card) => {
      if (card === activeCard) return;
      card.classList.remove('is-open');
      qs('.flip-card__trigger', card)?.setAttribute('aria-expanded', 'false');
    });
  }

  cards.forEach((card) => {
    const trigger = qs('.flip-card__trigger', card);
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const nextState = !card.classList.contains('is-open');

      if (desktopQuery.matches) {
        closeOtherCards(card);
      }

      card.classList.toggle('is-open', nextState);
      trigger.setAttribute('aria-expanded', String(nextState));
    });
  });
}

import { flipCards } from '../data/cards-data.js';

export function FlipCards() {
  const cards = flipCards
    .map(
      (card, index) => `
        <article class="flip-card">
          <button class="flip-card__trigger" type="button" aria-expanded="false" aria-controls="treatment-card-${index + 1}">
            <span class="flip-card__icon" aria-hidden="true">${card.icon}</span>
            <span class="flip-card__title">${card.front}</span>
            <span class="flip-card__hint">
              <span class="flip-card__hint-mobile">Toque para expandir</span>
              <span class="flip-card__hint-desktop">Passe ou clique para ver mais</span>
            </span>
            <span class="flip-card__chevron" aria-hidden="true"></span>
          </button>
          <div class="flip-card__body" id="treatment-card-${index + 1}">
            <span class="flip-card__icon flip-card__icon--back" aria-hidden="true">${card.backIcon}</span>
            <p>${card.back}</p>
          </div>
        </article>
      `,
    )
    .join('');

  return `
    <section id="tratamentos" class="section section-texture section-texture--grid">
      <div class="container">
        <header class="section-header reveal">
          <h2>Tratamentos para recuperar <span class="accent">estética, função e confiança</span></h2>
          <p>O melhor caminho depende do estado dos dentes, da expectativa do paciente e de um planejamento cuidadoso.</p>
        </header>
        <div class="flip-grid reveal reveal-delay-1">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

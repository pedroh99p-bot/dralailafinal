import { flipCards } from '../data/cards-data.js';
import { assets } from '../data/site-data.js';

export function FlipCards() {
  const cards = flipCards
    .map(
      (card, index) => `
        <article class="flip-card" role="button" tabindex="0" aria-pressed="false" aria-label="${card.front}">
          <div class="flip-card__inner">
            <div class="flip-card__face flip-card__front">
              <span class="flip-card__icon" aria-hidden="true">${card.icon}</span>
              <h3>${card.front}</h3>
              <span class="flip-card__hint">Ver cuidado indicado</span>
            </div>
            <div class="flip-card__face flip-card__back">
              <span class="flip-card__icon flip-card__icon--back" aria-hidden="true">${card.backIcon}</span>
              <p>${card.back}</p>
              <a
                href="${card.href}"
                class="flip-card__cta"
                target="_blank"
                rel="noopener"
                data-track="flip_card_cta_click whatsapp_click"
                data-track-source="flip-card-${index + 1}"
              >
                <img src="${assets.icons.whatsapp}" width="16" height="16" alt="" class="btn-icon-img" />
                ${card.cta}
              </a>
            </div>
          </div>
        </article>
      `,
    )
    .join('');

  return `
    <section id="tratamentos" class="section section-texture section-texture--grid">
      <div class="container">
        <header class="section-header reveal">
          <h2>Entenda os sinais <span class="accent">e os caminhos de cuidado</span></h2>
          <p>Cada sintoma pode ter causas diferentes. A avaliação clínica ajuda a entender o caminho mais adequado.</p>
        </header>
        <div class="flip-grid reveal reveal-delay-1">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

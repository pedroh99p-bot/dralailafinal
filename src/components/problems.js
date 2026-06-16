import { smileProblems } from '../data/site-data.js';

const problemIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
`;

export function Problems() {
  const items = smileProblems
    .map(
      (item) => `
        <article class="problem-card">
          <span class="problem-card__icon" aria-hidden="true">${problemIcon}</span>
          <p>${item}</p>
        </article>
      `,
    )
    .join('');

  return `
    <section id="sorriso" class="section problems section-texture section-texture--warm">
      <div class="container">
        <header class="section-header reveal">
          <h2>Seu sorriso ainda transmite <span class="accent">a imagem que você gostaria?</span></h2>
          <p>Pequenos detalhes no sorriso podem afetar autoestima, conforto e confiança no dia a dia.</p>
        </header>
        <div class="problem-grid reveal reveal-delay-1">
          ${items}
        </div>
      </div>
    </section>
  `;
}

import { faqItems } from '../data/site-data.js';

export function Faq() {
  const items = faqItems
    .map(
      (item) => `
        <details class="faq-item">
          <summary>${item.question}</summary>
          <p>${item.answer}</p>
        </details>
      `,
    )
    .join('');

  return `
    <section id="duvidas" class="section faq section-texture section-texture--lines">
      <div class="container">
        <header class="section-header reveal">
          <h2>Dúvidas <span class="accent">frequentes</span></h2>
          <p>Informações iniciais para quem está considerando estética dental ou reabilitação do sorriso.</p>
        </header>
        <div class="faq-list reveal reveal-delay-1">
          ${items}
        </div>
      </div>
    </section>
  `;
}

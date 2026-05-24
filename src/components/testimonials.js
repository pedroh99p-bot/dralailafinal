import { testimonials } from '../data/testimonials-data.js';
import { assets, whatsappHref } from '../data/site-data.js';

function cardMarkup(testimonial, hidden = false) {
  return `
    <article class="testimonial-card" ${hidden ? 'aria-hidden="true"' : ''}>
      <header>
        <strong>${testimonial.name}</strong>
        <img src="${assets.icons.google}" width="24" height="24" alt="" />
      </header>
      <div class="testimonial-card__stars" aria-label="5 estrelas">★★★★★</div>
      <p>“${testimonial.text}”</p>
    </article>
  `;
}

export function Testimonials() {
  const originalCards = testimonials.map((testimonial) => cardMarkup(testimonial)).join('');
  const duplicateCards = testimonials.map((testimonial) => cardMarkup(testimonial, true)).join('');

  return `
    <section id="pacientes" class="section testimonials section-texture section-texture--grid">
      <div class="container">
        <header class="section-header reveal">
          <h2>O que os pacientes <span class="accent">relatam</span></h2>
          <p>Experiências sobre acolhimento, clareza e cuidado individualizado.</p>
        </header>
      </div>

      <div class="testimonial-roller reveal reveal-delay-1">
        <div class="testimonial-roller__track">
          <div class="testimonial-roller__set">${originalCards}</div>
          <div class="testimonial-roller__set" aria-hidden="true">${duplicateCards}</div>
        </div>
      </div>

      <div class="container testimonials__cta reveal">
        <p>Depoimentos ilustrativos para demonstração.</p>
        <a
          href="${whatsappHref()}"
          class="btn btn-primary"
          target="_blank"
          rel="noopener"
          data-track="whatsapp_click"
          data-track-source="testimonials"
        >
          Falar com especialista
        </a>
      </div>
    </section>
  `;
}

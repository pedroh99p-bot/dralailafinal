import { testimonials } from '../data/testimonials-data.js';
import { assets, whatsappHref } from '../data/site-data.js';

function cardMarkup(testimonial, hidden = false) {
  return `
    <article class="testimonial-card" ${hidden ? 'aria-hidden="true"' : ''}>
      <header>
        <img src="${testimonial.photo}" width="56" height="56" alt="${testimonial.name}" loading="lazy" class="testimonial-card__avatar" />
        <div>
          <strong>${testimonial.name}</strong>
        </div>
      </header>
      <p>${testimonial.text}</p>
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
          <h2>Relatos de quem buscou <span class="accent">cuidado especializado</span></h2>
          <p>Pacientes que encontraram acolhimento, escuta e um caminho mais claro para lidar com dores, bruxismo e desconfortos na região da face.</p>
        </header>
      </div>

      <div class="testimonial-roller reveal reveal-delay-1">
        <div class="testimonial-roller__track">
          <div class="testimonial-roller__set">${originalCards}</div>
          <div class="testimonial-roller__set" aria-hidden="true">${duplicateCards}</div>
        </div>
      </div>

      <div class="container testimonials__cta reveal">
        <a
          href="${whatsappHref('generic')}"
          class="btn btn-whatsapp"
          target="_blank"
          rel="noopener"
          data-track="whatsapp_click"
          data-track-source="testimonials"
        >
          <img src="${assets.icons.whatsapp}" width="20" height="20" alt="" class="btn-icon-img" />
          Falar com especialista
        </a>
      </div>
    </section>
  `;
}

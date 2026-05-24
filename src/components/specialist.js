import { assets, contact, stats, whatsappHref } from '../data/site-data.js';

function statItem(item) {
  return `
    <div class="stat">
      <strong>
        <span class="stat__accent">${item.prefix}</span><span class="count" data-target="${item.value}">${item.value}</span><span class="stat__accent">${item.suffix}</span>
      </strong>
      <span>${item.label}</span>
    </div>
  `;
}

export function Specialist() {
  return `
    <section id="especialista" class="section specialist section-texture section-texture--halo">
      <div class="container specialist__grid">
        <figure class="specialist__image reveal">
          <img src="${assets.images.specialist}" width="900" height="1080" alt="${contact.name}" loading="lazy" />
        </figure>
        <div class="specialist__content reveal reveal-delay-1">
          <span class="eyebrow">A especialista</span>
          <h2>${contact.name}</h2>
          <p class="specialist__credential">${contact.cro}</p>
          <p>
            Cirurgiã-dentista com atuação em DTM, bruxismo, ATM e dor orofacial,
            unindo escuta cuidadosa, avaliação técnica e planejamento individualizado.
          </p>
          <div class="specialist__stats" id="counter-section">
            ${stats.map(statItem).join('')}
          </div>
          <a
            href="${whatsappHref()}"
            class="btn btn-primary specialist__cta"
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click"
            data-track-source="specialist"
          >
            Falar com a Dra. Lailla
          </a>
        </div>
      </div>
    </section>
  `;
}

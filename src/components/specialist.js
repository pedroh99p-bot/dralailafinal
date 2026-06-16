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
        <div class="specialist__photo-column">
          <h2 class="specialist__eyebrow">A especialista</h2>
          <figure class="specialist__image specialist__glow reveal">
            <img src="${assets.images.specialist}" width="900" height="1080" alt="${contact.name}" loading="lazy" />
          </figure>
          <p class="specialist__name">${contact.name}</p>
          <p class="specialist__subtitle">${contact.specialistSubtitle}</p>
        </div>
        <div class="specialist__content reveal reveal-delay-1">
          <p class="specialist__credential">${contact.cro} · Fortaleza - CE</p>
          <h2>Odontologia estética e reabilitação do sorriso em Fortaleza</h2>
          <p>
            A Dra. Liberalina atua com foco em estética dental e reabilitação oral, unindo cuidado humano,
            olhar técnico e atenção aos detalhes para entregar tratamentos com conforto, naturalidade e confiança.
          </p>
          <div class="specialist__stats" id="counter-section">
            ${stats.map(statItem).join('')}
          </div>
          <a
            href="${whatsappHref('specialist')}"
            class="btn btn-primary specialist__cta"
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click"
            data-track-source="specialist"
          >
            <img src="${assets.icons.whatsapp}" width="20" height="20" alt="" class="btn-icon-img" />
            Falar com a Dra. Liberalina
          </a>
        </div>
      </div>
    </section>
  `;
}

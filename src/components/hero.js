import { assets, contact, whatsappHref } from '../data/site-data.js';

export function Hero() {
  return `
    <section id="inicio" class="hero section-texture section-texture--hero">
      <div class="container hero__container">
        <div class="hero__content reveal">
          <div class="hero__badges" aria-label="Focos de atendimento">
            <span class="badge">DTM</span>
            <span class="badge">Bruxismo</span>
            <span class="badge">Dor Orofacial</span>
          </div>
          <h1>Dor na mandíbula, bruxismo ou estalos na ATM?</h1>
          <p>
            Entenda seus sintomas com uma avaliação individualizada e um cuidado pensado
            para o seu caso com a ${contact.name}.
          </p>
          <div class="hero__ctas">
            <a href="#quiz" class="btn btn-secondary" data-track="quiz_cta_click" data-track-source="hero">
              Fazer quiz rápido
            </a>
            <a
              href="${whatsappHref('hero_attendance')}"
              class="btn btn-success"
              target="_blank"
              rel="noopener"
              data-track="whatsapp_click"
              data-track-source="hero"
            >
              <img src="${assets.icons.whatsapp}" width="20" height="20" alt="" class="btn-icon-img" />
              Atendimento no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

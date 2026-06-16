import { assets, contact, whatsappHref } from '../data/site-data.js';

export function Hero() {
  return `
    <section id="inicio" class="hero section-texture section-texture--hero">
      <div class="container hero__container">
        <div class="hero__content reveal">
          <div class="hero__badges" aria-label="Focos de atendimento">
            <span class="badge">Resina estética</span>
            <span class="badge">Prótese dentária</span>
            <span class="badge">Lentes em porcelana</span>
            <span class="badge">Planejamento do sorriso</span>
          </div>
          <h1>Volte a sorrir com naturalidade, conforto e confiança</h1>
          <p>
            Tratamentos estéticos e reabilitadores para transformar o seu sorriso
            com planejamento, cuidado e excelência em cada detalhe.
          </p>
          <div class="hero__ctas">
            <a
              href="${whatsappHref('hero_attendance')}"
              class="btn btn-primary"
              target="_blank"
              rel="noopener"
              data-track="whatsapp_click"
              data-track-source="hero"
            >
              <img src="${assets.icons.whatsapp}" width="20" height="20" alt="" class="btn-icon-img" />
              Agendar avaliação
            </a>
            <a href="#tratamentos" class="btn btn-secondary" data-track="treatments_cta_click" data-track-source="hero">
              Conhecer tratamentos
            </a>
          </div>
        </div>

        <figure class="hero__media reveal reveal-delay-1">
          <img
            src="${assets.images.hero}"
            width="900"
            height="1125"
            alt="${contact.name}"
            class="hero__portrait"
            fetchpriority="high"
            draggable="false"
          />
        </figure>
      </div>
    </section>
  `;
}

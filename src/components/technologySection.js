import { assets, whatsappHref } from '../data/site-data.js';

export function TechnologySection() {
  return `
    <section class="section technology-section section-texture section-texture--halo">
      <div class="container technology-section__grid">
        <div class="technology-section__content reveal">
          <span class="eyebrow">Avaliação digital</span>
          <h2>Tecnologia para enxergar além dos sintomas</h2>
          <p class="technology-section__lead">
            O atendimento conta com recursos digitais, como scanner, para tornar a avaliação mais precisa, visual e personalizada.
          </p>
          <div class="technology-section__benefits">
            <article class="technology-benefit">
              <strong>Avaliação mais precisa</strong>
              <p>Mais clareza para observar sinais funcionais que passam despercebidos em uma análise superficial.</p>
            </article>
            <article class="technology-benefit">
              <strong>Visualização digital da mordida</strong>
              <p>Uma leitura mais visual para entender contato, desgaste e possíveis sobrecargas.</p>
            </article>
            <article class="technology-benefit">
              <strong>Planejamento mais personalizado</strong>
              <p>As decisões de cuidado ficam mais alinhadas aos sintomas, hábitos e necessidades do seu caso.</p>
            </article>
          </div>
          <a
            href="${whatsappHref('technology')}"
            class="btn btn-whatsapp technology-section__cta"
            target="_blank"
            rel="noopener"
            data-track="technology_cta_click whatsapp_click"
            data-track-source="technology"
          >
            <img src="${assets.icons.whatsapp}" width="20" height="20" alt="" class="btn-icon-img" />
            Agendar uma avaliação
          </a>
        </div>

        <div class="technology-scanner reveal reveal-delay-1" aria-hidden="true">
          <div class="technology-scanner__topline">
            <div class="technology-scanner__badge">Scanner intraoral</div>
            <img src="${assets.logos.simple}" width="42" height="42" alt="" loading="lazy" class="technology-scanner__logo" />
          </div>
          <div class="technology-scanner__screen">
            <span class="technology-scanner__beam"></span>
            <span class="technology-scanner__arch"></span>
            <span class="technology-scanner__mesh technology-scanner__mesh--one"></span>
            <span class="technology-scanner__mesh technology-scanner__mesh--two"></span>
            <span class="technology-scanner__point technology-scanner__point--one"></span>
            <span class="technology-scanner__point technology-scanner__point--two"></span>
            <span class="technology-scanner__point technology-scanner__point--three"></span>
          </div>
          <div class="technology-scanner__caption">
            <strong>Scanner digital</strong>
            <span>Avaliação visual, precisa e personalizada</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

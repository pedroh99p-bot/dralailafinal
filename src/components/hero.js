import { assets, contact, whatsappHref } from '../data/site-data.js';

export function Hero() {
  return `
    <section id="inicio" class="hero section-texture section-texture--hero">
      <video class="hero__video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
        <source src="${assets.videos.hero}" type="video/webm" />
      </video>
      <div class="hero__overlay" aria-hidden="true"></div>
      <div class="container hero__container">
        <div class="hero__content reveal">
          <div class="hero__badges" aria-label="Focos de atendimento">
            <span class="badge">DTM</span>
            <span class="badge">Bruxismo</span>
            <span class="badge">Dor Orofacial</span>
          </div>
          <h1>Dor na mandíbula, bruxismo ou estalos na articulação?</h1>
          <p>
            Entenda seus sintomas com uma avaliação individualizada e um cuidado pensado
            para o seu caso com a ${contact.name}.
          </p>
          <div class="hero__ctas">
            <a href="#quiz" class="btn btn-secondary" data-track="quiz_cta_click" data-track-source="hero">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="btn-inline-icon"><path d="M9 3h6l4 4v8a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6V7l4-4z"/><path d="M10 9h4"/><path d="M10 13h4"/><path d="M12 17h.01"/></svg>
              Quiz rápido
            </a>
            <a
              href="${whatsappHref('hero_attendance')}"
              class="btn btn-whatsapp"
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

        <figure class="hero__media reveal reveal-delay-1">
          <img src="${assets.images.hero}" width="760" height="920" alt="${contact.name}" class="hero__portrait" fetchpriority="high" />
        </figure>
      </div>
    </section>
  `;
}

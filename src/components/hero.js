import { assets, contact } from '../data/site-data.js';

export function Hero() {
  return `
    <section id="inicio" class="hero section-texture section-texture--hero">
      <video class="hero__video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
        <source src="${assets.videos.hero}" type="video/webm" />
      </video>
      <div class="hero__overlay" aria-hidden="true"></div>
      <div class="container hero__container">
        <figure class="hero__media reveal reveal-delay-1">
          <img
            src="${assets.images.hero}"
            width="739"
            height="1630"
            alt="${contact.name}"
            class="hero__portrait"
            fetchpriority="high"
            draggable="false"
          />
        </figure>

        <div class="hero__content reveal">
          <div class="hero__badges" aria-label="Focos de atendimento">
            <span class="badge">DTM</span>
            <span class="badge">Bruxismo</span>
            <span class="badge">Dor Orofacial</span>
          </div>
          <h1>Entenda a origem da <span class="hero__headline-accent">dor na mandíbula</span>, do bruxismo e dos estalos.</h1>
          <p class="hero__summary">
            Uma avaliação clínica cuidadosa para entender seus sintomas e orientar o melhor caminho para o seu caso com a ${contact.name}.
          </p>
          <div class="hero__highlight btn-pulse" role="note" aria-label="Informação sobre o atendimento">
            Atendimento individualizado, particular e com hora marcada.
          </div>
        </div>
      </div>
    </section>
  `;
}

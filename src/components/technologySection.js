import { assets, contact } from '../data/site-data.js';

export function TechnologySection() {
  return `
    <section class="section technology-section section-texture section-texture--halo">
      <div class="container technology-section__grid">
        <div class="technology-section__content reveal">
          <span class="eyebrow">Resultado natural</span>
          <h2>Mais do que estética: confiança no resultado</h2>
          <p class="technology-section__lead">
            O objetivo não é criar um sorriso artificial, e sim devolver harmonia,
            segurança e naturalidade respeitando a identidade de cada paciente.
          </p>
          <div class="technology-section__benefits">
            <article class="technology-benefit">
              <span class="technology-benefit__number">1</span>
              <div>
                <strong>Naturalidade</strong>
                <p>Resultados pensados para valorizar o sorriso sem exageros.</p>
              </div>
            </article>
            <article class="technology-benefit">
              <span class="technology-benefit__number">2</span>
              <div>
                <strong>Conforto</strong>
                <p>Tratamentos planejados para o dia a dia do paciente.</p>
              </div>
            </article>
            <article class="technology-benefit">
              <span class="technology-benefit__number">3</span>
              <div>
                <strong>Precisão</strong>
                <p>Atenção ao formato, cor, proporção e adaptação.</p>
              </div>
            </article>
            <article class="technology-benefit">
              <span class="technology-benefit__number">4</span>
              <div>
                <strong>Confiança</strong>
                <p>Mais clareza e segurança desde a avaliação até o resultado final.</p>
              </div>
            </article>
          </div>
          <div class="technology-section__signature reveal reveal-delay-1">
            <img src="${assets.logos.full}" width="220" height="84" alt="${contact.name}" loading="lazy" class="technology-section__logo" />
          </div>
        </div>
      </div>
    </section>
  `;
}

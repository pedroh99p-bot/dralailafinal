import { assets } from '../data/site-data.js';

export function TechnologySection() {
  return `
    <section class="section technology-section section-texture section-texture--halo">
      <div class="container technology-section__grid">
        <div class="technology-section__content reveal">
          <span class="eyebrow">Avaliação digital</span>
          <h2>Tecnologia para enxergar além dos sintomas</h2>
          <p class="technology-section__lead">
            O atendimento conta com recursos digitais para tornar a avaliação mais precisa, visual e personalizada.
          </p>
          <div class="technology-section__benefits">
            <article class="technology-benefit">
              <span class="technology-benefit__number">1</span>
              <div>
                <strong>Avaliação mais precisa</strong>
                <p>Mais clareza para observar sinais funcionais que passam despercebidos em uma análise superficial.</p>
              </div>
            </article>
            <article class="technology-benefit">
              <span class="technology-benefit__number">2</span>
              <div>
                <strong>Visualização digital da mordida</strong>
                <p>Uma leitura mais visual para entender contato, desgaste e possíveis sobrecargas.</p>
              </div>
            </article>
            <article class="technology-benefit">
              <span class="technology-benefit__number">3</span>
              <div>
                <strong>Planejamento mais personalizado</strong>
                <p>As decisões de cuidado ficam mais alinhadas aos sintomas, hábitos e necessidades do seu caso.</p>
              </div>
            </article>
          </div>
          <div class="technology-section__signature reveal reveal-delay-1">
            <img src="${assets.logos.full}" width="220" height="84" alt="Dra. Laila Rettore" loading="lazy" class="technology-section__logo" />
          </div>
        </div>
      </div>
    </section>
  `;
}

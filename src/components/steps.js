import { careSteps, whatsappHref } from '../data/site-data.js';

export function Steps() {
  const steps = careSteps
    .map(
      (step) => `
        <article class="timeline__step">
          <span class="timeline__dot" aria-hidden="true"></span>
          <span class="timeline__number">${step.number}</span>
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </article>
      `,
    )
    .join('');

  return `
    <section id="atendimento" class="section steps section-texture section-texture--warm">
      <div class="container">
        <header class="section-header reveal">
          <h2><span class="accent">Etapas</span> do atendimento</h2>
          <p>Um processo claro, cuidadoso e individualizado do início ao fim.</p>
        </header>
        <div class="timeline reveal reveal-delay-1" id="timeline">
          <span class="timeline__line" aria-hidden="true"></span>
          <span class="timeline__progress" id="timeline-progress" aria-hidden="true"></span>
          ${steps}
        </div>
        <div class="steps__cta reveal">
          <a
            href="${whatsappHref('generic')}"
            class="btn btn-primary"
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click"
            data-track-source="steps"
          >
            Agendar avaliação pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  `;
}

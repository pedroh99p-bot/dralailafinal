import { whatsappHref } from '../data/site-data.js';

export function FinalOffer() {
  return `
    <section class="section final-section section-texture section-texture--warm">
      <div class="container">
        <div class="final-offer reveal">
          <div class="urgency-badge">
            <span aria-hidden="true">◷</span>
            Horários de avaliação são limitados para manter um atendimento cuidadoso
          </div>
          <h2>Dê o primeiro passo para <span class="accent">entender a origem</span> da sua dor</h2>
          <p>
            Agende uma avaliação individualizada e receba orientação sobre os caminhos
            de cuidado para o seu caso.
          </p>
          <div class="final-offer__ctas">
            <a
              href="${whatsappHref()}"
              class="btn btn-primary btn-pulse"
              target="_blank"
              rel="noopener"
              data-track="final_offer_cta_click whatsapp_click"
              data-track-source="final-offer"
            >
              Falar no WhatsApp
            </a>
            <a href="#quiz" class="btn btn-secondary" data-track="quiz_cta_click" data-track-source="final-offer">
              Fazer quiz rápido
            </a>
          </div>
          <p class="final-note">O tratamento indicado depende de avaliação profissional individualizada.</p>
        </div>
      </div>
    </section>
  `;
}

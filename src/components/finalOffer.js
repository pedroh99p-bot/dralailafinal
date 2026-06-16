import { assets, whatsappHref } from '../data/site-data.js';

export function FinalOffer() {
  return `
    <section class="section final-section section-texture section-texture--warm">
      <div class="container">
        <div class="final-offer reveal">
          <div class="urgency-badge">
            <span aria-hidden="true">•</span>
            Avaliação individual para definir o melhor caminho
          </div>
          <h2>Descubra o melhor caminho para <span class="accent">transformar o seu sorriso</span></h2>
          <p>
            Agende sua avaliação e entenda qual tratamento faz mais sentido para o seu caso,
            com foco em naturalidade, conforto e confiança.
          </p>
          <a
            href="${whatsappHref('final_offer')}"
            class="btn btn-primary final-offer__cta"
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click final_offer_cta_click"
            data-track-source="final_offer"
          >
            <img src="${assets.icons.whatsapp}" width="20" height="20" alt="" class="btn-icon-img" />
            Agendar avaliação pelo WhatsApp
          </a>
          <p class="final-note">O tratamento indicado depende de avaliação profissional individualizada.</p>
        </div>
      </div>
    </section>
  `;
}

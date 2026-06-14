import { assets, contact, whatsappHref } from '../data/site-data.js';

export function Quiz() {
  return `
    <section id="quiz" class="section quiz section-texture section-texture--lines">
      <div class="container">
        <header class="section-header reveal">
          <h2>Quiz rápido: <span class="accent">qual a intensidade</span> dos seus sintomas?</h2>
          <p>Responda em menos de um minuto. O resultado não é diagnóstico, mas pode indicar se vale investigar com uma avaliação especializada.</p>
        </header>

        <div class="quiz-card reveal reveal-delay-1" id="quiz-container">
          <img src="${assets.logos.simple}" width="54" height="54" alt="${contact.name}" loading="lazy" class="quiz__logo" />
          <div class="quiz-progress" aria-hidden="true">
            <span id="quiz-fill"></span>
          </div>
          <div id="quiz-steps-wrapper" class="quiz-card__body"></div>
          <div class="quiz-controls">
            <button class="btn-link" id="btn-quiz-back" type="button">← Voltar</button>
          </div>
          <div class="quiz-result" id="quiz-result" hidden>
            <h3 id="result-title"></h3>
            <p id="result-desc"></p>
            <div class="quiz-result__actions">
              <a
                id="quiz-whatsapp"
                class="btn btn-whatsapp"
                target="_blank"
                rel="noopener"
                data-track="whatsapp_click"
                data-track-source="quiz-result"
              >
                <img src="${assets.icons.whatsapp}" width="20" height="20" alt="" class="btn-icon-img" />
                Quero agendar minha avaliação
              </a>
              <button class="btn btn-secondary" id="btn-quiz-reset" type="button">Refazer quiz</button>
            </div>
          </div>
        </div>

        <div class="quiz-direct-cta reveal">
          <p class="quiz-direct-cta__text">Prefere atendimento direto? Fale com a especialista</p>
          <a
            href="${whatsappHref('generic')}"
            class="btn btn-whatsapp quiz-direct-cta__button"
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click"
            data-track-source="quiz-direct"
          >
            <img src="${assets.icons.whatsapp}" width="20" height="20" alt="" class="btn-icon-img" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  `;
}

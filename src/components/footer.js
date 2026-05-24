import { assets, contact } from '../data/site-data.js';

export function Footer() {
  return `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">
          <img src="${assets.logos.full}" width="220" height="76" alt="${contact.name}" loading="lazy" />
          <p>Odontologia com diagnóstico, precisão e cuidado humano.</p>
        </div>
        <address class="footer__contact">
          <strong>Contato e informações</strong>
          <span>${contact.cro}</span>
          <a
            href="${contact.whatsappUrl}"
            target="_blank"
            rel="noopener"
            data-track="whatsapp_click"
            data-track-source="footer"
          >
            WhatsApp: ${contact.whatsappVisible}
          </a>
          <a
            href="${contact.instagramUrl}"
            target="_blank"
            rel="noopener"
            data-track="instagram_click"
            data-track-source="footer"
          >
            Instagram: ${contact.instagramHandle}
          </a>
        </address>
      </div>
      <div class="container footer__bottom">
        <p>
          As informações desta página não substituem uma avaliação odontológica individualizada.
          Todos os direitos reservados © <span id="current-year">2026</span> ${contact.name}.
        </p>
      </div>
    </footer>
  `;
}

import { location } from '../data/site-data.js';

export function MapSection() {
  return `
    <section id="localizacao" class="section map-section section-texture section-texture--halo">
      <div class="container">
        <div class="map-card reveal">
          <div class="map-card__info">
            <span class="eyebrow">Localização</span>
            <h2>${location.name}</h2>
            <p class="map-card__rating"><span aria-hidden="true">★★★★★</span> ${location.rating}</p>
            <p>${location.address}</p>
            <p>Telefone: ${location.phone}</p>
            <strong>Atendimento com horário marcado.</strong>
            <a
              href="${location.mapsUrl}"
              class="btn btn-secondary"
              target="_blank"
              rel="noopener"
              data-track="google_maps_click"
              data-track-source="location"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div class="map-card__embed">
            <iframe
              src="${location.iframeUrl}"
              title="Mapa de localização da Dra. Laila Rettore"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `;
}

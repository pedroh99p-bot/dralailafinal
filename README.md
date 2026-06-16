# Dra. Liberalina Cavaleiro Landing Page

Landing page estática em Vite, HTML/CSS/JS puro, para odontologia estética, prótese dentária e reabilitação do sorriso em Fortaleza/CE.

## Como rodar

```bash
npm install
npm run dev
npm run build
```

O servidor local padrão do Vite abre em `http://127.0.0.1:5173`.

## Estrutura

```text
public/
  assets/
    favicons/
    icons/
    images/
    logos/
src/
  components/
  data/
  scripts/
  styles/
index.html
```

## Onde editar conteúdo

- WhatsApp, Instagram, localização, rollers, números, links, FAQ e assets principais: `src/data/site-data.js`
- Quiz, perguntas, opções e resultados: `src/data/quiz-data.js`
- Cards de tratamentos: `src/data/cards-data.js`
- Depoimentos: `src/data/testimonials-data.js`
- Componentes HTML estáticos: `src/components/`
- Estilos por seção: `src/styles/`
- Interações e tracking: `src/scripts/`

## Tracking

Crie um arquivo `.env` na raiz usando `.env.example` como base:

```env
VITE_GTM_ID=GTM-XXXXXXX
VITE_META_PIXEL_ID=000000000000000
```

Os eventos preparados incluem:

- `whatsapp_click`
- `instagram_click`
- `quiz_start`
- `quiz_complete`
- `final_offer_cta_click`
- `treatments_cta_click`
- `google_maps_click`

## Assets

Os assets locais permanecem em `public/assets` para ícones e favicons. Os assets principais da página são URLs Cloudinary em `src/data/site-data.js`:

- logo oficial da Dra. Liberalina
- foto principal do hero
- foto da especialista
- fotos placeholder dos relatos

Para trocar imagens ou logos, atualize `src/data/site-data.js` e os metadados de `index.html`.

## Build

```bash
npm run build
```

O resultado final é gerado em `dist/`.

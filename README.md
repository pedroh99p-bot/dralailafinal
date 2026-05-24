# Dra. Lailla Rettore Landing Page

Landing page estática em Vite, HTML/CSS/JS puro, para atendimento com foco em DTM, bruxismo, ATM e dor orofacial.

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

- WhatsApp, Instagram, CRO, localização, rollers, números e links: `src/data/site-data.js`
- Quiz, perguntas, opções e resultados: `src/data/quiz-data.js`
- Cards flip: `src/data/cards-data.js`
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

O script principal do Google Tag Manager fica no topo do `head` em `index.html`.
O `noscript` do GTM fica imediatamente após a abertura do `body`.

O Meta Pixel é carregado no `head`, após a configuração do GTM.
O `noscript` do Pixel fica logo abaixo do `noscript` do GTM.

Se os IDs não forem configurados ou continuarem como placeholders, os scripts JS não inicializam o tracking. Os eventos continuam seguros e só disparam para `dataLayer` e `fbq` quando eles existem.

Eventos preparados:

- `whatsapp_click`
- `instagram_click`
- `quiz_start`
- `quiz_complete`
- `final_offer_cta_click`
- `flip_card_cta_click`
- `google_maps_click`

## Assets

Os assets fornecidos foram copiados para `public/assets`:

- `public/assets/logos/logo-simple.svg`
- `public/assets/logos/logo-full.svg`
- `public/assets/images/hero.png`
- `public/assets/images/dra-lailla.png`

Para trocar imagens ou logos, mantenha os mesmos caminhos ou atualize `src/data/site-data.js`.

## Build

```bash
npm run build
```

O resultado final é gerado em `dist/`.

import { whatsappHref } from './site-data.js';

const frontIcon = (paths) => `
  <svg class="flip-card-svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    ${paths}
  </svg>
`;

const backIcon = (paths) => `
  <svg class="flip-card-svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    ${paths}
  </svg>
`;

export const flipCards = [
  {
    icon: frontIcon('<path d="M5 13c1.4-1.4 3-2.1 5-2.1h4c2 0 3.6.7 5 2.1"/><path d="M7 17c1.2 1 2.9 1.6 5 1.6s3.8-.6 5-1.6"/><path d="M8 8.5h8"/><path d="M12 4.5v2"/>'),
    backIcon: backIcon('<path d="M12 21c4.8-2.1 7.5-5.4 7.5-9.7V5.8L12 3.5 4.5 5.8v5.5C4.5 15.6 7.2 18.9 12 21z"/><path d="M8.7 12.2l2.2 2.2 4.6-5"/>'),
    front: 'Dor ao mastigar',
    back: 'Avaliação da função mandibular, músculos da face e sinais associados.',
    cta: 'Conversar sobre esse sintoma',
    href: whatsappHref('flip_cards'),
  },
  {
    icon: frontIcon('<path d="M7.5 7.5c1.2-1.1 2.7-1.7 4.5-1.7 3.4 0 6.2 2.8 6.2 6.2"/><path d="M16.5 16.5c-1.2 1.1-2.7 1.7-4.5 1.7-3.4 0-6.2-2.8-6.2-6.2"/><path d="M18.2 7.2v4.8h-4.8"/><path d="M5.8 16.8V12h4.8"/>'),
    backIcon: backIcon('<path d="M12 3.5l7 4v5.2c0 3.6-2.7 6.7-7 8.3-4.3-1.6-7-4.7-7-8.3V7.5l7-4z"/><path d="M9 12l2 2 4-4"/>'),
    front: 'Estalos na ATM',
    back: 'Investigação dos movimentos mandibulares e possíveis sobrecargas articulares.',
    cta: 'Conversar sobre esse sintoma',
    href: whatsappHref('flip_cards'),
  },
  {
    icon: frontIcon('<path d="M8 4.5v3"/><path d="M12 3.5v4"/><path d="M16 4.5v3"/><path d="M5.5 11c1.4-1.4 3.4-2.2 6.5-2.2s5.1.8 6.5 2.2"/><path d="M8.5 15c1 .7 2.2 1.1 3.5 1.1s2.5-.4 3.5-1.1"/>'),
    backIcon: backIcon('<path d="M5.5 13.5c1.6-3 3.8-4.5 6.5-4.5s4.9 1.5 6.5 4.5"/><path d="M8.5 17c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2"/><path d="M12 6v12"/><path d="M8.8 12h6.4"/>'),
    front: 'Bruxismo ou apertamento',
    back: 'Plano individualizado para reduzir sobrecargas e proteger dentes e musculatura.',
    cta: 'Conversar sobre esse sintoma',
    href: whatsappHref('flip_cards'),
  },
  {
    icon: frontIcon('<path d="M20 11.5a8 8 0 0 1-8 8H7.2L4 22v-5.1a8 8 0 0 1 8-13.4"/><path d="M14.5 5.2c1.6.5 2.9 1.6 3.8 3"/><path d="M9 11.2c.8-.9 1.8-1.4 3-1.4s2.2.5 3 1.4"/><path d="M9 15c.8.7 1.8 1 3 1s2.2-.3 3-1"/>'),
    backIcon: backIcon('<path d="M4.5 12c2-3.8 4.5-5.7 7.5-5.7s5.5 1.9 7.5 5.7c-2 3.8-4.5 5.7-7.5 5.7S6.5 15.8 4.5 12z"/><path d="M12 9.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6z"/>'),
    front: 'Dor facial ou dor de cabeça',
    back: 'Análise da relação entre tensão muscular, hábitos e função mandibular.',
    cta: 'Conversar sobre esse sintoma',
    href: whatsappHref('flip_cards'),
  },
];

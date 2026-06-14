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
    icon: frontIcon('<path d="M7 7l10 10"/><path d="M17 7L7 17"/>'),
    backIcon: backIcon('<path d="M12 21c4.8-2.1 7.5-5.4 7.5-9.7V5.8L12 3.5 4.5 5.8v5.5C4.5 15.6 7.2 18.9 12 21z"/><path d="M8.7 12.2l2.2 2.2 4.6-5"/>'),
    front: 'Dor ao mastigar',
    back: 'Avaliação da função mandibular, músculos da face e sinais associados.',
    cta: 'Conversar sobre esse sintoma',
    href: whatsappHref('flip_cards'),
  },
  {
    icon: frontIcon('<path d="M7 7l10 10"/><path d="M17 7L7 17"/>'),
    backIcon: backIcon('<path d="M12 21c4.8-2.1 7.5-5.4 7.5-9.7V5.8L12 3.5 4.5 5.8v5.5C4.5 15.6 7.2 18.9 12 21z"/><path d="M8.7 12.2l2.2 2.2 4.6-5"/>'),
    front: 'Estalos na articulação',
    back: 'Investigação dos movimentos mandibulares e possíveis sobrecargas articulares.',
    cta: 'Conversar sobre esse sintoma',
    href: whatsappHref('flip_cards'),
  },
  {
    icon: frontIcon('<path d="M7 7l10 10"/><path d="M17 7L7 17"/>'),
    backIcon: backIcon('<path d="M12 21c4.8-2.1 7.5-5.4 7.5-9.7V5.8L12 3.5 4.5 5.8v5.5C4.5 15.6 7.2 18.9 12 21z"/><path d="M8.7 12.2l2.2 2.2 4.6-5"/>'),
    front: 'Bruxismo ou apertamento',
    back: 'Plano individualizado para reduzir sobrecargas e proteger dentes e musculatura.',
    cta: 'Conversar sobre esse sintoma',
    href: whatsappHref('flip_cards'),
  },
  {
    icon: frontIcon('<path d="M7 7l10 10"/><path d="M17 7L7 17"/>'),
    backIcon: backIcon('<path d="M12 21c4.8-2.1 7.5-5.4 7.5-9.7V5.8L12 3.5 4.5 5.8v5.5C4.5 15.6 7.2 18.9 12 21z"/><path d="M8.7 12.2l2.2 2.2 4.6-5"/>'),
    front: 'Dor facial ou dor de cabeça',
    back: 'Análise da relação entre tensão muscular, hábitos e função mandibular.',
    cta: 'Conversar sobre esse sintoma',
    href: whatsappHref('flip_cards'),
  },
];

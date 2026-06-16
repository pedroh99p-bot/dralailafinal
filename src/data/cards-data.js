const treatmentIcon = `
  <svg class="flip-card-svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3.75c2.2 2.2 4.62 2.45 7 2.45-0.18 5.55-2.12 9.85-7 13.95-4.88-4.1-6.82-8.4-7-13.95 2.38 0 4.8-0.25 7-2.45Z" />
    <path d="M8.8 12.05l2.05 2.05 4.35-4.6" />
  </svg>
`;

const successIcon = `
  <svg class="flip-card-svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5.5 12.5l4.1 4.1L18.5 7.8" />
  </svg>
`;

export const flipCards = [
  {
    icon: treatmentIcon,
    backIcon: successIcon,
    front: 'Resina estética',
    back: 'Correções para melhorar forma, proporção, pequenos desgastes, espaços e harmonia do sorriso.',
  },
  {
    icon: treatmentIcon,
    backIcon: successIcon,
    front: 'Prótese dentária',
    back: 'Soluções para devolver conforto, função e aparência natural em casos de perda dentária ou próteses antigas.',
  },
  {
    icon: treatmentIcon,
    backIcon: successIcon,
    front: 'Lentes e facetas',
    back: 'Planejamento estético para melhorar cor, formato e presença do sorriso com naturalidade.',
  },
  {
    icon: treatmentIcon,
    backIcon: successIcon,
    front: 'Planejamento do sorriso',
    back: 'Avaliação individual para entender expectativas, necessidades e o melhor caminho para cada caso.',
  },
];

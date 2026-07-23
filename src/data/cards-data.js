const frontImageIcon = (src, alt) => `
  <img class="flip-card__icon-media" src="${src}" alt="${alt}" loading="lazy" />
`;

const successIcon = `
  <svg class="flip-card-svg" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5.5 12.5l4.1 4.1L18.5 7.8" />
  </svg>
`;

export const flipCards = [
  {
    icon: frontImageIcon('/assets/cards/dor-ao-mastigar.jpg', 'Ícone de dor ao mastigar'),
    backIcon: successIcon,
    front: 'Dor ao mastigar',
    back: 'Avaliação da função mandibular, músculos da face e sinais associados.',
  },
  {
    icon: frontImageIcon('/assets/cards/estalos-articulacao.jpg', 'Ícone de estalos na articulação'),
    backIcon: successIcon,
    front: 'Estalos na articulação',
    back: 'Investigação dos movimentos mandibulares e possíveis sobrecargas articulares.',
  },
  {
    icon: frontImageIcon('/assets/cards/bruxismo-apertamento.jpg', 'Ícone de bruxismo'),
    backIcon: successIcon,
    front: 'Bruxismo ou apertamento',
    back: 'Plano individualizado para reduzir sobrecargas e proteger dentes e musculatura.',
  },
  {
    icon: frontImageIcon('/assets/cards/dor-facial-cabeca.jpg', 'Ícone de dor facial ou dor de cabeça'),
    backIcon: successIcon,
    front: 'Dor facial ou dor de cabeça',
    back: 'Análise da relação entre tensão muscular, hábitos e função mandibular.',
  },
];

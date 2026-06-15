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
    icon: frontIcon('<path d="M5.5 12.3c0-3.9 2.6-7.3 6.2-8.2a7.8 7.8 0 0 1 6.3 1.1"/><path d="M8.2 13.6c1-1.8 3-3 5.2-3 2.1 0 4 1 5 2.7"/><path d="M12 15.5h.01"/><path d="M14.9 15.3c.5.1 1 .4 1.3.8"/><path d="M9.1 15.3a2 2 0 0 0-1.2.8"/>'),
    backIcon: backIcon('<path d="M4 12c1.7-4.3 6.1-7.3 11-7.3 2.1 0 4 .5 5.8 1.5"/><path d="M4.9 15.2c1.7-1.8 4.1-2.9 6.7-2.9 3 0 5.8 1.4 7.6 3.8"/><path d="M10.8 18.2h2.4"/>'),
    front: 'Dor ao mastigar',
    back: 'Avaliação da função mandibular, músculos da face e sinais associados.',
  },
  {
    icon: frontIcon('<path d="M4.5 11.5c0-3 2.4-5.4 5.4-5.4h3.3c3.4 0 6.2 2.8 6.2 6.2 0 1.6-.6 3.1-1.7 4.2"/><path d="M8.2 9.4c.6-.8 1.5-1.3 2.5-1.3 1.8 0 3.2 1.4 3.2 3.2"/><path d="M16.1 15.2l1.8 1.8"/><path d="M13.5 16.9h2.9"/>'),
    backIcon: backIcon('<path d="M5 12.1h4.3"/><path d="M14.4 9.4h4.6"/><path d="M14.4 14.6h4.6"/><path d="M10.8 8.8a3.8 3.8 0 0 1 3.8 3.8"/><path d="M10.8 16.4a3.8 3.8 0 0 1-3.8-3.8"/>'),
    front: 'Estalos na articulação',
    back: 'Investigação dos movimentos mandibulares e possíveis sobrecargas articulares.',
  },
  {
    icon: frontIcon('<path d="M8.3 4.9c-1.4 1.2-2.3 3-2.3 5 0 1.7.7 3.3 1.9 4.5"/><path d="M15.7 4.9c1.4 1.2 2.3 3 2.3 5 0 1.7-.7 3.3-1.9 4.5"/><path d="M9.1 12.1h5.8"/><path d="M9.6 8.3h4.8"/><path d="M9.6 15.9h4.8"/><path d="M10.8 19.4l1.2-1.2 1.2 1.2"/>'),
    backIcon: backIcon('<path d="M8.7 5.7h6.6"/><path d="M7.6 9.6H16.4"/><path d="M7.6 13.6H16.4"/><path d="M9.1 17.5h5.8"/><path d="M6.2 7.3l-1.2 1.2"/><path d="M17.8 7.3l1.2 1.2"/>'),
    front: 'Bruxismo ou apertamento',
    back: 'Plano individualizado para reduzir sobrecargas e proteger dentes e musculatura.',
  },
  {
    icon: frontIcon('<path d="M12 4.4c3.5 0 6.4 2.8 6.4 6.4 0 1.7-.7 3.2-1.8 4.3"/><path d="M12 4.4c-3.5 0-6.4 2.8-6.4 6.4 0 1.7.7 3.2 1.8 4.3"/><path d="M10.5 16.7c.5-.7 1.3-1.2 2.2-1.2s1.7.4 2.2 1.2"/><path d="M9.4 10.7a1.1 1.1 0 1 0 0 .1"/><path d="M15.9 10.7a1.1 1.1 0 1 0 0 .1"/>'),
    backIcon: backIcon('<path d="M12 5v4.1"/><path d="M12 14v5"/><path d="M5 12h4.2"/><path d="M14.8 12H19"/><path d="M7.2 7.2l3 3"/><path d="M13.8 13.8l3 3"/>'),
    front: 'Dor facial ou dor de cabeça',
    back: 'Análise da relação entre tensão muscular, hábitos e função mandibular.',
  },
];

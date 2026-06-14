export const contact = {
  name: 'Dra. Laila Rettore',
  cro: 'CRO 32142',
  whatsappNumber: '5521975334147',
  whatsappVisible: '(21) 97533-4147',
  whatsappUrl: 'https://wa.me/5521975334147',
  instagramUrl: 'https://www.instagram.com/dralailarettore/',
  instagramHandle: '@dralailarettore',
};

const logoSimple = 'https://res.cloudinary.com/dm9mnc97u/image/upload/v1781405885/Design_sem_nome_7_wdo0cm.png';
const logoFull = 'https://res.cloudinary.com/dm9mnc97u/image/upload/v1781399580/Design_sem_nome_1_btet5v.svg';

export const assets = {
  logos: {
    simple: logoSimple,
    full: logoFull,
  },
  images: {
    hero: 'https://res.cloudinary.com/dm9mnc97u/image/upload/v1781450182/WhatsApp_Image_2026-06-12_at_16.23.57_yjh9w6.webp',
    specialist:
      'https://res.cloudinary.com/dm9mnc97u/image/upload/v1781450183/Design_sem_nome_9_euzmxh.webp',
  },
  videos: {
    hero: 'https://res.cloudinary.com/dm9mnc97u/video/upload/v1781400964/0613_2_1_vtm3rn.webm',
  },
  icons: {
    whatsapp: '/assets/icons/whatsapp.svg',
    instagram: '/assets/icons/instagram.svg',
    google: '/assets/icons/google.svg',
  },
};

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Especialista', href: '#especialista' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'Localização', href: '#localizacao' },
];

export const location = {
  name: 'Quality Cursos De Odontologia',
  address: 'Av. Ayrton Senna, 2500 - Bloco 3 Sala 428, Rio de Janeiro - RJ',
  phone: '(21) 97533-4147',
  rating: 'Atendimento com horário marcado',
  iframeUrl:
    'https://www.google.com/maps?q=Quality%20Cursos%20De%20Odontologia%20Av.%20Ayrton%20Senna%202500%20Bloco%203%20Sala%20428%20Rio%20de%20Janeiro&output=embed',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Quality%20Cursos%20De%20Odontologia%20Av.%20Ayrton%20Senna%202500%20Bloco%203%20Sala%20428%20Rio%20de%20Janeiro',
};

export const whatsappMessages = {
  hero_attendance: 'Olá, vim pelo site e gostaria de agendar uma avaliação com a Dra. Laila',
  quiz_result: 'Olá, fiz o quiz no site e quero agendar minha avaliação',
  flip_cards: 'Olá, quero entender melhor meus sintomas de DTM ou bruxismo',
  specialist: 'Olá, gostaria de falar com a Dra. Laila sobre meus sintomas',
  technology: 'Olá, quero agendar uma avaliação com recursos digitais com a Dra. Laila',
  final_offer: 'Olá, quero dar o primeiro passo para entender a origem da minha dor',
  generic: 'Olá, vim pelo site da Dra. Laila e gostaria de atendimento',
};

export const rollers = [
  {
    direction: 'left',
    items: [
      'DTM',
      'Bruxismo',
      'Dor orofacial',
      'Tensão mandibular',
      'Placas interoclusais',
      'Toxina terapêutica',
      'Avaliação funcional',
      'Cuidado individualizado',
    ],
  },
  {
    direction: 'right',
    items: [
      'Mandíbula travando',
      'Dor ao mastigar',
      'Estalos na articulação',
      'Apertamento dental',
      'Dor facial',
      'Tensão no pescoço',
      'Desgaste dental',
    ],
  },
  {
    direction: 'left',
    items: [
      'Mais clareza',
      'Menos sobrecarga',
      'Cuidado personalizado',
      'Plano seguro',
      'Acompanhamento próximo',
      'Mais conforto',
    ],
  },
  {
    direction: 'right',
    items: [
      'Atendimento com hora marcada',
      'Scanner digital',
      'Alta tecnologia',
      'Planejamento individualizado',
      'Avaliação mais precisa',
      'Visualização digital da mordida',
      'Cuidado clínico moderno',
      'Conforto em cada etapa',
    ],
  },
  {
    direction: 'right',
    items: [
      'Diagnóstico',
      'Precisão',
      'Acolhimento',
      'Cuidado humano',
      'DTM',
      'Bruxismo',
      'Dor orofacial',
      'Tecnologia digital',
    ],
  },
];

export const stats = [
  { prefix: '+', value: 23, suffix: '', label: 'anos de formada' },
  { prefix: '+', value: 1500, suffix: '', label: 'pacientes atendidos' },
  { prefix: '+', value: 4, suffix: '', label: 'áreas de foco clínico' },
  { prefix: '', value: 100, suffix: '%', label: 'planejamento individualizado' },
];

export const careSteps = [
  {
    number: '01',
    title: 'Escuta clínica',
    description: 'Entendimento detalhado dos sintomas, rotina, hábitos e histórico de saúde.',
  },
  {
    number: '02',
    title: 'Avaliação funcional',
    description: 'Análise física da mandíbula, músculos da face, articulação e sinais associados.',
  },
  {
    number: '03',
    title: 'Plano individualizado',
    description: 'Definição dos melhores caminhos de cuidado e intervenções conforme a necessidade.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description: 'Ajustes, orientações contínuas e evolução do tratamento quando indicado.',
  },
];

export function whatsappHref(keyOrText = '') {
  const message = whatsappMessages[keyOrText] || keyOrText || whatsappMessages.generic;
  return `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

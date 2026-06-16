export const contact = {
  name: 'Dra. Liberalina Cavaleiro',
  cro: 'Cirurgiã-dentista',
  specialistSubtitle: 'Odontologia estética e reabilitação do sorriso',
  whatsappNumber: '5585986021507',
  whatsappVisible: '(85) 98602-1507',
  whatsappUrl: 'https://wa.me/5585986021507',
  instagramUrl: 'https://www.instagram.com/liberalinacavaleirom/',
  instagramHandle: '@liberalinacavaleirom',
};

const logoOfficial =
  'https://res.cloudinary.com/dm9mnc97u/image/upload/v1781631675/efc4b6e4-6a5d-4fa8-bda8-bc298cf0ca16_1_oucily.webp';
const heroPhoto =
  'https://res.cloudinary.com/dm9mnc97u/image/upload/v1781632769/4d8958c2-e018-450e-89a2-1b2e23444ccd_1_mubo5m.webp';
const specialistPhoto =
  'https://res.cloudinary.com/dm9mnc97u/image/upload/v1781633147/Dra._Laila_Rettore_CRO_32142_6_p9r8il.webp';

export const assets = {
  logos: {
    simple: logoOfficial,
    full: logoOfficial,
  },
  images: {
    hero: heroPhoto,
    specialist: specialistPhoto,
  },
  icons: {
    whatsapp: '/assets/icons/whatsapp.svg',
    instagram: '/assets/icons/instagram.svg',
    google: '/assets/icons/google.svg',
  },
};

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sorriso', href: '#sorriso' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Especialista', href: '#especialista' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Processo', href: '#atendimento' },
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Localização', href: '#localizacao' },
];

export const location = {
  name: 'Atendimento em Fortaleza - CE',
  address: 'Fortaleza - CE',
  phone: '(85) 98602-1507',
  rating: 'Atendimento com horário marcado',
  iframeUrl: 'https://www.google.com/maps?q=Dra.%20Liberalina%20Cavaleiro%20Fortaleza%20CE&output=embed',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dra.%20Liberalina%20Cavaleiro%20Fortaleza%20CE',
};

export const whatsappMessages = {
  hero_attendance: 'Olá, vim pelo site e gostaria de agendar uma avaliação com a Dra. Liberalina',
  quiz_result: 'Olá, fiz o quiz do sorriso no site e quero agendar minha avaliação',
  flip_cards: 'Olá, quero entender qual tratamento estético ou reabilitador combina com meu caso',
  specialist: 'Olá, gostaria de falar com a Dra. Liberalina sobre meu sorriso',
  technology: 'Olá, quero agendar uma avaliação para planejar a transformação do meu sorriso',
  final_offer: 'Olá, quero descobrir o melhor caminho para transformar meu sorriso',
  generic: 'Olá, vim pelo site da Dra. Liberalina e gostaria de atendimento',
};

export const rollers = [
  {
    direction: 'left',
    items: [
      'Resina estética',
      'Prótese dentária',
      'Lentes em porcelana',
      'Facetas',
      'Planejamento do sorriso',
      'Harmonia facial',
      'Cuidado individualizado',
    ],
  },
  {
    direction: 'right',
    items: [
      'Dentes desgastados',
      'Dentes escurecidos',
      'Falhas no sorriso',
      'Próteses antigas',
      'Restaurações aparentes',
      'Vergonha de sorrir',
      'Resultado natural',
    ],
  },
  {
    direction: 'left',
    items: [
      'Naturalidade',
      'Conforto',
      'Precisão',
      'Confiança',
      'Acolhimento',
      'Detalhes bem planejados',
    ],
  },
  {
    direction: 'right',
    items: [
      'Atendimento com hora marcada',
      'Avaliação individual',
      'Planejamento individualizado',
      'Estética e função',
      'Reabilitação oral',
      'Sorriso com identidade',
      'Conforto em cada etapa',
    ],
  },
  {
    direction: 'right',
    items: [
      'Estética',
      'Função',
      'Precisão',
      'Acolhimento',
      'Cuidado humano',
      'Resina estética',
      'Prótese dentária',
      'Lentes e facetas',
      'Fortaleza - CE',
    ],
  },
];

export const stats = [
  { prefix: '+', value: 4, suffix: '', label: 'frentes de cuidado estético' },
  { prefix: '', value: 1, suffix: ':1', label: 'planejamento para cada sorriso' },
  { prefix: '', value: 100, suffix: '%', label: 'foco em naturalidade' },
  { prefix: '', value: 4, suffix: '', label: 'etapas claras de atendimento' },
];

export const smileProblems = [
  'Dentes desgastados ou escurecidos',
  'Falhas ou ausência de dentes',
  'Próteses antigas ou desconfortáveis',
  'Restaurações aparentes',
  'Vergonha de sorrir em fotos',
  'Receio de um resultado artificial',
];

export const careSteps = [
  {
    number: '01',
    title: 'Avaliação',
    description: 'Entendimento da queixa, da expectativa e das possibilidades clínicas do caso.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Definição do tratamento mais indicado com foco em estética, função e naturalidade.',
  },
  {
    number: '03',
    title: 'Execução',
    description: 'Realização cuidadosa do tratamento com atenção aos detalhes e ao conforto.',
  },
  {
    number: '04',
    title: 'Resultado',
    description: 'Mais confiança para sorrir, se comunicar e se enxergar melhor.',
  },
];

export const faqItems = [
  {
    question: 'Resina estética é indicada para qualquer caso?',
    answer: 'Não. A indicação depende da avaliação de cada sorriso, da estrutura dental e da necessidade do paciente.',
  },
  {
    question: 'Prótese dentária pode ficar natural?',
    answer: 'Sim. Com planejamento adequado, é possível buscar estética, conforto e naturalidade no resultado.',
  },
  {
    question: 'Preciso saber qual tratamento quero antes da consulta?',
    answer: 'Não. A avaliação serve justamente para entender o melhor caminho para o seu caso.',
  },
  {
    question: 'O atendimento é em Fortaleza?',
    answer: 'Sim. A comunicação e o atendimento principal são voltados para Fortaleza/CE.',
  },
];

export function whatsappHref(keyOrText = '') {
  const message = whatsappMessages[keyOrText] || keyOrText || whatsappMessages.generic;
  return `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

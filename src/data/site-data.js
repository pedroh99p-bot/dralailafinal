export const contact = {
  name: 'Dra. Lailla Rettore',
  cro: 'CRO 32142',
  whatsappNumber: '5521990368794',
  whatsappVisible: '(21) 99036-8794',
  whatsappUrl: 'https://wa.me/5521990368794',
  instagramUrl: 'https://www.instagram.com/dralailarettore/',
  instagramHandle: '@dralailarettore',
};

export const assets = {
  logos: {
    simple: '/assets/logos/logo-simple.svg',
    full: '/assets/logos/logo-full.svg',
  },
  images: {
    hero: '/assets/images/hero.png',
    specialist: '/assets/images/dra-lailla.png',
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
  phone: '(21) 99036-8794',
  rating: '4,7 no Google',
  iframeUrl:
    'https://www.google.com/maps?q=Quality%20Cursos%20De%20Odontologia%20Av.%20Ayrton%20Senna%202500%20Bloco%203%20Sala%20428%20Rio%20de%20Janeiro&output=embed',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Quality%20Cursos%20De%20Odontologia%20Av.%20Ayrton%20Senna%202500%20Bloco%203%20Sala%20428%20Rio%20de%20Janeiro',
};

export const whatsappMessages = {
  default: '',
  symptoms: 'Olá, quero entender melhor meus sintomas',
  quiz: 'Olá, fiz o quiz e quero entender meu resultado',
};

export const rollers = [
  {
    direction: 'left',
    items: [
      'DTM',
      'Bruxismo',
      'Dor orofacial',
      'ATM',
      'Tensão mandibular',
      'Placas interoclusais',
      'Toxina terapêutica',
      'Avaliação funcional',
    ],
  },
  {
    direction: 'right',
    items: [
      'Mandíbula travando',
      'Dor ao mastigar',
      'Estalos na ATM',
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
      'Diagnóstico',
      'Precisão',
      'Acolhimento',
      'Cuidado humano',
      'DTM',
      'Bruxismo',
      'Dor orofacial',
      'ATM',
    ],
  },
];

export const stats = [
  { prefix: '+', value: 10, suffix: '', label: 'anos de experiência' },
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
    description: 'Análise física da mandíbula, músculos da face, ATM e sinais associados.',
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

export function whatsappHref(message = '') {
  if (!message) return contact.whatsappUrl;
  return `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

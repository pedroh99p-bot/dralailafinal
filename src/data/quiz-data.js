import { whatsappHref } from './site-data.js';

export const quizQuestions = [
  'Sente dor de cabeça?',
  'Sente cansaço no rosto ao mastigar?',
  'Sente dores ao abrir e fechar a boca?',
  'Tem o hábito de apertar ou ranger os dentes?',
  'Tem dentes quebrando ou se desgastando?',
  'Tem algum sintoma dentro do ouvido, como sensação de ouvido tapado?',
  'Sente dificuldade para abrir a boca?',
  'Tem algum estalo na articulação quando abre e fecha a boca? Ele vem acompanhado de dor?',
];

export const quizOptions = [
  { label: 'Não sinto', score: 0 },
  { label: 'Leve', score: 1 },
  { label: 'Moderado', score: 2 },
  { label: 'Intenso', score: 3 },
  { label: 'Muito intenso ou frequente', score: 4 },
];

export const painSensitiveQuestionIndexes = [0, 1, 2, 4, 5, 6, 7];

export const painAlertResult = {
  title: 'Sinais que merecem atenção',
  tone: 'high',
  description:
    'Você relatou sinais que não deveriam ser ignorados, principalmente quando envolvem dor, tensão, estalos, desgaste ou dificuldade para mastigar e abrir a boca. Isso não é um diagnóstico, mas pode indicar que seu corpo está tentando avisar que algo precisa ser investigado com atenção. Quanto antes você entende a causa, maiores são as chances de iniciar um cuidado mais preciso e recuperar qualidade de vida. Agende uma avaliação especializada e dê o primeiro passo para parar de conviver com esse incômodo.',
};

export const quizResults = [
  {
    min: 0,
    max: 8,
    title: 'Sinais leves neste momento',
    tone: 'low',
    description:
      'Pelas suas respostas, seus sinais parecem leves neste momento, mas sintomas como dor, estalos, desgaste dental ou tensão facial não devem ser ignorados quando aparecem com frequência. Uma avaliação pode ajudar a entender a origem do desconforto e prevenir a evolução do quadro.',
  },
  {
    min: 9,
    max: 20,
    title: 'Sinais que valem investigação',
    tone: 'medium',
    description:
      'Suas respostas indicam sinais que podem estar relacionados à sobrecarga muscular, bruxismo ou alterações funcionais da região da mandíbula. Isso não substitui uma avaliação, mas mostra que vale investigar com atenção. O primeiro passo pode ser entender a causa e buscar um plano de cuidado mais preciso.',
  },
  {
    min: 21,
    max: 32,
    title: 'Sinais importantes para avaliar',
    tone: 'high',
    description:
      'Pelas suas respostas, existe um conjunto importante de sintomas que pode estar impactando sua qualidade de vida, como dor, tensão, limitação, desgaste ou desconforto ao mastigar. Isso não é um diagnóstico, mas é um alerta para procurar uma avaliação especializada. Com o acompanhamento correto, é possível entender a causa e iniciar um caminho para viver com mais conforto.',
  },
];

export const quizToneLabels = {
  low: 'Avaliação preventiva',
  medium: 'Vale investigar',
  high: 'Atenção aos sinais',
};

export const quizCtaHref = whatsappHref('quiz_result');

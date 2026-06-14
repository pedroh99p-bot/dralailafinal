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
  title: 'Seus sintomas merecem avaliação',
  tone: 'high',
  description:
    'Dor, tensão, estalos ou dificuldade para mastigar indicam que vale investigar a causa. Uma avaliação especializada pode orientar o cuidado mais adequado para o seu caso.',
};

export const quizResults = [
  {
    min: 0,
    max: 8,
    title: 'Sinais leves neste momento',
    tone: 'low',
    description:
      'Seus sinais parecem leves neste momento. Caso se tornem frequentes ou causem desconforto, uma avaliação pode ajudar a entender a origem.',
  },
  {
    min: 9,
    max: 20,
    title: 'Sinais que valem investigação',
    tone: 'medium',
    description:
      'As respostas sugerem possível sobrecarga muscular, bruxismo ou alteração funcional da mandíbula. Vale investigar para definir um cuidado mais preciso.',
  },
  {
    min: 21,
    max: 32,
    title: 'Sinais importantes para avaliar',
    tone: 'high',
    description:
      'O conjunto de sintomas pode estar afetando sua qualidade de vida. Uma avaliação especializada ajuda a identificar a causa e orientar os próximos passos.',
  },
];

export const quizToneLabels = {
  low: 'Avaliação preventiva',
  medium: 'Vale investigar',
  high: 'Sinais importantes',
};

export const quizCtaHref = whatsappHref('quiz_result');

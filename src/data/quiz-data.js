import { whatsappHref, whatsappMessages } from './site-data.js';

export const quizQuestions = [
  'Você sente dor ou cansaço na mandíbula ao longo do dia?',
  'Sua mandíbula estala, trava ou desvia ao abrir a boca?',
  'Você acorda com dentes doloridos, rosto tenso ou sensação de apertamento?',
  'Você sente dor de cabeça, dor facial ou tensão no pescoço com frequência?',
  'Já percebeu desgaste nos dentes, sensibilidade ou dificuldade para mastigar?',
];

export const quizOptions = [
  { label: '🙂 Nunca', score: 0 },
  { label: '🤔 Às vezes', score: 1 },
  { label: '⚠️ Frequentemente', score: 2 },
];

export const quizResults = [
  {
    min: 0,
    max: 3,
    title: 'Sinais de baixa frequência',
    tone: 'low',
    description:
      'Seus sinais aparecem com baixa frequência. Observe a evolução e procure avaliação se houver piora.',
  },
  {
    min: 4,
    max: 7,
    title: 'Sinais que merecem atenção',
    tone: 'medium',
    description:
      'Seus sinais merecem atenção. Uma avaliação pode ajudar a entender a origem dos sintomas.',
  },
  {
    min: 8,
    max: 10,
    title: 'Sinais frequentes',
    tone: 'high',
    description:
      'Seus sinais aparecem com frequência. Vale conversar com uma especialista para avaliar seu caso.',
  },
];

export const quizCtaHref = whatsappHref('quiz_result');

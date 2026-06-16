export const quizQuestions = [
  'Você evita sorrir em fotos ou vídeos por causa dos dentes?',
  'Percebe dentes desgastados, escurecidos ou com formato que incomoda?',
  'Tem falhas, ausência de dentes ou espaços que afetam sua confiança?',
  'Usa prótese antiga, desconfortável ou com aparência pouco natural?',
  'Suas restaurações aparecem quando você sorri?',
  'Sente dificuldade para mastigar ou falar com segurança?',
  'Tem vontade de melhorar o sorriso, mas medo de um resultado artificial?',
  'Ainda não sabe se resina, prótese, lentes ou facetas seriam indicadas para você?',
];

export const quizOptions = [
  { label: 'Não acontece', score: 0 },
  { label: 'Incomoda um pouco', score: 1 },
  { label: 'Incomoda com frequência', score: 2 },
  { label: 'Afeta minha autoestima', score: 3 },
  { label: 'Quero avaliar com prioridade', score: 4 },
];

export const concernSensitiveQuestionIndexes = [2, 3, 5, 6, 7];

export const concernAlertResult = {
  title: 'Seu sorriso merece um planejamento individual',
  tone: 'high',
  description:
    'As respostas indicam pontos que podem envolver estética, função, conforto ou escolha do tratamento. Uma avaliação ajuda a entender o caminho mais seguro e natural para o seu caso.',
};

export const quizResults = [
  {
    min: 0,
    max: 8,
    title: 'Poucos incômodos neste momento',
    tone: 'low',
    description:
      'Seu sorriso parece gerar poucos incômodos agora. Ainda assim, uma avaliação preventiva pode ajudar a preservar estética, função e naturalidade.',
  },
  {
    min: 9,
    max: 20,
    title: 'Há pontos que valem avaliação',
    tone: 'medium',
    description:
      'As respostas sugerem que alguns detalhes do sorriso podem estar afetando conforto, aparência ou confiança. Um planejamento individual pode esclarecer as possibilidades.',
  },
  {
    min: 21,
    max: 32,
    title: 'Transformar o sorriso pode ser uma prioridade',
    tone: 'high',
    description:
      'O conjunto de respostas mostra que estética, função ou segurança ao sorrir podem estar impactando sua rotina. A avaliação é o primeiro passo para definir um plano realista.',
  },
];

export const quizToneLabels = {
  low: 'Avaliação preventiva',
  medium: 'Vale planejar',
  high: 'Prioridade de cuidado',
};

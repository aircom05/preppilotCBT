import { FaBook, FaBalanceScale } from 'react-icons/fa';
const exams = [
  {
    id: 'psr',
    title: '2022 Akwa Ibom Public Service Rules',
    icon: FaBook,
    bank: './public-service-rules.json',
    totalQuestions: 975,
    chapters: 20,
  },
  {
    id: 'common-law',
    title: 'LAW PAPER I (General Principles of Common Law)',
    icon: FaBalanceScale,
    bank: './common-law.json',
    totalQuestions: 335,
  },
];

export default exams;

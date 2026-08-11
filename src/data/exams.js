import { FaBook, FaBalanceScale, FaCoins } from 'react-icons/fa';
// import { FaShieldHalved } from 'react-icons/fa6';
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
  {
    id: 'statute-law',
    title: 'LAW PAPER II (Statute Law)',
    icon: FaBalanceScale,
    bank: './statute-law.json',
    totalQuestions: 399,
  },
  {
    id: 'fin-mgt-in-govt',
    title: 'FINANCIAL MANAGEMENT IN GOVERNMENT',
    icon: FaCoins,
    bank: './financial-management-in-government-500.json',
    totalQuestions: 500,
  },
  // {
  //   id: 'sec-in-govt',
  //   title: 'SECURITY IN GOVERNMENT',
  //   icon: FaShieldHalved,
  //   bank: './security-in-government.json',
  //   totalQuestions: 300,
  // },
];

export default exams;

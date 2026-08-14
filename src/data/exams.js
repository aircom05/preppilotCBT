import {
  FaBalanceScale,
  FaUsers,
  FaBook,
  FaCoins,
  FaGavel,
  FaShieldAlt,
  FaTasks,
} from 'react-icons/fa';

const exams = [
  {
    id: 'psr',
    title: '2022 Akwa Ibom Public Service Rules',
    icon: FaBook,
    tabIcon: '📘',
    bank: './public-service-rules.json',
    totalQuestions: 975,
    chapters: 20,
  },
  {
    id: 'common-law',
    title: 'LAW PAPER I (General Principles of Common Law)',
    icon: FaBalanceScale,
    tabIcon: '⚖️',
    bank: './common-law.json',
    totalQuestions: 335,
  },
  {
    id: 'statute-law',
    title: 'LAW PAPER II (Statute Law)',
    icon: FaGavel,
    tabIcon: '⚖️',
    bank: './statute-law.json',
    totalQuestions: 399,
  },
  {
    id: 'fin-mgt-in-govt',
    title: 'FINANCIAL MANAGEMENT IN GOVERNMENT',
    icon: FaCoins,
    tabIcon: '📊',
    bank: './financial-management-in-government-500.json',
    totalQuestions: 500,
  },
  {
    id: 'sec-in-govt',
    title: 'SECURITY IN GOVERNMENT',
    icon: FaShieldAlt,
    tabIcon: '🛡️',
    bank: './security-in-government.json',
    totalQuestions: 300,
  },
  {
    id: 'psnl-mgt-in-govt',
    title: 'PERSONNEL MANAGEMENT IN GOVERNMENT',
    icon: FaUsers,
    tabIcon: '👥',
    bank: './personnel_management_in_govt.json',
    totalQuestions: 400,
  },
  {
    id: 'gen-p-and-tec-in-mgt',
    title: 'GENERAL PRINCIPLES AND TECHNIQUES IN MANAGEMENT',
    icon: FaTasks,
    tabIcon: '📋',
    bank: './general-principles-and-techniques-in-mgt.json',
    totalQuestions: 200,
  },
];

export default exams;

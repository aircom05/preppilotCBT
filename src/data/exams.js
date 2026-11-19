import {
  FaBalanceScale,
  FaUsers,
  FaBook,
  FaCoins,
  FaGavel,
  FaShieldAlt,
  FaTasks,
  FaBriefcase,
  FaFileAlt,
} from 'react-icons/fa';

const exams = [
  // ==========================================
  // 2027 PROMOTION PREPARATION
  // ==========================================

  {
    id: 'office-routine-practice-2027',
    title: 'OFFICE ROUTINE / PRACTICE',
    icon: FaBriefcase,
    tabIcon: '📋',
    bank: './office-routine-and-practice-2027.json',
    totalQuestions: 100,
    category: 'promotion-2027',
  },
  {
    id: 'personnel-management-2027',
    title: 'PERSONNEL MANAGEMENT',
    icon: FaUsers,
    tabIcon: '👥',
    bank: './personnel-management-in-government-2027.json',
    totalQuestions: 100,
    category: 'promotion-2027',
  },
  {
    id: 'public-service-circulars-2027',
    title: 'PUBLIC SERVICE / GOVERNMENT CIRCULARS',
    icon: FaFileAlt,
    tabIcon: '📚',
    bank: './public-service-rules-government-circulars_2027.json',
    totalQuestions: 100,
    category: 'promotion-2027',
  },
  {
    id: 'security-government-2027',
    title: 'SECURITY IN GOVERNMENT',
    icon: FaShieldAlt,
    tabIcon: '🛡️',
    bank: './security-in-government-2027.json',
    totalQuestions: 80,
    category: 'promotion-2027',
  },
  {
    id: 'financial-management-2027',
    title: 'FINANCIAL MANAGEMENT',
    icon: FaCoins,
    tabIcon: '💰',
    bank: './financial-management-in-government-2027.json',
    totalQuestions: 120,
    category: 'promotion-2027',
  },

  // ==========================================
  // OTHER PRACTICE COURSES
  // ==========================================

  {
    id: 'psr',
    title: '2022 Akwa Ibom Public Service Rules',
    icon: FaBook,
    tabIcon: '📘',
    bank: './public-service-rules.json',
    totalQuestions: 975,
    chapters: 20,
    category: 'general',
  },
  {
    id: 'common-law',
    title: 'LAW PAPER I (General Principles of Common Law)',
    icon: FaBalanceScale,
    tabIcon: '⚖️',
    bank: './common-law.json',
    totalQuestions: 335,
    category: 'general',
  },
  {
    id: 'statute-law',
    title: 'LAW PAPER II (Statute Law)',
    icon: FaGavel,
    tabIcon: '⚖️',
    bank: './statute-law.json',
    totalQuestions: 399,
    category: 'general',
  },
  {
    id: 'fin-mgt-in-govt',
    title: 'FINANCIAL MANAGEMENT IN GOVERNMENT',
    icon: FaCoins,
    tabIcon: '📊',
    bank: './financial-management-in-government-500.json',
    totalQuestions: 500,
    category: 'general',
  },
  {
    id: 'sec-in-govt',
    title: 'SECURITY IN GOVERNMENT',
    icon: FaShieldAlt,
    tabIcon: '🛡️',
    bank: './security-in-government.json',
    totalQuestions: 300,
    category: 'general',
  },
  {
    id: 'psnl-mgt-in-govt',
    title: 'PERSONNEL MANAGEMENT IN GOVERNMENT',
    icon: FaUsers,
    tabIcon: '👥',
    bank: './personnel_management_in_govt.json',
    totalQuestions: 400,
    category: 'general',
  },
  {
    id: 'gen-p-and-tec-in-mgt',
    title: 'GENERAL PRINCIPLES AND TECHNIQUES IN MANAGEMENT',
    icon: FaTasks,
    tabIcon: '📋',
    bank: './general-principles-and-techniques-in-mgt.json',
    totalQuestions: 200,
    category: 'general',
  },
];

export default exams;

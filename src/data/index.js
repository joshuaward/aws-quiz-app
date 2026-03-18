import test01 from './test01';
import test02 from './test02';
import test03 from './test03';
import test04 from './test04';
import test05 from './test05';
import test06 from './test06';
import test07 from './test07';
import test08 from './test08';
import test09 from './test09';
import test10 from './test10';
import test11 from './test11';
import test12 from './test12';
import test13 from './test13';
import test14 from './test14';
import test15 from './test15';

export const TESTS = [
  { id: 1,  label: 'Practice Test 1',  subtitle: 'Mixed / Baseline',          difficulty: 'Foundational',       questions: test01 },
  { id: 2,  label: 'Practice Test 2',  subtitle: 'Core Concepts',             difficulty: 'Foundational',       questions: test02 },
  { id: 3,  label: 'Practice Test 3',  subtitle: 'Intermediate',              difficulty: 'Intermediate',       questions: test03 },
  { id: 4,  label: 'Practice Test 4',  subtitle: 'Advanced / Scenario-Heavy', difficulty: 'Advanced',           questions: test04 },
  { id: 5,  label: 'Practice Test 5',  subtitle: 'AWS Services Focus',        difficulty: 'Intermediate',       questions: test05 },
  { id: 6,  label: 'Practice Test 6',  subtitle: 'Exam Simulation',           difficulty: 'Advanced',           questions: test06 },
  { id: 7,  label: 'Practice Test 7',  subtitle: 'Mixed Domains',             difficulty: 'Intermediate',       questions: test07 },
  { id: 8,  label: 'Practice Test 8',  subtitle: 'Applied Scenarios',         difficulty: 'Advanced',           questions: test08 },
  { id: 9,  label: 'Practice Test 9',  subtitle: 'Deep Dive',                 difficulty: 'Advanced',           questions: test09 },
  { id: 10, label: 'Practice Test 10', subtitle: 'Exam Format',               difficulty: 'Moderate–Difficult', questions: test10 },
  { id: 11, label: 'Practice Test 11', subtitle: 'Exam Format',               difficulty: 'Moderate–Difficult', questions: test11 },
  { id: 12, label: 'Practice Test 12', subtitle: 'Exam Format',               difficulty: 'Moderate–Difficult', questions: test12 },
  { id: 13, label: 'Practice Test 13', subtitle: 'Exam Format',               difficulty: 'Moderate–Difficult', questions: test13 },
  { id: 14, label: 'Practice Test 14', subtitle: 'Exam Format',               difficulty: 'Moderate–Difficult', questions: test14 },
  { id: 15, label: 'Practice Test 15', subtitle: 'Exam Format',               difficulty: 'Moderate–Difficult', questions: test15 },
];

export const DOMAIN_LABELS = {
  1: 'Domain 1: Fundamentals of AI & ML',
  2: 'Domain 2: Fundamentals of GenAI',
  3: 'Domain 3: Applications of Foundation Models',
  4: 'Domain 4: Responsible AI',
  5: 'Domain 5: Security & Governance',
};

export const DOMAIN_SHORT = {
  1: 'AI & ML Fundamentals',
  2: 'GenAI Fundamentals',
  3: 'Foundation Models',
  4: 'Responsible AI',
  5: 'Security & Governance',
};

export const DOMAIN_COLORS = {
  1: '#4F8CFF',
  2: '#A371F7',
  3: '#FF9900',
  4: '#3FB950',
  5: '#F85149',
};

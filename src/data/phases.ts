import { Phase } from '../types'

export const phases: Phase[] = [
  {
    id: 1,
    name: 'Foundation - Python & Data Killer Base',
    dayRange: [1, 30],
    description: 'Python + Pandas itna strong ki aage ML smooth ho. Master Python fundamentals, NumPy, Pandas, data visualization, and statistics.',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'ML Engineer Mode',
    dayRange: [31, 60],
    description: 'Core ML Algorithms itne strong ki interview me fluently explain kar sake. Linear/Logistic Regression, Trees, SVM, and more.',
    color: 'bg-green-500'
  },
  {
    id: 3,
    name: 'Industry ML Engineer Level',
    dayRange: [61, 120],
    description: 'Tree models + Unsupervised + NLP intro + STRONG projects. XGBoost, K-Means, PCA, Text Processing.',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    name: 'Deployment & MLOps',
    dayRange: [121, 180],
    description: 'ML Engineer ban raha hai. FastAPI, Docker, Cloud deployment, and production ML systems.',
    color: 'bg-orange-500'
  },
  {
    id: 5,
    name: 'FAANG-Ready ML Engineer',
    dayRange: [181, 270],
    description: 'Advanced NLP + Transformers + LLMs + ML System Design + DSA for ML roles.',
    color: 'bg-red-500'
  },
  {
    id: 6,
    name: 'Interview Mastery',
    dayRange: [271, 365],
    description: 'Resume finalization, referrals, mock interviews, FAANG-style ML questions, offer strategy.',
    color: 'bg-indigo-500'
  }
]

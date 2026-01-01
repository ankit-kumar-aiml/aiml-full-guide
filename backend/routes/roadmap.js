import express from 'express';
import { auth } from '../middleware/auth.js';
import { roadmapData } from '../data/roadmap-complete.js';
import { phase2Data } from '../data/roadmap-phase2.js';
import { interviewQuestions, getQuestionsByCategory, getHighFrequencyQuestions } from '../data/interview-questions.js';

const router = express.Router();

// Merge all phase data
const allDaysData = { ...roadmapData, ...phase2Data };

// Get all phases
router.get('/phases', (req, res) => {
  const phases = [
    { id: 1, name: 'Foundation', days: '1-30', description: 'Python + Data Killer Base', color: '#3B82F6' },
    { id: 2, name: 'ML Algorithms', days: '31-60', description: 'Core ML - Interview Ready', color: '#10B981' },
    { id: 3, name: 'Advanced ML', days: '61-120', description: 'Trees, Unsupervised, NLP', color: '#8B5CF6' },
    { id: 4, name: 'Deployment', days: '121-180', description: 'FastAPI, Docker, Cloud', color: '#F59E0B' },
    { id: 5, name: 'FAANG Prep', days: '181-270', description: 'Transformers, LLMs, System Design', color: '#EF4444' },
    { id: 6, name: 'Interview Mastery', days: '271-365', description: 'Resume, Mock Interviews, Offers', color: '#EC4899' }
  ];
  res.json({ phases });
});

// Get day content
router.get('/day/:dayNumber', (req, res) => {
  const dayNumber = parseInt(req.params.dayNumber);
  
  if (dayNumber < 1 || dayNumber > 365) {
    return res.status(400).json({ error: 'Invalid day number (1-365)' });
  }
  
  const dayData = allDaysData[dayNumber];
  
  if (!dayData) {
    // Generate placeholder for days not yet defined
    return res.json({
      day: dayNumber,
      phase: getPhaseForDay(dayNumber),
      goal: `Day ${dayNumber} - ${getPhaseName(getPhaseForDay(dayNumber))}`,
      tasks: [
        { id: 't1', title: 'Core learning (1.5 hrs)', time: '1.5hr' },
        { id: 't2', title: 'Hands-on practice (1.5 hrs)', time: '1.5hr' },
        { id: 't3', title: 'Notes & revision (30 min)', time: '30min' },
        { id: 't4', title: 'GitHub commit', time: '15min' }
      ],
      resources: [],
      practice: ['Complete daily tasks', 'Push to GitHub'],
      commit: `day${dayNumber}_code`
    });
  }
  
  res.json({ day: dayData });
});

// Get all interview questions
router.get('/interview', (req, res) => {
  res.json({ 
    questions: Object.values(interviewQuestions),
    categories: ['Core ML', 'Metrics', 'Algorithms', 'Feature Engineering', 'Validation', 'Best Practices', 'NLP', 'Deep Learning', 'System Design']
  });
});

// Get high frequency interview questions
router.get('/interview/top', (req, res) => {
  res.json({ questions: getHighFrequencyQuestions() });
});

// Get interview questions by category
router.get('/interview/category/:category', (req, res) => {
  const category = req.params.category;
  const questions = getQuestionsByCategory(category);
  res.json({ category, questions });
});

// Get days for a phase
router.get('/phase/:phaseId', (req, res) => {
  const phaseId = parseInt(req.params.phaseId);
  const phaseRanges = {
    1: { start: 1, end: 30 },
    2: { start: 31, end: 60 },
    3: { start: 61, end: 120 },
    4: { start: 121, end: 180 },
    5: { start: 181, end: 270 },
    6: { start: 271, end: 365 }
  };
  
  const range = phaseRanges[phaseId];
  if (!range) {
    return res.status(400).json({ error: 'Invalid phase (1-6)' });
  }
  
  const days = [];
  for (let i = range.start; i <= range.end; i++) {
    days.push(roadmapData[i] || {
      day: i,
      phase: phaseId,
      goal: `Day ${i}`,
      tasks: []
    });
  }
  
  res.json({ phase: phaseId, days });
});

// Get interview questions for a topic
router.get('/interview/:topic', (req, res) => {
  const topic = req.params.topic.toLowerCase();
  
  const interviewQuestions = {
    'bias-variance': {
      question: 'Explain Bias vs Variance tradeoff',
      answer: 'Bias is error from wrong assumptions. Variance is error from sensitivity to training data. High bias = underfitting. High variance = overfitting. Goal: balance both.',
      example: 'Linear regression on complex data = high bias. Deep neural net on small data = high variance.'
    },
    'precision-recall': {
      question: 'When to use Precision vs Recall?',
      answer: 'Precision: When false positives are costly (spam detection). Recall: When false negatives are costly (cancer detection, fraud).',
      example: 'Fraud detection: High recall important - better to flag legitimate transactions than miss fraud.'
    },
    'overfitting': {
      question: 'How do you handle overfitting?',
      answer: '1. More data, 2. Regularization (L1/L2), 3. Cross-validation, 4. Reduce model complexity, 5. Dropout (neural nets), 6. Early stopping',
      example: 'Used L2 regularization + 5-fold CV to reduce overfitting in XGBoost model.'
    },
    'cross-validation': {
      question: 'Why use cross-validation?',
      answer: 'To get reliable estimate of model performance. Prevents overfitting to single train/test split. K-fold: train on k-1 folds, test on 1, repeat k times.',
      example: 'Used 5-fold CV to ensure model generalizes well, not just memorizing training data.'
    },
    'data-leakage': {
      question: 'What is data leakage?',
      answer: 'When information from test set leaks into training. Causes overly optimistic results. Examples: scaling before split, using future data.',
      example: 'Fixed leakage by fitting scaler only on training data, then transforming test data.'
    }
  };
  
  const question = interviewQuestions[topic];
  if (!question) {
    return res.json({ 
      topics: Object.keys(interviewQuestions),
      message: 'Topic not found. Available topics listed.'
    });
  }
  
  res.json({ question });
});

function getPhaseForDay(day) {
  if (day <= 30) return 1;
  if (day <= 60) return 2;
  if (day <= 120) return 3;
  if (day <= 180) return 4;
  if (day <= 270) return 5;
  return 6;
}

function getPhaseName(phase) {
  const names = {
    1: 'Foundation (Python + Data)',
    2: 'ML Algorithms',
    3: 'Advanced ML (Trees, NLP)',
    4: 'Deployment & MLOps',
    5: 'FAANG Prep (Transformers, LLMs)',
    6: 'Interview Mastery'
  };
  return names[phase] || 'Learning';
}

export default router;

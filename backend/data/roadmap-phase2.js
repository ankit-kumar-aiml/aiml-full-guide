// PHASE 2: DAYS 31-60 (ML ALGORITHMS)
export const phase2Data = {
  31: {
    day: 31, phase: 2, goal: 'ML INTRO + WORKFLOW',
    tasks: [
      { id: 't1', title: 'Learn What is ML?', time: '30min' },
      { id: 't2', title: 'Learn Supervised vs Unsupervised', time: '30min' },
      { id: 't3', title: 'Learn ML workflow (Data → Model → Eval)', time: '30min' },
      { id: 't4', title: 'Write ML workflow in markdown', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'StatQuest ML Intro', url: 'https://www.youtube.com/watch?v=ukzFI9rgwfU' }
    ],
    practice: ['Load dataset, split features/target'],
    commit: 'day31_ml_intro.md'
  },
  32: {
    day: 32, phase: 2, goal: 'Train/Test Split',
    tasks: [
      { id: 't1', title: 'Learn why we split data', time: '30min' },
      { id: 't2', title: 'Learn about data leakage', time: '30min' },
      { id: 't3', title: 'Practice train_test_split', time: '30min' },
      { id: 't4', title: 'Check shapes after split', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Train Test Split', url: 'https://www.youtube.com/watch?v=fwY9Qv96DJY' }
    ],
    practice: ['Split dataset correctly'],
    commit: 'day32_train_test.py',
    interviewTip: 'Data leakage = #1 mistake in ML. ALWAYS split BEFORE any preprocessing!'
  },
  33: {
    day: 33, phase: 2, goal: 'Linear Regression (THEORY)',
    tasks: [
      { id: 't1', title: 'Learn the equation y = mx + b', time: '30min' },
      { id: 't2', title: 'Learn cost function (MSE)', time: '30min' },
      { id: 't3', title: 'Learn Gradient Descent intuition', time: '40min' },
      { id: 't4', title: 'Draw cost curve with matplotlib', time: '20min' }
    ],
    resources: [
      { type: 'video', title: 'StatQuest Linear Regression', url: 'https://www.youtube.com/watch?v=nk2CQITm_eo' }
    ],
    practice: ['Visualize cost function'],
    commit: 'day33_linear_theory.ipynb',
    interviewTip: 'Be able to DRAW and EXPLAIN gradient descent!'
  },
  34: {
    day: 34, phase: 2, goal: 'Linear Regression (CODE)',
    tasks: [
      { id: 't1', title: 'Learn sklearn LinearRegression', time: '30min' },
      { id: 't2', title: 'Load house price dataset', time: '20min' },
      { id: 't3', title: 'Train model', time: '30min' },
      { id: 't4', title: 'Make predictions', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'Linear Regression Code', url: 'https://www.youtube.com/watch?v=1BYu65vLKdA' }
    ],
    practice: ['Train and predict with Linear Regression'],
    commit: 'day34_linear_code.ipynb'
  },
  35: {
    day: 35, phase: 2, goal: 'Evaluation Metrics (Regression)',
    tasks: [
      { id: 't1', title: 'Learn MAE', time: '25min' },
      { id: 't2', title: 'Learn MSE and RMSE', time: '25min' },
      { id: 't3', title: 'Learn R² score', time: '30min' },
      { id: 't4', title: 'Compare metrics on your model', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'Regression Metrics', url: 'https://www.youtube.com/watch?v=85dtiMz9tSo' }
    ],
    practice: ['Calculate all metrics'],
    commit: 'day35_regression_metrics.ipynb',
    interviewTip: 'R² is interview favorite - know what 0.8 vs 0.95 means!'
  },
  36: {
    day: 36, phase: 2, goal: 'Feature Engineering',
    tasks: [
      { id: 't1', title: 'Learn feature scaling (StandardScaler)', time: '30min' },
      { id: 't2', title: 'Learn one-hot encoding', time: '30min' },
      { id: 't3', title: 'Learn label encoding', time: '20min' },
      { id: 't4', title: 'Practice on dataset', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'Feature Engineering', url: 'https://www.youtube.com/watch?v=mnKm3YP56PY' }
    ],
    practice: ['Scale features', 'Encode categorical variables'],
    commit: 'day36_feature_eng.ipynb'
  },
  37: {
    day: 37, phase: 2, goal: 'MINI PROJECT: House Price Prediction',
    isProject: true,
    tasks: [
      { id: 't1', title: 'EDA on house price data', time: '45min' },
      { id: 't2', title: 'Feature engineering', time: '45min' },
      { id: 't3', title: 'Train Linear Regression', time: '30min' },
      { id: 't4', title: 'Evaluate and explain metrics', time: '30min' }
    ],
    resources: [],
    practice: ['Complete house price project'],
    commit: 'project_house_price_ml/',
    projectRequirements: ['EDA', 'Feature engineering', 'Linear Regression', 'Metrics explanation']
  },
  38: {
    day: 38, phase: 2, goal: 'Logistic Regression (THEORY)',
    tasks: [
      { id: 't1', title: 'Learn sigmoid function', time: '30min' },
      { id: 't2', title: 'Learn decision boundary', time: '30min' },
      { id: 't3', title: 'Learn log loss', time: '30min' },
      { id: 't4', title: 'Write theory notes', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'StatQuest Logistic Regression', url: 'https://www.youtube.com/watch?v=yIYKR4sgzI8' }
    ],
    practice: ['Understand classification vs regression'],
    commit: 'day38_logistic_theory.md'
  },
  39: {
    day: 39, phase: 2, goal: 'Logistic Regression (CODE)',
    tasks: [
      { id: 't1', title: 'Load binary classification dataset', time: '20min' },
      { id: 't2', title: 'Train LogisticRegression', time: '30min' },
      { id: 't3', title: 'Make predictions', time: '30min' },
      { id: 't4', title: 'Analyze results', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'Logistic Regression Code', url: 'https://www.youtube.com/watch?v=Aw77aMLjA1c' }
    ],
    practice: ['Train logistic regression classifier'],
    commit: 'day39_logistic_code.ipynb'
  },
  40: {
    day: 40, phase: 2, goal: 'Classification Metrics',
    tasks: [
      { id: 't1', title: 'Learn Accuracy', time: '20min' },
      { id: 't2', title: 'Learn Precision and Recall', time: '40min' },
      { id: 't3', title: 'Learn F1 Score', time: '20min' },
      { id: 't4', title: 'Learn Confusion Matrix', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'Classification Metrics', url: 'https://www.youtube.com/watch?v=Kdsp6soqA7o' }
    ],
    practice: ['Calculate all classification metrics'],
    commit: 'day40_classification_metrics.ipynb',
    interviewTip: 'Precision vs Recall is MOST ASKED. Know when to prioritize each!'
  },
  41: {
    day: 41, phase: 2, goal: 'Imbalanced Data',
    tasks: [
      { id: 't1', title: 'Learn why accuracy fails', time: '30min' },
      { id: 't2', title: 'Learn class imbalance problem', time: '30min' },
      { id: 't3', title: 'Learn SMOTE and undersampling', time: '30min' },
      { id: 't4', title: 'Compare Precision vs Recall', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Imbalanced Data', url: 'https://www.youtube.com/watch?v=Kz5zQJYQ0xE' }
    ],
    practice: ['Handle imbalanced dataset'],
    commit: 'day41_imbalance.ipynb',
    interviewTip: 'Fraud detection = imbalanced. Always mention this in interviews!'
  },
  42: {
    day: 42, phase: 2, goal: 'KNN (Theory + Code)',
    tasks: [
      { id: 't1', title: 'Learn KNN algorithm', time: '40min' },
      { id: 't2', title: 'Learn distance metrics', time: '30min' },
      { id: 't3', title: 'Try different K values', time: '30min' },
      { id: 't4', title: 'Analyze effect of K', time: '20min' }
    ],
    resources: [
      { type: 'video', title: 'KNN Explained', url: 'https://www.youtube.com/watch?v=HVXime0nQeI' }
    ],
    practice: ['Train KNN with different K values'],
    commit: 'day42_knn.ipynb'
  },
  43: {
    day: 43, phase: 2, goal: 'Bias vs Variance (MOST IMPORTANT)',
    tasks: [
      { id: 't1', title: 'Learn Bias concept', time: '30min' },
      { id: 't2', title: 'Learn Variance concept', time: '30min' },
      { id: 't3', title: 'Learn the tradeoff', time: '30min' },
      { id: 't4', title: 'Write detailed notes', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'StatQuest Bias Variance', url: 'https://www.youtube.com/watch?v=EuBBz3bI-aA' }
    ],
    practice: ['Explain with examples'],
    commit: 'day43_bias_variance.md',
    interviewTip: 'THIS IS THE MOST ASKED INTERVIEW QUESTION. Master it!'
  },
  44: {
    day: 44, phase: 2, goal: 'Naive Bayes',
    tasks: [
      { id: 't1', title: 'Learn Bayes theorem', time: '30min' },
      { id: 't2', title: 'Learn Naive assumption', time: '30min' },
      { id: 't3', title: 'Train GaussianNB', time: '30min' },
      { id: 't4', title: 'Compare with Logistic', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Naive Bayes', url: 'https://www.youtube.com/watch?v=O2L2Uv9pdDA' }
    ],
    practice: ['Train Naive Bayes classifier'],
    commit: 'day44_naive_bayes.ipynb'
  },
  45: {
    day: 45, phase: 2, goal: 'MODEL COMPARISON',
    tasks: [
      { id: 't1', title: 'Compare Logistic vs KNN vs Naive Bayes', time: '60min' },
      { id: 't2', title: 'Create comparison table', time: '30min' },
      { id: 't3', title: 'Analyze which is best and WHY', time: '30min' }
    ],
    resources: [],
    practice: ['Compare multiple models'],
    commit: 'day45_model_comparison.ipynb',
    interviewTip: 'Always be able to justify WHY you chose a model!'
  },
  46: {
    day: 46, phase: 2, goal: 'BIG PROJECT: Credit Risk - Part 1',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Load credit/fraud dataset', time: '30min' },
      { id: 't2', title: 'EDA and understand imbalance', time: '60min' },
      { id: 't3', title: 'Plan approach', time: '30min' }
    ],
    resources: [],
    practice: ['Start credit risk project'],
    commit: 'project_credit_risk_ml/'
  },
  47: {
    day: 47, phase: 2, goal: 'BIG PROJECT: Credit Risk - Part 2',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Feature selection', time: '60min' },
      { id: 't2', title: 'Handle imbalanced data', time: '60min' }
    ],
    resources: [],
    practice: ['Continue project'],
    commit: 'project_credit_risk_ml/'
  },
  48: {
    day: 48, phase: 2, goal: 'BIG PROJECT: Credit Risk - Part 3',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Train multiple models', time: '45min' },
      { id: 't2', title: 'Compare and select best', time: '45min' },
      { id: 't3', title: 'Write justification', time: '30min' }
    ],
    resources: [],
    practice: ['Complete project'],
    commit: 'project_credit_risk_ml/',
    projectRequirements: ['Imbalanced dataset', 'Feature selection', 'Model comparison', 'Final justification']
  },
  49: {
    day: 49, phase: 2, goal: 'SVM (Theory)',
    tasks: [
      { id: 't1', title: 'Learn SVM concept', time: '40min' },
      { id: 't2', title: 'Learn hyperplanes and margins', time: '40min' },
      { id: 't3', title: 'Learn kernel trick', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'SVM Explained', url: 'https://www.youtube.com/watch?v=efR1C6CvhmE' }
    ],
    practice: ['Understand SVM intuition'],
    commit: 'day49_svm_theory.md'
  },
  50: {
    day: 50, phase: 2, goal: 'SVM (Code)',
    tasks: [
      { id: 't1', title: 'Train SVC', time: '40min' },
      { id: 't2', title: 'Try different kernels', time: '40min' },
      { id: 't3', title: 'Compare with other models', time: '40min' }
    ],
    resources: [],
    practice: ['Train SVM classifier'],
    commit: 'day50_svm_code.ipynb'
  },
  51: {
    day: 51, phase: 2, goal: 'Overfitting & Regularization',
    tasks: [
      { id: 't1', title: 'Learn overfitting signs', time: '30min' },
      { id: 't2', title: 'Learn L1 regularization (Lasso)', time: '30min' },
      { id: 't3', title: 'Learn L2 regularization (Ridge)', time: '30min' },
      { id: 't4', title: 'Practice with examples', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Regularization', url: 'https://www.youtube.com/watch?v=6TMpXz6z6kU' }
    ],
    practice: ['Apply regularization'],
    commit: 'day51_overfitting.md'
  },
  52: {
    day: 52, phase: 2, goal: 'Cross Validation',
    tasks: [
      { id: 't1', title: 'Learn K-Fold CV', time: '40min' },
      { id: 't2', title: 'Learn Stratified K-Fold', time: '30min' },
      { id: 't3', title: 'Practice cross_val_score', time: '30min' },
      { id: 't4', title: 'Understand why CV matters', time: '20min' }
    ],
    resources: [
      { type: 'video', title: 'Cross Validation', url: 'https://www.youtube.com/watch?v=fSytzGwwBVw' }
    ],
    practice: ['Implement cross validation'],
    commit: 'day52_cross_val.ipynb',
    interviewTip: 'I used cross-validation to avoid data leakage - MEMORIZE THIS LINE!'
  },
  53: {
    day: 53, phase: 2, goal: 'FINAL PROJECT Month 2 - Part 1',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Choose classification dataset', time: '30min' },
      { id: 't2', title: 'Complete EDA', time: '60min' },
      { id: 't3', title: 'Feature engineering', time: '30min' }
    ],
    resources: [],
    practice: ['Start end-to-end project'],
    commit: 'project_end_to_end_classification/'
  },
  54: {
    day: 54, phase: 2, goal: 'FINAL PROJECT Month 2 - Part 2',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Train multiple models with CV', time: '60min' },
      { id: 't2', title: 'Hyperparameter tuning', time: '60min' }
    ],
    resources: [],
    practice: ['Continue project'],
    commit: 'project_end_to_end_classification/'
  },
  55: {
    day: 55, phase: 2, goal: 'FINAL PROJECT Month 2 - Part 3',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Final model selection', time: '45min' },
      { id: 't2', title: 'Write detailed report', time: '45min' },
      { id: 't3', title: 'Create README', time: '30min' }
    ],
    resources: [],
    practice: ['Complete project'],
    commit: 'project_end_to_end_classification/',
    projectRequirements: ['Feature eng', 'CV', 'Metrics', 'Final report']
  },
  56: {
    day: 56, phase: 2, goal: 'ML INTERVIEW QUESTIONS',
    tasks: [
      { id: 't1', title: 'Prepare: Why Logistic Regression?', time: '30min' },
      { id: 't2', title: 'Prepare: Bias-Variance tradeoff', time: '30min' },
      { id: 't3', title: 'Prepare: What is data leakage?', time: '30min' },
      { id: 't4', title: 'Practice explaining aloud', time: '30min' }
    ],
    resources: [],
    practice: ['Practice interview answers'],
    commit: 'day56_interview_qna.md',
    interviewTip: 'Answer = Story, not definition. Use examples!'
  },
  57: {
    day: 57, phase: 2, goal: 'REVISION + POLISH - Day 1',
    tasks: [
      { id: 't1', title: 'Refactor project code', time: '60min' },
      { id: 't2', title: 'Improve READMEs', time: '60min' }
    ],
    resources: [],
    practice: ['Polish your work'],
    commit: 'revision_day1'
  },
  58: {
    day: 58, phase: 2, goal: 'REVISION + POLISH - Day 2',
    tasks: [
      { id: 't1', title: 'Review all concepts', time: '60min' },
      { id: 't2', title: 'Practice explaining aloud', time: '60min' }
    ],
    resources: [],
    practice: ['Explain concepts clearly'],
    commit: 'revision_day2'
  },
  59: {
    day: 59, phase: 2, goal: 'REVISION + POLISH - Day 3',
    tasks: [
      { id: 't1', title: 'GitHub profile polish', time: '60min' },
      { id: 't2', title: 'Add project descriptions', time: '60min' }
    ],
    resources: [],
    practice: ['Make GitHub impressive'],
    commit: 'revision_day3'
  },
  60: {
    day: 60, phase: 2, goal: 'MONTH 2 COMPLETE',
    tasks: [
      { id: 't1', title: 'Final review of all projects', time: '60min' },
      { id: 't2', title: 'Self-assessment', time: '30min' },
      { id: 't3', title: 'Plan for next phase', time: '30min' }
    ],
    resources: [],
    practice: ['Celebrate and prepare for Phase 3'],
    commit: 'month2_wrapup.md',
    milestone: 'ML theory solid, 3 ML projects, Interview ready basics, Recruiter-visible GitHub'
  }
};

export default phase2Data;

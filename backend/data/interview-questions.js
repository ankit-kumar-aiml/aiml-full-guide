// ML Interview Questions Database
export const interviewQuestions = {
  // CORE ML CONCEPTS
  'bias-variance': {
    id: 'bias-variance',
    category: 'Core ML',
    question: 'Explain Bias vs Variance tradeoff',
    answer: `Bias is error from wrong assumptions in the model. High bias means the model is too simple and underfits.
    
Variance is error from sensitivity to small fluctuations in training data. High variance means the model is too complex and overfits.

The tradeoff: As you decrease bias (more complex model), variance increases. As you decrease variance (simpler model), bias increases.

Goal: Find the sweet spot that minimizes total error.`,
    example: 'Linear regression on complex non-linear data = high bias (underfitting). Deep neural network on small dataset = high variance (overfitting).',
    interviewTip: 'Draw the bias-variance tradeoff curve. Mention regularization as a solution.',
    difficulty: 'medium',
    frequency: 'very_high'
  },
  
  'precision-recall': {
    id: 'precision-recall',
    category: 'Metrics',
    question: 'When to use Precision vs Recall?',
    answer: `Precision = TP / (TP + FP) - Of all predicted positives, how many are actually positive?
Recall = TP / (TP + FN) - Of all actual positives, how many did we catch?

Use HIGH PRECISION when: False positives are costly
- Spam detection (don't want to mark important emails as spam)
- Recommendation systems (don't want to recommend irrelevant items)

Use HIGH RECALL when: False negatives are costly
- Cancer detection (don't want to miss any cancer cases)
- Fraud detection (don't want to miss any fraud)
- Security systems (don't want to miss any threats)`,
    example: 'In fraud detection, I prioritized recall because missing a fraud case (false negative) is more costly than flagging a legitimate transaction (false positive).',
    interviewTip: 'Always relate to business impact. "I rejected Logistic Regression because recall was poor on minority class."',
    difficulty: 'medium',
    frequency: 'very_high'
  },
  
  'overfitting': {
    id: 'overfitting',
    category: 'Core ML',
    question: 'How do you handle overfitting?',
    answer: `Overfitting = model performs well on training data but poorly on test data.

Solutions:
1. More training data
2. Regularization (L1/L2)
3. Cross-validation
4. Reduce model complexity
5. Dropout (for neural networks)
6. Early stopping
7. Feature selection (remove irrelevant features)
8. Ensemble methods`,
    example: 'I noticed my XGBoost model had 99% train accuracy but 75% test accuracy. I used L2 regularization and 5-fold cross-validation, which improved test accuracy to 85%.',
    interviewTip: 'Mention specific techniques you used in your projects.',
    difficulty: 'medium',
    frequency: 'very_high'
  },
  
  'cross-validation': {
    id: 'cross-validation',
    category: 'Validation',
    question: 'Why use cross-validation?',
    answer: `Cross-validation gives a more reliable estimate of model performance than a single train/test split.

K-Fold CV:
1. Split data into K folds
2. Train on K-1 folds, test on 1 fold
3. Repeat K times
4. Average the results

Benefits:
- Uses all data for both training and testing
- Reduces variance in performance estimate
- Helps detect overfitting
- More robust model selection`,
    example: 'I used 5-fold stratified cross-validation to ensure each fold had the same class distribution, which was important for my imbalanced fraud detection dataset.',
    interviewTip: '"I used cross-validation to avoid data leakage" - MEMORIZE THIS LINE!',
    difficulty: 'medium',
    frequency: 'high'
  },
  
  'data-leakage': {
    id: 'data-leakage',
    category: 'Best Practices',
    question: 'What is data leakage?',
    answer: `Data leakage occurs when information from outside the training dataset is used to create the model, leading to overly optimistic performance estimates.

Common causes:
1. Scaling/normalizing before train-test split
2. Using future data to predict past events
3. Including target-related features
4. Improper cross-validation

Prevention:
- Always split data FIRST
- Fit transformers only on training data
- Be careful with time-series data
- Review feature engineering carefully`,
    example: 'I fixed data leakage by fitting StandardScaler only on training data, then using transform() on test data. This dropped my accuracy from 98% to 85%, but it was the real performance.',
    interviewTip: 'This shows you understand real-world ML pitfalls.',
    difficulty: 'medium',
    frequency: 'high'
  },
  
  'roc-pr-curve': {
    id: 'roc-pr-curve',
    category: 'Metrics',
    question: 'ROC curve vs PR curve - when to use which?',
    answer: `ROC Curve (Receiver Operating Characteristic):
- Plots TPR vs FPR at various thresholds
- AUC-ROC: Area under ROC curve
- Good for balanced datasets
- Can be misleading for imbalanced data

PR Curve (Precision-Recall):
- Plots Precision vs Recall at various thresholds
- AUC-PR: Area under PR curve
- Better for imbalanced datasets
- Focuses on positive class performance

Rule: Use PR curve when positive class is rare (imbalanced data).`,
    example: 'For my fraud detection project with 1% fraud rate, I used PR curve because ROC curve showed 0.95 AUC but PR curve showed only 0.60 AUC, revealing the true challenge.',
    interviewTip: 'Mention this distinction for any imbalanced classification problem.',
    difficulty: 'hard',
    frequency: 'high'
  },
  
  'feature-selection': {
    id: 'feature-selection',
    category: 'Feature Engineering',
    question: 'How do you select features?',
    answer: `Feature Selection Methods:

1. Filter Methods (before training):
   - Correlation analysis
   - Chi-square test
   - Mutual information

2. Wrapper Methods (use model):
   - Forward selection
   - Backward elimination
   - Recursive Feature Elimination (RFE)

3. Embedded Methods (during training):
   - L1 regularization (Lasso)
   - Tree-based feature importance
   - XGBoost feature importance

Best Practice: Start with correlation analysis, then use tree-based importance, finally validate with cross-validation.`,
    example: 'I used XGBoost feature importance to identify top 20 features, then validated with RFE. This reduced features from 100 to 20 while improving accuracy by 3%.',
    interviewTip: '"This feature improved F1 by 6%" - use specific numbers!',
    difficulty: 'medium',
    frequency: 'high'
  },
  
  'random-forest-vs-xgboost': {
    id: 'random-forest-vs-xgboost',
    category: 'Algorithms',
    question: 'Why XGBoost over Random Forest?',
    answer: `Random Forest:
- Bagging (parallel trees)
- Each tree is independent
- Less prone to overfitting
- Faster training
- Good baseline

XGBoost:
- Boosting (sequential trees)
- Each tree corrects previous errors
- Built-in regularization
- Handles missing values
- Usually better performance
- More hyperparameters to tune

When to use XGBoost:
- When you need best performance
- Structured/tabular data
- Kaggle competitions

When to use Random Forest:
- Quick baseline
- When interpretability matters
- Limited tuning time`,
    example: 'I started with Random Forest as baseline (82% accuracy), then switched to XGBoost with tuning (87% accuracy). The 5% improvement justified the extra complexity.',
    interviewTip: 'Always mention you tried simpler models first.',
    difficulty: 'medium',
    frequency: 'high'
  },
  
  'gradient-descent': {
    id: 'gradient-descent',
    category: 'Optimization',
    question: 'Explain Gradient Descent',
    answer: `Gradient Descent is an optimization algorithm to minimize the cost function.

Steps:
1. Initialize weights randomly
2. Calculate gradient (slope) of cost function
3. Update weights in opposite direction of gradient
4. Repeat until convergence

Types:
- Batch GD: Uses all data (slow but stable)
- Stochastic GD: Uses one sample (fast but noisy)
- Mini-batch GD: Uses small batches (best of both)

Learning Rate:
- Too high: Overshoots minimum
- Too low: Very slow convergence
- Solution: Learning rate scheduling`,
    example: 'I can draw the cost function curve and show how gradient descent moves toward the minimum.',
    interviewTip: 'Be ready to DRAW this on a whiteboard!',
    difficulty: 'medium',
    frequency: 'medium'
  },
  
  'ensemble-methods': {
    id: 'ensemble-methods',
    category: 'Algorithms',
    question: 'Explain ensemble methods',
    answer: `Ensemble methods combine multiple models for better performance.

Types:
1. Bagging (Bootstrap Aggregating):
   - Train models on random subsets
   - Average predictions
   - Example: Random Forest
   - Reduces variance

2. Boosting:
   - Train models sequentially
   - Each model corrects previous errors
   - Examples: XGBoost, AdaBoost, LightGBM
   - Reduces bias

3. Stacking:
   - Train multiple different models
   - Use another model to combine predictions
   - Most complex but often best

Why ensembles work: Different models make different errors, combining them reduces overall error.`,
    example: 'I used a stacking ensemble with Logistic Regression, Random Forest, and XGBoost as base models, with a meta-learner on top. This improved accuracy by 2% over the best single model.',
    interviewTip: 'Mention specific ensemble you used in projects.',
    difficulty: 'hard',
    frequency: 'medium'
  },
  
  // NLP QUESTIONS
  'tfidf-vs-word2vec': {
    id: 'tfidf-vs-word2vec',
    category: 'NLP',
    question: 'TF-IDF vs Word2Vec - differences?',
    answer: `TF-IDF (Term Frequency-Inverse Document Frequency):
- Sparse representation
- Based on word frequency
- No semantic meaning
- Simple and interpretable
- Good for: Document classification, search

Word2Vec:
- Dense representation (embeddings)
- Captures semantic meaning
- Similar words have similar vectors
- "King - Man + Woman = Queen"
- Good for: Similarity, analogies, deep learning

When to use:
- TF-IDF: Simple classification, limited data
- Word2Vec: Need semantic understanding, have lots of data`,
    example: 'For my sentiment analysis, I started with TF-IDF (78% accuracy) then switched to Word2Vec embeddings (85% accuracy) because semantic meaning mattered.',
    interviewTip: 'Know the OOV (out-of-vocabulary) problem with Word2Vec.',
    difficulty: 'medium',
    frequency: 'high'
  },
  
  'transformers': {
    id: 'transformers',
    category: 'Deep Learning',
    question: 'Explain Transformers and Attention',
    answer: `Transformers revolutionized NLP by using self-attention mechanism.

Key concepts:
1. Self-Attention: Each word attends to all other words
2. Query, Key, Value: Mechanism to compute attention weights
3. Multi-head attention: Multiple attention patterns
4. Positional encoding: Since no recurrence, need position info

Why better than RNN/LSTM:
- Parallelizable (faster training)
- Captures long-range dependencies
- No vanishing gradient problem

Popular models:
- BERT: Encoder-only, good for classification
- GPT: Decoder-only, good for generation
- T5: Encoder-decoder, good for seq2seq`,
    example: 'I fine-tuned BERT for sentiment classification, achieving 92% accuracy compared to 85% with LSTM.',
    interviewTip: 'Know the difference between BERT and GPT architectures.',
    difficulty: 'hard',
    frequency: 'high'
  },
  
  // SYSTEM DESIGN
  'ml-system-design': {
    id: 'ml-system-design',
    category: 'System Design',
    question: 'How would you design a fraud detection system?',
    answer: `1. Problem Understanding:
   - Real-time vs batch?
   - Latency requirements?
   - False positive tolerance?

2. Data:
   - Transaction features
   - User behavior history
   - Device/location info
   - Label collection strategy

3. Model:
   - Start with rule-based baseline
   - Gradient boosting for tabular data
   - Handle class imbalance (SMOTE, class weights)
   - Ensemble for production

4. Metrics:
   - Precision at high recall (catch fraud, minimize false positives)
   - AUC-PR for imbalanced data

5. Deployment:
   - Real-time scoring API
   - Feature store for consistency
   - A/B testing framework

6. Monitoring:
   - Data drift detection
   - Model performance tracking
   - Alert on anomalies`,
    example: 'I would start with a rule-based system for obvious fraud, then add ML for subtle patterns.',
    interviewTip: 'Always mention monitoring and data drift!',
    difficulty: 'hard',
    frequency: 'high'
  }
};

// Interview question categories
export const categories = [
  'Core ML',
  'Metrics',
  'Algorithms',
  'Feature Engineering',
  'Validation',
  'Best Practices',
  'NLP',
  'Deep Learning',
  'System Design',
  'Optimization'
];

// Get questions by category
export const getQuestionsByCategory = (category) => {
  return Object.values(interviewQuestions).filter(q => q.category === category);
};

// Get high frequency questions
export const getHighFrequencyQuestions = () => {
  return Object.values(interviewQuestions).filter(q => 
    q.frequency === 'very_high' || q.frequency === 'high'
  );
};

export default interviewQuestions;

import express from 'express';
import Project from '../models/Project.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all projects for user
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.user._id });
    res.json({ projects });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get project templates
router.get('/templates', (req, res) => {
  const templates = [
    {
      id: 'project1',
      title: 'Student Result Analyzer',
      phase: 1,
      dayRange: { start: 7, end: 7 },
      description: 'Analyze student marks from file, calculate average and grade',
      requirements: ['File handling', 'Functions', 'Conditionals'],
      technologies: ['Python']
    },
    {
      id: 'project2',
      title: 'Sales Data Analysis',
      phase: 1,
      dayRange: { start: 14, end: 14 },
      description: 'Clean dataset and calculate monthly revenue',
      requirements: ['Pandas', 'Data cleaning', 'Aggregation'],
      technologies: ['Python', 'Pandas']
    },
    {
      id: 'project3',
      title: 'Customer Behavior Analysis',
      phase: 1,
      dayRange: { start: 26, end: 30 },
      description: 'Complete EDA with insights and visualizations',
      requirements: ['EDA', 'Visualization', 'Statistics'],
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn']
    },
    {
      id: 'project4',
      title: 'House Price Prediction',
      phase: 2,
      dayRange: { start: 37, end: 37 },
      description: 'Linear regression model with feature engineering',
      requirements: ['Linear Regression', 'Feature Engineering', 'Metrics'],
      technologies: ['Python', 'Scikit-learn']
    },
    {
      id: 'project5',
      title: 'Credit Risk / Fraud Detection',
      phase: 2,
      dayRange: { start: 46, end: 48 },
      description: 'Handle imbalanced data with model comparison',
      requirements: ['Imbalanced Data', 'Model Comparison', 'Classification'],
      technologies: ['Python', 'Scikit-learn', 'XGBoost']
    },
    {
      id: 'project6',
      title: 'Fraud Detection with Trees',
      phase: 3,
      dayRange: { start: 71, end: 80 },
      description: 'RF + XGBoost with ROC-AUC analysis',
      requirements: ['Random Forest', 'XGBoost', 'ROC-AUC'],
      technologies: ['Python', 'Scikit-learn', 'XGBoost']
    },
    {
      id: 'project7',
      title: 'Customer Segmentation',
      phase: 3,
      dayRange: { start: 89, end: 95 },
      description: 'KMeans + PCA with cluster profiling',
      requirements: ['K-Means', 'PCA', 'Clustering'],
      technologies: ['Python', 'Scikit-learn']
    },
    {
      id: 'project8',
      title: 'Resume Screener / Sentiment Analyzer',
      phase: 3,
      dayRange: { start: 101, end: 120 },
      description: 'NLP classification with TF-IDF',
      requirements: ['NLP', 'TF-IDF', 'Text Classification'],
      technologies: ['Python', 'NLTK', 'Scikit-learn']
    },
    {
      id: 'project9',
      title: 'ML Prediction API',
      phase: 4,
      dayRange: { start: 129, end: 135 },
      description: 'FastAPI with ML pipeline deployment',
      requirements: ['FastAPI', 'Model Serialization', 'REST API'],
      technologies: ['Python', 'FastAPI', 'Joblib']
    },
    {
      id: 'project10',
      title: 'Production ML System',
      phase: 4,
      dayRange: { start: 167, end: 180 },
      description: 'Full MLOps with Docker and Cloud',
      requirements: ['Docker', 'Cloud Deployment', 'Logging'],
      technologies: ['Python', 'FastAPI', 'Docker', 'Cloud']
    },
    {
      id: 'project11',
      title: 'LLM-Powered Application',
      phase: 5,
      dayRange: { start: 218, end: 240 },
      description: 'Transformer-based application with prompting',
      requirements: ['Transformers', 'HuggingFace', 'Prompt Engineering'],
      technologies: ['Python', 'HuggingFace', 'Transformers']
    }
  ];
  
  res.json({ templates });
});

// Submit project
router.post('/submit', auth, async (req, res) => {
  try {
    const { projectId, title, githubUrl, liveUrl, description } = req.body;
    
    if (!projectId || !githubUrl) {
      return res.status(400).json({ error: 'Project ID and GitHub URL required' });
    }
    
    // Validate GitHub URL
    if (!githubUrl.includes('github.com')) {
      return res.status(400).json({ error: 'Invalid GitHub URL' });
    }
    
    let project = await Project.findOne({ userId: req.user._id, projectId });
    
    if (project) {
      project.githubUrl = githubUrl;
      project.liveUrl = liveUrl;
      project.description = description;
      project.status = 'submitted';
      project.submittedAt = new Date();
      project.updatedAt = new Date();
    } else {
      project = new Project({
        userId: req.user._id,
        projectId,
        title: title || projectId,
        githubUrl,
        liveUrl,
        description,
        status: 'submitted',
        submittedAt: new Date()
      });
    }
    
    await project.save();
    
    res.json({
      message: 'Project submitted successfully',
      project
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update project status
router.put('/:projectId/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['not_started', 'in_progress', 'completed', 'submitted'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    
    const project = await Project.findOneAndUpdate(
      { userId: req.user._id, projectId: req.params.projectId },
      { status, updatedAt: new Date() },
      { new: true }
    );
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json({ message: 'Status updated', project });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

import express from 'express';
import Progress from '../models/Progress.js';
import User from '../models/User.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get user progress
router.get('/', auth, async (req, res) => {
  try {
    let progress = await Progress.findOne({ userId: req.user._id });
    
    if (!progress) {
      progress = new Progress({ userId: req.user._id, days: [] });
      await progress.save();
    }
    
    res.json({
      progress: {
        overallProgress: progress.overallProgress,
        phaseProgress: progress.phaseProgress,
        totalDaysCompleted: progress.totalDaysCompleted,
        days: progress.days,
        updatedAt: progress.updatedAt
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update day progress
router.post('/day/:dayNumber', auth, async (req, res) => {
  try {
    const dayNumber = parseInt(req.params.dayNumber);
    const { completed, tasks, studyTime, notes, githubCommit } = req.body;
    
    if (dayNumber < 1 || dayNumber > 365) {
      return res.status(400).json({ error: 'Invalid day number' });
    }
    
    let progress = await Progress.findOne({ userId: req.user._id });
    
    if (!progress) {
      progress = new Progress({ userId: req.user._id, days: [] });
    }
    
    // Find or create day entry
    let dayEntry = progress.days.find(d => d.dayNumber === dayNumber);
    
    if (!dayEntry) {
      dayEntry = {
        dayNumber,
        completed: false,
        tasks: [],
        studyTime: 0
      };
      progress.days.push(dayEntry);
      dayEntry = progress.days[progress.days.length - 1];
    }
    
    // Update day entry
    if (completed !== undefined) {
      dayEntry.completed = completed;
      if (completed) dayEntry.completedAt = new Date();
    }
    if (tasks) dayEntry.tasks = tasks;
    if (studyTime) {
      dayEntry.studyTime += studyTime;
      req.user.totalStudyTime += studyTime;
      await req.user.save();
    }
    if (notes) dayEntry.notes = notes;
    if (githubCommit) dayEntry.githubCommit = githubCommit;
    
    // Recalculate progress
    progress.calculateProgress();
    progress.updatedAt = new Date();
    await progress.save();
    
    // Update user's current day
    if (dayNumber >= req.user.currentDay) {
      req.user.currentDay = dayNumber + 1;
      await req.user.save();
    }
    
    res.json({
      message: 'Progress updated',
      day: dayEntry,
      overallProgress: progress.overallProgress,
      phaseProgress: progress.phaseProgress
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Complete a task
router.post('/task', auth, async (req, res) => {
  try {
    const { dayNumber, taskId, completed, notes } = req.body;
    
    let progress = await Progress.findOne({ userId: req.user._id });
    
    if (!progress) {
      progress = new Progress({ userId: req.user._id, days: [] });
    }
    
    let dayEntry = progress.days.find(d => d.dayNumber === dayNumber);
    
    if (!dayEntry) {
      dayEntry = { dayNumber, completed: false, tasks: [], studyTime: 0 };
      progress.days.push(dayEntry);
      dayEntry = progress.days[progress.days.length - 1];
    }
    
    let task = dayEntry.tasks.find(t => t.taskId === taskId);
    
    if (!task) {
      task = { taskId, completed: false };
      dayEntry.tasks.push(task);
      task = dayEntry.tasks[dayEntry.tasks.length - 1];
    }
    
    task.completed = completed;
    if (completed) task.completedAt = new Date();
    if (notes) task.notes = notes;
    
    // Check if all tasks completed
    const allTasksCompleted = dayEntry.tasks.every(t => t.completed);
    if (allTasksCompleted && dayEntry.tasks.length > 0) {
      dayEntry.completed = true;
      dayEntry.completedAt = new Date();
    }
    
    progress.calculateProgress();
    progress.updatedAt = new Date();
    await progress.save();
    
    res.json({
      message: 'Task updated',
      task,
      dayCompleted: dayEntry.completed,
      overallProgress: progress.overallProgress
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Export progress
router.get('/export', auth, async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.user._id });
    
    res.json({
      exportedAt: new Date(),
      user: {
        name: req.user.name,
        email: req.user.email,
        startDate: req.user.startDate
      },
      progress: progress || { days: [], overallProgress: 0 }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Import progress
router.post('/import', auth, async (req, res) => {
  try {
    const { progress: importedProgress } = req.body;
    
    if (!importedProgress || !importedProgress.days) {
      return res.status(400).json({ error: 'Invalid progress data' });
    }
    
    let progress = await Progress.findOne({ userId: req.user._id });
    
    if (!progress) {
      progress = new Progress({ userId: req.user._id });
    }
    
    progress.days = importedProgress.days;
    progress.calculateProgress();
    progress.updatedAt = new Date();
    await progress.save();
    
    res.json({
      message: 'Progress imported successfully',
      overallProgress: progress.overallProgress,
      totalDaysCompleted: progress.totalDaysCompleted
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get stats
router.get('/stats', auth, async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.user._id });
    
    const stats = {
      totalDaysCompleted: progress?.totalDaysCompleted || 0,
      overallProgress: progress?.overallProgress || 0,
      phaseProgress: progress?.phaseProgress || {},
      streak: req.user.streak,
      totalStudyTime: req.user.totalStudyTime,
      currentDay: req.user.currentDay,
      daysRemaining: 365 - (progress?.totalDaysCompleted || 0)
    };
    
    res.json({ stats });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

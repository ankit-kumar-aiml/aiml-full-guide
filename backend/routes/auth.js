import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import Progress from '../models/Progress.js';
import { auth, generateToken } from '../middleware/auth.js';

const router = express.Router();

// Register
router.post('/register', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { name, email, password, college } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    
    // Create user
    const user = new User({ name, email, password, college });
    await user.save();
    
    // Create empty progress record
    const progress = new Progress({ userId: user._id, days: [] });
    await progress.save();
    
    // Generate token
    const token = generateToken(user._id);
    
    res.status(201).json({
      message: 'Registration successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        college: user.college,
        currentDay: user.currentDay,
        streak: user.streak
      },
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login
router.post('/login', [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Update streak
    const today = new Date().toDateString();
    const lastActive = new Date(user.lastActiveDate).toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (lastActive === yesterday) {
      user.streak += 1;
    } else if (lastActive !== today) {
      user.streak = 1;
    }
    user.lastActiveDate = new Date();
    await user.save();
    
    // Generate token
    const token = generateToken(user._id);
    
    res.json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        college: user.college,
        currentDay: user.currentDay,
        streak: user.streak,
        totalStudyTime: user.totalStudyTime
      },
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get current user
router.get('/me', auth, async (req, res) => {
  res.json({
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      college: req.user.college,
      currentDay: req.user.currentDay,
      streak: req.user.streak,
      totalStudyTime: req.user.totalStudyTime,
      startDate: req.user.startDate
    }
  });
});

// Update profile
router.put('/profile', auth, async (req, res) => {
  try {
    const { name, college } = req.body;
    
    if (name) req.user.name = name;
    if (college) req.user.college = college;
    
    await req.user.save();
    
    res.json({
      message: 'Profile updated',
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        college: req.user.college
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

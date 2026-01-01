import mongoose from 'mongoose';

const taskProgressSchema = new mongoose.Schema({
  taskId: String,
  completed: { type: Boolean, default: false },
  completedAt: Date,
  notes: String
});

const dayProgressSchema = new mongoose.Schema({
  dayNumber: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: Date,
  tasks: [taskProgressSchema],
  studyTime: {
    type: Number,
    default: 0
  },
  notes: String,
  githubCommit: String
});

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  days: [dayProgressSchema],
  overallProgress: {
    type: Number,
    default: 0
  },
  phaseProgress: {
    phase1: { type: Number, default: 0 },
    phase2: { type: Number, default: 0 },
    phase3: { type: Number, default: 0 },
    phase4: { type: Number, default: 0 },
    phase5: { type: Number, default: 0 },
    phase6: { type: Number, default: 0 }
  },
  totalDaysCompleted: {
    type: Number,
    default: 0
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate overall progress
progressSchema.methods.calculateProgress = function() {
  const completedDays = this.days.filter(d => d.completed).length;
  this.totalDaysCompleted = completedDays;
  this.overallProgress = Math.round((completedDays / 365) * 100);
  
  // Phase progress
  const phases = [
    { name: 'phase1', start: 1, end: 30 },
    { name: 'phase2', start: 31, end: 60 },
    { name: 'phase3', start: 61, end: 120 },
    { name: 'phase4', start: 121, end: 180 },
    { name: 'phase5', start: 181, end: 270 },
    { name: 'phase6', start: 271, end: 365 }
  ];
  
  phases.forEach(phase => {
    const phaseDays = this.days.filter(d => 
      d.dayNumber >= phase.start && d.dayNumber <= phase.end && d.completed
    ).length;
    const totalPhaseDays = phase.end - phase.start + 1;
    this.phaseProgress[phase.name] = Math.round((phaseDays / totalPhaseDays) * 100);
  });
  
  return this;
};

export default mongoose.model('Progress', progressSchema);

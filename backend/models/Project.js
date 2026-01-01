import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  projectId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  phase: {
    type: Number,
    required: true
  },
  dayRange: {
    start: Number,
    end: Number
  },
  githubUrl: {
    type: String,
    trim: true
  },
  liveUrl: String,
  status: {
    type: String,
    enum: ['not_started', 'in_progress', 'completed', 'submitted'],
    default: 'not_started'
  },
  submittedAt: Date,
  feedback: String,
  technologies: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Project', projectSchema);

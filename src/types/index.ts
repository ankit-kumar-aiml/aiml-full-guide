// Core data types for the AI/ML Learning Platform

export interface Phase {
  id: number
  name: string
  dayRange: [number, number]
  description: string
  color: string
}

export interface Task {
  id: string
  description: string
  timeAllocation: string
  completed: boolean
}

export interface Resource {
  id: string
  type: 'video' | 'article' | 'documentation'
  title: string
  url: string
  duration?: string
}

export interface PracticeProblem {
  id: string
  description: string
  expectedOutput: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface DayData {
  dayNumber: number
  phase: string
  goal: string
  tasks: Task[]
  resources: Resource[]
  practiceProblems: PracticeProblem[]
  commitRequirement: string
}

export interface Project {
  id: string
  dayRange: [number, number]
  title: string
  description: string
  requirements: string[]
  deliverables: string[]
  dataset?: string
  submittedRepo?: string
}

export interface ProgressData {
  currentDay: number
  completedDays: number[]
  completedTasks: Record<string, boolean>
  projectSubmissions: Record<string, string>
  totalDays: number
  phaseProgress: Record<number, number>
}

export interface InterviewQuestion {
  id: string
  category: 'theory' | 'coding' | 'system-design'
  question: string
  answerFormat: string
  exampleAnswer: string
  practiced: boolean
}

export interface UserProgress {
  userId: string
  currentDay: number
  completedDays: number[]
  completedTasks: Record<string, boolean>
  projectSubmissions: Record<string, string>
  practicedQuestions: string[]
  bookmarkedResources: string[]
  timerStats: {
    totalMinutes: number
    weeklyMinutes: number[]
    lastSessionDate: string
  }
  lastUpdated: string
}

export interface ResourceCategory {
  id: string
  name: string
  subcategories: string[]
}

export interface ResourceLibraryItem {
  id: string
  category: string
  subcategory: string
  title: string
  type: 'video' | 'article' | 'documentation' | 'dataset'
  url: string
  description: string
  tags: string[]
  phase: number
}

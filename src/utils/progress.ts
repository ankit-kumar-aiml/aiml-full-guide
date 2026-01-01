import { UserProgress, Phase } from '../types'
import { getPhases } from './dataLoader'

/**
 * Calculate overall progress percentage
 * @param completedDays Array of completed day numbers
 * @param totalDays Total number of days in the program (default: 365)
 * @returns Progress percentage (0-100)
 */
export const calculateOverallProgress = (
  completedDays: number[],
  totalDays: number = 365
): number => {
  if (totalDays === 0) return 0
  return Math.round((completedDays.length / totalDays) * 100)
}

/**
 * Calculate progress for a specific phase
 * @param completedDays Array of completed day numbers
 * @param phaseRange Tuple of [startDay, endDay]
 * @returns Progress percentage for the phase (0-100)
 */
export const calculatePhaseProgress = (
  completedDays: number[],
  phaseRange: [number, number]
): number => {
  const [start, end] = phaseRange
  const totalDaysInPhase = end - start + 1
  
  if (totalDaysInPhase === 0) return 0
  
  const completedInPhase = completedDays.filter(
    day => day >= start && day <= end
  ).length
  
  return Math.round((completedInPhase / totalDaysInPhase) * 100)
}

/**
 * Get current day based on progress data
 * Returns the next incomplete day or the last day if all complete
 * @param progressData User progress data
 * @returns Current day number
 */
export const getCurrentDay = (progressData: UserProgress): number => {
  const { completedDays, currentDay } = progressData
  
  // If user has explicitly set a current day, use that
  if (currentDay && currentDay > 0) {
    return currentDay
  }
  
  // Otherwise, find the first incomplete day
  if (completedDays.length === 0) {
    return 1
  }
  
  // Find the first gap in completed days
  const sortedDays = [...completedDays].sort((a, b) => a - b)
  
  for (let i = 1; i <= 365; i++) {
    if (!sortedDays.includes(i)) {
      return i
    }
  }
  
  // All days complete
  return 365
}

/**
 * Calculate progress for all phases
 * @param completedDays Array of completed day numbers
 * @returns Record of phase ID to progress percentage
 */
export const calculateAllPhaseProgress = (
  completedDays: number[]
): Record<number, number> => {
  const phases = getPhases()
  const phaseProgress: Record<number, number> = {}
  
  phases.forEach(phase => {
    phaseProgress[phase.id] = calculatePhaseProgress(completedDays, phase.dayRange)
  })
  
  return phaseProgress
}

/**
 * Get the current phase based on current day
 * @param currentDay Current day number
 * @returns Phase object or null
 */
export const getCurrentPhase = (currentDay: number): Phase | null => {
  const phases = getPhases()
  return phases.find(
    phase => currentDay >= phase.dayRange[0] && currentDay <= phase.dayRange[1]
  ) || null
}

/**
 * Calculate streak (consecutive days completed)
 * @param completedDays Array of completed day numbers
 * @returns Current streak count
 */
export const calculateStreak = (completedDays: number[]): number => {
  if (completedDays.length === 0) return 0
  
  const sortedDays = [...completedDays].sort((a, b) => b - a) // Descending
  let streak = 1
  
  for (let i = 0; i < sortedDays.length - 1; i++) {
    if (sortedDays[i] - sortedDays[i + 1] === 1) {
      streak++
    } else {
      break
    }
  }
  
  return streak
}

/**
 * Get completion statistics
 * @param progressData User progress data
 * @returns Statistics object
 */
export const getCompletionStats = (progressData: UserProgress) => {
  const totalDays = 365
  const completedDays = progressData.completedDays.length
  const remainingDays = totalDays - completedDays
  const overallProgress = calculateOverallProgress(progressData.completedDays, totalDays)
  const phaseProgress = calculateAllPhaseProgress(progressData.completedDays)
  const currentDay = getCurrentDay(progressData)
  const currentPhase = getCurrentPhase(currentDay)
  const streak = calculateStreak(progressData.completedDays)
  
  return {
    totalDays,
    completedDays,
    remainingDays,
    overallProgress,
    phaseProgress,
    currentDay,
    currentPhase,
    streak
  }
}

/**
 * Check if a specific day is completed
 * @param dayNumber Day to check
 * @param completedDays Array of completed day numbers
 * @returns True if day is completed
 */
export const isDayCompleted = (
  dayNumber: number,
  completedDays: number[]
): boolean => {
  return completedDays.includes(dayNumber)
}

/**
 * Get days completed in current week
 * @param completedDays Array of completed day numbers
 * @param currentDay Current day number
 * @returns Number of days completed in current week
 */
export const getWeeklyProgress = (
  completedDays: number[],
  currentDay: number
): number => {
  const weekStart = Math.floor((currentDay - 1) / 7) * 7 + 1
  const weekEnd = Math.min(weekStart + 6, 365)
  
  return completedDays.filter(
    day => day >= weekStart && day <= weekEnd
  ).length
}

/**
 * Calculate estimated completion date
 * @param completedDays Array of completed day numbers
 * @param startDate Start date of the program
 * @returns Estimated completion date
 */
export const estimateCompletionDate = (
  completedDays: number[],
  startDate: Date = new Date()
): Date => {
  if (completedDays.length === 0) {
    const completion = new Date(startDate)
    completion.setDate(completion.getDate() + 365)
    return completion
  }
  
  // Calculate average days per week
  const sortedDays = [...completedDays].sort((a, b) => a - b)
  const maxDay = sortedDays[sortedDays.length - 1]
  const weeksElapsed = Math.ceil(maxDay / 7)
  const avgDaysPerWeek = completedDays.length / weeksElapsed
  
  if (avgDaysPerWeek === 0) {
    const completion = new Date(startDate)
    completion.setDate(completion.getDate() + 365)
    return completion
  }
  
  const remainingDays = 365 - completedDays.length
  const estimatedWeeks = Math.ceil(remainingDays / avgDaysPerWeek)
  
  const completion = new Date()
  completion.setDate(completion.getDate() + (estimatedWeeks * 7))
  
  return completion
}

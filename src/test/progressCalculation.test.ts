import { describe, it, expect } from 'vitest'
import {
  calculateOverallProgress,
  calculatePhaseProgress,
  getCurrentDay,
  calculateStreak,
  isDayCompleted,
  getWeeklyProgress
} from '../utils/progress'
import { UserProgress } from '../types'

/**
 * Property 4: Progress Calculation Accuracy
 * For any progress data state, the calculated completion percentage SHALL equal
 * (completedDays.length / totalDays) * 100, and phase progress SHALL equal
 * (completed days in phase / total days in phase) * 100.
 * Validates: Requirements 3.2, 3.3
 */
describe('Property 4: Progress Calculation Accuracy', () => {
  describe('Overall Progress Calculation', () => {
    it('should calculate 0% for no completed days', () => {
      const progress = calculateOverallProgress([], 365)
      expect(progress).toBe(0)
    })

    it('should calculate 100% for all days completed', () => {
      const allDays = Array.from({ length: 365 }, (_, i) => i + 1)
      const progress = calculateOverallProgress(allDays, 365)
      expect(progress).toBe(100)
    })

    it('should calculate correct percentage for partial completion', () => {
      const completedDays = [1, 2, 3, 4, 5] // 5 days
      const progress = calculateOverallProgress(completedDays, 365)
      const expected = Math.round((5 / 365) * 100)
      expect(progress).toBe(expected)
    })

    it('should handle 50% completion accurately', () => {
      const halfDays = Array.from({ length: 182 }, (_, i) => i + 1)
      const progress = calculateOverallProgress(halfDays, 365)
      expect(progress).toBeGreaterThanOrEqual(49)
      expect(progress).toBeLessThanOrEqual(50)
    })

    it('should calculate correctly for any number of completed days', () => {
      const testCases = [10, 50, 100, 150, 200, 250, 300, 350]
      
      testCases.forEach(count => {
        const days = Array.from({ length: count }, (_, i) => i + 1)
        const progress = calculateOverallProgress(days, 365)
        const expected = Math.round((count / 365) * 100)
        expect(progress).toBe(expected)
      })
    })

    it('should handle non-sequential completed days', () => {
      const completedDays = [1, 5, 10, 20, 50, 100, 200] // 7 days
      const progress = calculateOverallProgress(completedDays, 365)
      const expected = Math.round((7 / 365) * 100)
      expect(progress).toBe(expected)
    })
  })

  describe('Phase Progress Calculation', () => {
    it('should calculate 0% for phase with no completed days', () => {
      const progress = calculatePhaseProgress([], [1, 30])
      expect(progress).toBe(0)
    })

    it('should calculate 100% for fully completed phase', () => {
      const phase1Days = Array.from({ length: 30 }, (_, i) => i + 1)
      const progress = calculatePhaseProgress(phase1Days, [1, 30])
      expect(progress).toBe(100)
    })

    it('should calculate correct percentage for partial phase completion', () => {
      const completedDays = [1, 2, 3, 4, 5] // 5 out of 30 days
      const progress = calculatePhaseProgress(completedDays, [1, 30])
      const expected = Math.round((5 / 30) * 100)
      expect(progress).toBe(expected)
    })

    it('should only count days within phase range', () => {
      const completedDays = [1, 2, 3, 31, 32, 33] // 3 in phase 1, 3 in phase 2
      const phase1Progress = calculatePhaseProgress(completedDays, [1, 30])
      const expected = Math.round((3 / 30) * 100)
      expect(phase1Progress).toBe(expected)
    })

    it('should handle all 6 phases correctly', () => {
      const phases: [number, number][] = [
        [1, 30],
        [31, 60],
        [61, 120],
        [121, 180],
        [181, 270],
        [271, 365]
      ]

      phases.forEach(([start, end]) => {
        const totalDays = end - start + 1
        const halfDays = Array.from({ length: Math.floor(totalDays / 2) }, (_, i) => start + i)
        const progress = calculatePhaseProgress(halfDays, [start, end])
        
        // Should be approximately 50%
        expect(progress).toBeGreaterThanOrEqual(48)
        expect(progress).toBeLessThanOrEqual(52)
      })
    })
  })

  describe('Current Day Calculation', () => {
    it('should return 1 for no completed days', () => {
      const progressData: UserProgress = {
        userId: 'test',
        currentDay: 0,
        completedDays: [],
        completedTasks: {},
        projectSubmissions: {},
        practicedQuestions: [],
        bookmarkedResources: [],
        timerStats: {
          totalMinutes: 0,
          weeklyMinutes: [0, 0, 0, 0, 0, 0, 0],
          lastSessionDate: new Date().toISOString()
        },
        lastUpdated: new Date().toISOString()
      }

      const currentDay = getCurrentDay(progressData)
      expect(currentDay).toBe(1)
    })

    it('should return explicitly set current day', () => {
      const progressData: UserProgress = {
        userId: 'test',
        currentDay: 15,
        completedDays: [1, 2, 3],
        completedTasks: {},
        projectSubmissions: {},
        practicedQuestions: [],
        bookmarkedResources: [],
        timerStats: {
          totalMinutes: 0,
          weeklyMinutes: [0, 0, 0, 0, 0, 0, 0],
          lastSessionDate: new Date().toISOString()
        },
        lastUpdated: new Date().toISOString()
      }

      const currentDay = getCurrentDay(progressData)
      expect(currentDay).toBe(15)
    })

    it('should find first incomplete day', () => {
      const progressData: UserProgress = {
        userId: 'test',
        currentDay: 0,
        completedDays: [1, 2, 3, 5, 6], // Day 4 is missing
        completedTasks: {},
        projectSubmissions: {},
        practicedQuestions: [],
        bookmarkedResources: [],
        timerStats: {
          totalMinutes: 0,
          weeklyMinutes: [0, 0, 0, 0, 0, 0, 0],
          lastSessionDate: new Date().toISOString()
        },
        lastUpdated: new Date().toISOString()
      }

      const currentDay = getCurrentDay(progressData)
      expect(currentDay).toBe(4)
    })
  })

  describe('Streak Calculation', () => {
    it('should return 0 for no completed days', () => {
      const streak = calculateStreak([])
      expect(streak).toBe(0)
    })

    it('should return 1 for single completed day', () => {
      const streak = calculateStreak([5])
      expect(streak).toBe(1)
    })

    it('should calculate consecutive streak correctly', () => {
      const streak = calculateStreak([1, 2, 3, 4, 5])
      expect(streak).toBe(5)
    })

    it('should only count most recent streak', () => {
      const streak = calculateStreak([1, 2, 3, 10, 11, 12, 13])
      expect(streak).toBe(4) // Only counts 10, 11, 12, 13
    })

    it('should handle non-sequential days', () => {
      const streak = calculateStreak([1, 3, 5, 7])
      expect(streak).toBe(1)
    })
  })

  describe('Day Completion Check', () => {
    it('should return true for completed day', () => {
      const completed = isDayCompleted(5, [1, 2, 3, 4, 5])
      expect(completed).toBe(true)
    })

    it('should return false for incomplete day', () => {
      const completed = isDayCompleted(10, [1, 2, 3, 4, 5])
      expect(completed).toBe(false)
    })

    it('should handle empty completed days', () => {
      const completed = isDayCompleted(1, [])
      expect(completed).toBe(false)
    })
  })

  describe('Weekly Progress', () => {
    it('should calculate days completed in current week', () => {
      const completedDays = [1, 2, 3, 4, 5] // Week 1
      const weekly = getWeeklyProgress(completedDays, 5)
      expect(weekly).toBe(5)
    })

    it('should only count days in current week', () => {
      const completedDays = [1, 2, 3, 8, 9, 10] // 3 in week 1, 3 in week 2
      const weekly = getWeeklyProgress(completedDays, 10)
      expect(weekly).toBe(3) // Only week 2 days
    })

    it('should handle week boundaries correctly', () => {
      const completedDays = [7, 8] // Day 7 is end of week 1, day 8 is start of week 2
      const week1Progress = getWeeklyProgress(completedDays, 7)
      const week2Progress = getWeeklyProgress(completedDays, 8)
      
      expect(week1Progress).toBe(1)
      expect(week2Progress).toBe(1)
    })
  })

  describe('Edge Cases', () => {
    it('should handle duplicate days in completed array', () => {
      const completedDays = [1, 1, 2, 2, 3, 3]
      const progress = calculateOverallProgress(completedDays, 365)
      // Should count duplicates (implementation dependent)
      expect(progress).toBeGreaterThanOrEqual(0)
      expect(progress).toBeLessThanOrEqual(100)
    })

    it('should handle days out of range', () => {
      const completedDays = [0, 366, 400]
      const progress = calculateOverallProgress(completedDays, 365)
      expect(progress).toBeGreaterThanOrEqual(0)
      expect(progress).toBeLessThanOrEqual(100)
    })

    it('should handle negative day numbers', () => {
      const completedDays = [-1, -5, 1, 2, 3]
      const progress = calculateOverallProgress(completedDays, 365)
      expect(progress).toBeGreaterThanOrEqual(0)
    })
  })
})

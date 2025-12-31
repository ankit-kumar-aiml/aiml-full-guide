import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { saveProgress, loadProgress, clearProgress } from '../utils/storage'
import { UserProgress } from '../types'

/**
 * Property 1: Progress Persistence
 * For any user action that modifies progress data (task completion, project submission, question practice),
 * the system SHALL persist the updated data to LocalStorage immediately and restore it correctly on page reload.
 * Validates: Requirements 3.1, 10.1, 10.2, 10.3
 */
describe('Property 1: Progress Persistence', () => {
  beforeEach(() => {
    clearProgress()
  })

  afterEach(() => {
    clearProgress()
  })

  it('should persist and restore basic progress data', () => {
    const testProgress: UserProgress = {
      userId: 'test-user-123',
      currentDay: 5,
      completedDays: [1, 2, 3, 4],
      completedTasks: {
        'day1-task1': true,
        'day1-task2': true,
        'day2-task1': true
      },
      projectSubmissions: {},
      practicedQuestions: [],
      bookmarkedResources: [],
      timerStats: {
        totalMinutes: 120,
        weeklyMinutes: [30, 40, 50, 0, 0, 0, 0],
        lastSessionDate: new Date().toISOString()
      },
      lastUpdated: new Date().toISOString()
    }

    const saved = saveProgress(testProgress)
    expect(saved).toBe(true)

    const loaded = loadProgress()
    expect(loaded.userId).toBe(testProgress.userId)
    expect(loaded.currentDay).toBe(testProgress.currentDay)
    expect(loaded.completedDays).toEqual(testProgress.completedDays)
    expect(loaded.completedTasks).toEqual(testProgress.completedTasks)
  })

  it('should persist task completion updates', () => {
    const initial = loadProgress()
    
    // Simulate task completion
    const updated: UserProgress = {
      ...initial,
      completedTasks: {
        ...initial.completedTasks,
        'day1-task1': true,
        'day1-task2': true
      }
    }

    saveProgress(updated)
    const reloaded = loadProgress()

    expect(reloaded.completedTasks['day1-task1']).toBe(true)
    expect(reloaded.completedTasks['day1-task2']).toBe(true)
  })

  it('should persist project submissions', () => {
    const initial = loadProgress()
    
    const updated: UserProgress = {
      ...initial,
      projectSubmissions: {
        'project1': 'https://github.com/user/project1',
        'project2': 'https://github.com/user/project2'
      }
    }

    saveProgress(updated)
    const reloaded = loadProgress()

    expect(reloaded.projectSubmissions['project1']).toBe('https://github.com/user/project1')
    expect(reloaded.projectSubmissions['project2']).toBe('https://github.com/user/project2')
  })

  it('should persist practiced questions', () => {
    const initial = loadProgress()
    
    const updated: UserProgress = {
      ...initial,
      practicedQuestions: ['q1', 'q2', 'q3']
    }

    saveProgress(updated)
    const reloaded = loadProgress()

    expect(reloaded.practicedQuestions).toEqual(['q1', 'q2', 'q3'])
  })

  it('should persist bookmarked resources', () => {
    const initial = loadProgress()
    
    const updated: UserProgress = {
      ...initial,
      bookmarkedResources: ['res1', 'res2', 'res3']
    }

    saveProgress(updated)
    const reloaded = loadProgress()

    expect(reloaded.bookmarkedResources).toEqual(['res1', 'res2', 'res3'])
  })

  it('should persist timer statistics', () => {
    const initial = loadProgress()
    
    const updated: UserProgress = {
      ...initial,
      timerStats: {
        totalMinutes: 240,
        weeklyMinutes: [60, 50, 40, 30, 20, 10, 30],
        lastSessionDate: new Date().toISOString()
      }
    }

    saveProgress(updated)
    const reloaded = loadProgress()

    expect(reloaded.timerStats.totalMinutes).toBe(240)
    expect(reloaded.timerStats.weeklyMinutes).toEqual([60, 50, 40, 30, 20, 10, 30])
  })

  it('should handle multiple save-load cycles', () => {
    let progress = loadProgress()

    // Cycle 1: Complete day 1
    progress = {
      ...progress,
      currentDay: 2,
      completedDays: [1],
      completedTasks: { 'day1-task1': true }
    }
    saveProgress(progress)

    // Cycle 2: Complete day 2
    progress = loadProgress()
    progress = {
      ...progress,
      currentDay: 3,
      completedDays: [1, 2],
      completedTasks: { ...progress.completedTasks, 'day2-task1': true }
    }
    saveProgress(progress)

    // Cycle 3: Verify all data persisted
    const final = loadProgress()
    expect(final.currentDay).toBe(3)
    expect(final.completedDays).toEqual([1, 2])
    expect(final.completedTasks['day1-task1']).toBe(true)
    expect(final.completedTasks['day2-task1']).toBe(true)
  })

  it('should return default progress when storage is empty', () => {
    clearProgress()
    const progress = loadProgress()

    expect(progress.currentDay).toBe(1)
    expect(progress.completedDays).toEqual([])
    expect(progress.completedTasks).toEqual({})
    expect(progress.userId).toBeTruthy()
  })

  it('should handle corrupted data gracefully', () => {
    // Manually corrupt the storage
    localStorage.setItem('aiml-platform-progress', 'invalid json {{{')

    const progress = loadProgress()
    
    // Should return default progress
    expect(progress.currentDay).toBe(1)
    expect(progress.completedDays).toEqual([])
  })

  it('should preserve data integrity across multiple operations', () => {
    const operations = [
      { currentDay: 1, completedDays: [] },
      { currentDay: 2, completedDays: [1] },
      { currentDay: 3, completedDays: [1, 2] },
      { currentDay: 4, completedDays: [1, 2, 3] },
      { currentDay: 5, completedDays: [1, 2, 3, 4] }
    ]

    operations.forEach(op => {
      const progress = loadProgress()
      const updated = {
        ...progress,
        ...op
      }
      saveProgress(updated)
    })

    const final = loadProgress()
    expect(final.currentDay).toBe(5)
    expect(final.completedDays).toEqual([1, 2, 3, 4])
  })
})

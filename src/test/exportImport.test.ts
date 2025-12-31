import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { saveProgress, loadProgress, exportProgress, importProgress, clearProgress } from '../utils/storage'
import { UserProgress } from '../types'

/**
 * Property 7: Data Export-Import Round Trip
 * For any valid progress data, exporting then importing SHALL produce equivalent progress state
 * with all completed tasks, submissions, and statistics preserved.
 * Validates: Requirements 10.4
 */
describe('Property 7: Data Export-Import Round Trip', () => {
  beforeEach(() => {
    clearProgress()
  })

  afterEach(() => {
    clearProgress()
  })

  it('should preserve all data through export-import cycle', () => {
    const originalProgress: UserProgress = {
      userId: 'test-user-456',
      currentDay: 15,
      completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      completedTasks: {
        'day1-task1': true,
        'day1-task2': true,
        'day2-task1': true,
        'day5-task3': true
      },
      projectSubmissions: {
        'project1': 'https://github.com/user/project1',
        'project2': 'https://github.com/user/project2'
      },
      practicedQuestions: ['q1', 'q2', 'q3', 'q4', 'q5'],
      bookmarkedResources: ['res1', 'res2', 'res3'],
      timerStats: {
        totalMinutes: 450,
        weeklyMinutes: [60, 70, 80, 90, 75, 50, 25],
        lastSessionDate: '2024-01-15T10:00:00.000Z'
      },
      lastUpdated: '2024-01-15T10:00:00.000Z'
    }

    // Save original
    saveProgress(originalProgress)

    // Export
    const exported = exportProgress()
    expect(exported).toBeTruthy()
    expect(typeof exported).toBe('string')

    // Clear storage
    clearProgress()

    // Import
    const imported = importProgress(exported)
    expect(imported).toBe(true)

    // Load and verify
    const restored = loadProgress()
    expect(restored.userId).toBe(originalProgress.userId)
    expect(restored.currentDay).toBe(originalProgress.currentDay)
    expect(restored.completedDays).toEqual(originalProgress.completedDays)
    expect(restored.completedTasks).toEqual(originalProgress.completedTasks)
    expect(restored.projectSubmissions).toEqual(originalProgress.projectSubmissions)
    expect(restored.practicedQuestions).toEqual(originalProgress.practicedQuestions)
    expect(restored.bookmarkedResources).toEqual(originalProgress.bookmarkedResources)
    expect(restored.timerStats.totalMinutes).toBe(originalProgress.timerStats.totalMinutes)
    expect(restored.timerStats.weeklyMinutes).toEqual(originalProgress.timerStats.weeklyMinutes)
  })

  it('should handle empty progress data', () => {
    const emptyProgress = loadProgress() // Gets default

    saveProgress(emptyProgress)
    const exported = exportProgress()
    
    clearProgress()
    importProgress(exported)
    
    const restored = loadProgress()
    expect(restored.currentDay).toBe(1)
    expect(restored.completedDays).toEqual([])
    expect(restored.completedTasks).toEqual({})
  })

  it('should handle progress with only completed tasks', () => {
    const progress: UserProgress = {
      ...loadProgress(),
      completedTasks: {
        'task1': true,
        'task2': true,
        'task3': true
      }
    }

    saveProgress(progress)
    const exported = exportProgress()
    
    clearProgress()
    importProgress(exported)
    
    const restored = loadProgress()
    expect(restored.completedTasks).toEqual(progress.completedTasks)
  })

  it('should handle progress with only project submissions', () => {
    const progress: UserProgress = {
      ...loadProgress(),
      projectSubmissions: {
        'proj1': 'https://github.com/user/proj1',
        'proj2': 'https://github.com/user/proj2'
      }
    }

    saveProgress(progress)
    const exported = exportProgress()
    
    clearProgress()
    importProgress(exported)
    
    const restored = loadProgress()
    expect(restored.projectSubmissions).toEqual(progress.projectSubmissions)
  })

  it('should reject invalid import data', () => {
    const invalidData = [
      'invalid json',
      '{}',
      '{"progress": null}',
      '{"progress": "not an object"}',
      '{"progress": {}}', // Missing required fields
    ]

    invalidData.forEach(data => {
      const result = importProgress(data)
      expect(result).toBe(false)
    })
  })

  it('should handle multiple export-import cycles', () => {
    let progress = loadProgress()

    // Cycle 1
    progress = { ...progress, currentDay: 5, completedDays: [1, 2, 3, 4] }
    saveProgress(progress)
    let exported = exportProgress()
    clearProgress()
    importProgress(exported)

    // Cycle 2
    progress = loadProgress()
    progress = { ...progress, currentDay: 10, completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
    saveProgress(progress)
    exported = exportProgress()
    clearProgress()
    importProgress(exported)

    // Verify final state
    const final = loadProgress()
    expect(final.currentDay).toBe(10)
    expect(final.completedDays).toHaveLength(9)
  })

  it('should preserve complex nested data structures', () => {
    const complexProgress: UserProgress = {
      ...loadProgress(),
      completedTasks: {
        'day1-task1': true,
        'day1-task2': true,
        'day2-task1': true,
        'day2-task2': true,
        'day2-task3': true,
        'day3-task1': true
      },
      projectSubmissions: {
        'project-student-analyzer': 'https://github.com/user/student-analyzer',
        'project-sales-analysis': 'https://github.com/user/sales-analysis',
        'project-eda-retail': 'https://github.com/user/eda-retail'
      },
      practicedQuestions: Array.from({ length: 50 }, (_, i) => `question-${i + 1}`),
      bookmarkedResources: Array.from({ length: 30 }, (_, i) => `resource-${i + 1}`)
    }

    saveProgress(complexProgress)
    const exported = exportProgress()
    
    clearProgress()
    importProgress(exported)
    
    const restored = loadProgress()
    expect(Object.keys(restored.completedTasks)).toHaveLength(6)
    expect(Object.keys(restored.projectSubmissions)).toHaveLength(3)
    expect(restored.practicedQuestions).toHaveLength(50)
    expect(restored.bookmarkedResources).toHaveLength(30)
  })

  it('should include metadata in export', () => {
    const progress = loadProgress()
    saveProgress(progress)
    
    const exported = exportProgress()
    const parsed = JSON.parse(exported)
    
    expect(parsed.version).toBeTruthy()
    expect(parsed.exportDate).toBeTruthy()
    expect(parsed.progress).toBeTruthy()
  })

  it('should handle special characters in data', () => {
    const progress: UserProgress = {
      ...loadProgress(),
      projectSubmissions: {
        'project-with-special-chars': 'https://github.com/user/project-name_123',
        'another-project': 'https://github.com/user/my-project-2024'
      }
    }

    saveProgress(progress)
    const exported = exportProgress()
    
    clearProgress()
    importProgress(exported)
    
    const restored = loadProgress()
    expect(restored.projectSubmissions['project-with-special-chars']).toBe(
      'https://github.com/user/project-name_123'
    )
  })
})

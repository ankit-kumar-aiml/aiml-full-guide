import { UserProgress } from '../types'

const STORAGE_KEY = 'aiml-platform-progress'
const STORAGE_VERSION = '1.0'

// Default progress state
const getDefaultProgress = (): UserProgress => ({
  userId: crypto.randomUUID(),
  currentDay: 1,
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
})

/**
 * Save progress data to LocalStorage
 * Handles quota exceeded errors gracefully
 */
export const saveProgress = (progress: UserProgress): boolean => {
  try {
    const data = {
      version: STORAGE_VERSION,
      progress: {
        ...progress,
        lastUpdated: new Date().toISOString()
      }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return true
  } catch (error) {
    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      console.error('LocalStorage quota exceeded. Please export your progress.')
      // Attempt to clear old data and retry
      try {
        const essential = {
          version: STORAGE_VERSION,
          progress: {
            userId: progress.userId,
            currentDay: progress.currentDay,
            completedDays: progress.completedDays,
            completedTasks: progress.completedTasks,
            projectSubmissions: progress.projectSubmissions,
            lastUpdated: new Date().toISOString()
          }
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(essential))
        return true
      } catch {
        return false
      }
    }
    console.error('Error saving progress:', error)
    return false
  }
}

/**
 * Load progress data from LocalStorage
 * Returns default progress if not found or corrupted
 */
export const loadProgress = (): UserProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return getDefaultProgress()
    }
    
    const data = JSON.parse(stored)
    
    // Validate structure
    if (!data.progress || typeof data.progress !== 'object') {
      console.warn('Invalid progress data structure, resetting to default')
      return getDefaultProgress()
    }
    
    // Merge with defaults to handle missing fields
    return {
      ...getDefaultProgress(),
      ...data.progress
    }
  } catch (error) {
    console.error('Error loading progress:', error)
    return getDefaultProgress()
  }
}

/**
 * Export progress data as JSON string
 */
export const exportProgress = (): string => {
  const progress = loadProgress()
  return JSON.stringify({
    version: STORAGE_VERSION,
    exportDate: new Date().toISOString(),
    progress
  }, null, 2)
}

/**
 * Import progress data from JSON string
 * Validates data before importing
 */
export const importProgress = (jsonString: string): boolean => {
  try {
    const data = JSON.parse(jsonString)
    
    // Validate structure
    if (!data.progress || typeof data.progress !== 'object') {
      throw new Error('Invalid import data structure')
    }
    
    // Validate required fields
    const required = ['userId', 'currentDay', 'completedDays', 'completedTasks']
    for (const field of required) {
      if (!(field in data.progress)) {
        throw new Error(`Missing required field: ${field}`)
      }
    }
    
    // Save imported data
    return saveProgress(data.progress)
  } catch (error) {
    console.error('Error importing progress:', error)
    return false
  }
}

/**
 * Clear all progress data
 */
export const clearProgress = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Error clearing progress:', error)
  }
}

/**
 * Check if LocalStorage is available
 */
export const isStorageAvailable = (): boolean => {
  try {
    const test = '__storage_test__'
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch {
    return false
  }
}

/**
 * Get storage usage information
 */
export const getStorageInfo = (): { used: number; available: boolean } => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    const used = stored ? new Blob([stored]).size : 0
    return {
      used,
      available: isStorageAvailable()
    }
  } catch {
    return {
      used: 0,
      available: false
    }
  }
}

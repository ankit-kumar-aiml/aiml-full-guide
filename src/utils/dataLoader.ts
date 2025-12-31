import { DayData, Phase } from '../types'
import { phases } from '../data/phases'
import { allPhase1Days } from '../data/phase1-days1-30'

// Central data loader for the platform
export const getPhases = (): Phase[] => {
  return phases
}

export const getDayData = (dayNumber: number): DayData | null => {
  // For now, only Phase 1 data is available
  if (dayNumber >= 1 && dayNumber <= 30) {
    return allPhase1Days.find(day => day.dayNumber === dayNumber) || null
  }
  
  // Placeholder for other phases
  return {
    dayNumber,
    phase: 'Coming Soon',
    goal: 'Content for this day will be added soon',
    tasks: [],
    resources: [],
    practiceProblems: [],
    commitRequirement: 'TBD'
  }
}

export const getPhaseByDay = (dayNumber: number): Phase | null => {
  return phases.find(phase => 
    dayNumber >= phase.dayRange[0] && dayNumber <= phase.dayRange[1]
  ) || null
}

export const getAllDaysInPhase = (phaseId: number): DayData[] => {
  const phase = phases.find(p => p.id === phaseId)
  if (!phase) return []
  
  const [start, end] = phase.dayRange
  const days: DayData[] = []
  
  for (let i = start; i <= end; i++) {
    const dayData = getDayData(i)
    if (dayData) days.push(dayData)
  }
  
  return days
}

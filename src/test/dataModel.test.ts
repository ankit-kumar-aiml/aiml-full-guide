import { describe, it, expect } from 'vitest'
import { getPhases, getDayData, getPhaseByDay } from '../utils/dataLoader'

/**
 * Property 9: Phase Boundary Integrity
 * For any day number, it SHALL belong to exactly one phase,
 * and navigating to that day SHALL display the correct phase context.
 * Validates: Requirements 11.1, 11.3
 */
describe('Property 9: Phase Boundary Integrity', () => {
  const phases = getPhases()
  
  it('should have exactly 6 phases', () => {
    expect(phases).toHaveLength(6)
  })
  
  it('should have no gaps in day ranges', () => {
    for (let i = 0; i < phases.length - 1; i++) {
      const currentPhaseEnd = phases[i].dayRange[1]
      const nextPhaseStart = phases[i + 1].dayRange[0]
      expect(nextPhaseStart).toBe(currentPhaseEnd + 1)
    })
  })
  
  it('should start at day 1 and end at day 365', () => {
    expect(phases[0].dayRange[0]).toBe(1)
    expect(phases[phases.length - 1].dayRange[1]).toBe(365)
  })
  
  it('should map each day to exactly one phase', () => {
    // Test sample days across all phases
    const testDays = [1, 15, 30, 31, 45, 60, 61, 90, 120, 121, 150, 180, 181, 225, 270, 271, 320, 365]
    
    testDays.forEach(day => {
      const matchingPhases = phases.filter(phase => 
        day >= phase.dayRange[0] && day <= phase.dayRange[1]
      )
      expect(matchingPhases).toHaveLength(1)
    })
  })
  
  it('should return correct phase for any day using getPhaseByDay', () => {
    expect(getPhaseByDay(1)?.id).toBe(1)
    expect(getPhaseByDay(30)?.id).toBe(1)
    expect(getPhaseByDay(31)?.id).toBe(2)
    expect(getPhaseByDay(60)?.id).toBe(2)
    expect(getPhaseByDay(365)?.id).toBe(6)
  })
  
  it('should have valid day data structure', () => {
    const day1 = getDayData(1)
    expect(day1).toBeTruthy()
    expect(day1?.dayNumber).toBe(1)
    expect(day1?.phase).toBeTruthy()
    expect(day1?.goal).toBeTruthy()
    expect(Array.isArray(day1?.tasks)).toBe(true)
    expect(Array.isArray(day1?.resources)).toBe(true)
    expect(Array.isArray(day1?.practiceProblems)).toBe(true)
  })
  
  it('should have no overlapping phase ranges', () => {
    for (let i = 0; i < phases.length; i++) {
      for (let j = i + 1; j < phases.length; j++) {
        const phase1 = phases[i]
        const phase2 = phases[j]
        
        // Check no overlap
        const overlap = !(
          phase1.dayRange[1] < phase2.dayRange[0] ||
          phase2.dayRange[1] < phase1.dayRange[0]
        )
        expect(overlap).toBe(false)
      }
    }
  })
})

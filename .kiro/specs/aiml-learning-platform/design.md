# Design Document: AI/ML Learning Platform

## Overview

The AI/ML Learning Platform is a comprehensive web application designed to guide CSE AI/ML B.Tech students through a structured 365-day learning journey. The platform provides daily learning content, progress tracking, project management, and interview preparation resources. Built with modern web technologies, it emphasizes user experience, performance, and accessibility while maintaining a clean, professional interface.

## Architecture

### System Architecture

The platform follows a modern web architecture pattern:

```
┌─────────────────────────────────────────────────────────┐
│                     Client Layer                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   React UI   │  │  State Mgmt  │  │ Local Storage│  │
│  │  Components  │  │   (Context)  │  │   Manager    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   Data Layer                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Roadmap    │  │   Progress   │  │   Resources  │  │
│  │     Data     │  │     Data     │  │     Data     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Technology Stack

**Frontend:**
- React 18+ (Component-based UI)
- React Router (Navigation)
- Tailwind CSS (Styling)
- Lucide React (Icons)
- LocalStorage API (Data persistence)

**Build Tools:**
- Vite (Fast development and build)
- ESLint (Code quality)
- Prettier (Code formatting)

**Hosting:**
- Vercel / Netlify (Static hosting with CDN)

## Components and Interfaces

### Core Components

#### 1. Navigation Component
```typescript
interface NavigationProps {
  currentPath: string;
  userProgress: ProgressData;
}

interface NavigationItem {
  label: string;
  path: string;
  icon: string;
}
```

Responsibilities:
- Display main navigation menu
- Show current location breadcrumbs
- Highlight active route
- Display progress indicator in header

#### 2. Roadmap Component
```typescript
interface RoadmapProps {
  phases: Phase[];
  currentDay: number;
  onDaySelect: (day: number) => void;
}

interface Phase {
  id: number;
  name: string;
  dayRange: [number, number];
  description: string;
  color: string;
}
```

Responsibilities:
- Display all 6 learning phases
- Show day ranges for each phase
- Visualize overall progress
- Enable navigation to specific days

#### 3. DayContent Component
```typescript
interface DayContentProps {
  day: number;
  content: DayData;
  onTaskComplete: (taskId: string) => void;
  onResourceClick: (resourceUrl: string) => void;
}

interface DayData {
  dayNumber: number;
  phase: string;
  goal: string;
  tasks: Task[];
  resources: Resource[];
  practiceProblems: PracticeProblem[];
  commitRequirement: string;
}

interface Task {
  id: string;
  description: string;
  timeAllocation: string;
  completed: boolean;
}

interface Resource {
  id: string;
  type: 'video' | 'article' | 'documentation';
  title: string;
  url: string;
  duration?: string;
}

interface PracticeProblem {
  id: string;
  description: string;
  expectedOutput: string;
  difficulty: 'easy' | 'medium' | 'hard';
}
```

Responsibilities:
- Display daily learning objectives
- Show tasks with time allocations
- Provide resource links
- Enable task completion marking
- Display practice problems

#### 4. ProgressTracker Component
```typescript
interface ProgressTrackerProps {
  progressData: ProgressData;
  onExport: () => void;
  onImport: (data: string) => void;
}

interface ProgressData {
  currentDay: number;
  completedDays: number[];
  completedTasks: Record<string, boolean>;
  projectSubmissions: Record<string, string>;
  totalDays: number;
  phaseProgress: Record<number, number>;
}
```

Responsibilities:
- Display overall completion percentage
- Show phase-wise progress
- Visualize daily completion calendar
- Provide export/import functionality
- Highlight missed days

#### 5. ProjectCard Component
```typescript
interface ProjectCardProps {
  project: Project;
  onSubmit: (repoUrl: string) => void;
}

interface Project {
  id: string;
  dayRange: [number, number];
  title: string;
  description: string;
  requirements: string[];
  deliverables: string[];
  dataset?: string;
  submittedRepo?: string;
}
```

Responsibilities:
- Display project requirements
- Show expected deliverables
- Provide repository submission form
- Display submission status

#### 6. Timer Component
```typescript
interface TimerProps {
  presets: number[];
  onComplete: (duration: number) => void;
}

interface TimerState {
  duration: number;
  elapsed: number;
  isRunning: boolean;
  currentBlock: string;
}
```

Responsibilities:
- Provide preset time blocks (1.5hr, 30min, 15min)
- Track elapsed time
- Notify on completion
- Save session statistics

#### 7. InterviewPrep Component
```typescript
interface InterviewPrepProps {
  questions: InterviewQuestion[];
  onMarkPracticed: (questionId: string) => void;
}

interface InterviewQuestion {
  id: string;
  category: 'theory' | 'coding' | 'system-design';
  question: string;
  answerFormat: string;
  exampleAnswer: string;
  practiced: boolean;
}
```

Responsibilities:
- Display categorized interview questions
- Show answer formats and examples
- Track practiced questions
- Provide system design templates

## Data Models

### Roadmap Data Structure

```typescript
interface RoadmapData {
  phases: Phase[];
  days: Record<number, DayData>;
  projects: Project[];
  interviewQuestions: InterviewQuestion[];
}
```

The roadmap data will be stored as static JSON files organized by phase:
- `data/phase1-days1-30.json`
- `data/phase2-days31-60.json`
- `data/phase3-days61-120.json`
- `data/phase4-days121-180.json`
- `data/phase5-days181-270.json`
- `data/phase6-days271-365.json`

### Progress Data Structure

```typescript
interface UserProgress {
  userId: string; // Generated UUID
  currentDay: number;
  completedDays: number[];
  completedTasks: Record<string, boolean>; // taskId -> completed
  projectSubmissions: Record<string, string>; // projectId -> repoUrl
  practicedQuestions: string[]; // questionIds
  bookmarkedResources: string[]; // resourceIds
  timerStats: {
    totalMinutes: number;
    weeklyMinutes: number[];
    lastSessionDate: string;
  };
  lastUpdated: string; // ISO timestamp
}
```

Stored in browser LocalStorage with key: `aiml-platform-progress`

### Resource Library Structure

```typescript
interface ResourceLibrary {
  categories: ResourceCategory[];
  resources: Resource[];
}

interface ResourceCategory {
  id: string;
  name: string;
  subcategories: string[];
}

interface Resource {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  type: 'video' | 'article' | 'documentation' | 'dataset';
  url: string;
  description: string;
  tags: string[];
  phase: number;
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Progress Persistence
*For any* user action that modifies progress data (task completion, project submission, question practice), the system SHALL persist the updated data to LocalStorage immediately and restore it correctly on page reload.

**Validates: Requirements 3.1, 10.1, 10.2, 10.3**

### Property 2: Navigation Consistency
*For any* navigation action (clicking phase, day, or breadcrumb), the system SHALL update the URL, display the correct content, and maintain scroll position consistency.

**Validates: Requirements 1.2, 1.3, 1.4**

### Property 3: External Link Integrity
*For any* external resource link (YouTube, Kaggle, documentation), when clicked, the system SHALL open the link in a new tab, preserve the current progress state, and not cause navigation away from the platform.

**Validates: Requirements 9.1, 9.2, 9.3, 9.5**

### Property 4: Progress Calculation Accuracy
*For any* progress data state, the calculated completion percentage SHALL equal (completedDays.length / totalDays) * 100, and phase progress SHALL equal (completed days in phase / total days in phase) * 100.

**Validates: Requirements 3.2, 3.3**

### Property 5: Task Completion Idempotence
*For any* task, marking it as complete multiple times SHALL result in the same state as marking it complete once, with no duplicate entries in completedTasks.

**Validates: Requirements 2.4, 3.1**

### Property 6: Timer State Consistency
*For any* timer session, pausing and resuming SHALL preserve elapsed time accurately, and the total elapsed time SHALL never exceed the preset duration.

**Validates: Requirements 7.4, 7.5**

### Property 7: Data Export-Import Round Trip
*For any* valid progress data, exporting then importing SHALL produce equivalent progress state with all completed tasks, submissions, and statistics preserved.

**Validates: Requirements 10.4**

### Property 8: Responsive Layout Adaptation
*For any* viewport width (mobile: <768px, tablet: 768-1024px, desktop: >1024px), the system SHALL render appropriate layout without horizontal scrolling or content overflow.

**Validates: Requirements 8.1, 8.2**

### Property 9: Phase Boundary Integrity
*For any* day number, it SHALL belong to exactly one phase, and navigating to that day SHALL display the correct phase context.

**Validates: Requirements 11.1, 11.3**

### Property 10: Resource Search Accuracy
*For any* search query in the resource library, all returned results SHALL contain the query string in either title, description, or tags (case-insensitive).

**Validates: Requirements 5.2**

## Error Handling

### Client-Side Error Handling

**LocalStorage Errors:**
- Quota exceeded: Display warning and offer export functionality
- Parse errors: Reset to default state with user confirmation
- Access denied: Fall back to session-only mode

**Network Errors:**
- Failed resource loads: Display placeholder with retry button
- Broken external links: Show warning icon and alternative resources

**Invalid State:**
- Corrupted progress data: Validate on load and reset invalid fields
- Out-of-range day numbers: Redirect to current day or day 1

### User Feedback

All errors will display user-friendly messages:
- Toast notifications for temporary issues
- Modal dialogs for critical errors requiring action
- Inline warnings for validation errors

## Testing Strategy

### Unit Testing

**Component Tests:**
- Navigation component renders correct items
- DayContent displays all task types correctly
- ProgressTracker calculates percentages accurately
- Timer component handles pause/resume correctly
- ProjectCard validates repository URL format

**Utility Function Tests:**
- Progress calculation functions
- Date/time formatting functions
- LocalStorage wrapper functions
- URL validation functions

**Edge Cases:**
- Empty progress data
- Day 1 and Day 365 boundary conditions
- Maximum LocalStorage size
- Invalid JSON in import data

### Property-Based Testing

Each correctness property will be implemented as a property-based test with minimum 100 iterations:

**Property Test 1: Progress Persistence**
- Generate random progress states
- Save to LocalStorage
- Reload and verify equality
- **Feature: aiml-learning-platform, Property 1: Progress Persistence**

**Property Test 2: Navigation Consistency**
- Generate random navigation sequences
- Verify URL and content match
- **Feature: aiml-learning-platform, Property 2: Navigation Consistency**

**Property Test 3: External Link Integrity**
- Generate random resource links
- Verify new tab opening and state preservation
- **Feature: aiml-learning-platform, Property 3: External Link Integrity**

**Property Test 4: Progress Calculation Accuracy**
- Generate random completed day sets
- Verify percentage calculations
- **Feature: aiml-learning-platform, Property 4: Progress Calculation Accuracy**

**Property Test 5: Task Completion Idempotence**
- Generate random task completion sequences
- Verify idempotent behavior
- **Feature: aiml-learning-platform, Property 5: Task Completion Idempotence**

**Property Test 6: Timer State Consistency**
- Generate random pause/resume sequences
- Verify time accuracy
- **Feature: aiml-learning-platform, Property 6: Timer State Consistency**

**Property Test 7: Data Export-Import Round Trip**
- Generate random progress data
- Export, import, and verify equality
- **Feature: aiml-learning-platform, Property 7: Data Export-Import Round Trip**

**Property Test 8: Responsive Layout Adaptation**
- Generate random viewport widths
- Verify no overflow or scrolling issues
- **Feature: aiml-learning-platform, Property 8: Responsive Layout Adaptation**

**Property Test 9: Phase Boundary Integrity**
- Generate random day numbers
- Verify single phase membership
- **Feature: aiml-learning-platform, Property 9: Phase Boundary Integrity**

**Property Test 10: Resource Search Accuracy**
- Generate random search queries
- Verify all results contain query
- **Feature: aiml-learning-platform, Property 10: Resource Search Accuracy**

### Integration Testing

- Full user journey: Day 1 → Complete tasks → Navigate to Day 2
- Progress export → Clear data → Import → Verify restoration
- Complete all tasks in a phase → Verify phase completion
- Submit project → Verify display in project list

### Manual Testing Checklist

- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS Safari, Android Chrome)
- Keyboard navigation accessibility
- Screen reader compatibility
- Performance on slow connections
- LocalStorage limits (test with large progress data)

## Performance Considerations

**Optimization Strategies:**
- Lazy load day content (load only current day data)
- Virtualize long lists (roadmap calendar, resource library)
- Memoize expensive calculations (progress percentages)
- Debounce search inputs
- Code splitting by route
- Image optimization (WebP format, lazy loading)
- Minimize bundle size (tree shaking, compression)

**Performance Targets:**
- Initial page load: < 2 seconds
- Route navigation: < 500ms
- Task completion action: < 100ms
- Search results: < 300ms
- LocalStorage operations: < 50ms

## Accessibility

**WCAG 2.1 Level AA Compliance:**
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support (Tab, Enter, Escape)
- Focus indicators on all interactive elements
- Color contrast ratio ≥ 4.5:1
- Alt text for all images
- Skip navigation links
- Responsive text sizing (rem units)

## Deployment Strategy

**Build Process:**
1. Run tests (unit + property-based)
2. Build production bundle (Vite)
3. Optimize assets (compression, minification)
4. Generate static files

**Hosting:**
- Deploy to Vercel or Netlify
- Enable CDN for global distribution
- Configure custom domain
- Enable HTTPS
- Set up analytics (optional)

**Environment Variables:**
- `VITE_APP_VERSION`: Application version
- `VITE_HOST_NAME`: "Ankit Kumar"
- `VITE_ANALYTICS_ID`: Analytics tracking ID (optional)

## Future Enhancements

**Phase 2 Features:**
- Backend API for cloud progress sync
- User authentication
- Community forum
- Peer code review system
- Gamification (badges, streaks)
- Mobile app (React Native)
- AI-powered doubt resolution
- Live coding sessions
- Certificate generation on completion

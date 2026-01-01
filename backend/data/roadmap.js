// Complete 365-day roadmap data
export const roadmapData = {
  1: {
    day: 1,
    phase: 1,
    goal: 'Python setup + basics',
    tasks: [
      { id: 't1', title: 'Install Anaconda', time: '15min' },
      { id: 't2', title: 'Install VS Code', time: '10min' },
      { id: 't3', title: 'Create GitHub account', time: '10min' },
      { id: 't4', title: 'Learn Variables & Data types', time: '45min' },
      { id: 't5', title: 'Practice print, input', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Python Basics - Corey Schafer', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' }
    ],
    practice: ['Print your name, age', 'Take 2 numbers → sum, product'],
    commit: 'day1_basics.py'
  },
  2: {
    day: 2,
    phase: 1,
    goal: 'Conditions + loops',
    tasks: [
      { id: 't1', title: 'Learn if/else statements', time: '30min' },
      { id: 't2', title: 'Learn for loops', time: '30min' },
      { id: 't3', title: 'Learn while loops', time: '30min' },
      { id: 't4', title: 'Practice problems', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Python Loops', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw&t=1200s' }
    ],
    practice: ['Even/odd checker', 'Table of a number', 'Sum of first n numbers'],
    commit: 'day2_loops.py'
  },
  3: {
    day: 3,
    phase: 1,
    goal: 'Functions (VERY IMPORTANT)',
    tasks: [
      { id: 't1', title: 'Learn def keyword', time: '20min' },
      { id: 't2', title: 'Learn parameters & arguments', time: '30min' },
      { id: 't3', title: 'Learn return statements', time: '20min' },
      { id: 't4', title: 'Practice function problems', time: '50min' }
    ],
    resources: [
      { type: 'video', title: 'Python Functions', url: 'https://www.youtube.com/watch?v=9Os0o3wzS_I' }
    ],
    practice: ['Function to calculate average', 'Function to check prime'],
    commit: 'day3_functions.py'
  },
  4: {
    day: 4,
    phase: 1,
    goal: 'Lists & Tuples',
    tasks: [
      { id: 't1', title: 'Learn indexing & slicing', time: '30min' },
      { id: 't2', title: 'Learn list methods (append, pop)', time: '30min' },
      { id: 't3', title: 'Learn tuples', time: '20min' },
      { id: 't4', title: 'Practice problems', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'Python Lists', url: 'https://www.youtube.com/watch?v=W8KRzm-HUcc' }
    ],
    practice: ['Find max/min in list', 'Reverse list'],
    commit: 'day4_lists.py'
  },
  5: {
    day: 5,
    phase: 1,
    goal: 'Dictionary (INTERVIEW FAVORITE)',
    tasks: [
      { id: 't1', title: 'Learn key-value pairs', time: '30min' },
      { id: 't2', title: 'Learn dictionary methods', time: '30min' },
      { id: 't3', title: 'Loop through dictionary', time: '20min' },
      { id: 't4', title: 'Practice problems', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'Python Dictionaries', url: 'https://www.youtube.com/watch?v=daefaLgNkw0' }
    ],
    practice: ['Student marks dictionary', 'Find topper'],
    commit: 'day5_dict.py'
  },
  6: {
    day: 6,
    phase: 1,
    goal: 'File Handling',
    tasks: [
      { id: 't1', title: 'Learn file read operations', time: '30min' },
      { id: 't2', title: 'Learn file write operations', time: '30min' },
      { id: 't3', title: 'Practice with text files', time: '60min' }
    ],
    resources: [
      { type: 'video', title: 'Python File Handling', url: 'https://www.youtube.com/watch?v=Uh2ebFW8OYM' }
    ],
    practice: ['Read marks from file', 'Calculate average'],
    commit: 'day6_files.py'
  },
  7: {
    day: 7,
    phase: 1,
    goal: 'MINI PROJECT 1: Student Result Analyzer',
    tasks: [
      { id: 't1', title: 'Create marks.txt input file', time: '15min' },
      { id: 't2', title: 'Read and parse marks', time: '45min' },
      { id: 't3', title: 'Calculate average and grade', time: '45min' },
      { id: 't4', title: 'Write output and README', time: '30min' }
    ],
    resources: [],
    practice: ['Complete project with clean code'],
    commit: 'project_student_analyzer/',
    isProject: true
  },
  8: {
    day: 8,
    phase: 1,
    goal: 'NumPy intro',
    tasks: [
      { id: 't1', title: 'Learn NumPy arrays', time: '30min' },
      { id: 't2', title: 'Learn shape and slicing', time: '30min' },
      { id: 't3', title: 'Practice array operations', time: '60min' }
    ],
    resources: [
      { type: 'video', title: 'NumPy Tutorial', url: 'https://www.youtube.com/watch?v=QUT1VHiLmmI' }
    ],
    practice: ['Create array', 'Calculate mean, sum'],
    commit: 'day8_numpy.py'
  },
  9: {
    day: 9,
    phase: 1,
    goal: 'NumPy operations',
    tasks: [
      { id: 't1', title: 'Learn matrix operations', time: '45min' },
      { id: 't2', title: 'Learn reshape', time: '30min' },
      { id: 't3', title: 'Practice advanced operations', time: '45min' }
    ],
    resources: [],
    practice: ['Matrix multiplication', 'Reshape arrays'],
    commit: 'day9_numpy_ops.py'
  },
  10: {
    day: 10,
    phase: 1,
    goal: 'Pandas intro',
    tasks: [
      { id: 't1', title: 'Learn read_csv', time: '30min' },
      { id: 't2', title: 'Learn head(), info(), describe()', time: '30min' },
      { id: 't3', title: 'Practice with sample dataset', time: '60min' }
    ],
    resources: [
      { type: 'video', title: 'Pandas Tutorial', url: 'https://www.youtube.com/watch?v=vmEHCJofslg' }
    ],
    practice: ['Load CSV', 'Explore data'],
    commit: 'day10_pandas.py'
  }
};

// Generate remaining days with placeholder content
for (let i = 11; i <= 365; i++) {
  if (!roadmapData[i]) {
    let phase, goal;
    
    if (i <= 30) {
      phase = 1;
      goal = `Day ${i}: Python & Data Foundation`;
    } else if (i <= 60) {
      phase = 2;
      goal = `Day ${i}: ML Algorithms`;
    } else if (i <= 120) {
      phase = 3;
      goal = `Day ${i}: Advanced ML`;
    } else if (i <= 180) {
      phase = 4;
      goal = `Day ${i}: Deployment & MLOps`;
    } else if (i <= 270) {
      phase = 5;
      goal = `Day ${i}: FAANG Prep`;
    } else {
      phase = 6;
      goal = `Day ${i}: Interview Mastery`;
    }
    
    roadmapData[i] = {
      day: i,
      phase,
      goal,
      tasks: [
        { id: 't1', title: 'Core learning', time: '1.5hr' },
        { id: 't2', title: 'Hands-on practice', time: '1.5hr' },
        { id: 't3', title: 'Notes & revision', time: '30min' }
      ],
      resources: [],
      practice: ['Complete daily tasks'],
      commit: `day${i}_code`
    };
  }
}

export default roadmapData;

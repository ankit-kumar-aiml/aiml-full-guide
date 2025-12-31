import { DayData } from '../types'

export const phase1Days: DayData[] = [
  {
    dayNumber: 1,
    phase: 'Foundation',
    goal: 'Python setup + basics',
    tasks: [
      {
        id: 'day1-task1',
        description: 'Install Anaconda, VS Code, and create GitHub account',
        timeAllocation: '30 min',
        completed: false
      },
      {
        id: 'day1-task2',
        description: 'Learn Variables, Data types, Print, Input',
        timeAllocation: '1 hr',
        completed: false
      },
      {
        id: 'day1-task3',
        description: 'Practice: Print your name, age; Take 2 numbers → sum, product',
        timeAllocation: '1 hr',
        completed: false
      },
      {
        id: 'day1-task4',
        description: 'Create day1_basics.py and commit to GitHub repo: ml-journey',
        timeAllocation: '30 min',
        completed: false
      }
    ],
    resources: [
      {
        id: 'day1-video1',
        type: 'video',
        title: 'Python Basics - Corey Schafer',
        url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
        duration: '45 min'
      }
    ],
    practiceProblems: [
      {
        id: 'day1-prob1',
        description: 'Write a program to print your name and age',
        expectedOutput: 'Name: [Your Name], Age: [Your Age]',
        difficulty: 'easy'
      },
      {
        id: 'day1-prob2',
        description: 'Take two numbers as input and print their sum and product',
        expectedOutput: 'Sum: X, Product: Y',
        difficulty: 'easy'
      }
    ],
    commitRequirement: 'day1_basics.py in GitHub repo ml-journey'
  },
  {
    dayNumber: 2,
    phase: 'Foundation',
    goal: 'Conditions + loops',
    tasks: [
      {
        id: 'day2-task1',
        description: 'Learn if/else, for loop, while loop',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day2-task2',
        description: 'Practice: Even/odd checker, Table of a number, Sum of first n numbers',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day2-task3',
        description: 'Commit day2_loops.py',
        timeAllocation: '15 min',
        completed: false
      }
    ],
    resources: [
      {
        id: 'day2-video1',
        type: 'video',
        title: 'Python Conditions and Loops',
        url: 'https://www.youtube.com/watch?v=rfscVS0vtbw&t=1200s',
        duration: '1 hr'
      }
    ],
    practiceProblems: [
      {
        id: 'day2-prob1',
        description: 'Write a program to check if a number is even or odd',
        expectedOutput: 'Even or Odd',
        difficulty: 'easy'
      },
      {
        id: 'day2-prob2',
        description: 'Print multiplication table of a given number',
        expectedOutput: '5 x 1 = 5, 5 x 2 = 10, ...',
        difficulty: 'easy'
      },
      {
        id: 'day2-prob3',
        description: 'Calculate sum of first n natural numbers',
        expectedOutput: 'Sum = X',
        difficulty: 'easy'
      }
    ],
    commitRequirement: 'day2_loops.py'
  },
  {
    dayNumber: 3,
    phase: 'Foundation',
    goal: 'Functions (VERY IMPORTANT)',
    tasks: [
      {
        id: 'day3-task1',
        description: 'Learn def, parameters, return',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day3-task2',
        description: 'Practice: Function to calculate average, Function to check prime',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day3-task3',
        description: 'Commit day3_functions.py',
        timeAllocation: '15 min',
        completed: false
      }
    ],
    resources: [
      {
        id: 'day3-video1',
        type: 'video',
        title: 'Python Functions',
        url: 'https://www.youtube.com/watch?v=9Os0o3wzS_I',
        duration: '30 min'
      }
    ],
    practiceProblems: [
      {
        id: 'day3-prob1',
        description: 'Write a function to calculate average of three numbers',
        expectedOutput: 'Average = X',
        difficulty: 'easy'
      },
      {
        id: 'day3-prob2',
        description: 'Write a function to check if a number is prime',
        expectedOutput: 'True or False',
        difficulty: 'medium'
      }
    ],
    commitRequirement: 'day3_functions.py'
  },
  {
    dayNumber: 4,
    phase: 'Foundation',
    goal: 'Lists & Tuples',
    tasks: [
      {
        id: 'day4-task1',
        description: 'Learn indexing, slicing, append, pop',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day4-task2',
        description: 'Practice: Find max/min in list, Reverse list',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day4-task3',
        description: 'Commit day4_lists.py',
        timeAllocation: '15 min',
        completed: false
      }
    ],
    resources: [
      {
        id: 'day4-video1',
        type: 'video',
        title: 'Python Lists and Tuples',
        url: 'https://www.youtube.com/watch?v=W8KRzm-HUcc',
        duration: '40 min'
      }
    ],
    practiceProblems: [
      {
        id: 'day4-prob1',
        description: 'Find maximum and minimum in a list',
        expectedOutput: 'Max: X, Min: Y',
        difficulty: 'easy'
      },
      {
        id: 'day4-prob2',
        description: 'Reverse a list without using built-in reverse()',
        expectedOutput: 'Reversed list',
        difficulty: 'medium'
      }
    ],
    commitRequirement: 'day4_lists.py'
  },
  {
    dayNumber: 5,
    phase: 'Foundation',
    goal: 'Dictionary (INTERVIEW FAVORITE)',
    tasks: [
      {
        id: 'day5-task1',
        description: 'Learn key-value pairs, loop dictionary',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day5-task2',
        description: 'Practice: Student marks dictionary, Find topper',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day5-task3',
        description: 'Commit day5_dict.py',
        timeAllocation: '15 min',
        completed: false
      }
    ],
    resources: [
      {
        id: 'day5-video1',
        type: 'video',
        title: 'Python Dictionaries',
        url: 'https://www.youtube.com/watch?v=daefaLgNkw0',
        duration: '35 min'
      }
    ],
    practiceProblems: [
      {
        id: 'day5-prob1',
        description: 'Create a dictionary of student names and marks',
        expectedOutput: 'Dictionary with student data',
        difficulty: 'easy'
      },
      {
        id: 'day5-prob2',
        description: 'Find the student with highest marks',
        expectedOutput: 'Topper: Name with Marks',
        difficulty: 'medium'
      }
    ],
    commitRequirement: 'day5_dict.py'
  },
  {
    dayNumber: 6,
    phase: 'Foundation',
    goal: 'File Handling',
    tasks: [
      {
        id: 'day6-task1',
        description: 'Learn read/write files',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day6-task2',
        description: 'Practice: Read marks from file, Calculate average',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day6-task3',
        description: 'Commit day6_files.py',
        timeAllocation: '15 min',
        completed: false
      }
    ],
    resources: [
      {
        id: 'day6-video1',
        type: 'video',
        title: 'Python File Handling',
        url: 'https://www.youtube.com/watch?v=Uh2ebFW8OYM',
        duration: '25 min'
      }
    ],
    practiceProblems: [
      {
        id: 'day6-prob1',
        description: 'Read marks from a text file',
        expectedOutput: 'List of marks',
        difficulty: 'easy'
      },
      {
        id: 'day6-prob2',
        description: 'Calculate and write average to output file',
        expectedOutput: 'Average written to file',
        difficulty: 'medium'
      }
    ],
    commitRequirement: 'day6_files.py'
  },
  {
    dayNumber: 7,
    phase: 'Foundation',
    goal: 'MINI PROJECT 1',
    tasks: [
      {
        id: 'day7-task1',
        description: 'Build Student Result Analyzer: Input marks.txt, Output average and grade',
        timeAllocation: '3 hr',
        completed: false
      },
      {
        id: 'day7-task2',
        description: 'Create project folder: project_student_analyzer',
        timeAllocation: '30 min',
        completed: false
      }
    ],
    resources: [],
    practiceProblems: [
      {
        id: 'day7-prob1',
        description: 'Complete Student Result Analyzer project with proper error handling',
        expectedOutput: 'Working analyzer with grades',
        difficulty: 'medium'
      }
    ],
    commitRequirement: 'project_student_analyzer folder with complete code'
  }
]

// Continue with remaining days 8-30...
// (I'll add more days in the next step to keep this manageable)

// Days 8-30 continue here
const additionalDays: DayData[] = [
  {
    dayNumber: 8,
    phase: 'Foundation',
    goal: 'NumPy intro',
    tasks: [
      {
        id: 'day8-task1',
        description: 'Learn arrays, shape, slicing',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day8-task2',
        description: 'Practice: Create array, Mean, sum',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day8-task3',
        description: 'Commit day8_numpy.py',
        timeAllocation: '15 min',
        completed: false
      }
    ],
    resources: [
      {
        id: 'day8-video1',
        type: 'video',
        title: 'NumPy Tutorial',
        url: 'https://www.youtube.com/watch?v=QUT1VHiLmmI',
        duration: '1 hr'
      }
    ],
    practiceProblems: [
      {
        id: 'day8-prob1',
        description: 'Create NumPy arrays and perform basic operations',
        expectedOutput: 'Array operations results',
        difficulty: 'easy'
      }
    ],
    commitRequirement: 'day8_numpy.py'
  },
  {
    dayNumber: 10,
    phase: 'Foundation',
    goal: 'Pandas intro',
    tasks: [
      {
        id: 'day10-task1',
        description: 'Learn read_csv, head(), info()',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day10-task2',
        description: 'Practice with sample CSV data',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day10-task3',
        description: 'Commit day10_pandas.py',
        timeAllocation: '15 min',
        completed: false
      }
    ],
    resources: [
      {
        id: 'day10-video1',
        type: 'video',
        title: 'Pandas Tutorial',
        url: 'https://www.youtube.com/watch?v=vmEHCJofslg',
        duration: '1 hr'
      }
    ],
    practiceProblems: [
      {
        id: 'day10-prob1',
        description: 'Load and explore a CSV dataset',
        expectedOutput: 'Dataset summary',
        difficulty: 'easy'
      }
    ],
    commitRequirement: 'day10_pandas.py'
  },
  {
    dayNumber: 15,
    phase: 'Foundation',
    goal: 'Matplotlib',
    tasks: [
      {
        id: 'day15-task1',
        description: 'Learn basic plotting with Matplotlib',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day15-task2',
        description: 'Create line plots, bar charts, scatter plots',
        timeAllocation: '1.5 hr',
        completed: false
      },
      {
        id: 'day15-task3',
        description: 'Commit day15_plots.py',
        timeAllocation: '15 min',
        completed: false
      }
    ],
    resources: [
      {
        id: 'day15-video1',
        type: 'video',
        title: 'Matplotlib Tutorial',
        url: 'https://www.youtube.com/watch?v=3Xc3CA655Y4',
        duration: '45 min'
      }
    ],
    practiceProblems: [
      {
        id: 'day15-prob1',
        description: 'Create visualizations for sample data',
        expectedOutput: 'Multiple plot types',
        difficulty: 'medium'
      }
    ],
    commitRequirement: 'day15_plots.py'
  },
  {
    dayNumber: 30,
    phase: 'Foundation',
    goal: 'FINAL PROJECT (MONTH 1)',
    tasks: [
      {
        id: 'day30-task1',
        description: 'Build Customer Behavior Analysis project',
        timeAllocation: '2 hr',
        completed: false
      },
      {
        id: 'day30-task2',
        description: 'Complete EDA, Insights, Charts, README',
        timeAllocation: '2 hr',
        completed: false
      }
    ],
    resources: [],
    practiceProblems: [
      {
        id: 'day30-prob1',
        description: 'Complete end-to-end data analysis project',
        expectedOutput: 'Strong GitHub repo with analysis',
        difficulty: 'hard'
      }
    ],
    commitRequirement: 'Complete project with strong GitHub repo'
  }
]

// Merge all days
export const allPhase1Days = [...phase1Days, ...additionalDays]

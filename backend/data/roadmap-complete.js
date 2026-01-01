// Complete 365-day AI/ML PRO MAX Roadmap
// Based on the comprehensive PDF roadmap

export const roadmapData = {
  // ============ PHASE 1: DAYS 1-30 (FOUNDATION) ============
  1: {
    day: 1, phase: 1, goal: 'Python setup + basics',
    tasks: [
      { id: 't1', title: 'Install Anaconda', time: '15min' },
      { id: 't2', title: 'Install VS Code', time: '10min' },
      { id: 't3', title: 'Create GitHub account + repo: ml-journey', time: '15min' },
      { id: 't4', title: 'Learn Variables & Data types', time: '45min' },
      { id: 't5', title: 'Learn Print, input functions', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Python Basics - Corey Schafer', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' }
    ],
    practice: ['Print your name, age', 'Take 2 numbers → sum, product'],
    commit: 'day1_basics.py',
    interviewTip: 'Rule: If you cannot explain your Python code line-by-line → redo.'
  },
  2: {
    day: 2, phase: 1, goal: 'Conditions + loops',
    tasks: [
      { id: 't1', title: 'Learn if/else statements', time: '30min' },
      { id: 't2', title: 'Learn for loops', time: '30min' },
      { id: 't3', title: 'Learn while loops', time: '30min' },
      { id: 't4', title: 'Practice loop problems', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Python Loops', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw&t=1200s' }
    ],
    practice: ['Even/odd checker', 'Table of a number', 'Sum of first n numbers'],
    commit: 'day2_loops.py'
  },
  3: {
    day: 3, phase: 1, goal: 'Functions (VERY IMPORTANT)',
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
    day: 4, phase: 1, goal: 'Lists & Tuples',
    tasks: [
      { id: 't1', title: 'Learn indexing & slicing', time: '30min' },
      { id: 't2', title: 'Learn list methods (append, pop, extend)', time: '30min' },
      { id: 't3', title: 'Learn tuples and immutability', time: '20min' },
      { id: 't4', title: 'Practice list problems', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'Python Lists', url: 'https://www.youtube.com/watch?v=W8KRzm-HUcc' }
    ],
    practice: ['Find max/min in list', 'Reverse list without built-in'],
    commit: 'day4_lists.py'
  },
  5: {
    day: 5, phase: 1, goal: 'Dictionary (INTERVIEW FAVORITE)',
    tasks: [
      { id: 't1', title: 'Learn key-value pairs', time: '30min' },
      { id: 't2', title: 'Learn dictionary methods', time: '30min' },
      { id: 't3', title: 'Loop through dictionary', time: '20min' },
      { id: 't4', title: 'Practice dictionary problems', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'Python Dictionaries', url: 'https://www.youtube.com/watch?v=daefaLgNkw0' }
    ],
    practice: ['Student marks dictionary', 'Find topper from dict'],
    commit: 'day5_dict.py',
    interviewTip: 'Dictionaries are O(1) lookup - know when to use them!'
  },
  6: {
    day: 6, phase: 1, goal: 'File Handling',
    tasks: [
      { id: 't1', title: 'Learn file read operations', time: '30min' },
      { id: 't2', title: 'Learn file write operations', time: '30min' },
      { id: 't3', title: 'Learn context managers (with)', time: '20min' },
      { id: 't4', title: 'Practice file operations', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'Python File Handling', url: 'https://www.youtube.com/watch?v=Uh2ebFW8OYM' }
    ],
    practice: ['Read marks from file', 'Calculate and write average to file'],
    commit: 'day6_files.py'
  },
  7: {
    day: 7, phase: 1, goal: 'MINI PROJECT 1: Student Result Analyzer',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Create marks.txt input file', time: '15min' },
      { id: 't2', title: 'Read and parse student marks', time: '45min' },
      { id: 't3', title: 'Calculate average and assign grade', time: '45min' },
      { id: 't4', title: 'Write output file and README', time: '30min' }
    ],
    resources: [],
    practice: ['Complete project with clean, documented code'],
    commit: 'project_student_analyzer/',
    projectRequirements: ['File I/O', 'Functions', 'Conditionals', 'README.md']
  },
  8: {
    day: 8, phase: 1, goal: 'NumPy intro',
    tasks: [
      { id: 't1', title: 'Learn NumPy arrays vs lists', time: '30min' },
      { id: 't2', title: 'Learn shape, dtype, ndim', time: '30min' },
      { id: 't3', title: 'Learn array slicing', time: '30min' },
      { id: 't4', title: 'Practice array operations', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'NumPy Tutorial', url: 'https://www.youtube.com/watch?v=QUT1VHiLmmI' }
    ],
    practice: ['Create arrays', 'Calculate mean, sum, std'],
    commit: 'day8_numpy.py'
  },
  9: {
    day: 9, phase: 1, goal: 'NumPy operations',
    tasks: [
      { id: 't1', title: 'Learn matrix operations', time: '45min' },
      { id: 't2', title: 'Learn reshape and transpose', time: '30min' },
      { id: 't3', title: 'Learn broadcasting', time: '30min' },
      { id: 't4', title: 'Practice advanced operations', time: '15min' }
    ],
    resources: [],
    practice: ['Matrix multiplication', 'Reshape arrays', 'Element-wise operations'],
    commit: 'day9_numpy_ops.py'
  },
  10: {
    day: 10, phase: 1, goal: 'Pandas intro',
    tasks: [
      { id: 't1', title: 'Learn DataFrame basics', time: '30min' },
      { id: 't2', title: 'Learn read_csv, to_csv', time: '30min' },
      { id: 't3', title: 'Learn head(), tail(), info(), describe()', time: '30min' },
      { id: 't4', title: 'Practice with sample dataset', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Pandas Tutorial', url: 'https://www.youtube.com/watch?v=vmEHCJofslg' }
    ],
    practice: ['Load CSV', 'Explore data structure'],
    commit: 'day10_pandas.py'
  },
  11: {
    day: 11, phase: 1, goal: 'Pandas filtering',
    tasks: [
      { id: 't1', title: 'Learn loc and iloc', time: '40min' },
      { id: 't2', title: 'Learn conditional filtering', time: '40min' },
      { id: 't3', title: 'Learn multiple conditions', time: '20min' },
      { id: 't4', title: 'Practice filtering', time: '20min' }
    ],
    resources: [],
    practice: ['Filter rows by condition', 'Select specific columns'],
    commit: 'day11_pandas_filter.py'
  },
  12: {
    day: 12, phase: 1, goal: 'Pandas groupby',
    tasks: [
      { id: 't1', title: 'Learn groupby basics', time: '40min' },
      { id: 't2', title: 'Learn aggregation functions', time: '40min' },
      { id: 't3', title: 'Learn multiple aggregations', time: '20min' },
      { id: 't4', title: 'Practice groupby', time: '20min' }
    ],
    resources: [],
    practice: ['Group by category', 'Calculate group statistics'],
    commit: 'day12_groupby.py'
  },
  13: {
    day: 13, phase: 1, goal: 'Data Cleaning',
    tasks: [
      { id: 't1', title: 'Handle missing values (dropna, fillna)', time: '40min' },
      { id: 't2', title: 'Handle duplicates', time: '30min' },
      { id: 't3', title: 'Data type conversions', time: '30min' },
      { id: 't4', title: 'Practice cleaning', time: '20min' }
    ],
    resources: [
      { type: 'video', title: 'Data Cleaning', url: 'https://www.youtube.com/watch?v=KdmPHEnPJPs' }
    ],
    practice: ['Clean messy dataset', 'Handle NaN values'],
    commit: 'day13_cleaning.py'
  },
  14: {
    day: 14, phase: 1, goal: 'MINI PROJECT 2: Sales Data Analysis',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Load and explore sales dataset', time: '30min' },
      { id: 't2', title: 'Clean data (missing values, duplicates)', time: '45min' },
      { id: 't3', title: 'Calculate monthly revenue', time: '45min' },
      { id: 't4', title: 'Write insights and README', time: '30min' }
    ],
    resources: [],
    practice: ['Complete sales analysis project'],
    commit: 'project_sales_analysis/',
    projectRequirements: ['Pandas', 'Data cleaning', 'Aggregation', 'README.md']
  },
  15: {
    day: 15, phase: 1, goal: 'Matplotlib',
    tasks: [
      { id: 't1', title: 'Learn line plots', time: '30min' },
      { id: 't2', title: 'Learn bar charts', time: '30min' },
      { id: 't3', title: 'Learn scatter plots', time: '30min' },
      { id: 't4', title: 'Learn customization (labels, titles)', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Matplotlib Tutorial', url: 'https://www.youtube.com/watch?v=3Xc3CA655Y4' }
    ],
    practice: ['Create various plot types', 'Customize appearance'],
    commit: 'day15_plots.py'
  },
  16: {
    day: 16, phase: 1, goal: 'Seaborn',
    tasks: [
      { id: 't1', title: 'Learn seaborn basics', time: '30min' },
      { id: 't2', title: 'Learn heatmaps', time: '30min' },
      { id: 't3', title: 'Learn distribution plots', time: '30min' },
      { id: 't4', title: 'Learn pair plots', time: '30min' }
    ],
    resources: [
      { type: 'video', title: 'Seaborn Tutorial', url: 'https://www.youtube.com/watch?v=6GUZXDef2U0' }
    ],
    practice: ['Create seaborn visualizations', 'Correlation heatmap'],
    commit: 'day16_seaborn.py'
  },
  17: {
    day: 17, phase: 1, goal: 'EDA thinking',
    tasks: [
      { id: 't1', title: 'Learn what is EDA', time: '30min' },
      { id: 't2', title: 'Learn outlier detection', time: '40min' },
      { id: 't3', title: 'Learn correlation analysis', time: '40min' },
      { id: 't4', title: 'Document EDA process', time: '10min' }
    ],
    resources: [],
    practice: ['Identify outliers', 'Calculate correlations'],
    commit: 'day17_eda_notes.md',
    interviewTip: 'EDA is the FIRST thing you do - always explore before modeling!'
  },
  18: {
    day: 18, phase: 1, goal: 'EDA PROJECT - Part 1',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Download Kaggle Retail/Sales dataset', time: '15min' },
      { id: 't2', title: 'Load and initial exploration', time: '45min' },
      { id: 't3', title: 'Data cleaning', time: '60min' }
    ],
    resources: [
      { type: 'dataset', title: 'Kaggle Retail Dataset', url: 'https://www.kaggle.com/datasets' }
    ],
    practice: ['Start EDA project'],
    commit: 'eda_project_retail/'
  },
  19: {
    day: 19, phase: 1, goal: 'EDA PROJECT - Part 2',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Create visualizations', time: '60min' },
      { id: 't2', title: 'Analyze distributions', time: '30min' },
      { id: 't3', title: 'Find correlations', time: '30min' }
    ],
    resources: [],
    practice: ['Continue EDA project'],
    commit: 'eda_project_retail/'
  },
  20: {
    day: 20, phase: 1, goal: 'EDA PROJECT - Part 3',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Write insights', time: '45min' },
      { id: 't2', title: 'Create README with findings', time: '45min' },
      { id: 't3', title: 'Polish notebook', time: '30min' }
    ],
    resources: [],
    practice: ['Complete EDA project'],
    commit: 'eda_project_retail/',
    projectRequirements: ['Clean data', 'Visualizations', 'Written insights', 'README.md']
  },
  21: {
    day: 21, phase: 1, goal: 'Stats for ML - Mean, Median, Mode',
    tasks: [
      { id: 't1', title: 'Learn mean and when to use', time: '30min' },
      { id: 't2', title: 'Learn median and when to use', time: '30min' },
      { id: 't3', title: 'Learn mode', time: '20min' },
      { id: 't4', title: 'Practice calculations', time: '40min' }
    ],
    resources: [
      { type: 'video', title: 'StatQuest Statistics', url: 'https://www.youtube.com/watch?v=SzZ6GpcfoQY' }
    ],
    practice: ['Calculate stats manually and with NumPy'],
    commit: 'day21_stats_basics.py',
    interviewTip: 'Know WHEN to use mean vs median (outliers!)'
  },
  22: {
    day: 22, phase: 1, goal: 'Stats for ML - Variance & Std',
    tasks: [
      { id: 't1', title: 'Learn variance concept', time: '40min' },
      { id: 't2', title: 'Learn standard deviation', time: '40min' },
      { id: 't3', title: 'Understand spread of data', time: '20min' },
      { id: 't4', title: 'Practice calculations', time: '20min' }
    ],
    resources: [],
    practice: ['Calculate variance and std', 'Interpret results'],
    commit: 'day22_variance_std.py'
  },
  23: {
    day: 23, phase: 1, goal: 'Stats for ML - Probability basics',
    tasks: [
      { id: 't1', title: 'Learn probability fundamentals', time: '45min' },
      { id: 't2', title: 'Learn conditional probability', time: '45min' },
      { id: 't3', title: 'Learn Bayes theorem intuition', time: '30min' }
    ],
    resources: [],
    practice: ['Solve probability problems'],
    commit: 'day23_probability.py'
  },
  24: {
    day: 24, phase: 1, goal: 'Stats for ML - Distributions',
    tasks: [
      { id: 't1', title: 'Learn normal distribution', time: '45min' },
      { id: 't2', title: 'Learn other distributions', time: '45min' },
      { id: 't3', title: 'Visualize distributions', time: '30min' }
    ],
    resources: [],
    practice: ['Plot distributions', 'Understand shapes'],
    commit: 'day24_distributions.py'
  },
  25: {
    day: 25, phase: 1, goal: 'Stats for ML - Correlation',
    tasks: [
      { id: 't1', title: 'Learn Pearson correlation', time: '40min' },
      { id: 't2', title: 'Learn Spearman correlation', time: '40min' },
      { id: 't3', title: 'Correlation vs Causation', time: '20min' },
      { id: 't4', title: 'Practice with datasets', time: '20min' }
    ],
    resources: [],
    practice: ['Calculate correlations', 'Create heatmaps'],
    commit: 'day25_correlation.py',
    interviewTip: 'Correlation ≠ Causation - ALWAYS remember this!'
  },
  26: {
    day: 26, phase: 1, goal: 'FINAL PROJECT Month 1 - Part 1',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Choose Customer Behavior dataset', time: '30min' },
      { id: 't2', title: 'Load and explore data', time: '45min' },
      { id: 't3', title: 'Plan analysis approach', time: '45min' }
    ],
    resources: [],
    practice: ['Start final project'],
    commit: 'project_customer_behavior/'
  },
  27: {
    day: 27, phase: 1, goal: 'FINAL PROJECT Month 1 - Part 2',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Data cleaning', time: '60min' },
      { id: 't2', title: 'Feature exploration', time: '60min' }
    ],
    resources: [],
    practice: ['Continue project'],
    commit: 'project_customer_behavior/'
  },
  28: {
    day: 28, phase: 1, goal: 'FINAL PROJECT Month 1 - Part 3',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Create visualizations', time: '60min' },
      { id: 't2', title: 'Statistical analysis', time: '60min' }
    ],
    resources: [],
    practice: ['Continue project'],
    commit: 'project_customer_behavior/'
  },
  29: {
    day: 29, phase: 1, goal: 'FINAL PROJECT Month 1 - Part 4',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Write insights', time: '60min' },
      { id: 't2', title: 'Create charts for presentation', time: '60min' }
    ],
    resources: [],
    practice: ['Continue project'],
    commit: 'project_customer_behavior/'
  },
  30: {
    day: 30, phase: 1, goal: 'FINAL PROJECT Month 1 - Complete',
    isProject: true,
    tasks: [
      { id: 't1', title: 'Write comprehensive README', time: '45min' },
      { id: 't2', title: 'Polish code and notebooks', time: '45min' },
      { id: 't3', title: 'Push to GitHub', time: '30min' }
    ],
    resources: [],
    practice: ['Complete and submit project'],
    commit: 'project_customer_behavior/',
    projectRequirements: ['EDA', 'Insights', 'Charts', 'Strong README'],
    milestone: 'MONTH 1 COMPLETE = YOU ARE AHEAD OF 90%'
  }
};

// Continue with more content...
export default roadmapData;

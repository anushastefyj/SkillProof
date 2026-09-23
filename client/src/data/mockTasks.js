export const generateTasks = () => {
  const categories = ['Array', 'String', 'Math', 'Stack', 'Tree', 'Graph', 'Database', 'React', 'Java', 'MongoDB'];
  const difficulties = [
    { label: 'Easy', color: 'var(--success)', points: '+10' },
    { label: 'Medium', color: 'var(--warning)', points: '+15' },
    { label: 'Hard', color: 'var(--danger)', points: '+20' },
  ];
  const statuses = [
    { label: 'Completed', color: 'var(--success)' },
    { label: 'In Progress', color: 'var(--warning)' },
    { label: 'Pending', color: 'var(--text-muted)' }
  ];

  const tasks = [];
  
  const actions = ['Find', 'Reverse', 'Calculate', 'Implement', 'Validate', 'Sort', 'Merge', 'Rotate', 'Traverse', 'Query'];
  const targets = ['Binary Tree', 'Linked List', 'Matrix', 'Substring', 'Subarray', 'Graph Nodes', 'Database Records', 'React Component', 'State Management', 'Hash Map'];
  const constraints = ['in O(N)', 'in Place', 'with Recursion', 'Optimized', 'using Two Pointers', 'Iteratively', 'using DFS', 'using BFS', 'with Memoization', 'in Log(N)'];

  for (let i = 1; i <= 500; i++) {
    const action = actions[Math.floor(Math.random() * actions.length)];
    const target = targets[Math.floor(Math.random() * targets.length)];
    const constraint = constraints[Math.floor(Math.random() * constraints.length)];
    
    const titleType = Math.random();
    let title = '';
    if (titleType < 0.4) {
      title = `${action} ${target}`;
    } else if (titleType < 0.8) {
      title = `${action} ${target} ${constraint}`;
    } else {
      title = `${action} all missing ${target}`;
    }

    const category = categories[Math.floor(Math.random() * categories.length)];
    const diff = difficulties[Math.floor(Math.random() * difficulties.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    tasks.push({
      id: i,
      title: title,
      category: category,
      difficulty: diff.label,
      diffColor: diff.color,
      status: status.label,
      statusColor: status.color,
      points: diff.points
    });
  }
  
  return tasks;
};

export const defaultTasks = generateTasks();

import React from 'react';
import { Plus } from 'lucide-react';

export default function CodingTasks() {
  const tasks = [
    { id: 1, title: 'Reverse a String', category: 'String', difficulty: 'Easy', diffColor: 'var(--success)', status: 'Completed', statusColor: 'var(--success)', points: '+10' },
    { id: 2, title: 'Find Missing Number', category: 'Array', difficulty: 'Medium', diffColor: 'var(--warning)', status: 'Completed', statusColor: 'var(--success)', points: '+15' },
    { id: 3, title: 'Valid Parentheses', category: 'Stack', difficulty: 'Medium', diffColor: 'var(--warning)', status: 'Completed', statusColor: 'var(--success)', points: '+15' },
    { id: 4, title: 'Two Sum', category: 'Array', difficulty: 'Hard', diffColor: 'var(--danger)', status: 'In Progress', statusColor: 'var(--warning)', points: '+20' },
    { id: 5, title: 'Palindrome Number', category: 'Math', difficulty: 'Easy', diffColor: 'var(--success)', status: 'Pending', statusColor: 'var(--text-muted)', points: '+10' }
  ];

  return (
    <div className="flex-col gap-lg animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Coding Tasks</h1>
          <p className="text-muted">Solve problems, improve your skills.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} /> Add Task
        </button>
      </div>

      <div className="flex items-center gap-md" style={{ marginBottom: '1rem' }}>
        <select className="input-field" style={{ width: 'auto', backgroundColor: 'white' }}>
          <option>All Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <select className="input-field" style={{ width: 'auto', backgroundColor: 'white' }}>
          <option>All Status</option>
          <option>Completed</option>
          <option>In Progress</option>
          <option>Pending</option>
        </select>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="flex-col">
          {tasks.map((task, i) => (
            <div key={task.id} className="flex items-center justify-between" style={{ padding: '1.5rem 2rem', borderBottom: i !== tasks.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div>
                <h3 className="h4" style={{ marginBottom: '0.25rem' }}>{task.title}</h3>
                <div className="flex items-center gap-sm text-sm">
                  <span className="text-muted">{task.category}</span>
                  <span className="text-muted">|</span>
                  <span style={{ color: task.diffColor, fontWeight: '500' }}>{task.difficulty}</span>
                </div>
              </div>
              <div className="flex items-center gap-xl">
                <span style={{ 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: 'var(--radius-full)', 
                  border: `1px solid ${task.statusColor}`,
                  color: task.statusColor,
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  backgroundColor: task.status === 'Completed' ? 'var(--primary-light)' : 'transparent'
                }}>
                  {task.status}
                </span>
                <span className="font-semibold text-muted" style={{ width: '40px', textAlign: 'right' }}>{task.points}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

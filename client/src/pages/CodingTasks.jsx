import React, { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { defaultTasks } from '../data/mockTasks';

export default function CodingTasks() {
  const [tasks, setTasks] = useState(defaultTasks);
  
  // Filtering states
  const [difficultyFilter, setDifficultyFilter] = useState('All Difficulty');
  const [statusFilter, setStatusFilter] = useState('All Status');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 20;

  // Add Task Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', category: 'Array', difficulty: 'Easy' });

  // Filtering Logic
  const filteredTasks = tasks.filter(task => {
    const diffMatch = difficultyFilter === 'All Difficulty' || task.difficulty === difficultyFilter;
    const statusMatch = statusFilter === 'All Status' || task.status === statusFilter;
    return diffMatch && statusMatch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage) || 1;
  const startIndex = (currentPage - 1) * tasksPerPage;
  const paginatedTasks = filteredTasks.slice(startIndex, startIndex + tasksPerPage);

  // Handlers
  const handleFilterChange = (setter) => (e) => {
    setter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const toggleStatus = (id) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === id) {
        const statuses = ['Pending', 'In Progress', 'Completed'];
        const colors = { 'Pending': 'var(--text-muted)', 'In Progress': 'var(--warning)', 'Completed': 'var(--success)' };
        
        const nextIndex = (statuses.indexOf(task.status) + 1) % statuses.length;
        const nextStatus = statuses[nextIndex];
        
        return { ...task, status: nextStatus, statusColor: colors[nextStatus] };
      }
      return task;
    }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const diffProps = {
      'Easy': { color: 'var(--success)', points: '+10' },
      'Medium': { color: 'var(--warning)', points: '+15' },
      'Hard': { color: 'var(--danger)', points: '+20' }
    };
    
    const taskToAdd = {
      id: Date.now(), // Unique ID
      title: newTask.title,
      category: newTask.category,
      difficulty: newTask.difficulty,
      diffColor: diffProps[newTask.difficulty].color,
      status: 'Pending',
      statusColor: 'var(--text-muted)',
      points: diffProps[newTask.difficulty].points
    };

    setTasks([taskToAdd, ...tasks]);
    setIsModalOpen(false);
    setNewTask({ title: '', category: 'Array', difficulty: 'Easy' });
  };

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-md">
        <div>
          <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Coding Tasks</h1>
          <p className="text-muted">Solve problems, improve your skills. ({filteredTasks.length} tasks found)</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <Plus size={20} /> Add Custom Task
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-md mb-md">
        <select className="input-field" value={difficultyFilter} onChange={handleFilterChange(setDifficultyFilter)} style={{ width: 'auto', backgroundColor: 'white' }}>
          <option>All Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <select className="input-field" value={statusFilter} onChange={handleFilterChange(setStatusFilter)} style={{ width: 'auto', backgroundColor: 'white' }}>
          <option>All Status</option>
          <option>Completed</option>
          <option>In Progress</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Task List */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="flex-col">
          {paginatedTasks.length > 0 ? paginatedTasks.map((task, i) => (
            <div key={task.id} className="flex items-center justify-between" style={{ padding: '1.5rem 2rem', borderBottom: i !== paginatedTasks.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div>
                <h3 className="h4" style={{ marginBottom: '0.25rem' }}>{task.title}</h3>
                <div className="flex items-center gap-sm text-sm">
                  <span className="text-muted">{task.category}</span>
                  <span className="text-muted">|</span>
                  <span style={{ color: task.diffColor, fontWeight: '500' }}>{task.difficulty}</span>
                </div>
              </div>
              <div className="flex items-center gap-xl">
                <button 
                  onClick={() => toggleStatus(task.id)}
                  title="Click to change status"
                  style={{ 
                    padding: '0.4rem 1rem', 
                    borderRadius: 'var(--radius-full)', 
                    border: `1px solid ${task.statusColor}`,
                    color: task.statusColor,
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    backgroundColor: task.status === 'Completed' ? 'var(--primary-light)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    outline: 'none'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = 0.8}
                  onMouseOut={(e) => e.currentTarget.style.opacity = 1}
                >
                  {task.status}
                </button>
                <span className="font-semibold text-muted" style={{ width: '40px', textAlign: 'right' }}>{task.points}</span>
              </div>
            </div>
          )) : (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No tasks match your filters.
            </div>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      {filteredTasks.length > tasksPerPage && (
        <div className="flex items-center justify-between mt-md">
          <div className="text-sm text-muted">
            Showing {startIndex + 1} to {Math.min(startIndex + tasksPerPage, filteredTasks.length)} of {filteredTasks.length} entries
          </div>
          <div className="flex items-center gap-sm">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="btn btn-secondary text-sm"
              style={{ padding: '0.5rem', opacity: currentPage === 1 ? 0.5 : 1 }}
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <span className="text-sm font-semibold mx-md">Page {currentPage} of {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="btn btn-secondary text-sm"
              style={{ padding: '0.5rem', opacity: currentPage === totalPages ? 0.5 : 1 }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Add Task Modal Overlay */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="card animate-fade-in" style={{ width: '400px', maxWidth: '90%' }}>
            <h3 className="h4 font-bold mb-md">Add Custom Task</h3>
            <form onSubmit={handleAddTask} className="flex-col gap-md">
              <div>
                <label className="text-sm font-semibold block mb-1">Task Title</label>
                <input 
                  type="text" 
                  required
                  className="input-field" 
                  style={{ width: '100%' }}
                  value={newTask.title} 
                  onChange={e => setNewTask({...newTask, title: e.target.value})} 
                  placeholder="e.g. Implement Dijkstra's Algorithm" 
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">Category</label>
                <input 
                  type="text" 
                  required
                  className="input-field" 
                  style={{ width: '100%' }}
                  value={newTask.category} 
                  onChange={e => setNewTask({...newTask, category: e.target.value})} 
                  placeholder="e.g. Graph" 
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">Difficulty</label>
                <select 
                  className="input-field" 
                  style={{ width: '100%' }}
                  value={newTask.difficulty} 
                  onChange={e => setNewTask({...newTask, difficulty: e.target.value})}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div className="flex items-center justify-end gap-sm mt-md">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary"><Check size={16} /> Add Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

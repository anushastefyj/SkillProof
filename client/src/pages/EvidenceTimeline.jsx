import React from 'react';
import { CheckCircle2, Code2, Briefcase, GitBranch } from 'lucide-react';

export default function EvidenceTimeline() {
  const timelineData = [
    {
      id: 1,
      date: 'Sep 20, 2026',
      title: 'Completed Java Quiz',
      desc: 'Score: 88%',
      type: 'quiz',
      icon: CheckCircle2,
      color: 'var(--success)'
    },
    {
      id: 2,
      date: 'Sep 15, 2026',
      title: 'Added Employee Payroll System',
      desc: 'Project completed',
      type: 'project',
      icon: Briefcase,
      color: 'var(--primary)'
    },
    {
      id: 3,
      date: 'Sep 10, 2026',
      title: 'Coding Tasks',
      desc: '12 tasks completed',
      type: 'task',
      icon: Code2,
      color: '#8b5cf6'
    },
    {
      id: 4,
      date: 'Aug 28, 2026',
      title: 'GitHub Activity Detected',
      desc: '15 repositories',
      type: 'github',
      icon: GitBranch,
      color: '#0ea5e9'
    }
  ];

  return (
    <div className="flex-col gap-lg animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Evidence Timeline</h1>
          <p className="text-muted">Track your journey and see how you've grown.</p>
        </div>
        <select className="input-field" style={{ width: 'auto', backgroundColor: 'white' }}>
          <option>All Skills</option>
          <option>Java</option>
          <option>React</option>
        </select>
      </div>

      <div className="card" style={{ padding: '2rem 3rem' }}>
        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', top: '1rem', bottom: '1rem', left: '1.25rem', width: '2px', backgroundColor: 'var(--border)' }}></div>
          
          <div className="flex-col gap-xl">
            {timelineData.map((item) => (
              <div key={item.id} className="flex gap-lg" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'white', border: `2px solid ${item.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.5rem', flexShrink: 0 }}>
                  <item.icon size={16} color={item.color} />
                </div>
                <div>
                  <p className="text-sm text-muted font-medium mb-1">{item.date}</p>
                  <h3 className="h4">{item.title}</h3>
                  <p className="text-muted" style={{ marginTop: '0.25rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

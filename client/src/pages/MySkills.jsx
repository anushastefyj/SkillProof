import React from 'react';
import { Code2, ExternalLink, ArrowRight, ShieldCheck, Plus } from 'lucide-react';
import ProgressRing from '../components/ProgressRing';
import { Link } from 'react-router-dom';

export default function MySkills() {
  const skills = [
    { name: 'Java / Spring Boot', progress: 87, level: 'Advanced', evidenceCount: 12 },
    { name: 'React.js', progress: 92, level: 'Expert', evidenceCount: 18 },
    { name: 'Python', progress: 65, level: 'Intermediate', evidenceCount: 5 },
    { name: 'AWS Cloud', progress: 42, level: 'Beginner', evidenceCount: 2 },
  ];

  return (
    <div className="flex-col gap-lg">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="h2" style={{ marginBottom: '0.25rem' }}>My Skills</h1>
          <p className="text-muted">Manage and prove your technical abilities.</p>
        </div>
        <Link to="/dashboard/add-evidence" className="btn btn-primary">
          <Plus size={20} />
          Add Evidence
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md">
        {skills.map((skill, index) => (
          <div key={index} className="card flex-col justify-between">
            <div className="flex items-start justify-between" style={{ marginBottom: '1.5rem' }}>
              <div>
                <h3 className="h4" style={{ marginBottom: '0.25rem' }}>{skill.name}</h3>
                <span className="badge badge-primary">{skill.level}</span>
              </div>
              <Code2 size={24} color="var(--text-muted)" />
            </div>
            
            <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem' }}>
              <div className="flex-col items-center justify-center">
                <ProgressRing radius={36} stroke={6} progress={skill.progress} color="var(--primary)" />
              </div>
              <div style={{ textAlign: 'right' }}>
                <p className="font-semibold text-lg">{skill.progress}/100</p>
                <p className="text-sm text-muted">Evidence Score</p>
              </div>
            </div>

            <div className="flex items-center justify-between" style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <span className="text-sm text-muted">{skill.evidenceCount} verified pieces</span>
              <button className="btn-icon">
                <ArrowRight size={20} color="var(--primary)" />
              </button>
            </div>
          </div>
        ))}
        
        {/* Add Skill Card */}
        <div className="card flex-col items-center justify-center gap-md" style={{ borderStyle: 'dashed', backgroundColor: 'transparent', cursor: 'pointer' }}>
          <div style={{ padding: '1rem', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <Plus size={32} color="var(--primary)" />
          </div>
          <h3 className="h4">Add New Skill</h3>
          <p className="text-center text-muted text-sm">Start proving a new technology</p>
        </div>
      </div>
    </div>
  );
}

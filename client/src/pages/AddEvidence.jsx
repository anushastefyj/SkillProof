import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function AddEvidence() {
  const [evidenceType, setEvidenceType] = useState('project');
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    skill: '',
    title: '',
    description: '',
    url: '',
    tech: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Evidence saved successfully!');
    setFormData({ skill: '', title: '', description: '', url: '', tech: '' });
  };

  return (
    <div className="flex-col gap-lg animate-fade-in">
      <div>
        <h1 className="h2 font-bold" style={{ color: '#0B2E4A', marginBottom: '0.25rem' }}>Add Evidence</h1>
        <p className="text-muted text-sm">Add your project, quiz, or coding task evidence.</p>
      </div>

      <div className="card" style={{ padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', maxWidth: '800px' }}>
        
        {/* Type Selector */}
        <div className="flex gap-sm" style={{ marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'project', label: 'Project' },
            { id: 'quiz', label: 'Quiz' },
            { id: 'coding_task', label: 'Coding Task' },
            { id: 'github', label: 'GitHub' }
          ].map(type => (
            <button
              key={type.id}
              onClick={() => setEvidenceType(type.id)}
              className="btn"
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: '600',
                fontSize: '0.875rem',
                backgroundColor: evidenceType === type.id ? '#14B8A6' : 'white',
                color: evidenceType === type.id ? 'white' : '#64748B',
                border: evidenceType === type.id ? 'none' : '1px solid #E2E8F0',
                transition: 'all 0.2s ease'
              }}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-col gap-lg">
          <div>
            <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>Skill</label>
            <select 
              required 
              className="input-field" 
              style={{ padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', color: '#64748B', appearance: 'none', background: 'white' }}
              value={formData.skill}
              onChange={(e) => setFormData({...formData, skill: e.target.value})}
            >
              <option value="" disabled>Select Skill</option>
              <optgroup label="Programming Languages">
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="C">C</option>
                <option value="JavaScript">JavaScript</option>
              </optgroup>
              <optgroup label="Frontend">
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React.js">React.js</option>
                <option value="Vite">Vite</option>
              </optgroup>
              <optgroup label="Backend">
                <option value="Spring Boot">Spring Boot</option>
                <option value="REST APIs">REST APIs</option>
                <option value="Node.js">Node.js</option>
                <option value="Express.js">Express.js</option>
              </optgroup>
              <optgroup label="Databases">
                <option value="MySQL">MySQL</option>
                <option value="MongoDB">MongoDB</option>
              </optgroup>
              <optgroup label="Tools & Technologies">
                <option value="Git">Git</option>
                <option value="GitHub">GitHub</option>
                <option value="VS Code">VS Code</option>
                <option value="Eclipse/STS">Eclipse/STS</option>
                <option value="Postman">Postman</option>
              </optgroup>
              <optgroup label="Core Concepts">
                <option value="OOP">OOP</option>
                <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
                <option value="DBMS">DBMS</option>
                <option value="SQL">SQL</option>
              </optgroup>
              <optgroup label="AI & Data Science">
                <option value="Python for Data Science">Python for Data Science</option>
                <option value="Machine Learning Basics">Machine Learning Basics</option>
                <option value="Generative AI Basics">Generative AI Basics</option>
              </optgroup>
              <optgroup label="Cloud">
                <option value="Cloud Computing Basics">Cloud Computing Basics</option>
                <option value="AWS Basics">AWS Basics</option>
              </optgroup>
              <optgroup label="Development">
                <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                <option value="API Integration">API Integration</option>
                <option value="CRUD Operations">CRUD Operations</option>
                <option value="Authentication & Authorization">Authentication & Authorization</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>Project Title</label>
            <input 
              type="text" 
              required 
              className="input-field" 
              placeholder="Enter project title" 
              style={{ padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div>
            <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>Description</label>
            <textarea 
              required 
              rows={4}
              className="input-field" 
              placeholder="Describe your project" 
              style={{ padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', resize: 'vertical' }}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div>
            <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>Project URL</label>
            <input 
              type="url" 
              className="input-field" 
              placeholder="https://github.com/..." 
              style={{ padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}
              value={formData.url}
              onChange={(e) => setFormData({...formData, url: e.target.value})}
            />
          </div>

          <div>
            <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>Technologies Used</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. Java, Spring Boot, MySQL" 
              style={{ padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}
              value={formData.tech}
              onChange={(e) => setFormData({...formData, tech: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="btn" 
            style={{ 
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#14B8A6',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '600',
              border: 'none',
              width: '100%'
            }}
          >
            Save Evidence
          </button>
        </form>
      </div>
    </div>
  );
}

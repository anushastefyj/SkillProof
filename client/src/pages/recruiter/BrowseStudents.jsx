import React, { useState } from 'react';
import { Search, Filter, Bookmark, Shield, MapPin } from 'lucide-react';
import { mockStudents } from '../../data/mockRecruiterData';
import { useNavigate } from 'react-router-dom';

export default function BrowseStudents() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('');

  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = skillFilter === '' || student.skills.some(skill => skill.toLowerCase() === skillFilter.toLowerCase());
    return matchesSearch && matchesSkill;
  });

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <div>
        <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Find Candidates</h1>
        <p className="text-muted">Search and filter verified profiles to find your next hire.</p>
      </div>

      <div className="card flex items-center justify-between flex-wrap gap-md" style={{ padding: '1.5rem' }}>
        <div className="flex items-center gap-md" style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input 
              type="text" 
              className="input-field" 
              placeholder="Search by name or role..." 
              style={{ width: '100%', paddingLeft: '2.5rem' }} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={{ position: 'relative', width: '200px' }}>
            <Filter size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <select 
              className="input-field" 
              style={{ width: '100%', paddingLeft: '2.5rem', backgroundColor: 'white' }}
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
            >
              <option value="">All Skills</option>
              <option value="React">React</option>
              <option value="Java">Java</option>
              <option value="Node.js">Node.js</option>
              <option value="SQL">SQL</option>
              <option value="TypeScript">TypeScript</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary">Advanced Filters</button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md">
        {filteredStudents.length > 0 ? filteredStudents.map((student) => (
          <div key={student.id} className="card flex-col gap-md" style={{ padding: '1.5rem' }}>
            <div className="flex items-start justify-between">
              <img src={student.avatar} alt={student.name} style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--border)' }} />
              <button className="btn-icon" title="Save Candidate"><Bookmark size={20} color="var(--text-muted)" /></button>
            </div>
            
            <div>
              <h3 className="h4 font-bold flex items-center gap-xs">
                {student.name}
                {student.score > 90 && <Shield size={16} color="var(--primary)" />}
              </h3>
              <p className="text-sm text-muted mb-xs">{student.title}</p>
              <p className="text-xs text-muted flex items-center gap-xs"><MapPin size={12} /> {student.location}</p>
            </div>

            <div className="flex flex-wrap gap-xs">
              {student.skills.map((skill, idx) => (
                <span key={idx} style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px', color: 'var(--text-primary)', fontWeight: '500' }}>{skill}</span>
              ))}
            </div>
            
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="text-sm">
                <span className="font-bold">{student.score}/100</span>
                <span className="text-muted ml-xs">Evidence Score</span>
              </div>
              <button onClick={() => navigate(`/recruiter/candidate/${student.id}`)} className="btn btn-secondary text-sm">View Profile</button>
            </div>
          </div>
        )) : (
          <div style={{ gridColumn: '1 / -1', padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No candidates found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}

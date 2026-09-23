import React, { useState } from 'react';
import { BookmarkMinus, Mail, ChevronRight, Shield, MapPin } from 'lucide-react';
import { mockStudents } from '../../data/mockRecruiterData';
import { useNavigate } from 'react-router-dom';

export default function SavedCandidates() {
  const navigate = useNavigate();
  // We'll just assume the first two candidates are "saved" for demo purposes
  const [saved, setSaved] = useState(mockStudents.slice(0, 2));

  const removeCandidate = (id) => {
    setSaved(saved.filter(s => s.id !== id));
  };

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <div>
        <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Shortlisted Candidates</h1>
        <p className="text-muted">Manage the candidates you are interested in moving forward with.</p>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="flex-col">
          {saved.length > 0 ? saved.map((student, i) => (
            <div key={student.id} className="flex items-center justify-between flex-wrap gap-md" style={{ padding: '1.5rem 2rem', borderBottom: i !== saved.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div className="flex items-center gap-md">
                <img src={student.avatar} alt={student.name} style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--border)' }} />
                <div>
                  <h3 className="h4 font-bold flex items-center gap-xs">
                    {student.name}
                    {student.score > 90 && <Shield size={16} color="var(--primary)" />}
                  </h3>
                  <p className="text-sm text-muted">{student.title}</p>
                  <div className="flex items-center gap-sm mt-xs text-xs text-muted">
                    <span className="flex items-center gap-xs"><MapPin size={12} /> {student.location}</span>
                    <span>&bull;</span>
                    <span className="font-semibold text-primary">{student.score}/100 Evidence Score</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-md">
                <div className="flex flex-wrap gap-xs hidden md:flex" style={{ maxWidth: '200px' }}>
                  {student.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px', color: 'var(--text-primary)' }}>{skill}</span>
                  ))}
                  {student.skills.length > 3 && <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>+{student.skills.length - 3}</span>}
                </div>
                
                <div className="flex gap-sm ml-md">
                  <button onClick={() => removeCandidate(student.id)} className="btn-icon" title="Remove from Shortlist">
                    <BookmarkMinus size={20} color="#ef4444" />
                  </button>
                  <button className="btn-icon" title="Contact Candidate">
                    <Mail size={20} />
                  </button>
                  <button onClick={() => navigate(`/recruiter/candidate/${student.id}`)} className="btn btn-secondary text-sm">
                    View <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div style={{ padding: '4rem', textAlign: 'center' }}>
              <BookmarkMinus size={48} color="var(--border)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 className="h4 mb-xs">No Shortlisted Candidates</h3>
              <p className="text-muted">You haven't saved any candidates yet. Go browse some talent!</p>
              <button onClick={() => navigate('/recruiter/browse')} className="btn btn-primary mt-md" style={{ margin: '1.5rem auto 0 auto' }}>Browse Candidates</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

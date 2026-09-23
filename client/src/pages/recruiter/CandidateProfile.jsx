import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Shield, MapPin, Mail, Github, CheckCircle2, Award, ChevronLeft, Bookmark } from 'lucide-react';
import { mockStudents } from '../../data/mockRecruiterData';

export default function CandidateProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const candidate = mockStudents.find(s => s.id === parseInt(id));

  if (!candidate) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <h2 className="h3 mb-md">Candidate Not Found</h2>
        <button onClick={() => navigate(-1)} className="btn btn-secondary">Go Back</button>
      </div>
    );
  }

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      
      {/* Back & Actions */}
      <div className="flex items-center justify-between">
        <button onClick={() => navigate('/recruiter/browse')} className="btn btn-secondary text-sm" style={{ padding: '0.5rem 1rem' }}>
          <ChevronLeft size={16} /> Back to Search
        </button>
        <div className="flex gap-sm">
          <button className="btn btn-secondary text-sm"><Mail size={16} /> Contact</button>
          <button className="btn btn-primary text-sm"><Bookmark size={16} /> Shortlist</button>
        </div>
      </div>

      {/* Header Profile Card */}
      <div className="card flex items-start gap-lg" style={{ padding: '2rem' }}>
        <img src={candidate.avatar} alt={candidate.name} style={{ width: '120px', height: '120px', borderRadius: '16px', border: '3px solid var(--border)' }} />
        <div className="flex-col justify-between" style={{ flex: 1, minHeight: '120px' }}>
          <div>
            <div className="flex items-center gap-md">
              <h1 className="h2 font-bold">{candidate.name}</h1>
              {candidate.score > 90 && (
                <span className="flex items-center gap-xs text-xs font-bold" style={{ color: 'var(--primary)', backgroundColor: 'var(--primary-light)', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-full)' }}>
                  <Shield size={14} /> Top Talent
                </span>
              )}
            </div>
            <p className="text-lg text-muted mb-sm">{candidate.title}</p>
            <div className="flex flex-wrap gap-md text-sm text-muted">
              <span className="flex items-center gap-xs"><MapPin size={16} /> {candidate.location}</span>
              <span className="flex items-center gap-xs"><Mail size={16} /> {candidate.email}</span>
              <a href={`https://github.com/${candidate.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-xs" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                <Github size={16} /> github.com/{candidate.github}
              </a>
            </div>
          </div>
        </div>
        <div className="flex-col items-center justify-center" style={{ width: '120px', height: '120px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <span className="h2 font-bold text-primary" style={{ lineHeight: 1 }}>{candidate.score}</span>
          <span className="text-xs font-semibold text-muted text-center leading-tight">Evidence<br/>Score</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-lg">
        {/* Left Column: Skills & Info */}
        <div className="flex-col gap-lg" style={{ gridColumn: 'span 1' }}>
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 className="h4 mb-md">Verified Skills</h3>
            <div className="flex flex-wrap gap-sm">
              {candidate.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-xs" style={{ fontSize: '0.85rem', padding: '0.4rem 0.75rem', backgroundColor: '#f0fdfa', color: '#0f766e', borderRadius: 'var(--radius-md)', fontWeight: '600', border: '1px solid #ccfbf1' }}>
                  <CheckCircle2 size={14} /> {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 className="h4 mb-md">About</h3>
            <p className="text-sm text-muted" style={{ lineHeight: 1.6 }}>
              Passionate {candidate.title} with a strong background in software engineering. Active participant in coding challenges and open source contributions. Always looking for the next challenging problem to solve.
            </p>
          </div>
        </div>

        {/* Right Column: Evidence */}
        <div className="flex-col gap-lg" style={{ gridColumn: 'span 2' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <h3 className="h3 mb-lg">Evidence Portfolio</h3>
            
            <div className="flex-col gap-md relative">
              {/* Timeline line */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: '23px', width: '2px', backgroundColor: 'var(--border)', zIndex: 0 }}></div>
              
              {candidate.evidence.map((item, idx) => (
                <div key={item.id} className="flex items-start gap-md relative" style={{ zIndex: 1 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'white', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 2 }}>
                    {item.type === 'Project' ? <Github size={20} color="var(--primary)" /> : 
                     item.type === 'Certificate' ? <Award size={20} color="var(--primary)" /> : 
                     <Shield size={20} color="var(--primary)" />}
                  </div>
                  <div className="card" style={{ flex: 1, padding: '1.25rem', margin: 0 }}>
                    <div className="flex items-center justify-between mb-sm">
                      <h4 className="font-bold">{item.title}</h4>
                      <span className="badge" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)' }}>{item.type}</span>
                    </div>
                    <p className="text-sm text-muted mb-md">Successfully verified {item.type.toLowerCase()} submission showing practical application of skills.</p>
                    <div className="flex gap-sm">
                      <button className="btn btn-secondary text-xs" style={{ padding: '0.4rem 0.8rem' }}>View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

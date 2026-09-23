import React from 'react';
import { Bookmark, Users, Code2, MapPin } from 'lucide-react';
import ProgressRing from '../../components/ProgressRing';

export default function SavedCandidates() {
  return (
    <div className="flex-col gap-lg">
      <div>
        <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Saved Candidates</h1>
        <p className="text-muted">Review and manage candidates you've shortlisted.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md">
        {[1, 2].map((_, i) => (
          <div key={i} className="card flex-col justify-between" style={{ border: '1px solid var(--primary)' }}>
            <div className="flex items-start justify-between" style={{ marginBottom: '1.5rem' }}>
              <div className="flex items-center gap-sm">
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={20} color="var(--primary)" />
                </div>
                <div>
                  <h3 className="font-semibold">Candidate #{1042 - i}</h3>
                  <p className="text-xs text-muted">Frontend Developer</p>
                </div>
              </div>
              <button className="btn-icon" style={{ color: 'var(--primary)' }}><Bookmark size={20} fill="var(--primary)" /></button>
            </div>
            
            <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div className="flex items-center gap-sm">
                <Code2 size={20} color="var(--primary)" />
                <span className="font-medium">React.js</span>
              </div>
              <div className="flex items-center gap-sm">
                <div style={{ width: '32px', height: '32px' }}>
                  <ProgressRing radius={16} stroke={3} progress={92 - i * 5} color="var(--primary)" />
                </div>
                <span className="font-semibold text-sm">{92 - i * 5}</span>
              </div>
            </div>

            <div className="flex items-center justify-between" style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <div className="text-xs text-muted flex items-center gap-xs">
                <MapPin size={14} /> Remote
              </div>
              <button className="btn btn-secondary text-sm" style={{ padding: '0.5rem 1rem' }}>View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Users, Eye, Bookmark, TrendingUp, CheckCircle, Shield } from 'lucide-react';
import { mockStudents } from '../../data/mockRecruiterData';
import { useNavigate } from 'react-router-dom';

export default function RecruiterDashboard() {
  const navigate = useNavigate();
  // Simulate some metrics
  const totalMatches = mockStudents.length * 14; 
  const profilesViewed = mockStudents.length * 8;
  const savedCandidates = 2; // Derived from mock data manually for visual

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <div>
        <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Recruiter Dashboard</h1>
        <p className="text-muted">Overview of your hiring pipeline and candidate matches.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-md">
        <div className="card flex-col gap-sm" style={{ padding: '1.5rem' }}>
          <div className="flex items-center gap-sm text-muted">
            <Users size={20} />
            <span className="font-medium">Total Network Matches</span>
          </div>
          <h2 className="h1">{totalMatches}</h2>
          <span className="text-xs text-success flex items-center gap-xs font-medium"><TrendingUp size={14}/> +12 this week</span>
        </div>
        <div className="card flex-col gap-sm" style={{ padding: '1.5rem' }}>
          <div className="flex items-center gap-sm text-muted">
            <Eye size={20} />
            <span className="font-medium">Profiles Viewed</span>
          </div>
          <h2 className="h1">{profilesViewed}</h2>
          <span className="text-xs text-muted flex items-center gap-xs font-medium">Past 30 days</span>
        </div>
        <div className="card flex-col gap-sm" style={{ padding: '1.5rem' }}>
          <div className="flex items-center gap-sm text-muted">
            <Bookmark size={20} />
            <span className="font-medium">Shortlisted</span>
          </div>
          <h2 className="h1">{savedCandidates}</h2>
          <span className="text-xs text-primary flex items-center gap-xs font-medium cursor-pointer" onClick={() => navigate('/recruiter/saved')}>View list</span>
        </div>
        <div className="card flex-col gap-sm" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-sm text-muted">
            <CheckCircle size={20} />
            <span className="font-medium">Job Postings</span>
          </div>
          <h2 className="h1">2 Active</h2>
          <span className="text-xs text-primary flex items-center gap-xs font-medium cursor-pointer" onClick={() => navigate('/recruiter/jobs')}>Manage jobs</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-lg">
        {/* Recent Matches */}
        <div className="card" style={{ gridColumn: 'span 2', padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            <h2 className="h4">Top Suggested Candidates</h2>
          </div>
          <div className="flex-col">
            {mockStudents.map((candidate, i) => (
              <div key={candidate.id} className="flex items-center justify-between" style={{ padding: '1.5rem', borderBottom: i !== mockStudents.length - 1 ? '1px solid var(--border)' : 'none', backgroundColor: i % 2 === 0 ? 'white' : 'var(--bg-secondary)' }}>
                <div className="flex items-center gap-md">
                  <img src={candidate.avatar} alt={candidate.name} style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)' }} />
                  <div>
                    <h3 className="font-semibold flex items-center gap-sm">
                      {candidate.name} 
                      {candidate.score > 90 && <Shield size={14} color="var(--primary)" />}
                    </h3>
                    <p className="text-sm text-muted">{candidate.title} &bull; {candidate.score}/100 Evidence Score</p>
                    <div className="flex flex-wrap gap-xs mt-xs">
                      {candidate.skills.slice(0, 3).map((s, idx) => (
                         <span key={idx} style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px', color: 'var(--text-muted)' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-sm">
                  <button onClick={() => navigate(`/recruiter/candidate/${candidate.id}`)} className="btn btn-secondary text-sm" style={{ padding: '0.5rem 1rem' }}>View Profile</button>
                  <button className="btn-icon"><Bookmark size={20} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Activity Feed */}
        <div className="card" style={{ padding: '1.5rem' }}>
           <h2 className="h4" style={{ marginBottom: '1.5rem' }}>Recent Network Activity</h2>
           <div className="flex-col gap-md">
             <div className="flex items-start gap-sm">
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)', marginTop: '6px' }}></div>
               <div>
                 <p className="text-sm"><strong>Priya Sharma</strong> just verified a new project "E-commerce Dashboard".</p>
                 <span className="text-xs text-muted">2 hours ago</span>
               </div>
             </div>
             <div className="flex items-start gap-sm">
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)', marginTop: '6px' }}></div>
               <div>
                 <p className="text-sm"><strong>Rahul Verma</strong> achieved a perfect score in "Advanced Java Concepts" quiz.</p>
                 <span className="text-xs text-muted">5 hours ago</span>
               </div>
             </div>
             <div className="flex items-start gap-sm">
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--warning)', marginTop: '6px' }}></div>
               <div>
                 <p className="text-sm"><strong>Anusha Stefy J</strong> updated their GitHub repository.</p>
                 <span className="text-xs text-muted">Yesterday</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Users, Eye, Bookmark, TrendingUp } from 'lucide-react';

export default function RecruiterDashboard() {
  return (
    <div className="flex-col gap-lg">
      <div>
        <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Recruiter Dashboard</h1>
        <p className="text-muted">Overview of your hiring pipeline and candidate matches.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-md">
        <div className="card flex-col gap-sm">
          <div className="flex items-center gap-sm text-muted">
            <Users size={20} />
            <span className="font-medium">Total Matches</span>
          </div>
          <h2 className="h1">142</h2>
          <span className="text-xs text-success flex items-center gap-xs font-medium"><TrendingUp size={14}/> +12 this week</span>
        </div>
        <div className="card flex-col gap-sm">
          <div className="flex items-center gap-sm text-muted">
            <Eye size={20} />
            <span className="font-medium">Profiles Viewed</span>
          </div>
          <h2 className="h1">84</h2>
        </div>
        <div className="card flex-col gap-sm">
          <div className="flex items-center gap-sm text-muted">
            <Bookmark size={20} />
            <span className="font-medium">Saved Candidates</span>
          </div>
          <h2 className="h1">12</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-lg">
        {/* Recent Matches */}
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <h2 className="h4" style={{ marginBottom: '1.5rem' }}>Top Matches for "Frontend Developer"</h2>
          <div className="flex-col gap-md">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
                <div className="flex items-center gap-md">
                  <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={24} color="var(--primary)" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Candidate #{1040 + i}</h3>
                    <p className="text-sm text-muted">React.js &bull; 92/100 Evidence Score</p>
                  </div>
                </div>
                <div className="flex gap-sm">
                  <button className="btn btn-secondary text-sm" style={{ padding: '0.5rem 1rem' }}>View</button>
                  <button className="btn-icon"><Bookmark size={20} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

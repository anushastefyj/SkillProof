import React from 'react';
import { GitBranch, Box, Code2, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function GithubActivity() {
  const { user } = useAuth();
  
  const repos = [
    { id: 1, name: 'EmployeePayrollSystem', tech: 'Java', commits: 42, active: true },
    { id: 2, name: 'StudentManagementSystem', tech: 'Java', commits: 38, active: false },
    { id: 3, name: 'myBoutique', tech: 'React', commits: 25, active: false },
    { id: 4, name: 'SoftGrowTech-Dashboard', tech: 'React', commits: 18, active: false }
  ];

  return (
    <div className="flex-col gap-lg animate-fade-in">
      <div>
        <h1 className="h2" style={{ marginBottom: '0.25rem' }}>GitHub Activity</h1>
        <p className="text-muted">Import your public repositories and contributions.</p>
      </div>

      <div className="card flex items-center justify-between" style={{ padding: '2rem' }}>
        <div className="flex items-center gap-md">
          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '50%' }}>
            <GitBranch size={32} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted">GitHub Username</p>
            <h3 className="h4">{user?.name ? user.name.toLowerCase().replace(' ', '') : 'johndoe'}</h3>
          </div>
        </div>
        <button className="btn btn-primary">Fetch Data</button>
      </div>

      <div className="grid md:grid-cols-3 gap-md">
        <div className="card flex items-center gap-md" style={{ padding: '1.5rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-md)' }}>
            <Box size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted">Public Repositories</p>
            <h2 className="h2">15</h2>
          </div>
        </div>
        <div className="card flex items-center gap-md" style={{ padding: '1.5rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: '#eff6ff', color: '#3b82f6', borderRadius: 'var(--radius-md)' }}>
            <GitBranch size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted">Total Commits</p>
            <h2 className="h2">248</h2>
          </div>
        </div>
        <div className="card flex items-center gap-md" style={{ padding: '1.5rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: '#fef3c7', color: '#d97706', borderRadius: 'var(--radius-md)' }}>
            <Code2 size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted">Languages</p>
            <h2 className="h2">5</h2>
          </div>
        </div>
      </div>

      <div>
        <h3 className="h4" style={{ marginBottom: '1rem' }}>Top Repositories</h3>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="flex-col">
            {repos.map((repo, i) => (
              <div key={repo.id} className="flex items-center justify-between" style={{ padding: '1.5rem 2rem', borderBottom: i !== repos.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div className="flex items-center gap-md">
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                    <Box size={24} className="text-muted" />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ marginBottom: '0.25rem' }}>{repo.name}</h4>
                    <p className="text-sm text-muted">{repo.tech} &bull; {repo.commits} commits</p>
                  </div>
                </div>
                {repo.active && (
                  <span className="text-xs font-semibold text-success" style={{ backgroundColor: 'var(--primary-light)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                    Most Active
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

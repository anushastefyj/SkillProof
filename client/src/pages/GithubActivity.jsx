import React, { useState, useEffect } from 'react';
import { GitBranch, Box, Code2, Users, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function GithubActivity() {
  const { user } = useAuth();
  
  const [username, setUsername] = useState('anushastefyj');
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  
  const [stats, setStats] = useState({
    publicRepos: 0,
    followers: 0,
    languages: 0
  });
  const [repos, setRepos] = useState([]);

  const fetchGithubData = async () => {
    if (!username) return;
    setIsFetching(true);
    setError(null);
    try {
      // Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error('User not found or API rate limit exceeded');
      const userData = await userRes.json();
      
      // Fetch user repos
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
      if (!reposRes.ok) throw new Error('Failed to fetch repositories');
      const reposData = await reposRes.json();

      // Calculate languages
      const languages = new Set();
      reposData.forEach(repo => {
        if (repo.language) languages.add(repo.language);
      });

      setStats({
        publicRepos: userData.public_repos,
        followers: userData.followers,
        languages: languages.size
      });

      setRepos(reposData.map(repo => ({
        id: repo.id,
        name: repo.name,
        tech: repo.language || 'Markdown',
        url: repo.html_url,
        stars: repo.stargazers_count,
        active: false // We can mock this or calculate based on recent pushes
      })));

      // Mark the most recently updated one as active
      if (reposData.length > 0) {
        setRepos(prev => {
          const newRepos = [...prev];
          newRepos[0].active = true;
          return newRepos;
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    // Optionally fetch on mount if you want it connected immediately
    fetchGithubData();
  }, []); // eslint-disable-line

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <div>
        <h1 className="h2" style={{ marginBottom: '0.25rem' }}>GitHub Activity</h1>
        <p className="text-muted">Connect and import your public repositories and contributions.</p>
      </div>

      <div className="card flex flex-wrap items-center justify-between gap-md" style={{ padding: '2rem' }}>
        <div className="flex items-center gap-md">
          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '50%' }}>
            <GitBranch size={32} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted mb-1">GitHub Username</p>
            <input 
              type="text" 
              className="input-field" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="e.g. anushastefyj"
              style={{ padding: '0.4rem 0.8rem' }}
            />
          </div>
        </div>
        <button onClick={fetchGithubData} disabled={isFetching} className="btn btn-primary">
          {isFetching ? <Loader2 size={20} className="animate-spin" /> : 'Fetch Data'}
        </button>
      </div>
      
      {error && (
        <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: 'var(--radius-md)' }}>
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-md">
        <div className="card flex items-center gap-md" style={{ padding: '1.5rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-md)' }}>
            <Box size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted">Public Repositories</p>
            <h2 className="h2">{stats.publicRepos}</h2>
          </div>
        </div>
        <div className="card flex items-center gap-md" style={{ padding: '1.5rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: '#eff6ff', color: '#3b82f6', borderRadius: 'var(--radius-md)' }}>
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted">Followers</p>
            <h2 className="h2">{stats.followers}</h2>
          </div>
        </div>
        <div className="card flex items-center gap-md" style={{ padding: '1.5rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: '#fef3c7', color: '#d97706', borderRadius: 'var(--radius-md)' }}>
            <Code2 size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted">Languages Used</p>
            <h2 className="h2">{stats.languages}</h2>
          </div>
        </div>
      </div>

      <div>
        <h3 className="h4" style={{ marginBottom: '1rem' }}>Recent Repositories</h3>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="flex-col">
            {repos.length > 0 ? repos.map((repo, i) => (
              <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between" style={{ padding: '1.5rem 2rem', borderBottom: i !== repos.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background-color 0.2s', display: 'flex' }}>
                <div className="flex items-center gap-md">
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                    <Box size={24} className="text-muted" />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ marginBottom: '0.25rem' }}>{repo.name}</h4>
                    <p className="text-sm text-muted">{repo.tech} &bull; {repo.stars} stars</p>
                  </div>
                </div>
                {repo.active && (
                  <span className="text-xs font-semibold text-success" style={{ backgroundColor: 'var(--primary-light)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                    Most Active
                  </span>
                )}
              </a>
            )) : (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                {isFetching ? 'Loading repositories...' : 'No repositories found. Enter a valid username and fetch data.'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

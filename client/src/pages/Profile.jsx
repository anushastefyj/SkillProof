import React from 'react';
import { Github, Linkedin, Globe, MapPin, CheckCircle2, Award, Code, GraduationCap, FileCheck, Trophy, FolderGit2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <div>
        <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Professional Profile</h1>
        <p className="text-muted">Your verified skill identity and achievements.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-lg">
        
        {/* --- LEFT COLUMN --- */}
        <div className="flex-col gap-lg md:col-span-1">
          
          {/* Profile Overview */}
          <div className="card flex-col items-center text-center">
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--bg-tertiary)', overflow: 'hidden', marginBottom: '1rem', border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <img src="https://ui-avatars.com/api/?name=Anusha+Stefy&background=00b894&color=fff&size=120" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h2 className="h3 font-bold mb-1" style={{ color: '#0B2E4A' }}>Anusha Stefy J</h2>
            <p className="font-semibold text-primary mb-1">Full Stack Developer</p>
            <p className="text-sm text-muted mb-md">AI & Data Science Student</p>
            
            <div className="flex items-center gap-xs text-sm text-muted mb-lg">
              <MapPin size={16} /> Andhra Pradesh, India
            </div>

            <div className="flex items-center justify-center gap-md w-full pt-md" style={{ borderTop: '1px solid var(--border)' }}>
              <a href="#" className="flex items-center justify-center" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', transition: 'all 0.2s ease' }}><Github size={18} /></a>
              <a href="#" className="flex items-center justify-center" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', color: '#0a66c2', transition: 'all 0.2s ease' }}><Linkedin size={18} /></a>
              <a href="#" className="flex items-center justify-center" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', color: 'var(--primary)', transition: 'all 0.2s ease' }}><Globe size={18} /></a>
            </div>
          </div>

          {/* About Me */}
          <div className="card">
            <h3 className="h5 font-bold mb-md" style={{ color: '#0B2E4A' }}>About</h3>
            <p className="text-sm text-muted" style={{ lineHeight: 1.6 }}>
              AI & Data Science student interested in Java, React, backend development and building practical software projects.
            </p>
          </div>

          {/* Education */}
          <div className="card">
            <h3 className="h5 font-bold mb-md flex items-center gap-sm" style={{ color: '#0B2E4A' }}>
              <GraduationCap size={18} className="text-primary" /> Education
            </h3>
            
            <div className="flex-col gap-md">
              <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border)' }}>
                <div style={{ position: 'absolute', left: '-5px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>
                <h4 className="font-semibold text-sm">B.Tech — AI & Data Science</h4>
                <p className="text-xs text-muted mt-1">2024–2027</p>
              </div>
              
              <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border)' }}>
                <div style={{ position: 'absolute', left: '-5px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-muted)' }}></div>
                <h4 className="font-semibold text-sm">Diploma — ECE</h4>
                <p className="text-xs text-muted mt-1">2020–2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="flex-col gap-lg md:col-span-2">
          
          {/* SKILLPROOF SCORE */}
          <div className="card" style={{ background: 'linear-gradient(135deg, #0B2E4A 0%, #1a4b77 100%)', color: 'white', border: 'none' }}>
            <div className="flex items-center justify-between mb-lg">
              <div>
                <h3 className="h4 font-bold flex items-center gap-sm mb-xs">
                  <Award size={24} className="text-primary" /> SKILLPROOF SCORE
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Calculated from actual verified evidence</p>
              </div>
              <div className="flex items-end">
                <span style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1', color: '#14B8A6' }}>78</span>
                <span className="text-lg font-bold" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '6px', marginLeft: '4px' }}>/ 100</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-xl gap-y-md mb-lg" style={{ padding: '0 0.5rem' }}>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">Java</span>
                <span className="font-bold text-primary">84</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">React</span>
                <span className="font-bold text-primary">76</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">SQL</span>
                <span className="font-bold text-primary">71</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">MongoDB</span>
                <span className="font-bold text-primary">68</span>
              </div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div className="flex items-center gap-sm text-sm font-medium">
                <CheckCircle2 size={16} className="text-primary" /> Projects + Quizzes + Tasks + GitHub
              </div>
              <div className="badge" style={{ backgroundColor: '#14B8A6', color: 'white', fontWeight: 'bold' }}>
                Evidence Strength: Strong
              </div>
            </div>
          </div>
          
          {/* SKILLS */}
          <div className="card">
            <h3 className="h4 font-bold mb-lg flex items-center gap-sm" style={{ color: '#0B2E4A' }}>
              <Code size={20} className="text-primary" /> Verified Skills
            </h3>

            {/* Java */}
            <div className="mb-xl p-md" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '12px' }}>
              <div className="flex items-center justify-between mb-sm">
                <h4 className="font-bold text-lg flex items-center gap-sm">
                  <img src="https://www.svgrepo.com/show/353924/java.svg" alt="Java" style={{ width: '20px', height: '20px' }} />
                  Java
                </h4>
                <span className="text-primary font-bold">82%</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <div style={{ width: '82%', height: '100%', backgroundColor: 'var(--primary)' }}></div>
              </div>
              
              <p className="text-xs font-semibold text-muted mb-sm uppercase tracking-wider">Evidence of Mastery:</p>
              <div className="grid sm:grid-cols-2 gap-sm">
                <div className="flex items-center gap-sm text-sm"><CheckCircle2 size={16} className="text-primary" /> 3 Projects</div>
                <div className="flex items-center gap-sm text-sm"><CheckCircle2 size={16} className="text-primary" /> 42 Coding Tasks</div>
                <div className="flex items-center gap-sm text-sm"><CheckCircle2 size={16} className="text-primary" /> 87% Quiz Score</div>
                <div className="flex items-center gap-sm text-sm"><CheckCircle2 size={16} className="text-primary" /> GitHub Activity</div>
              </div>
            </div>

            {/* React */}
            <div className="p-md" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '12px' }}>
              <div className="flex items-center justify-between mb-sm">
                <h4 className="font-bold text-lg flex items-center gap-sm">
                  <img src="https://www.svgrepo.com/show/354259/react.svg" alt="React" style={{ width: '20px', height: '20px' }} />
                  React
                </h4>
                <span className="text-primary font-bold">72%</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <div style={{ width: '72%', height: '100%', backgroundColor: '#3b82f6' }}></div>
              </div>
              
              <p className="text-xs font-semibold text-muted mb-sm uppercase tracking-wider">Evidence of Mastery:</p>
              <div className="grid sm:grid-cols-2 gap-sm">
                <div className="flex items-center gap-sm text-sm"><CheckCircle2 size={16} className="text-primary" /> 2 Projects</div>
                <div className="flex items-center gap-sm text-sm"><CheckCircle2 size={16} className="text-primary" /> 25 Coding Tasks</div>
                <div className="flex items-center gap-sm text-sm"><CheckCircle2 size={16} className="text-primary" /> 81% Quiz Score</div>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="card">
            <h3 className="h4 font-bold mb-lg flex items-center gap-sm" style={{ color: '#0B2E4A' }}>
              <FolderGit2 size={20} className="text-primary" /> Featured Projects
            </h3>

            <div style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <h4 className="font-bold text-lg mb-1">Electronic Voting System</h4>
              <p className="text-sm font-medium text-primary mb-md">Frontend + Backend Developer</p>
              
              <div className="flex flex-wrap gap-xs mb-md">
                <span className="badge" style={{ backgroundColor: '#e0f2fe', color: '#0369a1' }}>React</span>
                <span className="badge" style={{ backgroundColor: '#dcfce7', color: '#166534' }}>Spring Boot</span>
                <span className="badge" style={{ backgroundColor: '#ffedd5', color: '#9a3412' }}>MySQL</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-y-md mb-md">
                <div>
                  <p className="text-xs font-semibold text-muted mb-sm uppercase tracking-wider">Evidence Provided:</p>
                  <ul className="flex-col gap-xs text-sm">
                    <li className="flex items-center gap-sm"><CheckCircle2 size={14} className="text-primary" /> GitHub Repository</li>
                    <li className="flex items-center gap-sm"><CheckCircle2 size={14} className="text-primary" /> Live Demo</li>
                    <li className="flex items-center gap-sm"><CheckCircle2 size={14} className="text-primary" /> Project Documentation</li>
                    <li className="flex items-center gap-sm"><CheckCircle2 size={14} className="text-primary" /> Code Review</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted mb-sm uppercase tracking-wider">Skills Demonstrated:</p>
                  <ul className="flex-col gap-xs text-sm">
                    <li className="flex items-center gap-sm"><FileCheck size={14} className="text-muted" /> React</li>
                    <li className="flex items-center gap-sm"><FileCheck size={14} className="text-muted" /> REST API</li>
                    <li className="flex items-center gap-sm"><FileCheck size={14} className="text-muted" /> Java</li>
                    <li className="flex items-center gap-sm"><FileCheck size={14} className="text-muted" /> MySQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS & ACHIEVEMENTS */}
          <div className="grid sm:grid-cols-2 gap-lg">
            
            <div className="card">
              <h3 className="h5 font-bold mb-md flex items-center gap-sm" style={{ color: '#0B2E4A' }}>
                <Award size={18} className="text-primary" /> Certifications
              </h3>
              <div className="flex-col gap-md">
                <div>
                  <h4 className="font-semibold text-sm leading-tight">Data Science Essentials with Python</h4>
                  <p className="text-xs text-muted mt-1">Cisco Networking Academy</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-tight">Python Essentials</h4>
                  <p className="text-xs text-muted mt-1">Cisco Networking Academy</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-tight">Cloud Computing</h4>
                  <p className="text-xs text-muted mt-1">CODTECH</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="h5 font-bold mb-md flex items-center gap-sm" style={{ color: '#0B2E4A' }}>
                <Trophy size={18} className="text-warning" /> Achievements
              </h3>
              <div className="flex-col gap-md">
                <div className="flex items-start gap-sm">
                  <Award size={16} className="text-warning mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm leading-tight">1st Prize — Technical Symposium</h4>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <Award size={16} className="text-warning mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm leading-tight">Consolation Prize — Hackathon</h4>
                    <p className="text-xs text-muted mt-1">Learning Resource Sharing Platform</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}

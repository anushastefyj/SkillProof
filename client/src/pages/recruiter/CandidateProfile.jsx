import React, { useState } from 'react';
import { ChevronLeft, CheckCircle2, Bookmark, Mail, MapPin, Award, ShieldCheck, FolderCheck, GitBranch, Code2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function CandidateProfile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');

  // Hardcoded candidate data for UI matching
  const candidate = {
    name: 'Anusha Stefy J',
    school: 'B.Tech AI & DS • MTIET',
    location: 'Bangalore, India',
    email: 'anusha@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Anusha&background=e0e7ff&color=3b82f6',
    verified: true
  };

  return (
    <div className="flex-col gap-xl animate-fade-in">
      
      {/* Top Header Row */}
      <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
        <div className="flex items-center gap-sm text-sm" style={{ color: '#3b82f6', fontWeight: '500' }}>
          <ChevronLeft size={16} />
          <Link to="/recruiter/browse" className="hover:underline">Browse Students</Link>
          <span style={{ color: '#94a3b8' }}>{'>'}</span>
          <span style={{ color: '#64748b' }}>{candidate.name}</span>
        </div>
        {candidate.verified && (
          <div className="badge" style={{ backgroundColor: '#ecfdf5', color: '#10B981', border: '1px solid #10B981', padding: '0.25rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <CheckCircle2 size={14} /> Verified
          </div>
        )}
      </div>

      {/* Main Profile Header Card */}
      <div style={{ padding: '2rem 2.5rem', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        
        <div className="flex justify-between items-start" style={{ marginBottom: '2rem' }}>
          <div className="flex gap-xl">
            <img src={candidate.avatar} alt={candidate.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <div className="flex-col justify-center">
              <h1 className="h2 font-bold" style={{ color: '#0B2E4A', marginBottom: '0.25rem' }}>{candidate.name}</h1>
              <p className="text-muted text-sm font-medium mb-2">{candidate.school}</p>
              <div className="flex gap-lg text-xs text-muted">
                <span className="flex items-center gap-xs"><MapPin size={14} /> {candidate.location}</span>
                <span className="flex items-center gap-xs"><Mail size={14} /> {candidate.email}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-md">
            <button className="btn" style={{ padding: '0.6rem 1.25rem', backgroundColor: 'white', color: '#3b82f6', border: '1px solid #3b82f6', borderRadius: '12px', fontSize: '0.875rem' }}>
              <Bookmark size={16} /> Save Candidate
            </button>
            <button className="btn" style={{ padding: '0.6rem 1.5rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '12px', fontSize: '0.875rem' }}>
              Contact
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-xl" style={{ borderBottom: '1px solid #E2E8F0', marginTop: '1rem' }}>
          {['Overview', 'Skills & Evidence', 'Projects', 'Timeline'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ 
                padding: '0.75rem 0', 
                color: activeTab === tab ? '#3b82f6' : '#64748b', 
                fontWeight: activeTab === tab ? '600' : '500',
                borderBottom: activeTab === tab ? '3px solid #3b82f6' : '3px solid transparent',
                background: 'none',
                fontSize: '0.9375rem',
                cursor: 'pointer'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'Overview' && (
        <div className="flex gap-lg">
          
          {/* Top Verified Skills */}
          <div className="flex-col gap-md" style={{ flex: 2 }}>
            <h3 className="h4 font-bold" style={{ color: '#0B2E4A', marginBottom: '0.5rem' }}>Top Verified Skills</h3>
            <div className="grid md:grid-cols-2 gap-md">
              
              {/* Java Skill Card */}
              <div className="card flex-col" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-sm">
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="https://www.svgrepo.com/show/353924/java.svg" alt="Java" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm" style={{ color: '#0B2E4A' }}>Java</h4>
                      <p className="text-xs text-muted">Evidence Strength</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-bold" style={{ fontSize: '1.25rem', color: '#0B2E4A' }}>92/100</span>
                  <div className="badge" style={{ backgroundColor: '#ecfdf5', color: '#10B981', border: '1px solid #10B981', fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                    <ShieldCheck size={12} style={{ marginRight: '2px' }} /> Advanced
                  </div>
                </div>
              </div>

              {/* React Skill Card */}
              <div className="card flex-col" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-sm">
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="https://www.svgrepo.com/show/354259/react.svg" alt="React" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm" style={{ color: '#0B2E4A' }}>React</h4>
                      <p className="text-xs text-muted">Evidence Strength</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-bold" style={{ fontSize: '1.25rem', color: '#0B2E4A' }}>84/100</span>
                  <div className="badge" style={{ backgroundColor: '#ecfdf5', color: '#10B981', border: '1px solid #10B981', fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                    <ShieldCheck size={12} style={{ marginRight: '2px' }} /> Advanced
                  </div>
                </div>
              </div>

              {/* Python Skill Card */}
              <div className="card flex-col" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-sm">
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="https://www.svgrepo.com/show/354238/python.svg" alt="Python" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm" style={{ color: '#0B2E4A' }}>Python</h4>
                      <p className="text-xs text-muted">Evidence Strength</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-bold" style={{ fontSize: '1.25rem', color: '#0B2E4A' }}>76/100</span>
                  <div className="badge" style={{ backgroundColor: '#eff6ff', color: '#3b82f6', border: '1px solid #3b82f6', fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                    Intermediate
                  </div>
                </div>
              </div>

              {/* C++ Skill Card */}
              <div className="card flex-col" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-sm">
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="https://www.svgrepo.com/show/353622/c-plusplus.svg" alt="C++" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm" style={{ color: '#0B2E4A' }}>C++</h4>
                      <p className="text-xs text-muted">Evidence Strength</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-bold" style={{ fontSize: '1.25rem', color: '#0B2E4A' }}>68/100</span>
                  <div className="badge" style={{ backgroundColor: '#eff6ff', color: '#3b82f6', border: '1px solid #3b82f6', fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                    Intermediate
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="flex-col gap-md" style={{ flex: 1 }}>
            <h3 className="h4 font-bold" style={{ color: '#0B2E4A', marginBottom: '0.5rem' }}>Quick Stats</h3>
            <div className="card flex-col gap-lg" style={{ padding: '2rem 1.5rem', borderRadius: '16px' }}>
              
              <div className="flex gap-md items-center">
                <div style={{ backgroundColor: '#eff6ff', padding: '0.6rem', borderRadius: '8px' }}><ShieldCheck size={20} color="#3b82f6" /></div>
                <div>
                  <p className="text-xs text-muted font-medium">Total Skills</p>
                  <p className="font-bold" style={{ color: '#0B2E4A' }}>5</p>
                </div>
              </div>

              <div className="flex gap-md items-center">
                <div style={{ backgroundColor: '#eff6ff', padding: '0.6rem', borderRadius: '8px' }}><FolderCheck size={20} color="#3b82f6" /></div>
                <div>
                  <p className="text-xs text-muted font-medium">Total Evidence</p>
                  <p className="font-bold" style={{ color: '#0B2E4A' }}>24</p>
                </div>
              </div>

              <div className="flex gap-md items-center">
                <div style={{ backgroundColor: '#eff6ff', padding: '0.6rem', borderRadius: '8px' }}><GitBranch size={20} color="#3b82f6" /></div>
                <div>
                  <p className="text-xs text-muted font-medium">Github Repos</p>
                  <p className="font-bold" style={{ color: '#0B2E4A' }}>15</p>
                </div>
              </div>

              <div className="flex gap-md items-center">
                <div style={{ backgroundColor: '#eff6ff', padding: '0.6rem', borderRadius: '8px' }}><Code2 size={20} color="#3b82f6" /></div>
                <div>
                  <p className="text-xs text-muted font-medium">Coding Tasks</p>
                  <p className="font-bold" style={{ color: '#0B2E4A' }}>32</p>
                </div>
              </div>

              <div className="flex gap-md items-center">
                <div style={{ backgroundColor: '#eff6ff', padding: '0.6rem', borderRadius: '8px' }}><Award size={20} color="#3b82f6" /></div>
                <div>
                  <p className="text-xs text-muted font-medium">Quiz Average</p>
                  <p className="font-bold" style={{ color: '#0B2E4A' }}>82%</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}

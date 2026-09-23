import React, { useState } from 'react';
import { ChevronLeft, CheckCircle2, FileCheck, Code2, Award, GitBranch, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SkillDetail() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex-col gap-xl animate-fade-in">
      
      {/* Top Header Row */}
      <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
        <div className="flex items-center gap-sm text-sm" style={{ color: '#3b82f6', fontWeight: '500' }}>
          <ChevronLeft size={16} />
          <Link to="/dashboard/skills" className="hover:underline">My Skills</Link>
          <span style={{ color: '#94a3b8' }}>{'>'}</span>
          <span style={{ color: '#64748b' }}>Java</span>
        </div>
        <div className="badge" style={{ backgroundColor: '#ecfdf5', color: '#10B981', border: '1px solid #10B981', padding: '0.25rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <CheckCircle2 size={14} /> Verified
        </div>
      </div>

      {/* Main Header Card */}
      <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
          <div className="flex items-center gap-lg">
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://www.svgrepo.com/show/353924/java.svg" alt="Java" style={{ width: '40px', height: '40px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <div>
              <h1 className="h1 font-bold" style={{ color: '#0B2E4A', marginBottom: '0.25rem' }}>Java</h1>
              <div className="text-muted text-sm font-medium">Evidence Strength</div>
            </div>
          </div>
          <div className="flex items-center gap-md" style={{ width: '40%' }}>
            <div style={{ flex: 1, height: '12px', backgroundColor: '#e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
              <div style={{ width: '87%', height: '100%', background: 'linear-gradient(to right, #10B981, #14B8A6)', borderRadius: '6px' }}></div>
            </div>
            <span className="font-bold" style={{ color: '#0B2E4A', fontSize: '1.25rem' }}>87/100</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-xl" style={{ borderBottom: '1px solid #E2E8F0', marginTop: '1rem' }}>
          {['Overview', 'Evidence', 'Timeline'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ 
                padding: '0.75rem 0', 
                color: activeTab === tab ? '#3b82f6' : '#64748b', 
                fontWeight: activeTab === tab ? '600' : '500',
                borderBottom: activeTab === tab ? '3px solid #3b82f6' : '3px solid transparent',
                background: 'none',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'Overview' && (
        <>
          {/* 4 Stat Cards */}
          <div className="grid md:grid-cols-4 gap-md" style={{ marginTop: '0.5rem' }}>
            <div className="card flex-col" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div className="flex items-center gap-sm mb-2 text-sm font-semibold text-muted">
                <FileCheck size={18} color="#10B981" /> Projects
              </div>
              <h2 className="h2 font-bold" style={{ color: '#0B2E4A' }}>3</h2>
            </div>
            <div className="card flex-col" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div className="flex items-center gap-sm mb-2 text-sm font-semibold text-muted">
                <Code2 size={18} color="#3b82f6" /> Coding Tasks
              </div>
              <h2 className="h2 font-bold" style={{ color: '#0B2E4A' }}>32</h2>
            </div>
            <div className="card flex-col" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div className="flex items-center gap-sm mb-2 text-sm font-semibold text-muted">
                <Award size={18} color="#eab308" /> Quiz Score
              </div>
              <h2 className="h2 font-bold" style={{ color: '#0B2E4A' }}>86%</h2>
            </div>
            <div className="card flex-col" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div className="flex items-center gap-sm mb-2 text-sm font-semibold text-muted">
                <GitBranch size={18} color="#3b82f6" /> Github Repos
              </div>
              <h2 className="h2 font-bold" style={{ color: '#0B2E4A' }}>15</h2>
            </div>
          </div>

          {/* Lower Section (Breakdown + Expertise) */}
          <div className="flex gap-lg" style={{ marginTop: '0.5rem' }}>
            
            {/* Evidence Breakdown */}
            <div className="card" style={{ flex: 2, padding: '2rem', borderRadius: '16px' }}>
              <h3 className="h4 font-bold" style={{ marginBottom: '2rem', color: '#0B2E4A' }}>Evidence Breakdown</h3>
              
              <div className="flex-col gap-lg">
                {[
                  { name: 'Projects', icon: FileCheck, val: 80 },
                  { name: 'Coding Tasks', icon: Code2, val: 90 },
                  { name: 'Quiz', icon: Award, val: 86 },
                  { name: 'GitHub Activity', icon: GitBranch, val: 82 }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-md">
                    <div className="flex items-center gap-sm" style={{ width: '150px' }}>
                      <div style={{ backgroundColor: '#eff6ff', padding: '0.5rem', borderRadius: '50%' }}>
                        <item.icon size={16} color="#3b82f6" />
                      </div>
                      <span className="font-semibold text-sm" style={{ color: '#0B2E4A' }}>{item.name}</span>
                    </div>
                    <div style={{ flex: 1, height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${item.val}%`, height: '100%', backgroundColor: '#3b82f6', borderRadius: '4px' }}></div>
                    </div>
                    <span className="font-semibold text-sm text-muted" style={{ width: '30px', textAlign: 'right' }}>{item.val}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise Level */}
            <div className="card flex-col" style={{ flex: 1, padding: '2rem', borderRadius: '16px' }}>
              <h3 className="h4 font-bold" style={{ marginBottom: '2rem', color: '#0B2E4A' }}>Expertise Level</h3>
              <div className="flex-col items-center justify-center gap-md" style={{ flex: 1 }}>
                <ShieldCheck size={48} color="#14B8A6" />
                <div className="badge" style={{ backgroundColor: '#ecfdf5', color: '#10B981', border: '1px solid #10B981', padding: '0.5rem 1rem', fontSize: '1rem' }}>
                  Advanced
                </div>
              </div>
            </div>
            
          </div>
        </>
      )}
    </div>
  );
}

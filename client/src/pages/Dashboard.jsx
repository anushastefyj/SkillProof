import React from 'react';
import ProgressRing from '../components/ProgressRing';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="flex-col gap-xl animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="h2 font-bold" style={{ marginBottom: '0.25rem', color: '#0B2E4A' }}>Hello, {user?.name?.split(' ')[0] || 'Anusha'}! 👋</h1>
        <p className="text-muted" style={{ fontSize: '1rem', color: '#64748B' }}>Keep building your evidence!</p>
      </div>

      {/* Banner */}
      <div style={{ 
        background: 'linear-gradient(to right, #0F6B5F, #093749)', 
        borderRadius: '16px', 
        padding: '2rem 3rem',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }}>
        <div className="flex items-center gap-lg">
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden' }}>
             <img src="/hero-illustration.jpg" alt="Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <h2 className="h3 font-bold" style={{ marginBottom: '0.25rem' }}>Your skills. Verified.</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', maxWidth: '300px', lineHeight: 1.5 }}>
              Build your profile with real evidence and stand out to recruiters.
            </p>
          </div>
        </div>
        <Link to="/dashboard/add-evidence" className="btn" style={{ backgroundColor: 'white', color: '#10B981', fontWeight: 'bold', padding: '0.75rem 1.5rem', borderRadius: '12px' }}>
          Add Evidence
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid md:grid-cols-4 gap-md">
        <div className="card flex-col justify-center" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <p className="text-xs font-semibold text-muted mb-2" style={{ color: '#64748B' }}>Total Skills</p>
          <h2 className="h2 font-bold" style={{ color: '#0B2E4A' }}>5</h2>
        </div>
        <div className="card flex-col justify-center" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <p className="text-xs font-semibold text-muted mb-2" style={{ color: '#64748B' }}>Total Evidence</p>
          <h2 className="h2 font-bold" style={{ color: '#0B2E4A' }}>24</h2>
        </div>
        <div className="card flex-col justify-center" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <p className="text-xs font-semibold text-muted mb-2" style={{ color: '#64748B' }}>Credibility Score</p>
          <h2 className="h2 font-bold" style={{ color: '#0B2E4A' }}>82%</h2>
        </div>
        <div className="card flex-col justify-center" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <p className="text-xs font-semibold text-muted mb-2" style={{ color: '#64748B' }}>Last Updated</p>
          <h2 className="h3 font-bold" style={{ color: '#0B2E4A' }}>Today</h2>
        </div>
      </div>

      {/* My Skills Row */}
      <div>
        <div className="flex items-center justify-between" style={{ marginBottom: '1rem' }}>
          <h2 className="h3 font-bold" style={{ color: '#0B2E4A' }}>My Skills</h2>
          <Link to="/dashboard/skills" className="font-semibold flex items-center text-sm hover:underline" style={{ color: '#3b82f6' }}>
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-4 gap-md">
          {/* Skill Card 1 */}
          <div className="card flex-col items-center justify-center text-center gap-md" style={{ padding: '2rem 1rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
               <img src="https://www.svgrepo.com/show/353924/java.svg" alt="Java" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <h4 className="font-semibold" style={{ color: '#0B2E4A' }}>Java</h4>
            <div style={{ marginTop: '0.5rem' }}>
              <ProgressRing radius={40} stroke={6} progress={87} color="#0ea5e9" text="87/100" />
            </div>
          </div>
          
          {/* Skill Card 2 */}
          <div className="card flex-col items-center justify-center text-center gap-md" style={{ padding: '2rem 1rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
               <img src="https://www.svgrepo.com/show/354259/react.svg" alt="React" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <h4 className="font-semibold" style={{ color: '#0B2E4A' }}>React</h4>
            <div style={{ marginTop: '0.5rem' }}>
              <ProgressRing radius={40} stroke={6} progress={82} color="#10B981" text="82/100" />
            </div>
          </div>
          
          {/* Skill Card 3 */}
          <div className="card flex-col items-center justify-center text-center gap-md" style={{ padding: '2rem 1rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
               <img src="https://www.svgrepo.com/show/354238/python.svg" alt="Python" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <h4 className="font-semibold" style={{ color: '#0B2E4A' }}>Python</h4>
            <div style={{ marginTop: '0.5rem' }}>
              <ProgressRing radius={40} stroke={6} progress={76} color="#10B981" text="76/100" />
            </div>
          </div>
          
          {/* Skill Card 4 */}
          <div className="card flex-col items-center justify-center text-center gap-md" style={{ padding: '2rem 1rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eab308', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
               <img src="https://www.svgrepo.com/show/353622/c-plusplus.svg" alt="C++" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <h4 className="font-semibold" style={{ color: '#0B2E4A' }}>C++</h4>
            <div style={{ marginTop: '0.5rem' }}>
              <ProgressRing radius={40} stroke={6} progress={68} color="#3b82f6" text="68/100" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

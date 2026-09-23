import React from 'react';
import { Search, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrowseStudents() {
  const students = [
    {
      id: 1,
      name: 'Anusha Stefy J',
      school: 'B.Tech AI & DS • MTIET',
      match: 92,
      skills: ['Java', 'React', 'Python'],
      avatar: 'https://ui-avatars.com/api/?name=Anusha&background=e0e7ff&color=3b82f6'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      school: 'B.Tech CSE • VIT',
      match: 86,
      skills: ['Java', 'Python', 'SQL'],
      avatar: 'https://ui-avatars.com/api/?name=Priya&background=fce7f3&color=ec4899'
    },
    {
      id: 3,
      name: 'Rahul Kumar',
      school: 'B.Tech ECE • JNTU',
      match: 78,
      skills: ['React', 'JavaScript', 'C++'],
      avatar: 'https://ui-avatars.com/api/?name=Rahul&background=dcfce7&color=16a34a'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      school: 'B.Tech CSE • SRM',
      match: 72,
      skills: ['Python', 'Java', 'React'],
      avatar: 'https://ui-avatars.com/api/?name=Sneha&background=fef3c7&color=d97706'
    }
  ];

  return (
    <div className="flex-col gap-lg animate-fade-in">
      
      {/* Header */}
      <div>
        <h1 className="h2 font-bold" style={{ color: '#0B2E4A', marginBottom: '0.25rem' }}>Browse Students</h1>
        <p className="text-muted text-sm">Find talented students with verified skills and evidence.</p>
      </div>

      {/* Main Card */}
      <div className="card" style={{ padding: '0', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        
        {/* Filters Top Bar */}
        <div className="flex justify-between items-center" style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ position: 'relative', width: '350px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input 
              type="text" 
              placeholder="Search by name, skills, or university..." 
              style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.875rem' }} 
            />
          </div>
          <div className="flex gap-md text-sm">
            <div className="flex items-center gap-xs cursor-pointer" style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #E2E8F0', color: '#64748B' }}>
              All Skills <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-xs cursor-pointer" style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #E2E8F0', color: '#64748B' }}>
              Sort by: <span className="font-semibold" style={{ color: '#0B2E4A' }}>Relevance</span> <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* Student List */}
        <div className="flex-col">
          {students.map((student, idx) => (
            <div key={student.id} className="flex justify-between items-center" style={{ padding: '1.5rem 2rem', borderBottom: idx !== students.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
              
              {/* Left Side: Avatar & Info */}
              <div className="flex items-center gap-lg">
                <img src={student.avatar} alt={student.name} style={{ width: '64px', height: '64px', borderRadius: '50%' }} />
                <div>
                  <h3 className="h4 font-bold" style={{ color: '#0B2E4A', marginBottom: '0.125rem' }}>{student.name}</h3>
                  <p className="text-xs text-muted mb-2">{student.school}</p>
                  <div className="flex gap-sm">
                    {student.skills.map(skill => (
                      <span key={skill} className="badge" style={{ backgroundColor: '#eff6ff', color: '#3b82f6', fontWeight: '600' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Score & Button */}
              <div className="flex items-center gap-xl">
                <div className="flex items-center gap-sm">
                  <CheckCircle2 size={24} color="#10B981" />
                  <span className="font-bold" style={{ fontSize: '1.25rem', color: '#10B981' }}>{student.match}%</span>
                </div>
                <Link to={`/recruiter/candidate/${student.id}`} className="btn" style={{ padding: '0.6rem 1.25rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '12px', fontSize: '0.875rem' }}>
                  View Profile
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

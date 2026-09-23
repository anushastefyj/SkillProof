import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Code2, 
  FileCheck, 
  GitBranch, 
  BookOpen, 
  User, 
  Settings,
  LogOut,
  Shield,
  Search,
  Bell
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../context/ProfileContext';

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { personalInfo } = useProfile();
  
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Skills', path: '/dashboard/skills', icon: Code2 },
    { name: 'Add Evidence', path: '/dashboard/add-evidence', icon: FileCheck },
    { name: 'Quizzes', path: '/dashboard/quizzes', icon: BookOpen },
    { name: 'Coding Tasks', path: '/dashboard/coding-tasks', icon: Code2 },
    { name: 'GitHub', path: '/dashboard/github', icon: GitBranch },
    { name: 'Profile', path: '/dashboard/profile', icon: User },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="flex" style={{ minHeight: '100vh', backgroundColor: '#F5F7FA' }}>
      
      {/* Dark Sidebar */}
      <aside className="flex-col animate-fade-in" style={{ width: '250px', backgroundColor: '#0B2E4A', color: 'white', display: 'flex', flexDirection: 'column' }}>
        
        {/* Brand */}
        <div className="flex items-center gap-sm" style={{ padding: '1.5rem 1.5rem 1rem 1.5rem', color: 'white' }}>
          <Shield size={28} color="#14B8A6" />
          <span className="h3 font-bold" style={{ letterSpacing: '0.5px' }}>SkillProof</span>
        </div>

        {/* User Profile Mini */}
        <div className="flex items-center gap-sm" style={{ padding: '0.5rem 1.5rem 1.5rem 1.5rem', marginBottom: '0.5rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#14B8A6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', overflow: 'hidden' }}>
            {user?.name?.charAt(0) || 'A'}
          </div>
          <div>
            <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>{user?.name || 'Anusha Stefy J'}</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>{user?.role === 'recruiter' ? 'Recruiter' : 'Student'}</div>
          </div>
        </div>
        
        <nav style={{ flex: 1, padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
            return (
              <li key={item.name} style={{ listStyle: 'none' }}>
                <Link
                  to={item.path}
                  className="flex items-center gap-md"
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    backgroundColor: isActive ? '#14B8A6' : 'transparent',
                    color: isActive ? 'white' : 'rgba(255,255,255,0.7)',
                    fontWeight: isActive ? '600' : '500',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <item.icon size={20} color={isActive ? 'white' : 'rgba(255,255,255,0.7)'} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </nav>

        <div style={{ padding: '1rem' }}>
          <button
            onClick={() => { logout(); navigate('/login'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              width: '100%',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-col" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Navbar */}
        <header className="flex justify-between items-center" style={{ padding: '1.5rem 2.5rem', backgroundColor: '#F5F7FA' }}>
          <div></div>
          <div className="flex items-center gap-lg">
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
              <input 
                type="text" 
                placeholder="Search skills..." 
                style={{ padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.9rem', width: '250px' }} 
              />
            </div>
            <button onClick={() => alert('No new notifications at this time.')} style={{ position: 'relative', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
              <Bell size={20} color="#64748B" />
              <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }}></div>
            </button>
            <Link to="/dashboard/settings" style={{ cursor: 'pointer' }}>
              {personalInfo?.avatar ? (
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden' }}>
                  <img src={personalInfo.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : (
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#14B8A6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', overflow: 'hidden' }}>
                  {personalInfo?.name ? personalInfo.name.charAt(0).toUpperCase() : 'A'}
                </div>
              )}
            </Link>
          </div>
        </header>

        {/* Outlet Content */}
        <main style={{ flex: 1, padding: '0 2.5rem 2.5rem 2.5rem', overflowY: 'auto' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

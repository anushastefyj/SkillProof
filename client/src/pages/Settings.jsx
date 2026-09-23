import React, { useState } from 'react';
import { Shield, Key, Trash2, Smartphone, Bell, Eye, EyeOff, LayoutDashboard, Monitor, Moon, Sun } from 'lucide-react';

const ToggleSwitch = ({ label, defaultOn }) => {
  const [isOn, setIsOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between" style={{ padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
      <span className="font-medium text-sm" style={{ color: '#1e293b' }}>{label}</span>
      <button 
        type="button"
        onClick={() => setIsOn(!isOn)}
        style={{ 
          width: '44px', height: '24px', borderRadius: '12px', 
          backgroundColor: isOn ? '#14B8A6' : '#e2e8f0',
          position: 'relative', transition: 'all 0.2s ease'
        }}
      >
        <div style={{ 
          width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white',
          position: 'absolute', top: '2px', left: isOn ? '22px' : '2px', transition: 'all 0.2s ease',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}></div>
      </button>
    </div>
  );
};

export default function Settings() {
  const [activeTab, setActiveTab] = useState('Account');
  const [accountData, setAccountData] = useState({
    email: 'anusha@example.com',
    username: 'anusha-stefy',
    phone: ''
  });
  const [visibility, setVisibility] = useState('Public');
  const [theme, setTheme] = useState('Dark');
  const [language, setLanguage] = useState('en');
  const [dashboard, setDashboard] = useState('Skill Overview');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <div>
        <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Account Settings</h1>
        <p className="text-muted">Manage your account preferences and privacy.</p>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Tab Bar */}
        <div className="flex items-center gap-lg" style={{ padding: '0 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)', overflowX: 'auto' }}>
          {['Account', 'Privacy', 'Notifications', 'Security', 'Preferences'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '1.25rem 0',
                fontWeight: '600',
                fontSize: '0.9rem',
                color: activeTab === tab ? 'var(--primary)' : 'var(--text-muted)',
                borderBottom: activeTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ padding: '2rem', maxWidth: '600px' }}>
          
          {/* ACCOUNT TAB */}
          {activeTab === 'Account' && (
            <div className="flex-col gap-lg animate-fade-in">
              <div className="flex-col gap-md">
                <div>
                  <label className="text-sm font-semibold mb-1" style={{ display: 'block', color: '#0f172a' }}>Email</label>
                  <input type="email" className="input-field" value={accountData.email} onChange={e => setAccountData({...accountData, email: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1" style={{ display: 'block', color: '#0f172a' }}>Username</label>
                  <input type="text" className="input-field" value={accountData.username} onChange={e => setAccountData({...accountData, username: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1" style={{ display: 'block', color: '#0f172a' }}>Phone Number</label>
                  <input type="tel" className="input-field" placeholder="+91 98765 43210" value={accountData.phone} onChange={e => setAccountData({...accountData, phone: e.target.value})} />
                </div>
              </div>
              
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => alert('Password change email sent!')} className="btn btn-secondary text-sm mb-md w-full" style={{ padding: '0.75rem', justifyContent: 'center' }}>
                  <Key size={16} /> Change Password
                </button>
                <button type="button" onClick={() => { if(window.confirm('Are you sure you want to delete your account? This is irreversible.')) { alert('Account deleted.'); } }} className="btn text-sm w-full" style={{ padding: '0.75rem', justifyContent: 'center', backgroundColor: '#fef2f2', color: '#ef4444', border: '1px solid #fca5a5' }}>
                  <Trash2 size={16} /> Delete Account
                </button>
              </div>
            </div>
          )}

          {/* PRIVACY TAB */}
          {activeTab === 'Privacy' && (
            <div className="flex-col gap-xl animate-fade-in">
              <div>
                <h3 className="h5 font-bold mb-md">Profile Visibility</h3>
                <div className="flex-col gap-sm">
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input type="radio" name="visibility" checked={visibility === 'Public'} onChange={() => setVisibility('Public')} style={{ width: '16px', height: '16px', accentColor: '#14B8A6' }} />
                    <span className="font-medium text-sm">Public</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input type="radio" name="visibility" checked={visibility === 'Recruiters Only'} onChange={() => setVisibility('Recruiters Only')} style={{ width: '16px', height: '16px', accentColor: '#14B8A6' }} />
                    <span className="font-medium text-sm">Recruiters Only</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input type="radio" name="visibility" checked={visibility === 'Private'} onChange={() => setVisibility('Private')} style={{ width: '16px', height: '16px', accentColor: '#14B8A6' }} />
                    <span className="font-medium text-sm">Private</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="h5 font-bold mb-sm">Information Display</h3>
                <div className="flex-col">
                  <ToggleSwitch label="Show Email" defaultOn={false} />
                  <ToggleSwitch label="Show GitHub" defaultOn={true} />
                  <ToggleSwitch label="Show Skill Scores" defaultOn={true} />
                  <ToggleSwitch label="Show Project Evidence" defaultOn={true} />
                  <ToggleSwitch label="Show Coding History" defaultOn={true} />
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'Notifications' && (
            <div className="flex-col animate-fade-in">
              <h3 className="h5 font-bold mb-sm">Email Notifications</h3>
              <div className="flex-col">
                <ToggleSwitch label="Skill Assessment Results" defaultOn={true} />
                <ToggleSwitch label="New Recruiter View" defaultOn={true} />
                <ToggleSwitch label="Project Verification" defaultOn={true} />
                <ToggleSwitch label="Coding Challenge" defaultOn={true} />
                <ToggleSwitch label="Weekly Skill Report" defaultOn={true} />
              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === 'Security' && (
            <div className="flex-col gap-xl animate-fade-in">
              <div>
                <h3 className="h5 font-bold mb-md">Authentication</h3>
                <div className="flex-col gap-md">
                  <button type="button" onClick={() => alert('Password change email sent!')} className="btn btn-secondary text-sm w-full" style={{ padding: '0.75rem', justifyContent: 'center' }}>
                    <Key size={16} /> Change Password
                  </button>
                  <div className="flex items-center justify-between" style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                    <div>
                      <h4 className="font-bold text-sm">Two-Factor Authentication</h4>
                      <p className="text-xs text-muted mt-1">Add an extra layer of security.</p>
                    </div>
                    <button type="button" onClick={() => setTwoFactorEnabled(!twoFactorEnabled)} className={`btn ${twoFactorEnabled ? 'btn-secondary' : 'btn-primary'} text-sm`} style={{ padding: '0.5rem 1rem' }}>
                      <Shield size={14} /> {twoFactorEnabled ? 'Disable' : 'Enable'}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="h5 font-bold mb-md">Active Sessions</h3>
                <div className="flex items-center gap-md" style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                  <Monitor size={20} className="text-primary" />
                  <div>
                    <h4 className="font-semibold text-sm">Windows PC - Chrome</h4>
                    <p className="text-xs text-muted">Current Session • Andhra Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-md" style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                  <Smartphone size={20} className="text-muted" />
                  <div>
                    <h4 className="font-semibold text-sm text-muted">iPhone 13 - Safari</h4>
                    <p className="text-xs text-muted">Last active 2 hours ago</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="h5 font-bold mb-sm">Login History</h3>
                <p className="text-sm text-muted mb-md">Recent sign-in activity for your account.</p>
                <div className="text-sm font-medium" style={{ color: '#0284c7', cursor: 'pointer' }}>View full history &rarr;</div>
              </div>
            </div>
          )}

          {/* PREFERENCES TAB */}
          {activeTab === 'Preferences' && (
            <div className="flex-col gap-xl animate-fade-in">
              <div>
                <h3 className="h5 font-bold mb-md">Theme</h3>
                <div className="flex-col gap-sm">
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input type="radio" name="theme" checked={theme === 'Light'} onChange={() => setTheme('Light')} style={{ width: '16px', height: '16px', accentColor: '#14B8A6' }} />
                    <span className="font-medium text-sm flex items-center gap-sm"><Sun size={16} /> Light</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input type="radio" name="theme" checked={theme === 'Dark'} onChange={() => setTheme('Dark')} style={{ width: '16px', height: '16px', accentColor: '#14B8A6' }} />
                    <span className="font-medium text-sm flex items-center gap-sm"><Moon size={16} /> Dark</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input type="radio" name="theme" checked={theme === 'System'} onChange={() => setTheme('System')} style={{ width: '16px', height: '16px', accentColor: '#14B8A6' }} />
                    <span className="font-medium text-sm flex items-center gap-sm"><Monitor size={16} /> System</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="h5 font-bold mb-sm">Language</h3>
                <select className="input-field" value={language} onChange={e => setLanguage(e.target.value)}>
                  <option value="en">English</option>
                  <option value="te">Telugu</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>

              <div>
                <h3 className="h5 font-bold mb-md">Default Dashboard</h3>
                <div className="flex-col gap-sm">
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input type="radio" name="dashboard" checked={dashboard === 'Profile'} onChange={() => setDashboard('Profile')} style={{ width: '16px', height: '16px', accentColor: '#14B8A6' }} />
                    <span className="font-medium text-sm flex items-center gap-sm">Profile</span>
                  </label>
                  <label className="flex items-center gap-sm cursor-pointer">
                    <input type="radio" name="dashboard" checked={dashboard === 'Skill Overview'} onChange={() => setDashboard('Skill Overview')} style={{ width: '16px', height: '16px', accentColor: '#14B8A6' }} />
                    <span className="font-medium text-sm flex items-center gap-sm">Skill Overview</span>
                  </label>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

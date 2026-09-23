import React, { useState } from 'react';
import { Building, Mail, Bell, Shield, Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function RecruiterSettings() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  
  const [profile, setProfile] = useState({
    name: user?.name || 'Recruiter Name',
    email: user?.email || 'recruiter@company.com',
    company: 'TechCorp Solutions',
    role: 'Senior Talent Acquisition',
    phone: '+1 234 567 8900'
  });

  const handleSave = (e) => {
    e.preventDefault();
    // Simulate save
    alert('Settings saved successfully!');
  };

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <div>
        <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Recruiter Settings</h1>
        <p className="text-muted">Manage your personal profile and company preferences.</p>
      </div>

      <div className="flex gap-lg">
        <div className="card flex-col gap-sm" style={{ flex: 1, height: 'fit-content', padding: '1rem' }}>
          <button 
            className={`btn ${activeTab === 'profile' ? 'btn-primary' : 'btn-secondary'}`} 
            style={{ justifyContent: 'flex-start' }}
            onClick={() => setActiveTab('profile')}
          >
            <Shield size={18} /> My Profile
          </button>
          <button 
            className={`btn ${activeTab === 'company' ? 'btn-primary' : 'btn-secondary'}`} 
            style={{ justifyContent: 'flex-start' }}
            onClick={() => setActiveTab('company')}
          >
            <Building size={18} /> Company Details
          </button>
          <button 
            className={`btn ${activeTab === 'notifications' ? 'btn-primary' : 'btn-secondary'}`} 
            style={{ justifyContent: 'flex-start' }}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={18} /> Notifications
          </button>
        </div>

        <div className="card" style={{ flex: 3 }}>
          {activeTab === 'profile' && (
            <div className="flex-col gap-lg">
              <h2 className="h3">My Profile</h2>
              <form onSubmit={handleSave} className="flex-col gap-md">
                <div className="grid md:grid-cols-2 gap-md">
                  <div>
                    <label className="text-sm font-semibold block mb-1">Full Name</label>
                    <input type="text" className="input-field" style={{ width: '100%' }} value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-1">Email Address</label>
                    <input type="email" className="input-field" style={{ width: '100%' }} value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-1">Job Role</label>
                    <input type="text" className="input-field" style={{ width: '100%' }} value={profile.role} onChange={e => setProfile({...profile, role: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-1">Phone Number</label>
                    <input type="tel" className="input-field" style={{ width: '100%' }} value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
                  </div>
                </div>
                <div className="flex justify-end mt-sm">
                  <button type="submit" className="btn btn-primary"><Check size={16} /> Save Changes</button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'company' && (
            <div className="flex-col gap-lg">
              <h2 className="h3">Company Details</h2>
              <form onSubmit={handleSave} className="flex-col gap-md">
                <div>
                  <label className="text-sm font-semibold block mb-1">Company Name</label>
                  <input type="text" className="input-field" style={{ width: '100%' }} value={profile.company} onChange={e => setProfile({...profile, company: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold block mb-1">Company Website</label>
                  <input type="url" className="input-field" style={{ width: '100%' }} defaultValue="https://techcorp.com" />
                </div>
                <div>
                  <label className="text-sm font-semibold block mb-1">About Company</label>
                  <textarea className="input-field" style={{ width: '100%', minHeight: '100px' }} defaultValue="Leading provider of innovative software solutions."></textarea>
                </div>
                <div className="flex justify-end mt-sm">
                  <button type="submit" className="btn btn-primary"><Check size={16} /> Save Company Details</button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="flex-col gap-md">
              <h2 className="h3">Notification Preferences</h2>
              <div className="flex items-center justify-between" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
                <div>
                  <h4 className="font-semibold">Email Alerts</h4>
                  <p className="text-sm text-muted">Receive daily summaries of new candidate matches.</p>
                </div>
                <input type="checkbox" defaultChecked style={{ width: '1.2rem', height: '1.2rem' }} />
              </div>
              <div className="flex items-center justify-between" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
                <div>
                  <h4 className="font-semibold">In-App Notifications</h4>
                  <p className="text-sm text-muted">Ping me when a shortlisted candidate updates their profile.</p>
                </div>
                <input type="checkbox" defaultChecked style={{ width: '1.2rem', height: '1.2rem' }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

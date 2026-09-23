import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Loader2, Eye, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'student' });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await register(formData.name, formData.email, formData.password, formData.role);
      toast.success('Account created successfully!');
      if (user.role === 'recruiter') {
        navigate('/recruiter');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || err.response?.data?.errors?.[0]?.msg || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center animate-fade-in" style={{ minHeight: '100vh', backgroundColor: '#F5F7FA', padding: '2rem' }}>
      
      {/* Main Card */}
      <div className="flex" style={{ width: '100%', maxWidth: '1000px', backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(20, 184, 166, 0.2)' }}>
        
        {/* Left Pane - Dark Branding */}
        <div className="flex-col justify-between" style={{ flex: 1, padding: '3rem', background: 'linear-gradient(135deg, #0B2E4A 0%, #0F9B8E 100%)', color: 'white' }}>
          
          <div>
            <div className="flex items-center gap-sm" style={{ marginBottom: '4rem' }}>
              <Shield size={28} color="#14B8A6" />
              <span className="h4 font-semibold">SkillProof</span>
            </div>
            
            <h1 className="h1 font-bold" style={{ marginBottom: '1rem', lineHeight: 1.2 }}>Join SkillProof</h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', maxWidth: '280px', lineHeight: 1.6 }}>
              Start building your verified skill profile today.
            </p>
          </div>

          <div className="flex justify-center items-center" style={{ flex: 1, padding: '1rem 0', position: 'relative' }}>
            <div style={{ width: '220px', height: '220px', borderRadius: '50%', overflow: 'hidden', border: '4px solid rgba(255,255,255,0.1)' }}>
               <img src="/hero-illustration.jpg" alt="Student illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            {/* Small floating badges */}
            <div style={{ position: 'absolute', top: '20%', left: '0', backgroundColor: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.25rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
              <span className="font-semibold text-xs">Projects</span>
            </div>
            <div style={{ position: 'absolute', top: '15%', right: '10%', backgroundColor: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.25rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#14B8A6' }}></div>
              <span className="font-semibold text-xs">Quizzes</span>
            </div>
          </div>

          <div className="flex-col gap-md" style={{ marginTop: '2rem' }}>
            <div className="flex items-center gap-md" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>
              <CheckCircle2 color="#14B8A6" size={20} /> Build your evidence
            </div>
            <div className="flex items-center gap-md" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>
              <CheckCircle2 color="#14B8A6" size={20} /> Track your progress
            </div>
            <div className="flex items-center gap-md" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>
              <CheckCircle2 color="#14B8A6" size={20} /> Get noticed by recruiters
            </div>
          </div>
        </div>

        {/* Right Pane - Form */}
        <div className="flex-col justify-center" style={{ flex: 1.2, padding: '3rem 5rem', backgroundColor: 'white' }}>
          <h2 className="h2 font-bold" style={{ marginBottom: '0.5rem', color: '#0B2E4A' }}>Create Your Account</h2>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>Already have an account? <Link to="/login" className="font-semibold" style={{ color: '#14B8A6' }}>Login</Link></p>
          
          <form onSubmit={handleRegister} className="flex-col gap-md">
            
            <div style={{ marginBottom: '0.5rem' }}>
              <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>I am a</label>
              <div className="flex gap-sm">
                <button 
                  type="button" 
                  className="btn" 
                  style={{ flex: 1, padding: '0.75rem', borderRadius: '12px', fontWeight: '600', backgroundColor: formData.role === 'student' ? '#14B8A6' : 'white', color: formData.role === 'student' ? 'white' : '#64748B', border: formData.role === 'student' ? 'none' : '1px solid #E2E8F0' }} 
                  onClick={() => setFormData({...formData, role: 'student'})}>
                  Student
                </button>
                <button 
                  type="button" 
                  className="btn" 
                  style={{ flex: 1, padding: '0.75rem', borderRadius: '12px', fontWeight: '600', backgroundColor: formData.role === 'recruiter' ? '#14B8A6' : 'white', color: formData.role === 'recruiter' ? 'white' : '#64748B', border: formData.role === 'recruiter' ? 'none' : '1px solid #E2E8F0' }} 
                  onClick={() => setFormData({...formData, role: 'recruiter'})}>
                  Recruiter
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>Full Name</label>
              <input 
                type="text" 
                required 
                className="input-field" 
                placeholder="Enter your name" 
                style={{ padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', width: '100%', fontSize: '0.9375rem' }} 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
            </div>

            <div>
              <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>Email</label>
              <input 
                type="email" 
                required 
                className="input-field" 
                placeholder="Enter your email" 
                style={{ padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', width: '100%', fontSize: '0.9375rem' }} 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
              />
            </div>
            
            <div>
              <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  required 
                  className="input-field" 
                  placeholder="Create a password" 
                  style={{ padding: '0.875rem 3rem 0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', width: '100%', fontSize: '0.9375rem' }} 
                  value={formData.password} 
                  onChange={(e) => setFormData({...formData, password: e.target.value})} 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8' }}>
                  <Eye size={20} />
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>Confirm Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                required 
                className="input-field" 
                placeholder="Confirm your password" 
                style={{ padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', width: '100%', fontSize: '0.9375rem' }} 
              />
            </div>

            <button type="submit" className="btn flex justify-center items-center" style={{ width: '100%', marginTop: '1rem', padding: '1rem', borderRadius: '12px', backgroundColor: '#14B8A6', color: 'white', fontSize: '1rem', fontWeight: '600', border: 'none' }} disabled={loading}>
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'Register'}
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}

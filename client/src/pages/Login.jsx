import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Loader2, Eye, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await login(formData.email, formData.password);
      toast.success('Successfully logged in!');
      if (user.role === 'recruiter') {
        navigate('/recruiter');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Login failed');
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
            
            <h1 className="h1 font-bold" style={{ marginBottom: '1rem', lineHeight: 1.2 }}>Welcome Back!</h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', maxWidth: '280px', lineHeight: 1.6 }}>
              Sign in to your account and continue your journey.
            </p>
          </div>

          <div className="flex justify-center items-center" style={{ flex: 1, padding: '2rem 0' }}>
            <div style={{ width: '120px', height: '120px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield size={64} color="white" />
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
        <div className="flex-col justify-center" style={{ flex: 1.2, padding: '4rem 5rem', backgroundColor: 'white' }}>
          <h2 className="h2 font-bold" style={{ marginBottom: '0.5rem', color: '#0B2E4A' }}>Login to SkillProof</h2>
          <p className="text-muted" style={{ marginBottom: '2.5rem' }}>Don't have an account? <Link to="/register" className="font-semibold" style={{ color: '#14B8A6' }}>Register</Link></p>
          
          <form onSubmit={handleLogin} className="flex-col gap-lg">
            <div>
              <label className="text-sm font-semibold" style={{ display: 'block', marginBottom: '0.5rem', color: '#1E293B' }}>Email or Username</label>
              <input 
                type="email" 
                required 
                className="input-field" 
                placeholder="Enter your email or username" 
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
                  placeholder="Enter your password" 
                  style={{ padding: '0.875rem 3rem 0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', width: '100%', fontSize: '0.9375rem' }} 
                  value={formData.password} 
                  onChange={(e) => setFormData({...formData, password: e.target.value})} 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8' }}>
                  <Eye size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm font-medium" style={{ marginTop: '-0.5rem' }}>
              <label className="flex items-center gap-xs cursor-pointer" style={{ color: '#64748B' }}>
                <input type="checkbox" style={{ accentColor: '#14B8A6', width: '16px', height: '16px' }} /> Remember me
              </label>
              <a href="#" className="font-semibold" style={{ color: '#14B8A6' }}>Forgot password?</a>
            </div>

            <button type="submit" className="btn flex justify-center items-center" style={{ width: '100%', marginTop: '1rem', padding: '1rem', borderRadius: '12px', backgroundColor: '#14B8A6', color: 'white', fontSize: '1rem', fontWeight: '600', border: 'none' }} disabled={loading}>
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'Login'}
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0', color: '#94A3B8' }}>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }}></div>
              <span style={{ padding: '0 1rem', fontSize: '0.875rem' }}>or continue with</span>
              <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }}></div>
            </div>
            
            <div className="flex gap-md">
              <button type="button" className="btn" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '12px', backgroundColor: 'white', border: '1px solid #E2E8F0', color: '#1E293B', fontWeight: '600' }}>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
                Google
              </button>
              <button type="button" className="btn" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '12px', backgroundColor: 'white', border: '1px solid #E2E8F0', color: '#1E293B', fontWeight: '600' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

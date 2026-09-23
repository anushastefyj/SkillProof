import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, PlayCircle, Code2, GitBranch, CheckCircle2, Award, FileCheck, Home, Star, Settings, Info } from 'lucide-react';

export default function Landing() {
  return (
    <div className="flex-col animate-fade-in" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Floating Side Navigation */}
      <div style={{ position: 'fixed', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 50, display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
        <a href="#" className="flex items-center justify-center hover:scale-110 transition-transform" style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', color: '#0B2E4A' }} title="Home">
          <Home size={18} />
        </a>
        <a href="#features" className="flex items-center justify-center hover:scale-110 transition-transform" style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', color: '#0B2E4A' }} title="Features">
          <Star size={18} />
        </a>
        <a href="#how-it-works" className="flex items-center justify-center hover:scale-110 transition-transform" style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', color: '#0B2E4A' }} title="How It Works">
          <Settings size={18} />
        </a>
        <a href="#about" className="flex items-center justify-center hover:scale-110 transition-transform" style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', color: '#0B2E4A' }} title="About">
          <Info size={18} />
        </a>
      </div>

      {/* Hero Wrapper with Gradient */}
      <div style={{ background: 'linear-gradient(135deg, #0B2E4A 0%, #0F9B8E 100%)', position: 'relative' }}>
        
        {/* Navbar */}
        <nav className="flex items-center justify-between" style={{ padding: '1.5rem 4rem' }}>
          <div className="flex items-center gap-sm text-white">
            <Shield size={32} color="#14B8A6" />
            <span className="h3 font-semibold">SkillProof</span>
          </div>
          <div className="flex items-center gap-xl text-white font-medium" style={{ fontSize: '0.875rem' }}>
            <a href="#" style={{ color: '#14B8A6', borderBottom: '2px solid #14B8A6', paddingBottom: '4px' }}>Home</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          </div>
          <div className="flex items-center gap-md">
            <Link to="/login" className="btn" style={{ color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 'var(--radius-full)', padding: '0.5rem 1.5rem' }}>Login</Link>
            <Link to="/register" className="btn" style={{ backgroundColor: '#14B8A6', color: 'white', borderRadius: 'var(--radius-full)', padding: '0.5rem 1.5rem', border: 'none' }}>Get Started</Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex justify-between items-center" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 4rem 8rem 4rem', color: 'white' }}>
          {/* Left Side */}
          <div style={{ flex: 1.2, paddingRight: '2rem' }}>
            <h1 className="h1 font-bold" style={{ fontSize: '3.5rem', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Prove Your Skills,<br/>
              Not Just <span style={{ color: '#14B8A6' }}>List Them.</span>
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: 1.6 }}>
              Build verifiable Skill Evidence Cards with real projects, GitHub activity, quizzes and coding tasks. Let your work speak for you.
            </p>
            <div className="flex items-center gap-md" style={{ marginBottom: '4rem' }}>
              <Link to="/register" className="btn" style={{ backgroundColor: '#14B8A6', color: 'white', padding: '1rem 2rem', fontSize: '1rem', borderRadius: 'var(--radius-full)', border: 'none', fontWeight: '600' }}>
                Get Started Free
              </Link>
              <button className="btn" style={{ padding: '1rem 2rem', fontSize: '1rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255,255,255,0.5)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <PlayCircle size={20} /> Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-xl">
              <div>
                <h3 className="h2 font-bold mb-1">10K+</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Students</p>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              <div>
                <h3 className="h2 font-bold mb-1">5K+</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Verified Skills</p>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              <div>
                <h3 className="h2 font-bold mb-1">1.2K+</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Recruiters</p>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration & Floating Badges */}
          <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '450px' }}>
            {/* The generated illustration */}
            <div style={{ width: '380px', height: '380px', borderRadius: '50%', overflow: 'hidden', border: '8px solid rgba(255,255,255,0.05)' }}>
               <img src="/hero-illustration.jpg" alt="Student coding" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Floating Badges */}
            <div style={{ position: 'absolute', top: '15%', left: '-5%', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
              <span className="font-semibold text-sm">Projects</span>
            </div>
            <div style={{ position: 'absolute', bottom: '30%', left: '-10%', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#14B8A6' }}></div>
              <span className="font-semibold text-sm">Quizzes</span>
            </div>
            <div style={{ position: 'absolute', top: '5%', right: '10%', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <GitBranch size={16} color="#10B981" />
              <span className="font-semibold text-sm">GitHub</span>
            </div>
            <div style={{ position: 'absolute', bottom: '25%', right: '-5%', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#14B8A6' }}></div>
              <span className="font-semibold text-sm">Coding Tasks</span>
            </div>
          </div>
        </div>

        {/* Bottom SVG Wave */}
        <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px', transform: 'rotate(180deg)' }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>

      {/* Types of Evidence / Features */}
      <div id="features" style={{ padding: '6rem 4rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <h2 className="h2 text-center" style={{ marginBottom: '1rem', color: '#0B2E4A' }}>Types of Evidence</h2>
        <p className="text-muted text-center" style={{ marginBottom: '4rem', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          Collect multiple forms of evidence to build your credibility.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {/* Card 1 */}
          <div className="flex-col items-center justify-center text-center gap-md" style={{ padding: '2.5rem 1.5rem', border: '1px solid var(--border)', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <Shield size={64} color="#10B981" fill="#ecfdf5" strokeWidth={1} style={{ position: 'absolute' }} />
              <CheckCircle2 size={24} color="#10B981" style={{ position: 'relative', zIndex: 1 }} />
            </div>
            <h3 className="h4 font-bold" style={{ color: '#0B2E4A' }}>Project Evidence</h3>
            <p className="text-xs text-muted" style={{ lineHeight: 1.6 }}>Showcase your real projects with live links and code.</p>
          </div>
          
          {/* Card 2 */}
          <div className="flex-col items-center justify-center text-center gap-md" style={{ padding: '2.5rem 1.5rem', border: '1px solid var(--border)', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <Shield size={64} color="#3b82f6" fill="#eff6ff" strokeWidth={1} style={{ position: 'absolute' }} />
              <Code2 size={24} color="#3b82f6" style={{ position: 'relative', zIndex: 1 }} />
            </div>
            <h3 className="h4 font-bold" style={{ color: '#0B2E4A' }}>Coding Tasks</h3>
            <p className="text-xs text-muted" style={{ lineHeight: 1.6 }}>Track your problem-solving and coding practice.</p>
          </div>
          
          {/* Card 3 */}
          <div className="flex-col items-center justify-center text-center gap-md" style={{ padding: '2.5rem 1.5rem', border: '1px solid var(--border)', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <Shield size={64} color="#3b82f6" fill="#eff6ff" strokeWidth={1} style={{ position: 'absolute' }} />
              <Award size={24} color="#3b82f6" style={{ position: 'relative', zIndex: 1 }} />
            </div>
            <h3 className="h4 font-bold" style={{ color: '#0B2E4A' }}>Quiz Scores</h3>
            <p className="text-xs text-muted" style={{ lineHeight: 1.6 }}>Validate your knowledge with skill-based quizzes.</p>
          </div>
          
          {/* Card 4 */}
          <div className="flex-col items-center justify-center text-center gap-md" style={{ padding: '2.5rem 1.5rem', border: '1px solid var(--border)', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <Shield size={64} color="#0F9B8E" fill="#f0fdfa" strokeWidth={1} style={{ position: 'absolute' }} />
              <GitBranch size={24} color="#0F9B8E" style={{ position: 'relative', zIndex: 1 }} />
            </div>
            <h3 className="h4 font-bold" style={{ color: '#0B2E4A' }}>GitHub Activity</h3>
            <p className="text-xs text-muted" style={{ lineHeight: 1.6 }}>Show your contribution and repo history.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" style={{ padding: '6rem 4rem', backgroundColor: '#F5F7FA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="h2 text-center" style={{ marginBottom: '1rem', color: '#0B2E4A' }}>How SkillProof Works</h2>
          <p className="text-muted text-center" style={{ marginBottom: '4rem', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            A simple process to prove your skills and get hired.
          </p>
          
          <div className="grid md:grid-cols-3 gap-xl">
            {/* Step 1 */}
            <div className="flex-col items-center text-center gap-md">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#14B8A6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                1
              </div>
              <h3 className="h3 font-bold" style={{ color: '#0B2E4A' }}>Sign Up & Sync</h3>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>Create your student profile and connect your GitHub account to automatically sync your repositories.</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex-col items-center text-center gap-md">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#0B2E4A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                2
              </div>
              <h3 className="h3 font-bold" style={{ color: '#0B2E4A' }}>Build Evidence</h3>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>Add manual projects, solve coding tasks, and take skill-based quizzes to generate verified evidence.</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex-col items-center text-center gap-md">
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#10B981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                3
              </div>
              <h3 className="h3 font-bold" style={{ color: '#0B2E4A' }}>Get Discovered</h3>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>Top tech recruiters browse SkillProof for candidates with high evidence scores. Let the offers come to you.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" style={{ padding: '6rem 4rem', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Shield size={48} color="#14B8A6" style={{ margin: '0 auto 1.5rem auto' }} />
          <h2 className="h2 font-bold" style={{ marginBottom: '1.5rem', color: '#0B2E4A' }}>Our Mission</h2>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.8 }}>
            SkillProof was built to bridge the gap between education and employment. We believe your skills should be demonstrated through real, verifiable evidence—not just listed as bullet points on a resume. Our platform empowers students to prove their capabilities while helping recruiters find truly qualified candidates with absolute confidence.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0B2E4A', padding: '4rem 4rem 2rem 4rem', color: 'rgba(255,255,255,0.7)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
          
          <div style={{ maxWidth: '300px' }}>
            <div className="flex items-center gap-sm text-white" style={{ marginBottom: '1rem' }}>
              <Shield size={24} color="#14B8A6" />
              <span className="h4 font-bold">SkillProof</span>
            </div>
            <p className="text-sm" style={{ lineHeight: 1.6 }}>
              The platform where students build verifiable "Skill Evidence Cards" and recruiters browse verified candidates.
            </p>
          </div>
          
          <div className="flex gap-xl">
            <div className="flex-col gap-sm">
              <h4 className="font-bold text-white mb-2">Platform</h4>
              <a href="#features" className="text-sm hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm hover:text-white transition-colors">How it Works</a>
              <a href="/login" className="text-sm hover:text-white transition-colors">Student Login</a>
              <a href="/login" className="text-sm hover:text-white transition-colors">Recruiter Portal</a>
            </div>
            
            <div className="flex-col gap-sm">
              <h4 className="font-bold text-white mb-2">Company</h4>
              <a href="#about" className="text-sm hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div style={{ maxWidth: '1200px', margin: '4rem auto 0 auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} SkillProof. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, CheckCircle2, Award, Code, GraduationCap, FileCheck, Trophy, FolderGit2, UserCog, Edit3, ChevronRight, User, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../context/ProfileContext';

export default function Profile() {
  const { user } = useAuth();
  const { 
    personalInfo, skills, educationList, projectsList, certificationsList, achievementsList 
  } = useProfile();

  // Helper to get initials
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      {/* HEADER */}
      <div className="flex items-center justify-between flex-wrap gap-md">
        <div>
          <h1 className="h2" style={{ marginBottom: '0.25rem', color: '#0B2E4A' }}>Professional Profile</h1>
          <p className="text-muted">Your verified skill identity and achievements.</p>
        </div>
        
        <div className="flex items-center gap-xl">
          <div className="flex items-center gap-md" style={{ width: '200px' }}>
            <span className="text-sm font-semibold text-muted">Profile Strength</span>
            <div style={{ flex: 1 }}>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '72%', height: '100%', backgroundColor: 'var(--primary)' }}></div>
              </div>
            </div>
            <span className="text-sm font-bold" style={{ color: '#0B2E4A' }}>72%</span>
          </div>
          <Link to="/dashboard/enhance-profile" className="btn btn-primary shadow-sm" style={{ padding: '0.6rem 1.25rem', borderRadius: '8px' }}>
            <Edit3 size={16} /> Enhance Profile
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-lg">
        
        {/* --- LEFT COLUMN --- */}
        <div className="flex-col gap-lg lg:col-span-5">
          
          {/* Profile Overview */}
          <div className="card" style={{ padding: '2rem' }}>
            <div className="flex items-start gap-lg mb-lg">
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold', flexShrink: 0 }}>
                {getInitials(personalInfo.name)}
              </div>
              <div>
                <h2 className="h3 font-bold mb-1" style={{ color: '#0B2E4A', fontSize: '1.5rem' }}>{personalInfo.name}</h2>
                <p className="font-semibold text-primary mb-3">{personalInfo.title}</p>
                
                <div className="flex flex-col gap-2 text-sm text-muted">
                  <div className="flex items-center gap-sm">
                    <GraduationCap size={16} /> {personalInfo.email}
                  </div>
                  <div className="flex items-center gap-sm">
                    <MapPin size={16} /> {personalInfo.location || 'Location not set'}
                  </div>
                </div>

                <div className="flex items-center gap-md mt-4">
                  {personalInfo.github && <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors"><FolderGit2 size={20} /></a>}
                  {personalInfo.linkedin && <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors"><User size={20} /></a>}
                  {personalInfo.portfolio && <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors"><Globe size={20} /></a>}
                </div>
              </div>
            </div>

            {/* About Me */}
            {personalInfo.bio && (
              <div className="pt-md" style={{ borderTop: '1px solid var(--border)' }}>
                <h3 className="h6 font-bold flex items-center gap-sm mb-sm" style={{ color: '#0B2E4A' }}>
                  <User size={18} /> About
                </h3>
                <p className="text-sm text-muted" style={{ lineHeight: 1.6, paddingLeft: '1.75rem' }}>
                  {personalInfo.bio}
                </p>
              </div>
            )}
          </div>

          {/* Education */}
          {educationList.length > 0 && (
            <div className="card">
              <div className="flex items-center justify-between mb-md">
                <h3 className="h5 font-bold flex items-center gap-sm" style={{ color: '#0B2E4A' }}>
                  <GraduationCap size={20} className="text-primary" /> Education
                </h3>
                <Link to="/dashboard/enhance-profile" className="text-sm font-semibold text-primary">View All</Link>
              </div>
              
              <div className="flex flex-col gap-0">
                {educationList.map((edu, index) => (
                  <div key={edu.id} className="flex justify-between items-start py-md" style={{ borderBottom: index !== educationList.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div className="flex gap-md">
                      <div className="mt-1" style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                        <GraduationCap size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm" style={{ color: '#0B2E4A' }}>{edu.degree}</h4>
                        <p className="text-xs text-muted mt-1">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-muted">{edu.year}</p>
                      {edu.cgpa && <p className="text-xs font-semibold text-muted mt-1">CGPA: {edu.cgpa}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CERTIFICATIONS */}
          {certificationsList.length > 0 && (
            <div className="card">
              <div className="flex items-center justify-between mb-md">
                <h3 className="h5 font-bold flex items-center gap-sm" style={{ color: '#0B2E4A' }}>
                  <Award size={20} className="text-primary" /> Certifications
                </h3>
                <Link to="/dashboard/enhance-profile" className="text-sm font-semibold text-primary">View All</Link>
              </div>
              <div className="flex flex-col gap-0">
                {certificationsList.map((cert, index) => (
                  <div key={cert.id} className="flex justify-between items-start py-md" style={{ borderBottom: index !== certificationsList.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div className="flex gap-md">
                      <div className="mt-1" style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                        <Award size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm" style={{ color: '#0B2E4A' }}>{cert.name}</h4>
                        <p className="text-xs text-muted mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {cert.date && <p className="text-xs font-semibold text-muted">{cert.date}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ACHIEVEMENTS */}
          {achievementsList.length > 0 && (
            <div className="card">
              <div className="flex items-center justify-between mb-md">
                <h3 className="h5 font-bold flex items-center gap-sm" style={{ color: '#0B2E4A' }}>
                  <Trophy size={20} className="text-primary" /> Achievements
                </h3>
                <Link to="/dashboard/enhance-profile" className="text-sm font-semibold text-primary">View All</Link>
              </div>
              <div className="flex flex-col gap-0">
                {achievementsList.map((ach, index) => (
                  <div key={ach.id} className="flex justify-between items-start py-md" style={{ borderBottom: index !== achievementsList.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div className="flex gap-md">
                      <div className="mt-1" style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                        <Trophy size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm" style={{ color: '#0B2E4A' }}>{ach.title}</h4>
                        <p className="text-xs text-muted mt-1">{ach.organization}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {ach.date && <p className="text-xs font-semibold text-muted">{ach.date}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="flex-col gap-lg lg:col-span-7">
          
          {/* SKILLPROOF SCORE */}
          <div className="card" style={{ padding: '2rem' }}>
            <div className="flex flex-col md:flex-row items-center gap-xl mb-lg">
              <div style={{ position: 'relative', width: '140px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {/* Simulated SVG circle chart */}
                <svg width="140" height="140" viewBox="0 0 140 140" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="70" cy="70" r="60" fill="none" stroke="var(--border)" strokeWidth="12" />
                  <circle cx="70" cy="70" r="60" fill="none" stroke="var(--primary)" strokeWidth="12" strokeDasharray="377" strokeDashoffset={377 - (377 * 78) / 100} style={{ transition: 'stroke-dashoffset 1s ease' }} />
                </svg>
                <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1', color: '#0B2E4A' }}>78</span>
                  <span className="text-sm font-semibold text-muted">/ 100</span>
                </div>
              </div>
              
              <div style={{ flex: 1, width: '100%' }}>
                <h3 className="h5 font-bold flex items-center gap-sm mb-xs" style={{ color: '#0B2E4A' }}>
                  <Award size={20} className="text-primary" /> SKILLPROOF SCORE
                </h3>
                <p className="text-sm text-muted mb-md">Calculated from actual verified evidence</p>
                
                <div className="flex flex-col gap-sm">
                  <div className="flex items-center gap-md">
                    <span className="font-semibold text-sm w-20">Java</span>
                    <div style={{ flex: 1, height: '6px', backgroundColor: 'var(--border)', borderRadius: '3px' }}>
                      <div style={{ width: '84%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '3px' }}></div>
                    </div>
                    <span className="font-semibold text-sm text-muted">84</span>
                  </div>
                  <div className="flex items-center gap-md">
                    <span className="font-semibold text-sm w-20">React</span>
                    <div style={{ flex: 1, height: '6px', backgroundColor: 'var(--border)', borderRadius: '3px' }}>
                      <div style={{ width: '76%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '3px' }}></div>
                    </div>
                    <span className="font-semibold text-sm text-muted">76</span>
                  </div>
                  <div className="flex items-center gap-md">
                    <span className="font-semibold text-sm w-20">SQL</span>
                    <div style={{ flex: 1, height: '6px', backgroundColor: 'var(--border)', borderRadius: '3px' }}>
                      <div style={{ width: '71%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '3px' }}></div>
                    </div>
                    <span className="font-semibold text-sm text-muted">71</span>
                  </div>
                  <div className="flex items-center gap-md">
                    <span className="font-semibold text-sm w-20">MongoDB</span>
                    <div style={{ flex: 1, height: '6px', backgroundColor: 'var(--border)', borderRadius: '3px' }}>
                      <div style={{ width: '68%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '3px' }}></div>
                    </div>
                    <span className="font-semibold text-sm text-muted">68</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '0.75rem 1rem', backgroundColor: '#F0FDF4', border: '1px solid #DCFCE7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div className="flex items-center gap-sm text-sm font-medium" style={{ color: '#166534' }}>
                <FolderGit2 size={16} /> Projects + <FileCheck size={16} /> Quizzes + <Code size={16} /> Tasks + <FolderGit2 size={16} /> GitHub
              </div>
              <div className="badge" style={{ backgroundColor: '#DCFCE7', color: '#166534', fontWeight: 'bold', padding: '4px 12px' }}>
                Evidence Strength: Strong
              </div>
            </div>
          </div>
          
          {/* SKILLS */}
          {skills.length > 0 && (
            <div className="card">
              <div className="flex items-center justify-between mb-lg">
                <h3 className="h5 font-bold flex items-center gap-sm" style={{ color: '#0B2E4A' }}>
                  <Code size={20} className="text-primary" /> Verified Skills
                </h3>
                <Link to="/dashboard/enhance-profile" className="text-sm font-semibold text-primary">View All</Link>
              </div>

              <div className="flex flex-col gap-0">
                {skills.filter(s => s.verified).map((skill, index) => (
                  <div key={skill.id} className="flex items-center gap-md py-md" style={{ borderBottom: index !== skills.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    
                    <div style={{ width: '32px', height: '32px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* Simple icon based on name, or generic */}
                      {skill.name === 'Java' ? <img src="https://www.svgrepo.com/show/353924/java.svg" alt="Java" style={{ width: '24px' }} /> : 
                       skill.name === 'React' ? <img src="https://www.svgrepo.com/show/354259/react.svg" alt="React" style={{ width: '24px' }} /> :
                       skill.name === 'SQL' ? <img src="https://www.svgrepo.com/show/331375/database.svg" alt="SQL" style={{ width: '24px' }} /> :
                       <img src="https://www.svgrepo.com/show/354090/mongodb.svg" alt="MongoDB" style={{ width: '24px' }} />
                      }
                    </div>

                    <div style={{ width: '120px', flexShrink: 0 }}>
                      <h4 className="font-bold text-sm" style={{ color: '#0B2E4A' }}>{skill.name}</h4>
                      <div className="flex items-center gap-sm mt-1">
                        <div style={{ flex: 1, height: '4px', backgroundColor: 'var(--border)', borderRadius: '2px' }}>
                          <div style={{ width: `${skill.score}%`, height: '100%', backgroundColor: 'var(--primary)', borderRadius: '2px' }}></div>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-muted w-10 text-right">{skill.score}%</span>
                    
                    <div className="flex items-center justify-between" style={{ flex: 1, paddingLeft: '1rem' }}>
                      <div className="flex items-center gap-lg">
                        {skill.projects > 0 && <div className="flex items-center gap-xs text-xs text-muted"><FolderGit2 size={14} /> {skill.projects} Projects</div>}
                        {skill.tasks > 0 && <div className="flex items-center gap-xs text-xs text-muted"><Code size={14} /> {skill.tasks} Tasks</div>}
                        <div className="flex items-center gap-xs text-xs text-muted"><CheckCircle2 size={14} /> {skill.score}% Quiz</div>
                      </div>
                      
                      <div className="badge" style={{ backgroundColor: '#F0FDF4', color: '#166534', border: '1px solid #DCFCE7' }}>
                        Verified
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS */}
          {projectsList.length > 0 && (
            <div className="card">
              <div className="flex items-center justify-between mb-lg">
                <h3 className="h5 font-bold flex items-center gap-sm" style={{ color: '#0B2E4A' }}>
                  <FolderGit2 size={20} className="text-primary" /> Featured Projects
                </h3>
                <Link to="/dashboard/enhance-profile" className="text-sm font-semibold text-primary">View All</Link>
              </div>

              {projectsList.filter(p => p.featured).map(project => (
                <div key={project.id} className="flex flex-col md:flex-row gap-lg p-md" style={{ border: '1px solid var(--border)', borderRadius: '12px', marginBottom: '1rem' }}>
                  
                  {/* Project Image placeholder matching the mockup */}
                  <div style={{ width: '100%', md: {width: '200px'}, flexShrink: 0 }}>
                    <div style={{ width: '100%', paddingTop: '60%', backgroundColor: '#0B2E4A', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>
                         <FolderGit2 size={48} />
                      </div>
                    </div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-sm mb-1">
                          <h4 className="font-bold text-lg" style={{ color: '#0B2E4A' }}>{project.name}</h4>
                          <span className="badge" style={{ backgroundColor: '#14B8A6', color: 'white', fontSize: '0.65rem', padding: '2px 8px' }}>Featured</span>
                        </div>
                        <p className="text-xs font-semibold text-muted mb-md">{project.role}</p>
                      </div>
                      <a href="#" className="text-muted hover:text-primary transition-colors"><ExternalLink size={18} /></a>
                    </div>
                    
                    <div className="flex flex-wrap gap-xs mb-md">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="badge" style={{ backgroundColor: '#F0F9FF', color: '#0284C7', border: '1px solid #E0F2FE' }}>{tech}</span>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-y-md">
                      <div>
                        <p className="text-xs font-semibold text-muted mb-sm">Evidence Provided:</p>
                        <div className="flex flex-wrap gap-md text-xs text-muted">
                          {project.links && project.links.map((link, i) => (
                            <div key={i} className="flex items-center gap-xs"><FolderGit2 size={14} className="text-primary" /> {link}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted mb-sm">Skills Demonstrated:</p>
                        <div className="flex flex-wrap gap-md text-xs text-muted">
                          {project.technologies.map((tech, i) => (
                            <div key={i} className="flex items-center gap-xs"><CheckCircle2 size={14} className="text-primary" /> {tech}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}


        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, CheckCircle2, User, Briefcase, Code, GraduationCap, FolderGit2, Award, Trophy, Save, Eye, Plus, ArrowLeft, Trash2, Edit2 } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

const tabs = [
  'Personal Info', 
  'Career', 
  'Skills', 
  'Education', 
  'Experience', 
  'Projects', 
  'Certifications', 
  'Achievements', 
  'Evidence'
];

export default function EnhanceProfile() {
  const [activeTab, setActiveTab] = useState('Personal Info');
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersonalInfo({ ...personalInfo, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const { 
    personalInfo, setPersonalInfo,
    careerInfo, setCareerInfo,
    skills, setSkills,
    educationList, setEducationList,
    experienceList, setExperienceList,
    projectsList, setProjectsList,
    certificationsList, setCertificationsList,
    achievementsList, setAchievementsList
  } = useProfile();

  const [newSkill, setNewSkill] = useState({ name: '', category: 'Programming Language', level: 'Beginner' });
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [editingSkillId, setEditingSkillId] = useState(null);

  const handleEditSkill = (skill) => {
    setNewSkill(skill);
    setEditingSkillId(skill.id);
    setIsAddingSkill(true);
  };
  const handleDeleteSkill = (id) => setSkills(skills.filter(s => s.id !== id));
  const handleSaveSkill = () => {
    if (newSkill.name.trim() !== '') {
      if (editingSkillId) {
        setSkills(skills.map(s => s.id === editingSkillId ? { ...s, ...newSkill } : s));
      } else {
        setSkills([...skills, { id: Date.now(), ...newSkill, verified: false, projects: 0, tasks: 0, score: 0, github: false }]);
      }
      setNewSkill({ name: '', category: 'Programming Language', level: 'Beginner' });
      setIsAddingSkill(false);
      setEditingSkillId(null);
    }
  };

  const [isAddingEducation, setIsAddingEducation] = useState(false);
  const [editingEducationId, setEditingEducationId] = useState(null);
  const [newEducation, setNewEducation] = useState({ degree: '', institution: '', year: '', cgpa: '' });

  const handleEditEducation = (edu) => {
    setNewEducation(edu);
    setEditingEducationId(edu.id);
    setIsAddingEducation(true);
  };

  const handleDeleteEducation = (id) => {
    setEducationList(educationList.filter(edu => edu.id !== id));
  };

  const handleSaveEducation = () => {
    if (newEducation.degree.trim() !== '') {
      if (editingEducationId) {
        setEducationList(educationList.map(edu => edu.id === editingEducationId ? { ...newEducation, id: editingEducationId } : edu));
      } else {
        setEducationList([...educationList, { ...newEducation, id: Date.now() }]);
      }
      setNewEducation({ degree: '', institution: '', year: '', cgpa: '' });
      setIsAddingEducation(false);
      setEditingEducationId(null);
    }
  };
  const [isAddingExperience, setIsAddingExperience] = useState(false);
  const [editingExperienceId, setEditingExperienceId] = useState(null);
  const [newExperience, setNewExperience] = useState({ role: '', company: '', duration: '', location: '', responsibilities: '', technologies: '' });

  const handleEditExperience = (exp) => {
    setNewExperience({ ...exp, responsibilities: exp.responsibilities.join('\n'), technologies: exp.technologies.join(', ') });
    setEditingExperienceId(exp.id);
    setIsAddingExperience(true);
  };
  const handleDeleteExperience = (id) => setExperienceList(experienceList.filter(e => e.id !== id));
  const handleSaveExperience = () => {
    if (newExperience.role.trim() !== '') {
      const formattedExp = {
        ...newExperience,
        responsibilities: newExperience.responsibilities.split('\n').filter(r => r.trim() !== ''),
        technologies: newExperience.technologies.split(',').map(t => t.trim()).filter(t => t !== '')
      };
      if (editingExperienceId) {
        setExperienceList(experienceList.map(e => e.id === editingExperienceId ? { ...formattedExp, id: editingExperienceId } : e));
      } else {
        setExperienceList([...experienceList, { ...formattedExp, id: Date.now() }]);
      }
      setNewExperience({ role: '', company: '', duration: '', location: '', responsibilities: '', technologies: '' });
      setIsAddingExperience(false);
      setEditingExperienceId(null);
    }
  };

  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [newProject, setNewProject] = useState({ name: '', role: '', description: '', duration: '', teamSize: '', technologies: '', links: '', featured: false });

  const handleEditProject = (proj) => {
    setNewProject({ ...proj, technologies: proj.technologies.join(', '), links: (proj.links || []).join(', ') });
    setEditingProjectId(proj.id);
    setIsAddingProject(true);
  };
  const handleDeleteProject = (id) => setProjectsList(projectsList.filter(p => p.id !== id));
  const handleSaveProject = () => {
    if (newProject.name.trim() !== '') {
      const formattedProj = {
        ...newProject,
        technologies: newProject.technologies.split(',').map(t => t.trim()).filter(t => t !== ''),
        links: newProject.links.split(',').map(l => l.trim()).filter(l => l !== '')
      };
      if (editingProjectId) {
        setProjectsList(projectsList.map(p => p.id === editingProjectId ? { ...formattedProj, id: editingProjectId } : p));
      } else {
        setProjectsList([...projectsList, { ...formattedProj, id: Date.now() }]);
      }
      setNewProject({ name: '', role: '', description: '', duration: '', teamSize: '', technologies: '', links: '', featured: false });
      setIsAddingProject(false);
      setEditingProjectId(null);
    }
  };

  const [isAddingCertification, setIsAddingCertification] = useState(false);
  const [editingCertificationId, setEditingCertificationId] = useState(null);
  const [newCertification, setNewCertification] = useState({ name: '', issuer: '', date: '', credentialId: '' });

  const handleEditCertification = (cert) => {
    setNewCertification(cert);
    setEditingCertificationId(cert.id);
    setIsAddingCertification(true);
  };
  const handleDeleteCertification = (id) => setCertificationsList(certificationsList.filter(c => c.id !== id));
  const handleSaveCertification = () => {
    if (newCertification.name.trim() !== '') {
      if (editingCertificationId) {
        setCertificationsList(certificationsList.map(c => c.id === editingCertificationId ? { ...newCertification, id: editingCertificationId } : c));
      } else {
        setCertificationsList([...certificationsList, { ...newCertification, id: Date.now() }]);
      }
      setNewCertification({ name: '', issuer: '', date: '', credentialId: '' });
      setIsAddingCertification(false);
      setEditingCertificationId(null);
    }
  };

  const [isAddingAchievement, setIsAddingAchievement] = useState(false);
  const [editingAchievementId, setEditingAchievementId] = useState(null);
  const [newAchievement, setNewAchievement] = useState({ title: '', organization: '', date: '' });

  const handleEditAchievement = (ach) => {
    setNewAchievement(ach);
    setEditingAchievementId(ach.id);
    setIsAddingAchievement(true);
  };
  const handleDeleteAchievement = (id) => setAchievementsList(achievementsList.filter(a => a.id !== id));
  const handleSaveAchievement = () => {
    if (newAchievement.title.trim() !== '') {
      if (editingAchievementId) {
        setAchievementsList(achievementsList.map(a => a.id === editingAchievementId ? { ...newAchievement, id: editingAchievementId } : a));
      } else {
        setAchievementsList([...achievementsList, { ...newAchievement, id: Date.now() }]);
      }
      setNewAchievement({ title: '', organization: '', date: '' });
      setIsAddingAchievement(false);
      setEditingAchievementId(null);
    }
  };

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '4rem' }}>
      
      {/* Header & Completion */}
      <div className="flex items-center justify-between flex-wrap gap-md">
        <div className="flex items-center gap-md">
          <Link to="/dashboard/profile" className="btn btn-secondary shadow-sm" style={{ padding: '0.5rem', borderRadius: '50%' }}>
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Enhance Your Profile</h1>
            <p className="text-muted">Add more information to build a stronger and more complete professional identity.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-xl bg-white p-md rounded-xl" style={{ border: '1px solid var(--border)' }}>
          <div className="flex-col" style={{ width: '200px' }}>
            <div className="flex justify-between items-center mb-xs">
              <span className="text-xs font-bold text-muted uppercase">Profile Completion</span>
              <span className="text-sm font-bold text-primary">72%</span>
            </div>
            <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '72%', height: '100%', backgroundColor: 'var(--primary)' }}></div>
            </div>
            <p className="text-[10px] text-muted mt-1">Personal Info, Education, Skills, Projects, Certs ✓</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Tab Bar */}
        <div className="flex items-center gap-lg" style={{ padding: '0 2rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)', overflowX: 'auto' }}>
          {tabs.map(tab => (
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
        <div style={{ padding: '2rem', maxWidth: '800px' }}>
          
          {/* PERSONAL INFO TAB */}
          {activeTab === 'Personal Info' && (
            <div className="flex-col gap-lg animate-fade-in">
              <h3 className="h4 font-bold mb-sm">Personal Information</h3>
              
              <div className="flex items-center gap-md mb-md">
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--bg-tertiary)', overflow: 'hidden' }}>
                  <img src={personalInfo.avatar || "https://ui-avatars.com/api/?name=Anusha+Stefy&background=00b894&color=fff&size=100"} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <button onClick={() => fileInputRef.current.click()} className="btn btn-secondary text-sm">Upload Photo</button>
                <input type="file" accept="image/*" ref={fileInputRef} onChange={handlePhotoUpload} style={{ display: 'none' }} />
              </div>

              <div className="grid sm:grid-cols-2 gap-md">
                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>Full Name</label>
                  <input type="text" className="input-field" value={personalInfo.name} onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>Professional Title</label>
                  <input type="text" className="input-field" value={personalInfo.title} onChange={(e) => setPersonalInfo({...personalInfo, title: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>Email</label>
                  <input type="email" className="input-field" value={personalInfo.email} onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>Phone Number</label>
                  <input type="tel" className="input-field" value={personalInfo.phone} onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})} placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>Location</label>
                  <input type="text" className="input-field" value={personalInfo.location} onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})} />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>Portfolio Website</label>
                  <input type="url" className="input-field" value={personalInfo.portfolio} onChange={(e) => setPersonalInfo({...personalInfo, portfolio: e.target.value})} placeholder="https://..." />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>Short Bio</label>
                <textarea className="input-field" rows="4" value={personalInfo.bio} onChange={(e) => setPersonalInfo({...personalInfo, bio: e.target.value})}></textarea>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-md">
                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>LinkedIn Profile</label>
                  <input type="url" className="input-field" value={personalInfo.linkedin} onChange={(e) => setPersonalInfo({...personalInfo, linkedin: e.target.value})} placeholder="https://linkedin.com/in/..." />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>GitHub Profile</label>
                  <input type="url" className="input-field" value={personalInfo.github} onChange={(e) => setPersonalInfo({...personalInfo, github: e.target.value})} placeholder="https://github.com/..." />
                </div>
              </div>
            </div>
          )}

          {/* CAREER TAB */}
          {activeTab === 'Career' && (
            <div className="flex-col gap-lg animate-fade-in">
              <h3 className="h4 font-bold mb-sm">Career Information</h3>
              
              <div>
                <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>Career Objective</label>
                <textarea className="input-field" rows="3" placeholder="What are your professional goals?"></textarea>
              </div>

              <div className="grid sm:grid-cols-2 gap-md">
                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>Preferred Job Role</label>
                  <input type="text" className="input-field" placeholder="e.g. Frontend Engineer, Data Scientist" />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block" style={{ color: '#0f172a' }}>Interested Technologies (comma separated)</label>
                  <input type="text" className="input-field" placeholder="React, Python, Machine Learning" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block" style={{ color: '#0f172a' }}>Preferred Work Type</label>
                <div className="flex flex-wrap gap-md">
                  {['Full-time', 'Internship', 'Freelance', 'Remote', 'Hybrid', 'On-site'].map(type => (
                    <label key={type} className="flex items-center gap-sm cursor-pointer">
                      <input type="checkbox" style={{ width: '16px', height: '16px', accentColor: '#14B8A6' }} />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'Skills' && (
            <div className="flex-col gap-lg animate-fade-in">
              <div className="flex items-center justify-between mb-sm">
                <h3 className="h4 font-bold">Skills</h3>
                <button onClick={() => { setIsAddingSkill(!isAddingSkill); setEditingSkillId(null); setNewSkill({ name: '', category: 'Programming Language', level: 'Beginner' }); }} className="btn btn-primary text-sm px-sm py-xs">
                  <Plus size={16} /> Add Skill
                </button>
              </div>

              {isAddingSkill && (
                <div className="p-lg rounded-xl mb-md" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <h4 className="font-bold mb-md">{editingSkillId ? 'Edit' : 'Add'} Skill</h4>
                  <div className="grid sm:grid-cols-2 gap-md mb-md">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Skill Name</label>
                      <input type="text" className="input-field" placeholder="e.g. Python" value={newSkill.name} onChange={(e) => setNewSkill({...newSkill, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Skill Category</label>
                      <select className="input-field" value={newSkill.category} onChange={(e) => setNewSkill({...newSkill, category: e.target.value})}>
                        <option>Programming Language</option>
                        <option>Frontend</option>
                        <option>Backend</option>
                        <option>Database</option>
                        <option>Framework</option>
                        <option>Cloud</option>
                        <option>AI/ML</option>
                        <option>Tools</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-md">
                    <label className="text-sm font-semibold mb-2 block">Skill Level</label>
                    <div className="flex gap-md">
                      {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                        <label key={level} className="flex items-center gap-sm cursor-pointer">
                          <input type="radio" name="skillLevel" checked={newSkill.level === level} onChange={() => setNewSkill({...newSkill, level})} style={{ accentColor: '#14B8A6' }} />
                          <span className="text-sm">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end gap-sm">
                    <button onClick={() => setIsAddingSkill(false)} className="btn btn-secondary">Cancel</button>
                    <button onClick={handleSaveSkill} className="btn btn-primary">Save Skill</button>
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-lg">
                {skills.map((skill, index) => (
                  <div key={index} className="p-md rounded-xl" style={{ backgroundColor: 'white', border: '1px solid var(--border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    <div className="flex items-center justify-between mb-sm">
                      <h4 className="font-bold text-lg flex items-center gap-sm">
                        {skill.name}
                        {skill.verified ? (
                          <span className="badge flex items-center gap-xs text-[10px]" style={{ backgroundColor: '#dcfce7', color: '#166534' }}>
                            <CheckCircle2 size={10} /> Verified
                          </span>
                        ) : (
                          <span className="badge flex items-center gap-xs text-[10px]" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>
                            Added Skill
                          </span>
                        )}
                      </h4>
                      {skill.verified && <span className="text-primary font-bold">{skill.score}%</span>}
                    </div>
                    
                    <p className="text-xs text-muted mb-md">{skill.category} • {skill.level}</p>
                    
                    {skill.verified ? (
                      <div>
                        <p className="text-[10px] font-semibold text-muted mb-sm uppercase tracking-wider">Evidence:</p>
                        <div className="grid grid-cols-2 gap-xs">
                          <div className="flex items-center gap-xs text-xs"><CheckCircle2 size={12} className="text-primary" /> {skill.projects} Projects</div>
                          <div className="flex items-center gap-xs text-xs"><CheckCircle2 size={12} className="text-primary" /> {skill.tasks} Coding Tasks</div>
                          <div className="flex items-center gap-xs text-xs"><CheckCircle2 size={12} className="text-primary" /> {skill.score}% Quiz Score</div>
                          {skill.github && <div className="flex items-center gap-xs text-xs"><CheckCircle2 size={12} className="text-primary" /> GitHub Activity</div>}
                        </div>
                      </div>
                    ) : (
                      <div className="p-sm rounded-lg" style={{ backgroundColor: '#f8fafc', border: '1px dashed #cbd5e1' }}>
                        <p className="text-xs text-slate-500 text-center">No evidence yet. Complete tasks or add projects to verify this skill.</p>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-sm mt-md pt-sm" style={{ borderTop: '1px solid var(--border)' }}>
                      <button onClick={() => handleEditSkill(skill)} className="text-xs font-semibold text-primary flex items-center gap-xs"><Edit2 size={12} /> Edit</button>
                      <button onClick={() => handleDeleteSkill(skill.id)} className="text-xs font-semibold text-red-500 flex items-center gap-xs"><Trash2 size={12} /> Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === 'Education' && (
            <div className="flex-col gap-lg animate-fade-in">
              <div className="flex items-center justify-between mb-sm">
                <h3 className="h4 font-bold">Education</h3>
                {!isAddingEducation && (
                  <button onClick={() => { setIsAddingEducation(true); setNewEducation({ degree: '', institution: '', year: '', cgpa: '' }); setEditingEducationId(null); }} className="btn btn-primary text-sm px-sm py-xs">
                    <Plus size={16} /> Add Education
                  </button>
                )}
              </div>

              {isAddingEducation && (
                <div className="p-lg rounded-xl mb-md" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <h4 className="font-bold mb-md">{editingEducationId ? 'Edit Education' : 'Add New Education'}</h4>
                  <div className="grid sm:grid-cols-2 gap-md mb-md">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Degree / Course</label>
                      <input type="text" className="input-field" placeholder="e.g. B.Tech in AI" value={newEducation.degree} onChange={(e) => setNewEducation({...newEducation, degree: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Institution</label>
                      <input type="text" className="input-field" placeholder="e.g. MIT" value={newEducation.institution} onChange={(e) => setNewEducation({...newEducation, institution: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Years</label>
                      <input type="text" className="input-field" placeholder="e.g. 2020-2024" value={newEducation.year} onChange={(e) => setNewEducation({...newEducation, year: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">CGPA / Grade (Optional)</label>
                      <input type="text" className="input-field" placeholder="e.g. 8.5" value={newEducation.cgpa} onChange={(e) => setNewEducation({...newEducation, cgpa: e.target.value})} />
                    </div>
                  </div>
                  <div className="flex justify-end gap-sm mt-md">
                    <button onClick={() => { setIsAddingEducation(false); setEditingEducationId(null); }} className="btn btn-secondary">Cancel</button>
                    <button onClick={handleSaveEducation} className="btn btn-primary">Save</button>
                  </div>
                </div>
              )}

              {educationList.map(edu => (
                <div key={edu.id} className="p-md rounded-xl" style={{ border: '1px solid var(--border)' }}>
                  <div className="flex justify-between items-start mb-sm">
                    <div>
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <p className="font-medium text-sm text-primary">{edu.institution}</p>
                    </div>
                    <div className="flex gap-sm">
                      <button onClick={() => handleEditEducation(edu)} className="text-muted hover:text-primary"><Edit2 size={16} /></button>
                      <button onClick={() => handleDeleteEducation(edu.id)} className="text-muted hover:text-red-500"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <div className="flex items-center gap-lg text-sm text-muted mb-md">
                    <span>{edu.year}</span>
                    {edu.cgpa && <span>CGPA: {edu.cgpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === 'Experience' && (
            <div className="flex-col gap-lg animate-fade-in">
              <div className="flex items-center justify-between mb-sm">
                <h3 className="h4 font-bold">Experience</h3>
                <button onClick={() => { setIsAddingExperience(!isAddingExperience); setEditingExperienceId(null); setNewExperience({ role: '', company: '', duration: '', location: '', responsibilities: '', technologies: '' }); }} className="btn btn-primary text-sm px-sm py-xs">
                  <Plus size={16} /> Add Experience
                </button>
              </div>

              {isAddingExperience && (
                <div className="p-lg rounded-xl mb-md" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <h4 className="font-bold mb-md">{editingExperienceId ? 'Edit' : 'Add'} Experience</h4>
                  <div className="grid sm:grid-cols-2 gap-md mb-md">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Role / Title</label>
                      <input type="text" className="input-field" placeholder="e.g. Backend Developer" value={newExperience.role} onChange={e => setNewExperience({...newExperience, role: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Company / Organization</label>
                      <input type="text" className="input-field" placeholder="e.g. Tech Solutions Inc." value={newExperience.company} onChange={e => setNewExperience({...newExperience, company: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Duration</label>
                      <input type="text" className="input-field" placeholder="e.g. June 2024 - Present" value={newExperience.duration} onChange={e => setNewExperience({...newExperience, duration: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Location / Work Type</label>
                      <input type="text" className="input-field" placeholder="e.g. Remote" value={newExperience.location} onChange={e => setNewExperience({...newExperience, location: e.target.value})} />
                    </div>
                  </div>
                  <div className="mb-md">
                    <label className="text-sm font-semibold mb-1 block">Responsibilities (One per line)</label>
                    <textarea className="input-field" rows="3" placeholder="Developed REST APIs..." value={newExperience.responsibilities} onChange={e => setNewExperience({...newExperience, responsibilities: e.target.value})}></textarea>
                  </div>
                  <div className="mb-md">
                    <label className="text-sm font-semibold mb-1 block">Technologies Used (Comma separated)</label>
                    <input type="text" className="input-field" placeholder="Node.js, MongoDB, Express" value={newExperience.technologies} onChange={e => setNewExperience({...newExperience, technologies: e.target.value})} />
                  </div>
                  <div className="flex justify-end gap-sm">
                    <button onClick={() => setIsAddingExperience(false)} className="btn btn-secondary text-sm">Cancel</button>
                    <button onClick={handleSaveExperience} className="btn btn-primary text-sm">Save Experience</button>
                  </div>
                </div>
              )}

              {experienceList.map(exp => (
                <div key={exp.id} className="p-md rounded-xl" style={{ border: '1px solid var(--border)', marginBottom: '1rem' }}>
                  <div className="flex justify-between items-start mb-sm">
                    <div>
                      <h4 className="font-bold text-lg">{exp.role}</h4>
                      <p className="font-medium text-sm text-primary">{exp.company}</p>
                    </div>
                    <div className="flex gap-sm">
                      <button onClick={() => handleEditExperience(exp)} className="text-muted hover:text-primary"><Edit2 size={16} /></button>
                      <button onClick={() => handleDeleteExperience(exp.id)} className="text-muted hover:text-red-500"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <div className="flex items-center gap-lg text-sm text-muted mb-md">
                    <span>{exp.duration}</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="text-sm">
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <>
                        <p className="mb-xs font-semibold">Responsibilities:</p>
                        <ul className="list-disc pl-md text-muted mb-md">
                          {exp.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                        </ul>
                      </>
                    )}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <>
                        <p className="mb-xs font-semibold">Technologies Used:</p>
                        <div className="flex flex-wrap gap-xs">
                          {exp.technologies.map((t, i) => <span key={i} className="badge" style={{ backgroundColor: '#e0f2fe', color: '#0369a1' }}>{t}</span>)}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'Projects' && (
            <div className="flex-col gap-lg animate-fade-in">
              <div className="flex items-center justify-between mb-sm">
                <h3 className="h4 font-bold">Projects</h3>
                <button onClick={() => { setIsAddingProject(!isAddingProject); setEditingProjectId(null); setNewProject({ name: '', role: '', description: '', duration: '', teamSize: '', technologies: '', links: '', featured: false }); }} className="btn btn-primary text-sm px-sm py-xs">
                  <Plus size={16} /> Add Project
                </button>
              </div>

              {isAddingProject && (
                <div className="p-lg rounded-xl mb-md" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <h4 className="font-bold mb-md">{editingProjectId ? 'Edit' : 'Add'} Project</h4>
                  <div className="grid sm:grid-cols-2 gap-md mb-md">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Project Name</label>
                      <input type="text" className="input-field" placeholder="e.g. Electronic Voting System" value={newProject.name} onChange={e => setNewProject({...newProject, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Your Role</label>
                      <input type="text" className="input-field" placeholder="e.g. Frontend Developer" value={newProject.role} onChange={e => setNewProject({...newProject, role: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Duration</label>
                      <input type="text" className="input-field" placeholder="e.g. 3 months" value={newProject.duration} onChange={e => setNewProject({...newProject, duration: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Team Size</label>
                      <input type="text" className="input-field" placeholder="e.g. 4" value={newProject.teamSize} onChange={e => setNewProject({...newProject, teamSize: e.target.value})} />
                    </div>
                  </div>
                  <div className="mb-md">
                    <label className="text-sm font-semibold mb-1 block">Description</label>
                    <textarea className="input-field" rows="2" placeholder="A secure and scalable..." value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})}></textarea>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-md mb-md">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Technologies (Comma separated)</label>
                      <input type="text" className="input-field" placeholder="React, Spring Boot, MySQL" value={newProject.technologies} onChange={e => setNewProject({...newProject, technologies: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Links (Comma separated)</label>
                      <input type="text" className="input-field" placeholder="GitHub Repository, Live Demo" value={newProject.links} onChange={e => setNewProject({...newProject, links: e.target.value})} />
                    </div>
                  </div>
                  <div className="mb-md">
                    <label className="flex items-center gap-sm cursor-pointer">
                      <input type="checkbox" checked={newProject.featured} onChange={e => setNewProject({...newProject, featured: e.target.checked})} style={{ width: '16px', height: '16px', accentColor: '#14B8A6' }} />
                      <span className="text-sm font-semibold text-primary">Mark as Featured Project</span>
                    </label>
                  </div>
                  <div className="flex justify-end gap-sm">
                    <button onClick={() => setIsAddingProject(false)} className="btn btn-secondary text-sm">Cancel</button>
                    <button onClick={handleSaveProject} className="btn btn-primary text-sm">Save Project</button>
                  </div>
                </div>
              )}

              {projectsList.map(proj => (
                <div key={proj.id} className="p-md rounded-xl" style={{ border: '1px solid var(--border)', position: 'relative', overflow: 'hidden', marginBottom: '1rem' }}>
                  {proj.featured && <div style={{ position: 'absolute', top: '1rem', right: '-2rem', backgroundColor: '#f59e0b', color: 'white', padding: '0.25rem 2.5rem', transform: 'rotate(45deg)', fontSize: '10px', fontWeight: 'bold' }}>FEATURED</div>}
                  <div className="flex justify-between items-start mb-sm">
                    <div>
                      <h4 className="font-bold text-lg flex items-center gap-sm"><FolderGit2 size={20} className="text-primary"/> {proj.name}</h4>
                      <p className="font-medium text-sm text-primary mb-1">{proj.role}</p>
                    </div>
                    <div className="flex gap-sm mr-xl">
                      <button onClick={() => handleEditProject(proj)} className="text-muted hover:text-primary"><Edit2 size={16} /></button>
                      <button onClick={() => handleDeleteProject(proj.id)} className="text-muted hover:text-red-500"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted mb-md">{proj.description}</p>
                  
                  {proj.technologies && proj.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-xs mb-md">
                      {proj.technologies.map((t, i) => <span key={i} className="badge" style={{ backgroundColor: '#e0f2fe', color: '#0369a1' }}>{t}</span>)}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-y-md text-sm mt-md pt-md" style={{ borderTop: '1px solid var(--border)' }}>
                    <div>
                      <p className="text-xs font-semibold text-muted mb-xs uppercase">Links & Evidence</p>
                      {proj.links && proj.links.map((link, i) => (
                        <a key={i} href="#" className="flex items-center gap-xs text-primary hover:underline mb-1"><CheckCircle2 size={14}/> {link}</a>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted mb-xs uppercase">Details</p>
                      <p className="text-muted mb-1">Duration: {proj.duration}</p>
                      <p className="text-muted">Team Size: {proj.teamSize}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CERTIFICATIONS TAB */}
          {activeTab === 'Certifications' && (
            <div className="flex-col gap-lg animate-fade-in">
              <div className="flex items-center justify-between mb-sm">
                <h3 className="h4 font-bold">Certifications</h3>
                <button onClick={() => { setIsAddingCertification(!isAddingCertification); setEditingCertificationId(null); setNewCertification({ name: '', issuer: '', date: '', credentialId: '' }); }} className="btn btn-primary text-sm px-sm py-xs">
                  <Plus size={16} /> Add Certification
                </button>
              </div>

              {isAddingCertification && (
                <div className="p-lg rounded-xl mb-md" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <h4 className="font-bold mb-md">{editingCertificationId ? 'Edit' : 'Add'} Certification</h4>
                  <div className="grid sm:grid-cols-2 gap-md mb-md">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Certification Name</label>
                      <input type="text" className="input-field" placeholder="e.g. Data Science Essentials" value={newCertification.name} onChange={e => setNewCertification({...newCertification, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Issuing Organization</label>
                      <input type="text" className="input-field" placeholder="e.g. Cisco Networking Academy" value={newCertification.issuer} onChange={e => setNewCertification({...newCertification, issuer: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Date Issued</label>
                      <input type="text" className="input-field" placeholder="e.g. Jan 2025" value={newCertification.date} onChange={e => setNewCertification({...newCertification, date: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Credential ID</label>
                      <input type="text" className="input-field" placeholder="e.g. 123456789" value={newCertification.credentialId} onChange={e => setNewCertification({...newCertification, credentialId: e.target.value})} />
                    </div>
                  </div>
                  <div className="flex justify-end gap-sm">
                    <button onClick={() => setIsAddingCertification(false)} className="btn btn-secondary text-sm">Cancel</button>
                    <button onClick={handleSaveCertification} className="btn btn-primary text-sm">Save Certification</button>
                  </div>
                </div>
              )}

              {certificationsList.map(cert => (
                <div key={cert.id} className="p-md rounded-xl flex justify-between items-center mb-md" style={{ border: '1px solid var(--border)' }}>
                  <div className="flex items-center gap-md">
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">{cert.name}</h4>
                      <p className="text-sm text-primary">{cert.issuer}</p>
                      <p className="text-xs text-muted mt-1">Issued: {cert.date} {cert.credentialId && `• Credential ID: ${cert.credentialId}`}</p>
                    </div>
                  </div>
                  <div className="flex gap-sm">
                    <button onClick={() => handleEditCertification(cert)} className="text-muted hover:text-primary"><Edit2 size={16} /></button>
                    <button onClick={() => handleDeleteCertification(cert.id)} className="text-muted hover:text-red-500"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ACHIEVEMENTS TAB */}
          {activeTab === 'Achievements' && (
            <div className="flex-col gap-lg animate-fade-in">
              <div className="flex items-center justify-between mb-sm">
                <h3 className="h4 font-bold">Achievements</h3>
                <button onClick={() => { setIsAddingAchievement(!isAddingAchievement); setEditingAchievementId(null); setNewAchievement({ title: '', organization: '', date: '' }); }} className="btn btn-primary text-sm px-sm py-xs">
                  <Plus size={16} /> Add Achievement
                </button>
              </div>

              {isAddingAchievement && (
                <div className="p-lg rounded-xl mb-md" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <h4 className="font-bold mb-md">{editingAchievementId ? 'Edit' : 'Add'} Achievement</h4>
                  <div className="grid sm:grid-cols-2 gap-md mb-md">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Achievement Title</label>
                      <input type="text" className="input-field" placeholder="e.g. 1st Prize — Technical Symposium" value={newAchievement.title} onChange={e => setNewAchievement({...newAchievement, title: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Organization / Event</label>
                      <input type="text" className="input-field" placeholder="e.g. Kuppam Engineering & Technology" value={newAchievement.organization} onChange={e => setNewAchievement({...newAchievement, organization: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Date</label>
                      <input type="text" className="input-field" placeholder="e.g. March 2025" value={newAchievement.date} onChange={e => setNewAchievement({...newAchievement, date: e.target.value})} />
                    </div>
                  </div>
                  <div className="flex justify-end gap-sm">
                    <button onClick={() => setIsAddingAchievement(false)} className="btn btn-secondary text-sm">Cancel</button>
                    <button onClick={handleSaveAchievement} className="btn btn-primary text-sm">Save Achievement</button>
                  </div>
                </div>
              )}

              {achievementsList.map(ach => (
                <div key={ach.id} className="p-md rounded-xl flex justify-between items-center mb-md" style={{ border: '1px solid var(--border)' }}>
                  <div className="flex items-center gap-md">
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">{ach.title}</h4>
                      <p className="text-sm text-primary">{ach.organization}</p>
                      <p className="text-xs text-muted mt-1">{ach.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-sm">
                    <button onClick={() => handleEditAchievement(ach)} className="text-muted hover:text-primary"><Edit2 size={16} /></button>
                    <button onClick={() => handleDeleteAchievement(ach.id)} className="text-muted hover:text-red-500"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EVIDENCE TAB */}
          {activeTab === 'Evidence' && (
            <div className="flex-col gap-lg animate-fade-in">
              <div>
                <h3 className="h4 font-bold mb-xs">Coding & Evidence</h3>
                <p className="text-sm text-muted">The more verified evidence you provide, the stronger your SkillProof profile becomes.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-md mt-md">
                <div className="card text-center flex-col items-center justify-center p-xl">
                  <FolderGit2 size={32} className="text-slate-700 mb-sm" />
                  <h4 className="font-bold mb-xs">GitHub</h4>
                  <p className="text-xs text-muted mb-md">Connect to auto-verify your repos and commits.</p>
                  <button className="btn text-sm w-full" style={{ backgroundColor: '#24292e', color: 'white' }}>Connect GitHub</button>
                </div>
                
                <div className="card text-center flex-col items-center justify-center p-xl">
                  <Code size={32} className="text-orange-500 mb-sm" />
                  <h4 className="font-bold mb-xs">LeetCode</h4>
                  <p className="text-xs text-muted mb-md">Connect your LeetCode profile for problem solving stats.</p>
                  <button className="btn text-sm w-full text-orange-500" style={{ border: '1px solid #f97316' }}>Connect LeetCode</button>
                </div>
                
                <div className="card text-center flex-col items-center justify-center p-xl">
                  <Shield size={32} className="text-primary mb-sm" />
                  <h4 className="font-bold mb-xs">Skill Assessments</h4>
                  <p className="text-xs text-muted mb-md">Take quizzes to earn verification badges.</p>
                  <Link to="/dashboard/quizzes" className="btn btn-primary text-sm w-full">Browse Quizzes</Link>
                </div>

                <div className="card text-center flex-col items-center justify-center p-xl">
                  <Award size={32} className="text-blue-500 mb-sm" />
                  <h4 className="font-bold mb-xs">Coding Tasks</h4>
                  <p className="text-xs text-muted mb-md">Complete tasks for verified project-building evidence.</p>
                  <Link to="/dashboard/coding-tasks" className="btn btn-primary text-sm w-full" style={{ backgroundColor: '#3b82f6' }}>View Tasks</Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-md" style={{ backgroundColor: 'white', borderTop: '1px solid var(--border)', zIndex: 50, boxShadow: '0 -4px 12px rgba(0,0,0,0.05)' }}>
        <div className="max-w-7xl mx-auto flex justify-end gap-md pr-xl">
          <Link to="/dashboard/profile" className="btn btn-secondary">
            <Eye size={18} /> Preview Profile
          </Link>
          <button onClick={(e) => {
            const originalHTML = e.currentTarget.innerHTML;
            e.currentTarget.innerHTML = '<span style="display:flex;align-items:center;gap:4px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Saved!</span>';
            setTimeout(() => { e.currentTarget.innerHTML = originalHTML; }, 2000);
          }} className="btn text-primary" style={{ border: '1px solid var(--primary)', backgroundColor: 'transparent' }}>
            <Save size={18} /> Save Changes
          </button>
          <Link to="/dashboard/profile" className="btn btn-primary">
            Save & View Profile
          </Link>
        </div>
      </div>

    </div>
  );
}

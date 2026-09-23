import React, { useState } from 'react';
import { Plus, Briefcase, MapPin, Users, Check } from 'lucide-react';
import { mockJobs } from '../../data/mockRecruiterData';

export default function RecruiterJobs() {
  const [jobs, setJobs] = useState(mockJobs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newJob, setNewJob] = useState({ title: '', type: 'Full-time', location: '', requiredSkills: '' });

  const handleAddJob = (e) => {
    e.preventDefault();
    const jobToAdd = {
      id: Date.now(),
      title: newJob.title,
      type: newJob.type,
      location: newJob.location,
      requiredSkills: newJob.requiredSkills.split(',').map(s => s.trim()),
      status: 'Active',
      applicants: 0
    };
    setJobs([jobToAdd, ...jobs]);
    setIsModalOpen(false);
    setNewJob({ title: '', type: 'Full-time', location: '', requiredSkills: '' });
  };

  return (
    <div className="flex-col gap-lg animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <div className="flex items-center justify-between flex-wrap gap-md">
        <div>
          <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Jobs & Opportunities</h1>
          <p className="text-muted">Manage your active listings and track applicants.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
          <Plus size={20} /> Post New Job
        </button>
      </div>

      <div className="grid gap-md">
        {jobs.map(job => (
          <div key={job.id} className="card flex items-center justify-between flex-wrap gap-md" style={{ padding: '1.5rem' }}>
            <div className="flex-col gap-sm">
              <h3 className="h4">{job.title}</h3>
              <div className="flex items-center gap-md text-sm text-muted">
                <span className="flex items-center gap-xs"><Briefcase size={16} /> {job.type}</span>
                <span className="flex items-center gap-xs"><MapPin size={16} /> {job.location}</span>
                <span className="flex items-center gap-xs"><Users size={16} /> {job.applicants} Applicants</span>
              </div>
              <div className="flex flex-wrap gap-sm mt-sm">
                {job.requiredSkills.map((skill, idx) => (
                  <span key={idx} className="badge" style={{ backgroundColor: 'var(--bg-tertiary)' }}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-sm">
              <button className="btn btn-secondary text-sm">View Applicants</button>
              <button className="btn text-sm" style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}>Close Job</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="card animate-fade-in" style={{ width: '450px', maxWidth: '90%' }}>
            <h3 className="h4 font-bold mb-md">Post a New Job</h3>
            <form onSubmit={handleAddJob} className="flex-col gap-md">
              <div>
                <label className="text-sm font-semibold block mb-1">Job Title</label>
                <input 
                  type="text" 
                  required
                  className="input-field" 
                  style={{ width: '100%' }}
                  value={newJob.title} 
                  onChange={e => setNewJob({...newJob, title: e.target.value})} 
                  placeholder="e.g. Senior Frontend Engineer" 
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">Employment Type</label>
                <select 
                  className="input-field" 
                  style={{ width: '100%' }}
                  value={newJob.type} 
                  onChange={e => setNewJob({...newJob, type: e.target.value})}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">Location</label>
                <input 
                  type="text" 
                  required
                  className="input-field" 
                  style={{ width: '100%' }}
                  value={newJob.location} 
                  onChange={e => setNewJob({...newJob, location: e.target.value})} 
                  placeholder="e.g. Remote, Bangalore, New York" 
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">Required Skills (Comma separated)</label>
                <input 
                  type="text" 
                  required
                  className="input-field" 
                  style={{ width: '100%' }}
                  value={newJob.requiredSkills} 
                  onChange={e => setNewJob({...newJob, requiredSkills: e.target.value})} 
                  placeholder="e.g. React, Node.js, AWS" 
                />
              </div>
              <div className="flex items-center justify-end gap-sm mt-md">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">Cancel</button>
                <button type="submit" className="btn btn-primary"><Check size={16} /> Post Job</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

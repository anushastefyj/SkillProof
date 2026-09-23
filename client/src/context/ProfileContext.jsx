import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  // --- Personal Info ---
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Anusha Stefy J',
    title: 'Full Stack Developer',
    email: 'anusha@example.com',
    phone: '+91 98765 43210',
    location: 'Andhra Pradesh, India',
    portfolio: '',
    bio: 'AI & Data Science student interested in Java, React, backend development and building practical software projects.',
    linkedin: '',
    github: ''
  });

  // --- Career Info ---
  const [careerInfo, setCareerInfo] = useState({
    objective: '',
    preferredRole: '',
    technologies: '',
    workTypes: []
  });

  // --- Skills ---
  const [skills, setSkills] = useState([
    { id: 1, name: 'Java', level: 'Advanced', category: 'Programming Language', verified: true, projects: 3, tasks: 42, score: 87, github: true },
    { id: 2, name: 'React', level: 'Intermediate', category: 'Frontend', verified: true, projects: 2, tasks: 25, score: 81, github: false },
    { id: 3, name: 'SQL', level: 'Intermediate', category: 'Database', verified: true, projects: 1, tasks: 12, score: 75, github: false },
  ]);

  // --- Education ---
  const [educationList, setEducationList] = useState([
    { id: 1, degree: 'B.Tech — AI & Data Science', institution: 'Mother Theresa Institute of Engineering and Technology', year: '2024–2027', cgpa: '8.0' },
    { id: 2, degree: 'Diploma — ECE', institution: 'Technical Institute', year: '2020–2023', cgpa: '' }
  ]);

  // --- Experience ---
  const [experienceList, setExperienceList] = useState([
    { id: 1, role: 'Backend Developer Intern', company: 'Tech Solutions Inc. • Internship', duration: 'June 2025 – Present', location: 'Remote', responsibilities: ['Developed REST APIs using Node.js and Express.', 'Optimized database queries in MongoDB reducing response time by 20%.'], technologies: ['Node.js', 'MongoDB', 'Express'] }
  ]);

  // --- Projects ---
  const [projectsList, setProjectsList] = useState([
    { id: 1, name: 'Electronic Voting System', role: 'Frontend + Backend Developer', description: 'A secure and scalable electronic voting platform built to handle high-traffic elections ensuring data integrity.', duration: '3 months', teamSize: '4', technologies: ['React', 'Spring Boot', 'MySQL'], links: ['GitHub Repository', 'Live Demo'], featured: true }
  ]);

  // --- Certifications ---
  const [certificationsList, setCertificationsList] = useState([
    { id: 1, name: 'Data Science Essentials with Python', issuer: 'Cisco Networking Academy', date: 'Jan 2025', credentialId: '123456789' },
    { id: 2, name: 'Cloud Computing', issuer: 'CODTECH', date: 'Nov 2024', credentialId: '' }
  ]);

  // --- Achievements ---
  const [achievementsList, setAchievementsList] = useState([
    { id: 1, title: '1st Prize — Technical Symposium', organization: 'Kuppam Engineering & Technology', date: 'March 2025' }
  ]);


  // Value provided to context consumers
  const value = {
    personalInfo, setPersonalInfo,
    careerInfo, setCareerInfo,
    skills, setSkills,
    educationList, setEducationList,
    experienceList, setExperienceList,
    projectsList, setProjectsList,
    certificationsList, setCertificationsList,
    achievementsList, setAchievementsList
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

export const mockStudents = [
  {
    id: 1040,
    name: 'Anusha Stefy J',
    title: 'Full Stack Developer',
    location: 'Andhra Pradesh, India',
    email: 'anusha@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Anusha+Stefy+J&background=00b894&color=fff',
    score: 92,
    skills: ['React', 'Java', 'MongoDB', 'Node.js'],
    evidence: [
      { id: 1, type: 'Project', title: 'Employee Payroll System', verified: true },
      { id: 2, type: 'Certificate', title: 'AWS Cloud Practitioner', verified: true }
    ],
    github: 'anushastefyj'
  },
  {
    id: 1041,
    name: 'Priya Sharma',
    title: 'Frontend Engineer',
    location: 'Bangalore, India',
    email: 'priya@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=3b82f6&color=fff',
    score: 85,
    skills: ['React', 'TypeScript', 'CSS', 'Figma'],
    evidence: [
      { id: 3, type: 'Project', title: 'E-commerce Dashboard', verified: true }
    ],
    github: 'priyasharma'
  },
  {
    id: 1042,
    name: 'Rahul Verma',
    title: 'Backend Developer',
    location: 'Mumbai, India',
    email: 'rahul@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=f59e0b&color=fff',
    score: 88,
    skills: ['Java', 'Spring Boot', 'SQL', 'Docker'],
    evidence: [
      { id: 4, type: 'Project', title: 'Student Management API', verified: true },
      { id: 5, type: 'Quiz', title: 'Advanced Java Concepts', verified: true }
    ],
    github: 'rahulv'
  }
];

export const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    requiredSkills: ['React', 'JavaScript', 'CSS'],
    status: 'Active',
    applicants: 12
  },
  {
    id: 2,
    title: 'Java Backend Engineer',
    type: 'Full-time',
    location: 'Bangalore, India',
    requiredSkills: ['Java', 'Spring Boot', 'SQL'],
    status: 'Active',
    applicants: 8
  }
];

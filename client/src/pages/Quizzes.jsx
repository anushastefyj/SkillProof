import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, Loader2 } from 'lucide-react';
import { generateQuiz } from '../utils/api';

const SKILLS = [
  "Java", "Python", "C", "JavaScript", "HTML", "CSS", "React.js", "Vite",
  "Spring Boot", "REST APIs", "Node.js", "Express.js", "MySQL", "MongoDB",
  "Git", "GitHub", "VS Code", "Eclipse/STS", "Postman", "OOP", 
  "Data Structures & Algorithms", "DBMS", "SQL", "Python for Data Science",
  "Machine Learning Basics", "Generative AI Basics", "Cloud Computing Basics",
  "AWS Basics", "Full-Stack Web Development", "API Integration", 
  "CRUD Operations", "Authentication & Authorization"
];

export default function Quizzes() {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  useEffect(() => {
    let timer;
    if (quizQuestions && !isFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isFinished) {
      setIsFinished(true);
    }
    return () => clearInterval(timer);
  }, [quizQuestions, isFinished, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleNext = () => {
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setSelectedSkill('');
    setQuizQuestions(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsFinished(false);
    setScore(0);
    setTimeLeft(1800);
  };

  const handleSkillSelect = async (skill) => {
    setSelectedSkill(skill);
    setIsLoading(true);
    try {
      const data = await generateQuiz(skill);
      setQuizQuestions(data);
      setTimeLeft(1800); // Start timer only when data is loaded
    } catch (err) {
      console.error(err);
      alert('Failed to generate quiz. Please check if your API key is configured correctly.');
      setSelectedSkill('');
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedSkill || !quizQuestions) {
    return (
      <div className="flex-col gap-lg animate-fade-in">
        <div>
          <h1 className="h2" style={{ marginBottom: '0.25rem' }}>Select a Quiz</h1>
          <p className="text-muted">Choose a skill to test your knowledge and earn points!</p>
        </div>
        <div className="card flex-col gap-md" style={{ maxWidth: '600px' }}>
          <label className="text-sm font-semibold" style={{ color: '#1E293B' }}>Available Skills</label>
          <select 
            className="input-field" 
            style={{ padding: '0.875rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', backgroundColor: 'white' }}
            onChange={(e) => handleSkillSelect(e.target.value)}
            value={selectedSkill}
            disabled={isLoading}
          >
            <option value="" disabled>Select Skill</option>
            {SKILLS.map(skill => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>
          {isLoading && (
            <div className="flex-col items-center justify-center py-lg animate-fade-in gap-sm">
              <Loader2 size={32} className="animate-spin text-primary" />
              <p className="font-semibold text-primary">Generating 30 hard questions with AI...</p>
              <p className="text-sm text-muted">This may take 10-20 seconds.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="flex-col gap-lg animate-fade-in items-center justify-center text-center py-xl">
        <h1 className="h2 text-primary mb-md">Quiz Completed!</h1>
        <p className="text-lg mb-lg">You scored {score} out of {quizQuestions.length}.</p>
        <button onClick={resetQuiz} className="btn btn-primary" style={{ padding: '0.75rem 2.5rem' }}>Take Another Quiz</button>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="flex-col gap-lg animate-fade-in">
      {/* Quiz Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="h2" style={{ marginBottom: '0.25rem' }}>{selectedSkill} Quiz</h1>
          <p className="text-muted">Test your knowledge and earn points!</p>
        </div>
        <div className={`flex items-center gap-sm font-semibold ${timeLeft < 300 ? 'text-error' : 'text-warning'}`}>
          <Clock size={20} />
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px' }}>
        {/* Progress */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary">Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
        </div>
        <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden', marginBottom: '2rem' }}>
          <div style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`, height: '100%', backgroundColor: 'var(--primary)' }}></div>
        </div>

        {/* Question Area */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="h4" style={{ lineHeight: 1.5 }}>
            {currentQuestion.question}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="flex-col gap-md" style={{ marginBottom: '3rem' }}>
          {currentQuestion.options.map(option => (
            <button
              key={option.id}
              onClick={() => setSelectedAnswer(option.id)}
              className="flex items-center gap-md"
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                border: selectedAnswer === option.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: selectedAnswer === option.id ? 'var(--sidebar-active-bg)' : 'white',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                border: selectedAnswer === option.id ? 'none' : '1px solid var(--border)',
                backgroundColor: selectedAnswer === option.id ? 'var(--primary)' : 'transparent',
                color: selectedAnswer === option.id ? 'white' : 'var(--text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'semibold', fontSize: '0.875rem'
              }}>
                {selectedAnswer === option.id ? <CheckCircle2 size={16} /> : option.id}
              </div>
              <span style={{ fontWeight: selectedAnswer === option.id ? '500' : 'normal', color: selectedAnswer === option.id ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                {option.text}
              </span>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button 
            className="btn btn-secondary" 
            onClick={resetQuiz}
          >
            Quit
          </button>
          <button 
            className="btn btn-primary" 
            style={{ padding: '0.75rem 2.5rem' }} 
            disabled={!selectedAnswer}
            onClick={handleNext}
          >
            {currentQuestionIndex === quizQuestions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

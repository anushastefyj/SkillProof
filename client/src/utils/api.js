import axios from 'axios';

const api = axios.create({
  baseURL: 'https://skillproof-u94g.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to attach the auth token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const generateQuiz = async (skill) => {
  const response = await api.post('/api/quizzes/generate', { skill });
  return response.data;
};

export default api;

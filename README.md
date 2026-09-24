# SkillProof

SkillProof is a full-stack web application designed to help students build and showcase verified technical skills through projects, coding tasks, quizzes, GitHub activity, and other forms of evidence.

## Live Demo

**Frontend:**
`https://your-skillproof-frontend.vercel.app`

**Backend API:**
`https://skillproof-u94g.onrender.com`

**GitHub Repository:**
`https://github.com/anushastefyj/SkillProof`

## Overview

SkillProof provides a centralized platform where students can present practical evidence of their technical abilities.

Instead of relying only on resumes or certificates, users can build a skill profile supported by projects, coding activities, assessments, and other verifiable evidence.

## Key Features

* User registration and authentication
* JWT-based authentication
* Student profile management
* Technical skill management
* Project portfolio
* Coding task tracking
* Quiz and assessment support
* GitHub project integration
* Skill evidence management
* REST API architecture
* Responsive user interface

## Technology Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* REST APIs
* JWT
* bcrypt

### Database

* MongoDB
* MongoDB Atlas

### Deployment

* Vercel — Frontend
* Render — Backend
* MongoDB Atlas — Database

## Architecture

```text
                   SkillProof
                       |
          +------------+------------+
          |                         |
      Frontend                  Backend
     React + Vite           Node.js + Express
          |                         |
          |       REST API          |
          +----------->-------------+
                                    |
                                    v
                              MongoDB Atlas
```

## Project Structure

```text
SkillProof/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## Local Development

### Clone the Repository

```bash
git clone https://github.com/anushastefyj/SkillProof.git
cd SkillProof
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

### Backend Setup

Open a new terminal:

```bash
cd server
npm install
npm start
```

Backend:

```text
http://localhost:5001
```

## Environment Configuration

Create a `.env` file inside the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5001
```

Never commit `.env` files or production credentials to GitHub.

## Production Backend

The SkillProof backend is deployed on Render:

```text
https://skillproof-u94g.onrender.com
```

The production frontend communicates with the deployed backend through REST APIs.

## Authentication Flow

```text
User
  |
  v
React Frontend
  |
  v
Login / Register
  |
  v
Express API
  |
  v
MongoDB
  |
  v
JWT Token
  |
  v
Authenticated Requests
```

## Security

* JWT-based authentication
* Password hashing using bcrypt
* Environment-based configuration
* Protected API routes
* Database credentials kept outside source control
* Production secrets managed through deployment environment variables

## Deployment

### Frontend

The frontend is deployed using Vercel.

```text
https://your-skillproof-frontend.vercel.app
```

### Backend

The backend is deployed using Render.

```text
https://skillproof-u94g.onrender.com
```

### Database

MongoDB Atlas provides the production database infrastructure.

## Future Enhancements

* AI-powered skill verification
* Automated GitHub activity analysis
* AI resume analysis
* Job recommendation system
* Recruiter dashboard
* Skill-based candidate matching
* Advanced analytics and reporting

## Developer

**Anusha Stefy J**

B.Tech in Artificial Intelligence and Data Science

GitHub: `anushastefyj`

## License

This project is developed for educational and portfolio purposes.

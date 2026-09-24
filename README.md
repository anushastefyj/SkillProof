# SkillProof

### Build Skills. Showcase Evidence. Stand Out.

SkillProof is a full-stack web application that enables students to build a professional technical profile by showcasing projects, skills, coding activities, assessments, and other forms of practical evidence.

The platform focuses on presenting **real evidence of technical capabilities** rather than relying solely on resumes and certificates.

## Live Application

| Resource | Access |
|---|---|
| **Live Application** | [Visit SkillProof](https://skillproof-peach.vercel.app/) |
| **Backend API** | [View Backend](https://skillproof-u94g.onrender.com) |
| **Source Code** | [GitHub Repository](https://github.com/anushastefyj/SkillProof) |

> Replace `YOUR-FRONTEND-URL.vercel.app` with the actual Vercel deployment URL.

## Overview

SkillProof provides students with a centralized platform to collect, organize, and showcase evidence of their technical skills.

Users can create a profile, add their technical skills, showcase projects, track coding activities, complete assessments, and build a stronger digital portfolio.

### Core Objectives

* Showcase practical technical skills
* Provide evidence-based skill representation
* Organize projects and achievements
* Support skill assessment and verification
* Create a professional digital profile
* Help students present their capabilities to recruiters

## Key Features

### Authentication

* User registration and login
* JWT-based authentication
* Secure password hashing
* Protected API routes

### Skill Management

* Add and manage technical skills
* Organize skills within a user profile
* Track skill-related evidence

### Project Portfolio

* Add and showcase projects
* Provide project descriptions
* Connect projects with technical skills
* Present practical development experience

### Evidence Management

* Coding task evidence
* Project evidence
* Assessment and quiz evidence
* GitHub-based project references

### User Profile

* Professional student profile
* Technical skill overview
* Project showcase
* Achievement and evidence tracking

## Technology Stack

| Layer                 | Technologies                            |
| --------------------- | --------------------------------------- |
| **Frontend**          | React.js, Vite, JavaScript, HTML5, CSS3 |
| **API Communication** | Axios                                   |
| **Backend**           | Node.js, Express.js                     |
| **Authentication**    | JWT, bcrypt                             |
| **Database**          | MongoDB, MongoDB Atlas                  |
| **Deployment**        | Vercel, Render                          |

## System Architecture

```text
                         SkillProof
                             |
                             v
                    React + Vite Frontend
                             |
                         Axios / REST
                             |
                             v
                    Node.js + Express
                             |
                    Authentication Layer
                             |
                             v
                       MongoDB Atlas
```

## Project Structure

```text
SkillProof/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
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

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git
* MongoDB Atlas account

### Clone the Repository

```bash
git clone https://github.com/anushastefyj/SkillProof.git
cd SkillProof
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5001
```

Start the backend:

```bash
npm start
```

Backend:

```text
http://localhost:5001
```

### Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

## Environment Configuration

Sensitive information is stored using environment variables.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5001
```

The `.env` file must not be committed to the repository.

Recommended `.gitignore` entries:

```text
.env
node_modules/
```

## Production Deployment

### Frontend

The frontend is deployed using Vercel.

[Visit SkillProof](https://YOUR-FRONTEND-URL.vercel.app)

### Backend

The backend is deployed using Render.

[View Backend API](https://skillproof-u94g.onrender.com)

### Database

The application uses MongoDB Atlas for cloud database management.

The SkillProof application uses a dedicated database within the existing MongoDB Atlas cluster.

## Authentication Flow

```text
User
  |
  v
Login / Register
  |
  v
React Frontend
  |
  v
Express REST API
  |
  v
Validate Credentials
  |
  v
Generate JWT
  |
  v
Authenticated User
```

## Security

SkillProof follows basic application security practices:

* Password hashing with bcrypt
* JWT-based authentication
* Protected backend routes
* Environment-based configuration
* Database credentials stored outside source code
* Production secrets managed through deployment environment variables
* `.env` excluded from version control

## Future Enhancements

* AI-powered skill verification
* Automated GitHub activity analysis
* AI resume analysis
* Personalized job recommendations
* Recruiter dashboard
* Skill-based candidate matching
* Advanced skill analytics
* Automated project evaluation

## Developer

### Anusha Stefy J

B.Tech in Artificial Intelligence and Data Science

[GitHub Profile](https://github.com/anushastefyj)

## License

This project is developed for educational, portfolio, and demonstration purposes.

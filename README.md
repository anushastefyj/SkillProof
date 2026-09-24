# SkillProof

### Build Skills. Showcase Evidence. Stand Out.

SkillProof is a full-stack web application designed to help students build a stronger technical profile by showcasing their skills through projects, coding activities, quizzes, GitHub contributions, and other forms of evidence.

Instead of simply listing skills on a resume, SkillProof provides a structured way to present practical evidence behind those skills.

---
<img width="1917" height="912" alt="image" src="https://github.com/user-attachments/assets/547ea8db-90c7-41fd-9df1-79016e70007b" />

<img width="1901" height="912" alt="image" src="https://github.com/user-attachments/assets/74bce62e-44ff-446b-94e2-682f59cede18" />

<img width="1896" height="910" alt="image" src="https://github.com/user-attachments/assets/c86c3b90-18ea-4d68-9731-c6a45937eb27" />

<img width="1901" height="915" alt="image" src="https://github.com/user-attachments/assets/57d73b20-ed59-49d6-9bfa-9af0b05b9874" />

## Live Application

| Resource              | Link                                                           |
| --------------------- | -------------------------------------------------------------- |
| **Live Application**  | [Visit SkillProof](https://skillproof-peach.vercel.app/)       |
| **Backend API**       | [View Backend](https://skillproof-u94g.onrender.com)           |
| **GitHub Repository** | [View Source Code](https://github.com/anushastefyj/SkillProof) |

---

## Overview

SkillProof is built around the idea of **evidence-based skill representation**.

Students can create a technical profile and showcase evidence such as:

* Technical skills
* Projects
* Coding tasks
* Quiz performance
* GitHub activity
* Project links
* Skill-related achievements

The application provides a centralized profile where users can present their technical abilities in a structured and professional format.

---

## Key Features

### Authentication

* User registration
* User login
* JWT-based authentication
* Password hashing using bcrypt
* Protected application routes
* Role-based user structure

### Skills

* Add technical skills
* Display skills on the user profile
* Organize technical capabilities in one place

### Projects

* Add projects to the profile
* Showcase project descriptions
* Add project links
* Present practical development experience

### Evidence

Users can build evidence around their technical skills through:

* Projects
* Coding activities
* Quiz results
* GitHub activity

### Profile

* Professional technical profile
* Skills overview
* Project showcase
* Evidence-based presentation

### Responsive Interface

The frontend is designed using React and modern CSS to provide a clean and responsive experience across different screen sizes.

---

## Technology Stack

| Layer                | Technology    |
| -------------------- | ------------- |
| Frontend             | React.js      |
| Build Tool           | Vite          |
| Programming Language | JavaScript    |
| UI                   | HTML5, CSS3   |
| HTTP Client          | Axios         |
| Backend              | Node.js       |
| Web Framework        | Express.js    |
| Authentication       | JWT           |
| Password Security    | bcrypt        |
| Database             | MongoDB       |
| ODM                  | Mongoose      |
| Database Hosting     | MongoDB Atlas |
| Frontend Deployment  | Vercel        |
| Backend Deployment   | Render        |
| Version Control      | Git & GitHub  |

---

## System Architecture

```text
                    SkillProof
                        |
              +---------+---------+
              |                   |
          Frontend              Backend
          React + Vite          Node.js
              |                Express.js
              |                   |
              +------ Axios ------+
                                  |
                              REST APIs
                                  |
                             JWT Auth
                                  |
                                  v
                          MongoDB / Mongoose
                                  |
                                  v
                           MongoDB Atlas
```

### Production Architecture

```text
User
  |
  v
Vercel
React + Vite
  |
  | HTTPS / REST API
  v
Render
Node.js + Express
  |
  | Mongoose
  v
MongoDB Atlas
```

---

## Project Structure

```text
SkillProof/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Authentication Flow

SkillProof uses JWT-based authentication.

```text
User
 |
 | Register / Login
 v
React Frontend
 |
 | Axios
 v
Express API
 |
 | Validate credentials
 v
MongoDB
 |
 | User verified
 v
JWT Token
 |
 v
Frontend
 |
 | Authorization
 v
Protected APIs
```

Passwords are securely hashed before being stored in the database.

---

## API Structure

The backend follows a REST API architecture.

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth
```

### Example Production API

```text
https://skillproof-u94g.onrender.com/api/auth/register
```

```text
https://skillproof-u94g.onrender.com/api/auth/login
```

The frontend communicates with these APIs using Axios.

---

## Local Development

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git
* MongoDB Atlas account
* VS Code

---

### 1. Clone the Repository

```bash
git clone https://github.com/anushastefyj/SkillProof.git
```

Navigate into the project:

```bash
cd SkillProof
```

---

### 2. Setup Backend

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

Never commit the `.env` file to GitHub.

---

### 3. Start Backend

```bash
npm start
```

The backend will run locally on:

```text
http://localhost:5001
```

---

### 4. Setup Frontend

Open another terminal:

```bash
cd client
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## Environment Variables

### Backend

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5001
```

### Frontend

If environment-based API configuration is used:

```env
VITE_API_URL=https://skillproof-u94g.onrender.com
```

Environment files containing secrets should never be committed to GitHub.

---

## Deployment

### Frontend — Vercel

The React frontend is deployed using Vercel.

Production URL:

https://skillproof-peach.vercel.app/

The frontend is connected to the production backend hosted on Render.

### Backend — Render

The Express backend is deployed using Render.

Production backend:

https://skillproof-u94g.onrender.com

### Database — MongoDB Atlas

MongoDB Atlas is used as the cloud database for storing application data.

---

## Security

SkillProof implements several basic security practices:

* JWT authentication
* Password hashing using bcrypt
* Protected API routes
* Environment variables for secrets
* MongoDB Atlas for managed database hosting
* CORS configuration
* Secrets excluded from Git tracking

Sensitive credentials such as database passwords and JWT secrets should always remain in environment variables.

---

## Git Workflow

Typical development workflow:

```bash
git status
git add .
git commit -m "Describe your changes"
git push origin main
```

The production frontend is connected to the `main` branch, so new changes can trigger a Vercel deployment.

---

## Future Enhancements

Possible future improvements include:

* GitHub API integration
* Automated GitHub activity analysis
* Coding challenge integration
* Skill-specific quizzes
* Recruiter dashboard
* Advanced skill evidence cards
* Skill verification badges
* Profile sharing
* Analytics dashboard
* Resume generation
* More detailed project analytics

---

## Learning Outcomes

This project provides practical experience with:

* React.js
* Vite
* JavaScript
* Axios
* Node.js
* Express.js
* REST API development
* MongoDB
* Mongoose
* JWT authentication
* bcrypt
* Git and GitHub
* Vercel deployment
* Render deployment
* MongoDB Atlas
* Frontend-backend integration

---

## Author

### Anusha Stefy J

B.Tech — Artificial Intelligence & Data Science

GitHub: [anushastefyj](https://github.com/anushastefyj)

---

## License

This project is developed for educational, portfolio, and demonstration purposes.

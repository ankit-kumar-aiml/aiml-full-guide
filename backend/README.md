# AI/ML Learning Platform - Backend API

Backend API for the 365-day AI/ML Learning Platform.

**Hosted by: Ankit Kumar**

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Setup Environment

```bash
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

### 3. Run Server

```bash
# Development
npm run dev

# Production
npm start
```

Server runs on `http://localhost:5000`

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| PUT | `/api/auth/profile` | Update profile |

### Progress

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/progress` | Get user progress |
| POST | `/api/progress/day/:dayNumber` | Update day progress |
| POST | `/api/progress/task` | Complete a task |
| GET | `/api/progress/export` | Export progress |
| POST | `/api/progress/import` | Import progress |
| GET | `/api/progress/stats` | Get statistics |

### Roadmap

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/roadmap/phases` | Get all phases |
| GET | `/api/roadmap/day/:dayNumber` | Get day content |
| GET | `/api/roadmap/phase/:phaseId` | Get phase days |
| GET | `/api/roadmap/interview/:topic` | Get interview Q&A |

### Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get user projects |
| GET | `/api/projects/templates` | Get project templates |
| POST | `/api/projects/submit` | Submit project |
| PUT | `/api/projects/:id/status` | Update status |

## 🔐 Authentication

All protected routes require JWT token in header:

```
Authorization: Bearer <token>
```

## 📝 Example Requests

### Register

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"123456"}'
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"123456"}'
```

### Get Progress

```bash
curl http://localhost:5000/api/progress \
  -H "Authorization: Bearer <token>"
```

### Complete Task

```bash
curl -X POST http://localhost:5000/api/progress/task \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"dayNumber":1,"taskId":"t1","completed":true}'
```

## 🗄️ Database Schema

### User
- name, email, password
- college, branch
- currentDay, streak
- totalStudyTime

### Progress
- userId (ref)
- days[] (dayNumber, completed, tasks[], studyTime)
- overallProgress, phaseProgress

### Project
- userId (ref)
- projectId, title, description
- githubUrl, liveUrl
- status, submittedAt

## 🚀 Deployment

### Render.com

1. Create new Web Service
2. Connect GitHub repo
3. Set environment variables
4. Deploy!

### Railway

```bash
railway login
railway init
railway up
```

## 📊 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Express Validator

## 📄 License

Free for educational purposes.

---

**Built for AI/ML Students**

Hosted by: **Ankit Kumar**

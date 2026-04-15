# Node.js Backend API - NextEdu

A comprehensive Node.js backend API for managing education platform features including user authentication, student management, and practice room functionality. This project demonstrates modern backend architecture with Express.js, MongoDB, RabbitMQ for async processing, and Docker containerization.

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Project Structure](#project-structure)
- [Running the Project](#running-the-project)
- [Docker Setup](#docker-setup)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Author](#author)

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB with Mongoose 9.4.1
- **Authentication**: JWT (JSON Web Tokens) 9.0.3
- **Password Hashing**: bcryptjs 3.0.3
- **Message Queue**: RabbitMQ (amqplib 1.0.3)
- **Job Queue**: BullMQ 5.73.5
- **Middleware**: CORS, body-parser
- **Environment**: dotenv 17.4.2
- **Development**: Nodemon 3.1.14
- **Containerization**: Docker & Docker Compose
- **Module System**: CommonJS

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas connection string)
- Docker & Docker Compose (optional, for containerization)
- RabbitMQ (or Docker)

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Node_BD
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🔐 Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
mongoURI=mongodb://localhost:27017/NextEdu
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
RABBITMQ_URL=amqp://localhost
```

**Environment Variables**:
- `PORT`: Server port (default: 5000)
- `mongoURI`: MongoDB connection string
- `NODE_ENV`: Environment (development/production)
- `JWT_SECRET`: Secret key for JWT token generation
- `RABBITMQ_URL`: RabbitMQ connection URL

## 📁 Project Structure

```
Node_BD/
├── controllers/              # Business logic for different features
│   ├── auth.controller.js    # Authentication logic
│   ├── student.controller.js # Student management
│   └── index.js
├── modals/                   # Database schemas
│   ├── User.model.js         # User schema
│   ├── student.modal.js      # Student schema
│   └── index.js
├── routers/                  # API routes
│   └── index.js
├── PracticeRoom/             # Practice room features
│   └── Aggregation.js        # MongoDB aggregation pipelines
├── index.js                  # Main entry point
├── mongoConnect.js           # MongoDB connection setup
├── rabbitmq.js              # RabbitMQ configuration
├── worker.js                # Background job worker
├── docker-compose.yml       # Docker services configuration
├── Dockerfile               # Docker image configuration
├── package.json             # Project dependencies
└── README.md               # This file
```

## 🚀 Running the Project

### Development Mode

```bash
npm start
```

The server will start on `http://localhost:5000` (or the PORT specified in .env)

### Production Mode

```bash
node index.js
```

### Using Nodemon (Auto-restart on file changes)

```bash
npm start
```

## 🐳 Docker Setup

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t node_bd:latest .

# Run the container
docker run -p 5000:5000 --env-file .env node_bd:latest
```

### Using Docker Compose

```bash
# Start all services (Node.js app, MongoDB, RabbitMQ)
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Student Endpoints
- `GET /api/student` - Get all students
- `POST /api/student` - Create a new student
- `GET /api/student/:id` - Get student by ID
- `PUT /api/student/:id` - Update student
- `DELETE /api/student/:id` - Delete student

### Practice Room
- Access practice room features at configured endpoints

## ✨ Features

- ✅ User Authentication with JWT
- ✅ Password Hashing with bcryptjs
- ✅ MongoDB Database Integration
- ✅ Student Management System
- ✅ Practice Room with MongoDB Aggregation
- ✅ Asynchronous Job Processing with RabbitMQ
- ✅ Background Worker Process
- ✅ CORS Support for cross-origin requests
- ✅ Environment-based Configuration
- ✅ Docker Containerization
- ✅ Error Handling & Validation

## 🔄 Background Jobs

The project includes a worker process for handling asynchronous tasks:

```bash
node worker.js
```

This enables:
- Background job processing
- RabbitMQ message queue handling
- Scalable async operations

## 📚 Dependencies Overview

| Package | Version | Purpose |
|---------|---------|---------|
| express | 5.2.1 | Web framework |
| mongoose | 9.4.1 | MongoDB ODM |
| jsonwebtoken | 9.0.3 | JWT authentication |
| bcryptjs | 3.0.3 | Password hashing |
| amqplib | 1.0.3 | RabbitMQ client |
| bullmq | 5.73.5 | Job queue |
| cors | 2.8.6 | Cross-origin requests |
| dotenv | 17.4.2 | Environment variables |
| nodemon | 3.1.14 | Auto-restart (dev) |

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check `mongoURI` in `.env` file
- Verify network connectivity if using MongoDB Atlas

### RabbitMQ Connection Error
- Ensure RabbitMQ service is running
- Check `RABBITMQ_URL` in `.env`
- Verify RabbitMQ port (default: 5672)

### Port Already in Use
- Change `PORT` in `.env` file
- Or kill the process using the port

## 📝 License

ISC

## 👤 Author

**Taufique Ali**

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Last Updated**: April 2026

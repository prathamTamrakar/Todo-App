# Todo Application Backend

A RESTful API backend for a Todo application built with Node.js, Express, and MongoDB. This backend provides complete CRUD operations for managing todos with a focus on simplicity and reliability.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)

## Features
- ✅ Create, Read, Update, and Delete todos
- ✅ MongoDB persistence with Mongoose ODM
- ✅ CORS support for cross-origin requests
- ✅ Error handling and validation
- ✅ Timestamps for todo creation and updates
- ✅ Mark todos as completed or incomplete

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB with Mongoose 9.2.1
- **CORS**: cors 2.8.6
- **Environment Management**: dotenv 17.2.4

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn

### Steps
1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd Todo-Application/Backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### Environment Setup
Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGO_URL=mongodb://localhost:27017
```

**For MongoDB Atlas:**
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net
PORT=3000
```

## Usage

### Start the Server
```bash
npm start
```

The server will start on the PORT specified in your `.env` file (default: 3000) and connect to MongoDB.

Expected output:
```
MongoDB Connected!
Server running on port 3000
```

## API Endpoints

All endpoints are prefixed with `/api/todos`

### 1. Create a Todo
**POST** `/api/todos`

Request body:
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false
}
```

Response (201 Created):
```json
{
  "message": "Todo Added Successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "completed": false,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### 2. Get All Todos
**GET** `/api/todos`

Response (200 OK):
```json
{
  "message": "Todos fetched successfully",
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Buy groceries",
      "description": "Milk, eggs, bread",
      "completed": false,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### 3. Update a Todo
**PUT** `/api/todos/:id`

Request body:
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread, butter",
  "completed": true
}
```

Response (200 OK):
```json
{
  "message": "Todo updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread, butter",
    "completed": true,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:35:00.000Z"
  }
}
```

### 4. Delete a Todo
**DELETE** `/api/todos/:id`

Response (200 OK):
```json
{
  "message": "Todo deleted successfully"
}
```

## Error Responses

### Bad Request (400)
```json
{
  "message": "Title is required"
}
```

### Not Found (404)
```json
{
  "message": "Todo not found"
}
```

### Server Error (500)
```json
{
  "message": "Internal server error details"
}
```

## Project Structure
```
Backend/
├── controllers/
│   └── todo.js           # Todo request handlers
├── models/
│   └── todo.js           # Todo schema definition
├── routes/
│   └── todo.js           # API routes
├── db.js                 # MongoDB connection
├── index.js              # Express app setup and server entry point
├── package.json          # Project dependencies
└── README.md             # Documentation
```

## Environment Variables
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `MONGO_URL` | MongoDB connection string | mongodb://localhost:27017 |

## Todo Schema
```javascript
{
  title: String (required),
  description: String (optional),
  completed: Boolean (default: false),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```



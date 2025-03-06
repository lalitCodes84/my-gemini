# MyGemini Application

## 📌 Overview

MyGemini is an AI-powered chatbot application that allows users to register, log in, and interact with the Gemini AI model to get intelligent responses. This application is built using **React (frontend), Node.js (backend), MongoDB (database), and JWT for authentication**.

## 🚀 Features

- **User Registration & Login** (JWT Authentication)
- **Protected Routes** (Requires Bearer Token)
- **Ask Gemini AI** and receive responses
- **CRUD Operations** on Users

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/mygemini.git
cd mygemini
```

### 2️⃣ Install Dependencies

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd frontend
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file inside the `backend` folder and add the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server

```sh
npm run dev
```

### 5️⃣ Start the Frontend

```sh
npm start
```

---

## 🔹 API Documentation

### 1️⃣ User Authentication

#### 📌 Register a User

- **Endpoint:** `POST /user/register`
- **Request Body:**

```json
{
  "name": "Abhishek bharti",
  "email": "abhishek1234@gmail.com",
  "password": "Abhishek1234",
  "phone": 8429922997,
  "age": 25,
  "gender": "Male"
}
```

- **Response:**

```json
{
  "message": "User registered successfully"
}
```

#### 📌 Login a User

- **Endpoint:** `POST /user/login`
- **Request Body:**

```json
{
  "email": "lalit@example.com",
  "password": "password123"
}
```

- **Response:**

```json
{
  "token": "your_jwt_token",
  "user": {
    "id": "65fa3e9b38f16d0012345678",
    "name": "Lalit Sharma",
    "email": "lalit@example.com"
  }
}
```

#### 📌 Get All Users (Protected)

- **Endpoint:** `GET /user`
- **Headers:** `{ Authorization: "Bearer <your_jwt_token>" }`
- **Response:**

```json
[
  {
    "id": "65fa3e9b38f16d0012345678",
    "name": "Lalit Sharma",
    "email": "lalit@example.com"
  }
]
```

### 2️⃣ Gemini AI Chat

#### 📌 Ask a Question

- **Endpoint:** `POST /api/gemini/ask`
- **Headers:** `{ Authorization: "Bearer <your_jwt_token>" }`
- **Request Body:**

```json
{
  "query": "What is the capital of India?"
}
```

- **Response:**

```json
{
  "response": "The capital of India is New Delhi."
}
```

---

## 🔹 Common Errors

| Status Code | Message                               | Cause                      |
| ----------- | ------------------------------------- | -------------------------- |
| 400         | `"Invalid request data"`              | Missing fields in request  |
| 401         | `"Access denied. No token provided."` | Missing JWT Token          |
| 401         | `"Invalid or expired token."`         | Expired or incorrect token |
| 404         | `"User not found"`                    | Invalid user ID            |

---

## 🛠 Development

- **Backend:** `npm run dev`
- **Frontend:** `npm start`

## 📜 License

This project is open-source under the **MIT License**.

---

## 📧 Contact

If you have any questions, feel free to reach out:

- **Developer:** Lalit Sharma
- **Email:** vickysharma71za@gmail.com
- **GitHub:** https://github.com/lalitCodes84

---

🚀 **Enjoy coding with MyGemini!**
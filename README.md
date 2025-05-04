# 🍽️ Restraint Full-Stack Project

A modern, full-stack restaurant management and user interaction web application built with the MERN stack and styled using Tailwind CSS and DaisyUI. Authentication is handled securely using Firebase and JWT tokens.

## 🔥 Live Demo

[👉 Click here to view the live app](#) _(Replace with your live link)_

---

## 🛠️ Tech Stack

**Frontend:**

- React.js
- Tailwind CSS
- DaisyUI

**Backend:**

- Node.js
- Express.js
- MongoDB

**Authentication:**

- Firebase Authentication
- JSON Web Token (JWT)

---

## ✨ Features

- 🔐 **Secure Login & Registration** using Firebase and JWT
- 📋 **User Roles & Permissions** (admin/user)
- 🛒 **Order Management System**
- 📦 **Menu Management** with dynamic CRUD operations
- 🧾 **Real-Time Cart & Checkout**
- 📊 **Admin Dashboard** with analytics
- 💬 **Customer Feedback System**
- 📱 Fully Responsive UI with TailwindCSS + DaisyUI

---

## 🔐 Authentication Flow

1. User logs in or registers via Firebase Authentication.
2. Firebase issues an ID Token.
3. The frontend sends the token to the backend.
4. Backend verifies the token and issues a secure JWT for session validation.
5. Protected routes are only accessible with valid JWTs.

---

## 📁 Project Structure

/client # React Frontend (TailwindCSS + DaisyUI)
/server # Node.js + Express.js backend
.env # Environment variables

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Restraint-Full-stack-Project.git
cd Restraint-Full-stack-Project
2️⃣ Setup Frontend (React)

cd client
npm install
npm run dev
3️⃣ Setup Backend (Node.js + Express)

cd server
npm install
npm run start
4️⃣ Configure Environment Variables
Create a .env file in both /client and /server with the following:

.env (client)

VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
.env (server)

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
🧪 Test Credentials (Optional)

Admin:
Email: admin@example.com
Password: admin123

User:
Email: user@example.com
Password: user123
🧑‍💻 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

📄 License
This project is licensed under the MIT License.

💡 Acknowledgements
Firebase

MongoDB

React

Tailwind CSS

DaisyUI

JWT.io


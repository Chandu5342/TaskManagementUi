# Task Manager Frontend

This is the **frontend application** for the **Task Manager Project**, built using **React.js (Vite) and Tailwind CSS**.
It interacts with the backend API to handle user authentication, task management, and admin functionalities.

---

## ✨ Features

### **Authentication**

* User registration and login using JWT
* Persistent authentication using `localStorage`
* Protected routes accessible only to logged-in users

### **Task Management**

* Create tasks with title, description, priority, status, due date, and file attachments
* Edit and delete tasks
* View tasks in a responsive dashboard
* Tasks linked to the logged-in user

### **Admin Panel**

* Admin users can view all registered users
* Admin can manage user roles

### **UI / UX**

* Responsive design using Tailwind CSS
* Clean and modern layout
* Form validation and error messages
* Loading indicators for API requests

---

## 📁 Folder Structure

```
frontend/
│── public/
│── src/
│   ├── api/            → API files (auth.js, tasks.js, users.js)
│   ├── components/     → Shared components (Header, TaskCard, ProtectedRoute)
│   ├── context/        → React Context for authentication
│   ├── pages/          → App pages (Home, Login, Register, Dashboard, TaskForm, Admin/UsersList)
│   ├── utils/          → Validators and helper functions
│   ├── App.jsx         → Main app component
│   └── main.jsx        → Application entry point
│── .env                → Environment configuration
│── package.json
```

---

## 💻 Tech Stack

* **React.js (Vite)** – Frontend framework
* **React Router DOM** – Client-side routing
* **Axios** – HTTP requests
* **React Context API** – Global state for authentication
* **Tailwind CSS** – Styling and layout
* **JWT** – Token-based authentication

---

## 🔗 Backend Connection

* Update the API base URL inside `.env` file:

```env
API_URL=https://taskmanagementserver-d45z.onrender.com
```

* The frontend consumes the API endpoints documented in the backend README.

---

## 🧪 Test Accounts

| Email                                         | Password |
| --------------------------------------------- | -------- |
| [admin@gmail.com](mailto:admin@gmail.com) | 123456   |
| [chandu@gmail.com](mailto:chandu@gmail.com)   | 123456   |

---

## 🚀 Run Locally

```bash
git clone https://github.com/Chandu5342/TaskManagementUi.git
cd TaskManagementUi
npm install
npm run dev
```

* The app will run on: `http://localhost:5173`

---

## 🌍 Live Frontend

* [Task Manager Frontend (Vercel)]()

---

## 🖼️ Screenshots



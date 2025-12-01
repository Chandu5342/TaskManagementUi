# Task Manager Frontend

This is the **frontend application** for the **Task Manager Project**, built using **React.js (Vite) and Tailwind CSS**.
It interacts with the backend API to handle user authentication, task management, and admin functionalities.
Live Link : https://task-management-ui-drab.vercel.app
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

* [Task Manager Frontend (Vercel)](https://task-management-ui-drab.vercel.app/)

## Screenshots

  <img width="1366" height="768" alt="Screenshot (1858)" src="https://github.com/user-attachments/assets/f2c66b6c-a83a-4855-bee1-2f88da78b8a2" />


  <img width="1366" height="768" alt="Screenshot (1851)" src="https://github.com/user-attachments/assets/cc537f5b-f758-460f-8616-387ab50e1821" />


  <img width="1366" height="768" alt="Screenshot (1854)" src="https://github.com/user-attachments/assets/a9b99b99-9a02-438b-884f-e460973cb073" />

  <img width="1366" height="768" alt="Screenshot (1855)" src="https://github.com/user-attachments/assets/0f90195a-bd52-468b-b1dc-32f0a7d39564" />

  <img width="1366" height="768" alt="Screenshot (1856)" src="https://github.com/user-attachments/assets/52201727-a35e-4f0e-9fc4-e32fbca88d16" />

  <img width="1366" height="768" alt="Screenshot (1857)" src="https://github.com/user-attachments/assets/142130d0-ee77-4d2b-8ae2-3c8c45edd845" />


---





import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UsersList from "./pages/Admin/UsersList";
import TaskForm from "./pages/Tasks/TaskForm";

export default function App() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute><UsersList /></ProtectedRoute>} />
          <Route path="/task/create" element={<TaskForm />} />
          <Route path="/task/edit/:id" element={<TaskForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { getMyTasks, deleteTask } from "../api/tasks";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, [token]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getMyTasks(token);
      setTasks(data);
    } catch (err) {
      setError("Failed to load tasks");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteTask(taskId, token);
        fetchTasks();
      } catch (err) {
        setError("Failed to delete task");
        console.error(err);
      }
    }
  };

  if (loading) return <div className="text-center py-20">Loading tasks...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <button
          onClick={() => navigate("/task/create")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Create Task
        </button>
      </div>

      {/* TASK LIST */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={() => handleDeleteTask(task._id)}
              onEdit={() => navigate(`/task/edit/${task._id}`)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No tasks yet.
          </div>
        )}
      </div>
    </div>
  );
}

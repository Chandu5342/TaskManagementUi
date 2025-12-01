import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { createTask, updateTask, getTaskById } from "../../api/tasks";

export default function TaskForm() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams(); // id will exist only for edit

  const isEditMode = Boolean(id);

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "Pending",
    dueDate: "",
    documents: []
  });

  useEffect(() => {
    if (isEditMode) loadTask();
  }, []);

  const loadTask = async () => {
    try {
      const task = await getTaskById(id, token);

      setFormData({
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        dueDate: task.dueDate ? task.dueDate.substr(0, 10) : "",
        documents: []
      });
    } catch (err) {
      setError("Failed to load task");
      console.error(err);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      documents: Array.from(e.target.files)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await updateTask(id, formData, token);
      } else {
        await createTask(formData, token);
      }

      navigate("/dashboard");
    } catch (err) {
      setError("Failed to save task");
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow rounded-lg">

      <h1 className="text-2xl font-bold mb-4">
        {isEditMode ? "Edit Task" : "Create Task"}
      </h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleFormChange}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />

        <textarea
          name="description"
          placeholder="Task Description"
          rows="3"
          value={formData.description}
          onChange={handleFormChange}
          className="w-full px-4 py-2 border rounded-lg"
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            name="priority"
            value={formData.priority}
            onChange={handleFormChange}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleFormChange}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="Pending">Pending</option>
            <option value="InProgress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleFormChange}
          className="px-4 py-2 border rounded-lg w-full"
        />

        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.txt,.xlsx"
          onChange={handleFileChange}
          className="px-4 py-2 border rounded-lg w-full"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          {isEditMode ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
}

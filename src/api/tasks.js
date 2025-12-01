import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

// Get tasks created by current user (or all for admin)
export const getMyTasks = async (token, all = false) => {
  const url = `${API_URL}/mytasks${all ? "?all=true" : ""}`;
  const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

// Get tasks assigned to current user
export const getAssignedTasks = async (token) => {
  const res = await axios.get(`${API_URL}/assigned`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

// Get task by ID
export const getTaskById = async (id, token) => {
  const res = await axios.get(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

// Create a new task
export const createTask = async (taskData, token) => {
  const formData = new FormData();
  Object.keys(taskData).forEach((key) => {
    if (key === "documents") {
      taskData.documents.forEach((file) => formData.append("documents", file));
    } else {
      formData.append(key, taskData[key]);
    }
  });

  const res = await axios.post(API_URL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Update task
export const updateTask = async (id, taskData, token) => {
  const formData = new FormData();
  Object.keys(taskData).forEach((key) => {
    if (key === "documents") {
      taskData.documents.forEach((file) => formData.append("documents", file));
    } else {
      formData.append(key, taskData[key]);
    }
  });

  const res = await axios.put(`${API_URL}/${id}`, formData, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Delete task
export const deleteTask = async (id, token) => {
  const res = await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

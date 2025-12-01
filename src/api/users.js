import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

// Get all users (Admin)
export const getUsers = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Create user
export const createUser = async (userData, token) => {
  const res = await axios.post(API_URL, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Update user
export const updateUser = async (id, userData, token) => {
  const res = await axios.put(`${API_URL}/${id}`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Delete user
export const deleteUser = async (id, token) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

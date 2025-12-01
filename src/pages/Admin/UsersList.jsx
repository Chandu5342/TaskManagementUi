import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { getUsers, createUser, updateUser, deleteUser } from '../../api/users';
import { useNavigate } from 'react-router-dom';

export default function UsersList() {
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ email: '', password: '', role: 'user' });

  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate('/dashboard');
      return;
    }
    fetchUsers();
  }, [token, user]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers(token);
      setUsers(data);
    } catch (err) {
      setError('Failed to load users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      if (editingId) {
        await updateUser(editingId, formData, token);
      } else {
        await createUser(formData, token);
      }
      setFormData({ email: '', password: '', role: 'user' });
      setEditingId(null);
      setShowForm(false);
      fetchUsers();
    } catch (err) {
      setError(editingId ? 'Failed to update user' : 'Failed to create user');
      console.error(err);
    }
  };

  const handleEditUser = (userData) => {
    setFormData({ email: userData.email, password: '', role: userData.role });
    setEditingId(userData._id);
    setShowForm(true);
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId, token);
        fetchUsers();
      } catch (err) {
        setError('Failed to delete user');
        console.error(err);
      }
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading users...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <button
          onClick={() => {
            setShowForm(!showForm);
            if (showForm) {
              setEditingId(null);
              setFormData({ email: '', password: '', role: 'user' });
            }
          }}
          className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
        >
          {showForm ? 'Cancel' : 'Add User'}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {showForm && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit User' : 'Create New User'}</h2>
          <form onSubmit={handleCreateUser} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                name="password"
                placeholder={editingId ? 'Leave blank to keep current password' : 'Password'}
                value={formData.password}
                onChange={handleFormChange}
                required={!editingId}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <select
              name="role"
              value={formData.role}
              onChange={handleFormChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
            >
              {editingId ? 'Update User' : 'Create User'}
            </button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.length > 0 ? (
              users.map(u => (
                <tr key={u._id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm text-gray-900">{u.email}</td>
                  <td className="px-6 py-3 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${u.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm flex gap-2">
                    <button
                      onClick={() => handleEditUser(u)}
                      className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(u._id)}
                      className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

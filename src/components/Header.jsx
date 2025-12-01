import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Header(){
  const { token, user, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav('/login');
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-indigo-600">📋 TaskManager</Link>
        <nav className="space-x-4 flex items-center">
          {!token ? (
            <>
              <Link to="/login" className="px-3 py-2 rounded hover:bg-gray-100 font-semibold text-gray-700">Login</Link>
              <Link to="/register" className="px-4 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700">Register</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="px-3 py-2 rounded hover:bg-gray-100 font-semibold text-gray-700">Dashboard</Link>
              {user?.role === 'admin' && (
                <Link to="/admin/users" className="px-3 py-2 rounded hover:bg-gray-100 font-semibold text-gray-700">Users</Link>
              )}
              <span className="px-3 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded">
                {user?.role === 'admin' ? '👑 Admin' : '👤 User'} 
              </span>
              <button onClick={handleLogout} className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700">Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);    // { id, email, role }
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // load token from localStorage
    const t = localStorage.getItem('tm_token');
    if (t) {
      setToken(t);
      // Decode token to get user info
      try {
        const payload = JSON.parse(atob(t.split('.')[1]));
        setUser({ id: payload.id, role: payload.role });
      } catch (err) {
        // ignore
      }
    }
    setLoading(false);
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('tm_token', token);
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('tm_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'professor@example.com' && password === 'password') {
          const userData = {
            id: '1',
            email: 'professor@example.com',
            role: 'professor',
          };
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          localStorage.setItem('userRole', 'professor');
          resolve(userData);
        } else if (email === 'student@example.com' && password === 'password') {
          const userData = {
            id: '2',
            email: 'student@example.com',
            role: 'student',
          };
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
           localStorage.setItem('userRole', 'student');
          resolve(userData);
        } else {
          reject('Invalid credentials');
        }
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
  };

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

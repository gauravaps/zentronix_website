// src/components/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // normalize role shape to always be a string (eg. 'admin' or 'user')
  const normalizeUser = (raw) => {
    if (!raw) return null;
    const normalizedRole =
      typeof raw.role === 'string' ? raw.role : raw.role?.role || raw.role?.name || null;

    return {
      ...raw,
      role: normalizedRole,
    };
  };

  // load user from localStorage (or you can fetch /me here)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('user');
      if (saved) {
        const parsed = JSON.parse(saved);
        setUserState(normalizeUser(parsed));
      } else {
        setUserState(null);
      }
    } catch (err) {
      console.error('Failed to parse saved user', err);
      setUserState(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // helper to set user and persist
  const setUser = (rawUser) => {
    const normalized = normalizeUser(rawUser);
    setUserState(normalized);
    if (normalized) {
      localStorage.setItem('user', JSON.stringify(normalized));
    } else {
      localStorage.removeItem('user');
    }
  };

  // login helper (you'd typically call API then setUser with response)
  const login = (rawUser) => {
    setUser(rawUser);
  };

  // logout helper
  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, isLoading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

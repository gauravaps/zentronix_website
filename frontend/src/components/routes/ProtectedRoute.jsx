// src/components/routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, isLoading, isAuthenticated } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div style={{ padding: 20 }}>Loading...</div>;
  }

  if (!isAuthenticated) {
    // redirect to login and remember where user came from
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const roleStr = typeof user?.role === 'string' ? user.role : user?.role?.role;

  if (requiredRole && roleStr !== requiredRole) {
    return <Navigate to="/not-authorized" replace />;
  }

  return children;
};

export default ProtectedRoute;

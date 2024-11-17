import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ isAdminAuthenticated, children }) => {
  // Check if the admin is authenticated
  if (!isAdminAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child components
  return children;
};

export default AdminRoute;

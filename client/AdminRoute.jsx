import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ isAdminAuthenticated, children }) => {
  return isAdminAuthenticated ? children : <Navigate to="/login" />;
};

export default AdminRoute;

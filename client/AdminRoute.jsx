import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ isAdminAuthenticated, children }) => {
  return isAdminAuthenticated ? children : <Navigate to="/login" />;
};

<<<<<<< HEAD
export default AdminRoute;
=======
export default AdminRoute;
>>>>>>> c73d4d8283ec26becd679c84bc71f865a38fd2a9

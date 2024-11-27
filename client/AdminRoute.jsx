import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const role = localStorage.getItem("role");

  if (!isAuthenticated || role !== "admin") {
    // Redirect to login if not authenticated or not an admin
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;

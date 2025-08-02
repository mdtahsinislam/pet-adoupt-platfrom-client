// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuthContext } from '../context/AuthProvider';

// const AdminRoute = ({ children }) => {
//   const { user, userRole } = useAuthContext();
//   const location = useLocation();

//   if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
//   if (userRole !== 'admin') return <Navigate to="/" replace />;

//   return children;
// };

// export default AdminRoute;


// src/routes


// /AdminRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <p>Loading...</p>; // অথবা একটি সুন্দর লোডিং স্পিনার
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
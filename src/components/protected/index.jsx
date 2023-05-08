import React from 'react';
import { Navigate } from 'react-router-dom';
import useJwtToken from '../../hooks/useJwtToken';

const Protected = ({ children }) => {
    
  const { token } = useJwtToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;

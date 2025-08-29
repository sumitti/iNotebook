import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token'); // true if token exists

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // redirect to login if no token
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : null; 
};

export default ProtectedRoutes;

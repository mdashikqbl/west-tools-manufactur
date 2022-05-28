import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from './LoadingSpinner';



const RequireAuth = ({ children }) => {
    const [user, Loading] = useAuthState(auth);
    const location = useLocation();
    if (Loading) {
        return <LoadingSpinner></LoadingSpinner>

    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;
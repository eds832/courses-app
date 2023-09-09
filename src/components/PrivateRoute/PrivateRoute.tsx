import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getUser } from './../../store/selectors';

const PrivateRoute = ({ children }) => {
	const isAdmin = useSelector(getUser)?.role === 'admin';

	return isAdmin ? children : <Navigate to='/courses' />;
};

export default PrivateRoute;

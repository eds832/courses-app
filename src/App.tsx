import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';
import { getAuthors, getCourses, getUser } from './store/selectors';
import { saveCoursesThunk } from './store/courses/thunk';
import { useAppDispatch } from './hooks';
import { saveAuthorsThunk } from './store/authors/thunk';
import { deleteUserThunk, saveUserThunk } from './store/user/thunk';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
	const [isAuth, setAuth] = useState(localStorage.getItem('token') != null);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(saveCoursesThunk());
		dispatch(saveAuthorsThunk());
		if (isAuth) {
			dispatch(saveUserThunk());
		}
	}, [dispatch, isAuth]);

	const isUserAuth = useSelector(getUser)?.isAuth;

	useEffect(() => {
		if (isUserAuth) {
			setAuth(true);
		} else if (!localStorage.getItem('token')) {
			setAuth(false);
		}
	}, [isUserAuth]);

	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);

	const handleLogout = () => {
		dispatch(deleteUserThunk());
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				{isAuth ? (
					<>
						<Route
							path='/courses'
							element={
								<Courses
									courseList={courses}
									authorList={authors}
									onLogout={handleLogout}
								/>
							}
						/>
						<Route
							path='/courses/update/:courseId'
							element={
								<PrivateRoute>
									<CourseForm onLogout={handleLogout} />
								</PrivateRoute>
							}
						/>
						<Route
							path='/courses/add'
							element={
								<PrivateRoute>
									<CourseForm onLogout={handleLogout} />
								</PrivateRoute>
							}
						/>
						<Route
							path='/courses/:courseId'
							element={
								<CourseInfo
									courseList={courses}
									authorList={authors}
									onLogout={handleLogout}
								/>
							}
						/>
						<Route path='*' element={<Navigate to='/courses' />} />
					</>
				) : (
					<Route path='*' element={<Navigate to='/login' />} />
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default App;

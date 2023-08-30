import React, { useState } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';
import {
	createAuthorWithApi,
	createCourseWithApi,
	loginUser,
	logoutUser,
	saveAuthors,
	saveCourses,
	saveUser,
} from './services';
import { addNewAuthorAction } from './store/authors/actions';
import { getAuthors, getCourses } from './store/selectors';
import { addNewCourseAction } from './store/courses/actions';
import { CourseType } from './store/courses/types';
import { AuthorType } from './store/authors/types';
import { deleteUserAction } from './store/user/actions';

function App() {
	saveCourses();
	saveAuthors();
	saveUser();
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const [isAuth, setAuth] = useState(localStorage.getItem('token') != null);

	const dispatch = useDispatch();

	const createCourse = async (newCourse: CourseType) => {
		const [success, id, creationDate] = await createCourseWithApi(
			newCourse.title,
			newCourse.description,
			newCourse.duration,
			newCourse.authors
		);
		if (success) {
			newCourse.id = id;
			newCourse.creationDate = creationDate;
			dispatch(addNewCourseAction(newCourse));
		}
	};

	const createAuthor = async (newAuthor: AuthorType) => {
		const id = await createAuthorWithApi(newAuthor.name);
		if (typeof id === 'string') {
			newAuthor.id = id;
			dispatch(addNewAuthorAction(newAuthor));
			return true;
		} else {
			return false;
		}
	};

	const handleLogin = async (
		email: string,
		password: string
	): Promise<[boolean, string?]> => {
		const [loginSuccesful, message] = await loginUser(email, password);
		if (loginSuccesful) {
			setAuth(true);
		}
		return [loginSuccesful, message];
	};

	const handleLogout = () => {
		logoutUser();
		setAuth(false);
		dispatch(deleteUserAction());
	};

	const handleDeleteAuthor = (id: string) => {
		// unimplemented in this task
		return false;
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login onLogin={handleLogin} />} />
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
							path='/courses/add'
							element={
								<CreateCourse
									onDeleteAuthorClicked={handleDeleteAuthor}
									authorList={authors}
									createCourse={createCourse}
									createAuthor={createAuthor}
									onLogout={handleLogout}
								/>
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

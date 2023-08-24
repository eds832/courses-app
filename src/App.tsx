import React, { useState } from 'react';

import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { Course } from './components/Courses/Course';
import { Author } from './components/Courses/Author';

function App() {
	const [token, setToken] = useState(localStorage.getItem('token') || '');
	const [authorList, setAuthorList] = useState(mockedAuthorsList);
	const [courseList, setCourseList] = useState(mockedCoursesList);

	const createCourse = (newCourse: Course) => {
		setCourseList([...courseList, newCourse]);
	};

	const createAuthor = (newAuthor: Author) => {
		setAuthorList([...authorList, newAuthor]);
	};

	const handleLogin = (newToken: string, newName: string) => {
		setToken(newToken);
		localStorage.setItem('token', newToken);
		localStorage.setItem('name', newName);
	};

	const handleLogout = () => {
		setToken('');
		localStorage.removeItem('token');
		localStorage.removeItem('name');
		localStorage.removeItem('role');
	};

	const handleDeleteAuthor = (id: string) => {
		const authorListCopy = [...authorList];
		let result = false;
		authorListCopy.forEach((item, index) => {
			if (item.id === id) {
				const authorIds = courseList.map((cours) => cours.authors).flat();
				if (authorIds.indexOf(id) < 0) {
					authorListCopy.splice(index, 1);
					setAuthorList(authorListCopy);
					result = true;
				}
			}
		});
		return result;
	};

	return (
		<Routes>
			<Route path='/registration' element={<Registration />} />
			<Route path='/login' element={<Login onLogin={handleLogin} />} />
			{token ? (
				<>
					<Route
						path='/courses'
						element={
							<Courses
								courseList={courseList}
								authorList={authorList}
								onLogout={handleLogout}
							/>
						}
					/>
					<Route
						path='/courses/add'
						element={
							<CreateCourse
								onDeleteAuthorClicked={handleDeleteAuthor}
								authorList={authorList}
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
								courseList={courseList}
								authorList={authorList}
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
	);
}

export default App;

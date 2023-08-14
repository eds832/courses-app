import React, { useState } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import CourseInfo from './components/CourseInfo/CourseInfo';
import coursesListConvertor from './helpers/coursesListConvertor';

function App() {
	const [courseId, setCourse] = useState(null);

	const handleCourseClicked = (id?: string) => {
		if (courseId) {
			setCourse(null);
		} else {
			setCourse(id);
		}
	};

	if (!courseId) {
		return (
			<div>
				<Header />
				<Courses
					courseList={mockedCoursesList}
					authorList={mockedAuthorsList}
					onShowCourseClicked={handleCourseClicked}
				/>
			</div>
		);
	} else {
		const course = coursesListConvertor(
			mockedCoursesList,
			mockedAuthorsList
		).find((course) => course.id === courseId);
		return (
			<div>
				<Header />
				<CourseInfo
					onBackClicked={handleCourseClicked}
					id={course.id}
					title={course.title}
					description={course.description}
					authors={course.authors.join(', ')}
					duration={course.duration}
					created={course.creationDate}
				/>
			</div>
		);
	}
}

export default App;

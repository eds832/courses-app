import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './CoursesBody.css';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../../../../common/Button/Button';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../../../constants';
import { CoursesBodyProps } from './CoursesBodyProps';
import CoursesList from '../CourseList/CourseList';
import coursesListConvertor from '../../../../helpers/coursesListConvertor';

const CoursesBody: React.FC<CoursesBodyProps> = (props) => {
	if (!props.courseList?.length) {
		return <EmptyCourseList />;
	}

	const [searchQuery, setSearchQuery] = useState<string>('');

	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};

	const filteredCourses = props.courseList.filter(
		(course) =>
			course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			course.id.toString().includes(searchQuery)
	);
	return (
		<main className='course-main'>
			<div className='bar'>
				<SearchBar onSearch={handleSearch} />
				<Link to='/courses/add'>
					<Button buttonText={ADD_NEW_COURSE_BUTTON_TEXT} />
				</Link>
			</div>
			<div className='courses'>
				<CoursesList
					convertedCourseList={coursesListConvertor(
						filteredCourses,
						props.authorList
					)}
				/>
			</div>
		</main>
	);
};

export default CoursesBody;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './CoursesBody.css';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../../../../common/Button/Button';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../../../constants';
import { CoursesBodyProps } from './CoursesBodyProps';
import CoursesList from '../CourseList/CourseList';
import coursesListConvertor from '../../../../helpers/coursesListConvertor';
import { getUser } from '../../../../store/selectors';

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

	const isAdmin = useSelector(getUser)?.role === 'admin';

	return (
		<main className='course-main'>
			<div className='bar'>
				<SearchBar onSearch={handleSearch} />
				{isAdmin && (
					<Link to='/courses/add'>
						<Button buttonText={ADD_NEW_COURSE_BUTTON_TEXT} />
					</Link>
				)}
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

import React, { useState } from 'react';

import './Courses.css';
import SearchBar from './components/SearchBar/SearchBar';
import Button from './../../common/Button/Button';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import { ADD_NEW_COURSE_BUTTON_TEXT } from './../../constants';
import { CoursesProps } from './CoursesProps';
import CoursesList from './components/CourseList/CourseList';
import coursesListConvertor from 'src/helpers/coursesListConvertor';

const Courses: React.FC<CoursesProps> = (props) => {
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
				<Button
					onClick={() => alert()}
					buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
				/>
			</div>
			<div className='courses'>
				<CoursesList
					convertedCourseList={coursesListConvertor(
						filteredCourses,
						props.authorList,
						props.onShowCourseClicked
					)}
				/>
			</div>
		</main>
	);
};

export default Courses;

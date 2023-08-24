import React from 'react';
import { useParams } from 'react-router-dom';

import './CourseInfo.css';
import { CourseInfoProps } from './CourseInfoProps';
import CourseInfoBody from './components/CourseInfoBody/CourseInfoBody';
import coursesListConvertor from 'src/helpers/coursesListConvertor';
import Header from '../Header/Header';

const CourseInfo: React.FC<CourseInfoProps> = (props) => {
	const { courseId } = useParams();
	const course = coursesListConvertor(props.courseList, props.authorList).find(
		(c) => c.id === courseId
	);
	return (
		<div>
			<Header onLogout={props.onLogout} />
			<CourseInfoBody
				id={course.id}
				title={course.title}
				description={course.description}
				authors={course.authors.join(', ')}
				duration={course.duration}
				created={course.creationDate}
			/>
		</div>
	);
};

export default CourseInfo;

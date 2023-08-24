import React from 'react';

import Header from '../Header/Header';
import CoursesBody from './components/CoursesBody/CoursesBody';
import { CoursesProps } from './CoursesProps';

const Courses: React.FC<CoursesProps> = (props) => {
	return (
		<div>
			<Header onLogout={props.onLogout} />
			<CoursesBody
				courseList={props.courseList}
				authorList={props.authorList}
			/>
		</div>
	);
};

export default Courses;

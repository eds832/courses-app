import React from 'react';

import { Course } from './../../../../components/Courses/Course';
import CourseCard from '../CourseCard/CourseCard';

const CourseListItem = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
	onShowCourseClicked,
}: Course) => {
	return (
		<li>
			<CourseCard
				onShowCourseClicked={onShowCourseClicked}
				id={id}
				title={title}
				description={description}
				authors={authors.join(', ')}
				duration={duration.toString()}
				created={creationDate}
			/>
		</li>
	);
};

export default CourseListItem;

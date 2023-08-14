import React from 'react';

import CourseListItem from './../CourseListItem/CourseListItem';
import { ConvertedCourseList } from './ConvertedCourseList';

const CoursesList = ({ convertedCourseList }: ConvertedCourseList) => {
	return (
		<ul>
			{convertedCourseList.map(
				({
					id,
					title,
					description,
					creationDate,
					duration,
					authors,
					onShowCourseClicked,
				}) => (
					<CourseListItem
						onShowCourseClicked={onShowCourseClicked}
						key={id}
						id={id}
						title={title}
						description={description}
						creationDate={creationDate}
						duration={duration}
						authors={authors}
					/>
				)
			)}
		</ul>
	);
};

export default CoursesList;

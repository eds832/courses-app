import React from 'react';

import CourseCard from '../CourseCard/CourseCard';
import { CourseListItemProps } from './CourseListItemProps';

const CourseListItem = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
}: CourseListItemProps) => {
	return (
		<li>
			<CourseCard
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

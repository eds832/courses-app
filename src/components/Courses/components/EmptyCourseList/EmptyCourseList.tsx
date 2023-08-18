import React from 'react';

import './EmptyCourseList.css';
import Button from './../../../../common/Button/Button';
import {
	ADD_NEW_COURSE_BUTTON_TEXT,
	EMPTY_COURSE_LIST_SUBTITLE,
	EMPTY_COURSE_LIST_TITLE,
} from './../../../../constants';

const EmptyCourseList: React.FC = () => {
	return (
		<article className='empty-course-list'>
			<div className='empty-course-title'>
				<h1>{EMPTY_COURSE_LIST_TITLE}</h1>
			</div>
			<div className='empty-course-subtitle'>
				<h5>{EMPTY_COURSE_LIST_SUBTITLE}</h5>
			</div>
			<div className='empty-course-button'>
				<Button
					buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
					onClick={() => alert('cliked')}
				/>
			</div>
		</article>
	);
};

export default EmptyCourseList;

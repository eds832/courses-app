import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './EmptyCourseList.css';
import Button from './../../../../common/Button/Button';
import {
	ADD_NEW_COURSE_BUTTON_TEXT,
	DONT_HAVE_PERMISSONS,
	EMPTY_COURSE_LIST_SUBTITLE,
	EMPTY_COURSE_LIST_TITLE,
} from './../../../../constants';
import { getUser } from './../../../../store/selectors';

const EmptyCourseList: React.FC = () => {
	const role = useSelector(getUser)?.role;
	const isAdmin = role === 'admin';
	const isNone = role === '';
	const showButton = isNone || isAdmin;

	const navigate = useNavigate();

	const handleAddNewCourse = async () => {
		if (role === 'admin') {
			navigate('/courses/add');
		} else {
			navigate('/courses');
		}
	};
	return (
		<article className='empty-course-list'>
			<div className='empty-course-title'>
				<h1>{EMPTY_COURSE_LIST_TITLE}</h1>
			</div>
			<div className='empty-course-subtitle'>
				{showButton ? (
					<h5>{EMPTY_COURSE_LIST_SUBTITLE}</h5>
				) : (
					<h5>{DONT_HAVE_PERMISSONS}</h5>
				)}
			</div>
			{showButton && (
				<div className='empty-course-button'>
					<Button
						buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
						onClick={handleAddNewCourse}
					/>
				</div>
			)}
		</article>
	);
};

export default EmptyCourseList;

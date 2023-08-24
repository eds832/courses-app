import React from 'react';

import './EmptyCourseList.css';
import Button from './../../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import {
	ADD_NEW_COURSE_BUTTON_TEXT,
	DONT_HAVE_PERMISSONS,
	EMPTY_COURSE_LIST_SUBTITLE,
	EMPTY_COURSE_LIST_TITLE,
} from './../../../../constants';

const EmptyCourseList: React.FC = () => {
	const navigate = useNavigate();
	const handleAddNewCourse = async () => {
		try {
			const response = await fetch('http://localhost:4000/users/me', {
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			});
			const data = await response.json();
			if (response.ok) {
				const role = data.result.role;
				if (role === 'admin') {
					localStorage.setItem('role', 'admin');
					navigate('/courses/add');
				} else {
					localStorage.setItem('role', 'user');
					navigate('/courses');
				}
			} else {
				console.log('An error occurred');
			}
		} catch (error) {
			console.log(`An error occurred: ${error}`);
		}
	};
	const isAdmin = localStorage.getItem('role') === 'admin';
	const isNone = localStorage.getItem('role') == null;
	const showButton = isNone || isAdmin;
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

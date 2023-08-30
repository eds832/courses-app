import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './CourseCard.css';
import Button from './../../../../common/Button/Button';
import { SHOW_COURSE_BUTTON_TEXT } from './../../../../constants';
import { CourseCardProps } from './CourseCardProps';
import { deleteCourseAction } from './../../../../store/courses/actions';
import { deleteCourseById } from './../../../../services';

const showAlert = () => alert('Clicked');
const CourseCard: React.FC<CourseCardProps> = (props) => {
	const dispatch = useDispatch();

	const handleDeleteCourse = async () => {
		const success = await deleteCourseById(props.id);
		if (success) {
			dispatch(deleteCourseAction(props.id));
		}
	};

	return (
		<article className='course-card'>
			<h3 className='course-title'>{props.title}</h3>
			<div className='card-text'>
				<div className='course-description'>
					<p className='course-line'>{props.description}</p>
				</div>
			</div>
			<div className='card-info'>
				<div className='card-authors'>
					<p className='course-line'>
						<span className='bold-text'>Authors: </span>
						{props.authors}
					</p>
				</div>
				<div className='card-duration'>
					<p className='course-line'>
						<span className='bold-text'>Duration: </span>
						{props.duration}
					</p>
				</div>
				<div className='card-created'>
					<p className='course-line'>
						<span className='bold-text'>Created: </span>
						{props.created}
					</p>
				</div>
				<div className='course-card-buttons'>
					<div className='show-course-button'>
						<Link to={'/courses/' + props.id}>
							<Button buttonText={SHOW_COURSE_BUTTON_TEXT} />
						</Link>
					</div>
					<div className='delete-course-button'>
						<Button
							buttonText='&#x1F5D1;'
							onClick={handleDeleteCourse}
						></Button>
					</div>
					<div className='pencil-course-button'>
						<Button buttonText='&#x1F589;' onClick={showAlert}></Button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default CourseCard;

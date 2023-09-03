import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './CourseCard.css';
import Button from './../../../../common/Button/Button';
import { SHOW_COURSE_BUTTON_TEXT } from './../../../../constants';
import { CourseCardProps } from './CourseCardProps';
import { getUser } from './../../../../store/selectors';
import { deleteCourseThunk } from './../../../../store/courses/thunk';
import { useAppDispatch } from './../../../../hooks';

const CourseCard: React.FC<CourseCardProps> = (props) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleDeleteCourse = async () => {
		dispatch(deleteCourseThunk(props.id));
	};

	const handleUpdateCourse = () => {
		navigate(`/courses/update/${props.id}`);
	};

	const isAdmin = useSelector(getUser)?.role === 'admin';

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
					{isAdmin && (
						<>
							<div className='delete-course-button'>
								<Button
									buttonText='&#x1F5D1;'
									onClick={handleDeleteCourse}
								></Button>
							</div>

							<div className='pencil-course-button'>
								<Button
									buttonText='&#x1F589;'
									onClick={handleUpdateCourse}
								></Button>
							</div>
						</>
					)}
				</div>
			</div>
		</article>
	);
};

export default CourseCard;

import React from 'react';
import { Link } from 'react-router-dom';

import './CourseInfoBody.css';
import { BACK_COURSE_BUTTON_TEXT } from '../../../../constants';
import Button from '../../../../common/Button/Button';
import { CourseInfoBodyProps } from './CourseInfoBodyProps';

const CourseInfoBody: React.FC<CourseInfoBodyProps> = (props) => {
	return (
		<main className='course-info'>
			<div className='course-info-title'>
				<h1>{props.title}</h1>
			</div>
			<div className='course-plate'>
				<div className='course-plate-left-side'>
					<div className='course-plate-left-side-title'>
						<h2>Description:</h2>
					</div>
					<div className='course-plate-description'>
						<p className='course-line'>{props.description}</p>
					</div>
				</div>
				<div className='course-plate-right-side'>
					<div className='course-plate-id'>
						<p className='course-plate-line'>
							<span className='bold-text'>Id: </span>
							{props.id}
						</p>
					</div>
					<div className='course-plate-duration'>
						<p className='course-plate-line'>
							<span className='bold-text'>Duration: </span>
							{props.duration}
						</p>
					</div>
					<div className='course-plate-created'>
						<p className='course-plate-line'>
							<span className='bold-text'>Created: </span>
							{props.created}
						</p>
					</div>
					<div className='course-plate-authors'>
						<p className='course-plate-line'>
							<span className='bold-text'>Authors: </span>
							{props.authors}
						</p>
					</div>
				</div>
			</div>
			<div className='course-info-button'>
				<Link to='/courses'>
					<Button buttonText={BACK_COURSE_BUTTON_TEXT} />
				</Link>
			</div>
		</main>
	);
};

export default CourseInfoBody;

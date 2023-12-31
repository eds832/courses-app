import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './CourseForm.css';
import Button from './../../common/Button/Button';
import Input from './../../common/Input/Input';
import { CreateCourseProps } from './CourseFormProps';
import Header from '../Header/Header';
import getCourseDuration from './../../helpers/getCourseDuration';
import TextArea from './../../common/Textarea/TextArea';
import AuthorItem from './components/AuthorItem/AuthorItem';
import {
	TITLE_ERROR_MESSAGE,
	DESCRIPTION_ERROR_MESSAGE,
	DURATION_ERROR_MESSAGE,
	AUTHORS_ERROR_MESSAGE,
	TITLE_LABLE_TEXT,
	DESCRIPTION_LABLE_TEXT,
	DURATION_LABLE_TEXT,
	AUTHORS_LABLE_TEXT,
	CREATE_COURSE_FORM_TITLE,
	CREATE_COURSE_BUTTON_TEXT,
	CANCEL_BUTTON_TEXT,
	CREATE_COURSE_FORM_SUBTITLE,
	AUTHORS_SUBTITLE_TEXT,
	CREATE_AUTHOR_BUTTON_TEXT,
	AUTHOR_ERROR_MESSAGE,
	AUTONRS_LIST,
	COURSE_AUTHORS,
	AUTHOR_LIST_EMPTY,
	UPDATE_COURSE_BUTTON_TEXT,
} from './../../constants';
import { useAppDispatch } from './../../hooks';
import { addAuthorThunk } from './../../store/authors/thunk';
import { getAuthors, getCourses } from './../../store/selectors';
import { addCourseThunk, updateCourseThunk } from './../../store/courses/thunk';
import { AuthorType } from './../../store/authors/types';
import { CourseType } from './../../store/courses/types';

const CreateCourse: React.FC<CreateCourseProps> = (props) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const allAuthors = useSelector(getAuthors);
	const allCourses = useSelector(getCourses);
	const { courseId } = useParams();
	let course: CourseType = {
		id: '',
		title: '',
		description: '',
		duration: 0,
		creationDate: '',
		authors: [],
	};
	let authors: AuthorType[] = [];
	if (courseId) {
		course = allCourses.find((c) => c.id === courseId);
		authors = course?.authors?.map((authorId) =>
			allAuthors.find((author) => author.id === authorId)
		);
	}
	const [title, setTitle] = useState(course.title);
	const [description, setDescription] = useState(course.description);
	const [durationStr, setDuration] = useState(
		course.duration ? course.duration.toString() : ''
	);
	const [author, setAuthor] = useState('');
	const [courseAuthorArr, setAuthors] = useState(authors);
	const [allAuthorArrCopy, setAllAuthorArrCopy] = useState([...allAuthors]);
	const [titleError, setTitleError] = useState('');
	const [descriptionError, setDescriptionError] = useState('');
	const [durationError, setDurationError] = useState('');
	const [authorError, setAuthorError] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		const allAuthorList = allAuthors.filter(
			(aut) => !courseAuthorArr.find((aut2) => aut2 == aut)
		);
		setAllAuthorArrCopy(allAuthorList);
	}, [allAuthors, courseAuthorArr]);

	const cleanErrors = () => {
		setTitleError('');
		setDescriptionError('');
		setDurationError('');
		setAuthorError('');
		setError('');
	};

	const handleSubmitCourse = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		cleanErrors();
		let isError = false;
		if (!title || title.trim().length < 2) {
			setTitleError(TITLE_ERROR_MESSAGE);
			isError = true;
		}
		if (!description || description.trim().length < 2) {
			setDescriptionError(DESCRIPTION_ERROR_MESSAGE);
			isError = true;
		}
		if (!durationStr || +durationStr < 1) {
			setDurationError(DURATION_ERROR_MESSAGE);
			isError = true;
		}
		if (courseAuthorArr.length < 1) {
			setAuthorError(AUTHORS_ERROR_MESSAGE);
			isError = true;
		}
		if (isError) {
			return;
		}
		const authors = courseAuthorArr.map((author) => author.id);
		const duration = +durationStr;
		const id = course.id;
		const creationDate = course.creationDate;
		const newCourse = {
			id,
			title,
			description,
			duration,
			creationDate,
			authors,
		};
		if (courseId) {
			dispatch(updateCourseThunk(newCourse)).then(() => navigate('/courses'));
		} else {
			dispatch(addCourseThunk(newCourse)).then(() => navigate('/courses'));
		}
	};

	const handleSubmitAuthor = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		cleanErrors();
		if (!author || author.trim().length < 2) {
			setAuthorError(AUTHOR_ERROR_MESSAGE);
			return;
		}
		dispatch(addAuthorThunk(author));
		setAuthor('');
	};

	const handleDeleteCurseAuthor = (id: string) => {
		cleanErrors();
		const author = courseAuthorArr.find((author) => author.id === id);
		if (author) {
			const courseAuthorList = courseAuthorArr.filter((aut) => aut !== author);
			setAuthors(courseAuthorList);
		}
	};

	const handleAddAuthorToCourse = (id: string) => {
		cleanErrors();
		const author = allAuthorArrCopy.find((author) => author.id === id);
		if (author) {
			setAuthors([...courseAuthorArr, author]);
		}
	};

	return (
		<>
			<Header onLogout={props.onLogout} />
			<div className='create-course-container'>
				<div className='create-course-title'>
					<h1>{CREATE_COURSE_FORM_TITLE}</h1>
				</div>
				<div className='create-course-forms'>
					<form className='create-course-form' onSubmit={handleSubmitCourse}>
						<div>
							<h2>{CREATE_COURSE_FORM_SUBTITLE}</h2>
						</div>
						<div className='title-input'>
							<Input
								onChange={(e) => setTitle(e)}
								value={title}
								type='text'
								labelText={TITLE_LABLE_TEXT}
								error={titleError}
								size={132}
							/>
						</div>
						<div className='description-textarea'>
							<TextArea
								onChange={(e) => setDescription(e)}
								value={description}
								labelText={DESCRIPTION_LABLE_TEXT}
								error={descriptionError}
								rows={6}
								cols={134}
							/>
							{error && <p className='error-message'>{error}</p>}
						</div>
						<h2 className='duration-subtitle'>{DURATION_LABLE_TEXT}</h2>
						<div className='duration-input'>
							<Input
								onChange={(e) => setDuration(e)}
								value={durationStr}
								type='text'
								labelText={DURATION_LABLE_TEXT}
								error={durationError}
								size={45}
								pattern='^\d+$'
							/>
							<div className='duration-view'>
								<p>
									{getCourseDuration(isNaN(+durationStr) ? 0 : +durationStr)}
								</p>
							</div>
						</div>
						<div className='create-course-buttons'>
							<div className='button-cancel-course'>
								<Link to='/courses'>
									<Button type='reset' buttonText={CANCEL_BUTTON_TEXT} />
								</Link>
							</div>
							<div className='button-create-course'>
								<Button
									type='submit'
									buttonText={
										courseId
											? UPDATE_COURSE_BUTTON_TEXT
											: CREATE_COURSE_BUTTON_TEXT
									}
								/>
							</div>
						</div>
					</form>
					<div className='create-author-form'>
						<form onSubmit={handleSubmitAuthor}>
							<h2 className='authors-subtitle'>{AUTHORS_SUBTITLE_TEXT}</h2>
							<div className='author-input-button-container'>
								<div className='authors-input'>
									<Input
										onChange={(e) => setAuthor(e)}
										value={author}
										type='text'
										labelText={AUTHORS_LABLE_TEXT}
										error={authorError}
										size={45}
									/>
								</div>
								<div className='authors-button'>
									<Button
										type='submit'
										buttonText={CREATE_AUTHOR_BUTTON_TEXT}
									/>
								</div>
							</div>
							<div className='authors-list'>
								<h3>{AUTONRS_LIST}</h3>
								<table>
									<tbody>
										{allAuthorArrCopy.map(({ id, name }) => (
											<AuthorItem
												onAddAuthorClicked={handleAddAuthorToCourse}
												key={id}
												id={id}
												name={name}
												withAdd={true}
											/>
										))}
									</tbody>
								</table>
							</div>
						</form>
						<div className='course-authors'>
							<h3>{COURSE_AUTHORS}</h3>
							{courseAuthorArr.length > 0 ? (
								<table>
									<tbody>
										{courseAuthorArr.map(({ id, name }) => (
											<AuthorItem
												onDeleteAuthorClicked={handleDeleteCurseAuthor}
												withAdd={false}
												key={id}
												id={id}
												name={name}
											/>
										))}
									</tbody>
								</table>
							) : (
								<p>{AUTHOR_LIST_EMPTY}</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateCourse;

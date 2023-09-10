import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';

import Courses from '../Courses';
import { CourseType } from './../../../store/courses/types';
import { AuthorType } from './../../../store/authors/types';
import { UserType } from './../../../store/user/types';
import rootReducer from './../../../store/rootReducer';
import { ADD_NEW_COURSE_BUTTON_TEXT } from './../../../constants';

describe('Courses', () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test Name',
			role: 'admin',
		} as UserType,
		courses: [] as CourseType[],
		authors: [] as AuthorType[],
	};

	const mockedStore = configureStore({
		reducer: rootReducer,
		preloadedState: mockedState,
	});

	const mockedCoursesProps = {
		courseList: [
			{
				id: '66cc289e-6de9-49b2-9ca7-8b4f409d6462',
				title: 'React JS',
				description: 'React JS Full Course.',
				duration: 10,
				creationDate: '21/10/2023',
				authors: [
					'9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
					'9b87e8b8-6ba5-40fc-a439-c4e30a373d39',
				],
			},
			{
				id: '66cc289e-6de9-49b2-9ca7-8b4f409d6464',
				title: 'React JS',
				description: 'Java Full Course.',
				duration: 10,
				creationDate: '22/10/2023',
				authors: [
					'9b87e8b8-6ba5-40fc-a439-c4e30a373d31',
					'9b87e8b8-6ba5-40fc-a439-c4e30a373d39',
				],
			},
		],
		authorList: [
			{
				id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
				name: 'Test Author 1',
			},
			{
				id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d39',
				name: 'Test Author 2',
			},
			{
				id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d31',
				name: 'Test Author 3',
			},
		],
		onLogout: jest.fn(),
	};

	it('Courses should display amount of CourseCard equal length of courses array', () => {
		const { getAllByText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses {...mockedCoursesProps} />
				</BrowserRouter>
			</Provider>
		);
		const courses = getAllByText(/Course/);
		expect(courses.length).toBe(mockedCoursesProps.courseList.length);
	});

	it('CourseForm should be shown after a click on the "Add new course" button', async () => {
		const { getByText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses {...mockedCoursesProps} />
				</BrowserRouter>
			</Provider>
		);
		const addCourseButton = getByText(ADD_NEW_COURSE_BUTTON_TEXT);
		fireEvent.click(addCourseButton);

		await waitFor(() => {
			expect(window.location.href).toContain('/courses/add');
		});
	});
});

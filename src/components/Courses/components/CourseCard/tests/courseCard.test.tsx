import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';

import CourseCard from '../CourseCard';
import { CourseType } from './../../../../../store/courses/types';
import { AuthorType } from './../../../../../store/authors/types';
import { UserType } from './../../../../../store/user/types';
import rootReducer from './../../../../../store/rootReducer';

describe('CourseCard', () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test Name',
		} as UserType,
		courses: [] as CourseType[],
		authors: [] as AuthorType[],
	};

	const mockedStore = configureStore({
		reducer: rootReducer,
		preloadedState: mockedState,
	});

	const mockedCourseCardProps = {
		id: '66cc289e-6de9-49b2-9ca7-8b4f409d6464',
		title: 'React JS',
		description: 'React JS Full Course.',
		duration: '00:10 hours',
		created: '09.03.2021',
		authors: 'Test Author 1, Test Author 2',
	};

	it('CourseCard should display title', () => {
		const { getByText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard {...mockedCourseCardProps} />
				</BrowserRouter>
			</Provider>
		);
		expect(getByText(mockedCourseCardProps.title)).toBeInTheDocument();
	});

	it('CourseCard should display description', () => {
		const { getByText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard {...mockedCourseCardProps} />
				</BrowserRouter>
			</Provider>
		);
		expect(getByText(mockedCourseCardProps.description)).toBeInTheDocument();
	});

	it('CourseCard should display duration in the correct format', () => {
		const { getByText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard {...mockedCourseCardProps} />
				</BrowserRouter>
			</Provider>
		);
		expect(getByText(mockedCourseCardProps.duration)).toBeInTheDocument();
	});

	it('CourseCard should display authors list', () => {
		const { getByText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard {...mockedCourseCardProps} />
				</BrowserRouter>
			</Provider>
		);
		expect(getByText(mockedCourseCardProps.authors)).toBeInTheDocument();
	});

	it('CourseCard should display created date in the correct format', () => {
		const { getByText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard {...mockedCourseCardProps} />
				</BrowserRouter>
			</Provider>
		);
		expect(getByText(mockedCourseCardProps.created)).toBeInTheDocument();
	});
});

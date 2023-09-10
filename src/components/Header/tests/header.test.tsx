import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Header from '../Header';
import { CourseType } from './../../../store/courses/types';
import { AuthorType } from './../../../store/authors/types';
import { UserType } from './../../../store/user/types';
import rootReducer from './../../../store/rootReducer';

describe('Header', () => {
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

	it('Header should have logo', () => {
		const { getByAltText } = render(
			<Provider store={mockedStore}>
				<Header />
			</Provider>
		);
		expect(getByAltText(/Logo/)).toBeInTheDocument();
	});

	it(`Header should have user's name`, () => {
		localStorage.setItem('token', 'test token');
		const { getByText } = render(
			<Provider store={mockedStore}>
				<Header />
			</Provider>
		);
		expect(getByText('Test Name')).toBeInTheDocument();
		localStorage.removeItem('token');
	});
});

import React from 'react';
import { render, fireEvent, waitFor, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';

import CourseForm from '../CourseForm';
import { CourseType } from './../../../store/courses/types';
import { AuthorType } from './../../../store/authors/types';
import { UserType } from './../../../store/user/types';
import rootReducer from './../../../store/rootReducer';
import {
	AUTHORS_LABLE_TEXT,
	AUTHOR_LIST_EMPTY,
	CREATE_AUTHOR_BUTTON_TEXT,
} from './../../../constants';

describe('CourseForm', () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test Name',
			role: 'admin',
		} as UserType,
		courses: [
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
		] as CourseType[],
		authors: [
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
		] as AuthorType[],
	};

	const mockedStore = configureStore({
		reducer: rootReducer,
		preloadedState: mockedState,
	});

	const mockedOnLogout = jest.fn();

	it('CourseForm should show authors lists (all and course authors)', () => {
		const { getAllByText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm onLogout={mockedOnLogout} />
				</BrowserRouter>
			</Provider>
		);
		const authors = getAllByText(/Test Author/);
		expect(authors.length).toBe(mockedState.authors.length);
	});

	it(`CourseForm 'Create author' button click should call dispatch`, async () => {
		const { getByText, getByLabelText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm onLogout={mockedOnLogout} />
				</BrowserRouter>
			</Provider>
		);
		const mockedStoreDispatchSpy = jest.spyOn(mockedStore, 'dispatch');
		const input = getByLabelText(AUTHORS_LABLE_TEXT);
		fireEvent.change(input, { target: { value: 'New Author' } });
		const createAuthorButton = getByText(CREATE_AUTHOR_BUTTON_TEXT);
		fireEvent.click(createAuthorButton);

		await waitFor(() => {
			expect(mockedStoreDispatchSpy).toHaveBeenCalled();
		});
	});

	it(`CourseForm 'Add author' button click should add an author to the course authors list`, async () => {
		const { getAllByText, queryByText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm onLogout={mockedOnLogout} />
				</BrowserRouter>
			</Provider>
		);
		const plusInputs = getAllByText('+');
		fireEvent.click(plusInputs[0]);
		const emptyCoursesParagraph = queryByText(AUTHOR_LIST_EMPTY);

		expect(emptyCoursesParagraph).not.toBeInTheDocument();
	});

	it(`CourseForm 'Delete author' button click should delete an author from the course list`, async () => {
		const { queryByText, getByText } = render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm onLogout={mockedOnLogout} />
				</BrowserRouter>
			</Provider>
		);
		const author1Tr = getByText('Test Author 1');
		const author1Td = author1Tr.parentElement as HTMLElement;
		const addAuthor1ToCourse = within(author1Td).getByText('+');
		fireEvent.click(addAuthor1ToCourse);

		const author1TrInCourse = getByText('Test Author 1');
		const author1TdInCourse = author1TrInCourse.parentElement as HTMLElement;
		const deleteAuthor1FromCourse = within(author1TdInCourse).getByText('🗑');
		fireEvent.click(deleteAuthor1FromCourse);
		const emptyCoursesParagraph = queryByText(AUTHOR_LIST_EMPTY);

		expect(emptyCoursesParagraph).toBeInTheDocument();
	});
});

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import axios from 'axios';

import { saveUserAction } from './store/user/actions';
import { saveAuthorsAction } from './store/authors/actions';
import { saveCoursesAction } from './store/courses/actions';

export const saveCourses = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get('http://localhost:4000/courses/all')
			.then((response) => {
				dispatch(saveCoursesAction(response.data?.result));
			})
			.catch((err) => console.log('Error saving courses:', err));
	}, []);
};

export const saveAuthors = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get('http://localhost:4000/authors/all')
			.then((response) => {
				dispatch(saveAuthorsAction(response.data?.result));
			})
			.catch((err) => console.log('Error saving authors:', err));
	}, []);
};

export const saveUser = async () => {
	const dispatch = useDispatch();
	const token = localStorage.getItem('token');
	if (token) {
		return await axios
			.get('http://localhost:4000/users/me', {
				headers: { Authorization: `${token}` },
			})
			.then((response) => {
				dispatch(
					saveUserAction({
						...response.data?.result,
						isAuth: true,
						token: `${token}`,
					})
				);
				return true;
			})
			.catch((err) => {
				console.log('Error saving user:', err);
				return false;
			});
	} else {
		return false;
	}
};

export const loginUser = async (email: string, password: string) => {
	return await axios
		.post('http://localhost:4000/login', {
			headers: { 'Content-Type': 'application/json' },
			email: email,
			password: password,
		})
		.then((response) => {
			const token = response?.data?.result?.toString();
			localStorage.setItem('token', token);
			return [true];
		})
		.catch((err) => {
			console.log('Error login user:', err);
			return [
				false,
				(
					err.response?.data?.errors?.join(',') ||
					err.response?.data?.result ||
					err.message ||
					'Error.'
				).toString(),
			];
		});
};

export const logoutUser = () => {
	localStorage.removeItem('token');
};

export const registerUser = async (
	name: string,
	email: string,
	password: string
) => {
	logoutUser();
	return await axios
		.post('http://localhost:4000/register', {
			headers: { 'Content-Type': 'application/json' },
			name: name,
			email: email,
			password: password,
		})
		.then(() => {
			return [true];
		})
		.catch((err) => {
			console.log('Error register user:', err);
			return [
				false,
				(
					err.response?.data?.errors?.join(',') ||
					err.response?.data?.result ||
					err.message ||
					'Error.'
				).toString(),
			];
		});
};

export const deleteCourseById = async (id: string) => {
	const token = localStorage.getItem('token');
	if (token) {
		return await axios
			.delete(`http://localhost:4000/courses/${id}`, {
				headers: {
					Authorization: `${token}`,
					'Content-Type': 'application/json',
				},
			})
			.then(() => {
				return true;
			})
			.catch((err) => {
				console.log('Error deleting course:', err);
			});
	}
};

export const createAuthorWithApi = async (name: string) => {
	const token = localStorage.getItem('token');
	if (token) {
		try {
			const response = await fetch('http://localhost:4000/authors/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `${token}`,
					accept: '*/*',
				},
				body: JSON.stringify({ name }),
			});
			if (response.ok) {
				const data = await response.json();
				return data.result.id;
			}
		} catch (err) {
			console.log('Error creatin author:', err);
		}
	}
};

export const createCourseWithApi = async (
	title: string,
	description: string,
	duration: number,
	authors: string[]
) => {
	const token = localStorage.getItem('token');
	if (token) {
		try {
			const response = await fetch('http://localhost:4000/courses/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `${token}`,
					accept: '*/*',
				},
				body: JSON.stringify({
					title,
					description,
					duration,
					authors,
				}),
			});
			if (response.ok) {
				const data = await response.json();
				return [true, data.result.id, data.result.creationDate];
			} else {
				return [false];
			}
		} catch (err) {
			console.log('Error creating course:', err);
		}
	}
};

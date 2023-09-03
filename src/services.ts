import axios from 'axios';

export const saveCoursesWithApi = async () => {
	return await axios
		.get('http://localhost:4000/courses/all', {
			headers: { 'Content-Type': 'application/json', accept: 'text/json' },
		})
		.then((response) => {
			return response.data?.result;
		});
};

export const saveAuthorsWithApi = async () => {
	return await axios
		.get('http://localhost:4000/authors/all', {
			headers: { 'Content-Type': 'application/json', accept: 'text/json' },
		})
		.then((response) => {
			return response.data?.result;
		});
};

export const saveUserWithApi = async () => {
	const token = localStorage.getItem('token');
	if (token) {
		return await axios
			.get('http://localhost:4000/users/me', {
				headers: { Authorization: `${token}` },
			})
			.then((response) => {
				return {
					...response.data?.result,
					isAuth: true,
					token: `${token}`,
				};
			});
	} else {
		return false;
	}
};

export const loginUserWithApi = async (email: string, password: string) => {
	return await axios
		.post('http://localhost:4000/login', {
			headers: { 'Content-Type': 'application/json' },
			email,
			password,
		})
		.then((response) => {
			const token = response?.data?.result?.toString();
			localStorage.setItem('token', token);
			return [true];
		});
};

export const logoutUserWithApi = async () => {
	const token = localStorage.getItem('token');
	if (token) {
		return await axios.delete('http://localhost:4000/users/me', {
			headers: { Authorization: `${token}` },
		});
	}
};

export const registerUserWithApi = async (
	name: string,
	email: string,
	password: string
) => {
	localStorage.removeItem('token');
	return await axios
		.post('http://localhost:4000/register', {
			headers: { 'Content-Type': 'application/json' },
			name: name,
			email: email,
			password: password,
		})
		.then(() => {
			return [true];
		});
};

export const deleteCourseWithApi = async (id: string) => {
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
			});
	}
};

export const addAuthorWithApi = async (name: string) => {
	const token = localStorage.getItem('token');
	if (token) {
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
			if (typeof data?.result?.id === 'string') {
				return data.result;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
};

export const addCourseWithApi = async (
	title: string,
	description: string,
	duration: number,
	authors: string[]
) => {
	const token = localStorage.getItem('token');
	if (token) {
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
			return data.result;
		} else {
			return false;
		}
	}
};

export const updateCourseWithApi = async (
	id: string,
	title: string,
	description: string,
	duration: number,
	authors: string[]
) => {
	const token = localStorage.getItem('token');
	if (token) {
		const response = await fetch(`http://localhost:4000/courses/${id}`, {
			method: 'PUT',
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
			return data.result;
		} else {
			return false;
		}
	}
};

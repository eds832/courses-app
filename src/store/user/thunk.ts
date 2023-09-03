import {
	loginUserWithApi,
	logoutUserWithApi,
	registerUserWithApi,
	saveUserWithApi,
} from './../../services';
import { deleteUserAction, loginFailAction, saveUserAction } from './actions';

export const loginUserThunk = (email: string, password: string) => {
	return async function (dispatch) {
		loginUserWithApi(email, password)
			.then(([loginSuccesful]) => {
				if (loginSuccesful) {
					dispatch(saveUserThunk());
				}
			})
			.catch((err) => {
				console.log('Error login user:', err);
				dispatch(
					loginFailAction(
						(
							err.response?.data?.errors?.join(',') ||
							err.response?.data?.result ||
							err.message ||
							'Error.'
						).toString()
					)
				);
			});
	};
};

export const registerUserThunk = (
	name: string,
	email: string,
	password: string
) => {
	return async function (dispatch) {
		registerUserWithApi(name, email, password)
			.then(([registerSuccesful]) => {
				if (!registerSuccesful) {
					dispatch(loginFailAction('Error.'));
				} else {
					dispatch(
						saveUserAction({
							isAuth: false,
							id: null,
							name: '',
							email: '',
							password: '',
							role: '',
							token: '',
							error: '',
						})
					);
				}
			})
			.catch((err) => {
				console.log('Error register user:', err);
				dispatch(
					loginFailAction(
						(
							err.response?.data?.errors?.join(',') ||
							err.response?.data?.result ||
							err.message ||
							'Error.'
						).toString()
					)
				);
			});
	};
};

export const deleteUserThunk = () => {
	return async function (dispatch) {
		logoutUserWithApi()
			.then(() => {
				localStorage.removeItem('token');
				dispatch(deleteUserAction());
			})
			.catch((err) => {
				console.log('Error logout user:', err);
				localStorage.removeItem('token');
				dispatch(deleteUserAction());
			});
	};
};

export const saveUserThunk = () => {
	return async function (dispatch) {
		saveUserWithApi()
			.then((user) => {
				if (user) {
					dispatch(saveUserAction(user));
				}
			})
			.catch((err) => console.log('Error saving user:', err));
	};
};

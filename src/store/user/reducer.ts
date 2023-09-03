import { UserType, UserActionTypes, UserAction } from './types';

export const userInitialState = {
	isAuth: false,
	id: null,
	name: '',
	email: '',
	password: '',
	role: '',
	token: '',
	error: null,
} as UserType;

export default function userReducer(
	state = userInitialState,
	action: UserAction
) {
	switch (action.type) {
		case UserActionTypes.SAVE_USER:
			return action.payload;

		case UserActionTypes.DELETE_USER:
			return {
				isAuth: false,
				id: null,
				name: '',
				email: '',
				password: '',
				role: '',
				token: '',
				error: null,
			};

		case UserActionTypes.LOGIN_FAIL:
			return {
				isAuth: false,
				id: null,
				name: '',
				email: '',
				password: '',
				role: '',
				token: '',
				error: action.payload,
			};

		default:
			return state;
	}
}

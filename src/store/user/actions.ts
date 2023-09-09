import { UserType, UserActionTypes } from './types';

export type DeleteUserAction = {
	type: UserActionTypes.DELETE_USER;
	payload: string;
};

export const deleteUserAction = (): DeleteUserAction => ({
	type: UserActionTypes.DELETE_USER,
	payload: null,
});

export type SaveUserAction = {
	type: UserActionTypes.SAVE_USER;
	payload: UserType;
};

export const saveUserAction = (userData: UserType): SaveUserAction => ({
	type: UserActionTypes.SAVE_USER,
	payload: userData,
});

export type LoginFailAction = {
	type: UserActionTypes.LOGIN_FAIL;
	payload: string;
};

export const loginFailAction = (message: string): LoginFailAction => ({
	type: UserActionTypes.LOGIN_FAIL,
	payload: message,
});

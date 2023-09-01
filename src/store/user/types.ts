export const enum UserActionTypes {
	SAVE_USER = 'SAVE_USER',
	DELETE_USER = 'DELETE_USER',
}

export type UserType = {
	isAuth: boolean;
	id: string | null;
	name: string;
	email: string;
	password: string;
	role: string;
	token: string;
};

export interface SaveUser {
	type: UserActionTypes.SAVE_USER;
	payload: UserType;
}

export interface DeleteUser {
	type: UserActionTypes.DELETE_USER;
	payload: null;
}

export type UserAction = SaveUser | DeleteUser;

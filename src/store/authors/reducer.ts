import { AuthorsActionTypes, AuthorsAction, AuthorType } from './types';

export const authorsInitialState = [] as AuthorType[];

export default function authorsReducer(
	state = authorsInitialState,
	action: AuthorsAction
) {
	switch (action.type) {
		case AuthorsActionTypes.SAVE_AUTHORS:
			return action.payload;

		case AuthorsActionTypes.ADD_AUTHOR:
			return [...state, action.payload];

		default:
			return state;
	}
}

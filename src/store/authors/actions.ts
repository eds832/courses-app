import { AuthorType, AuthorsActionTypes } from './types';

export type AddNewAuthorAction = {
	type: AuthorsActionTypes.ADD_AUTHOR;
	payload: AuthorType;
};

export const addNewAuthorAction = (
	authorData: AuthorType
): AddNewAuthorAction => ({
	type: AuthorsActionTypes.ADD_AUTHOR,
	payload: authorData,
});

export type SaveAuthorsAction = {
	type: AuthorsActionTypes.SAVE_AUTHORS;
	payload: AuthorType[];
};

export const saveAuthorsAction = (
	authorData: AuthorType[]
): SaveAuthorsAction => ({
	type: AuthorsActionTypes.SAVE_AUTHORS,
	payload: authorData,
});

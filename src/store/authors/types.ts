export const enum AuthorsActionTypes {
	SAVE_AUTHORS = 'SAVE_AUTHORS',
	ADD_AUTHOR = 'ADD_AUTHOR',
	DELETE_AUTHOR = 'DELETE_AUTHOR',
}

export type AuthorType = {
	id: string;
	name: string;
};

export interface SaveAuthor {
	type: AuthorsActionTypes.SAVE_AUTHORS;
	payload: AuthorType[];
}

export interface AddAuthor {
	type: AuthorsActionTypes.ADD_AUTHOR;
	payload: AuthorType;
}

export type AuthorsAction = SaveAuthor | AddAuthor;

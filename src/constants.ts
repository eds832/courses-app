export const SHOW_COURSE_BUTTON_TEXT = 'SHOW COURSE';

export const ADD_NEW_COURSE_BUTTON_TEXT = 'ADD NEW COURSE';

export const LOGIN_BUTTON_TEXT = 'LOGIN';

export const LOGOUT_BUTTON_TEXT = 'LOGOUT';

export const SEARCH_BUTTON_TEXT = 'SEARCH';

export const EMPTY_COURSE_LIST_TITLE = 'Course List is Empty';

export const EMPTY_COURSE_LIST_SUBTITLE =
	'Please use "Add New Course" button to add your first course';

export const BACK_COURSE_BUTTON_TEXT = 'BACK';

export const LOGIN_FORM_ACCOUTN_LINE_TEXT = `If you don't have an accournt you may`;

export const REGISTRATION_FORM_ACCOUTN_LINE_TEXT =
	'If you have an accournt you may ';

export const PASSWORD_LABLE_TEXT = 'Password';

export const EMAIL_LABLE_TEXT = 'Email';

export const EMAIL_ERROR_MESSAGE = 'Email is required.';

export const PASSWORD_ERROR_MESSAGE = 'Password is required.';

export const NAME_LABLE_TEXT = 'Name';

export const NAME_ERROR_MESSAGE = 'Name is required.';

export const LOGIN_FORM_TITLE = 'Login';

export const REGISTRATION_FORM_TITLE = 'Registration';

export const TITLE_ERROR_MESSAGE = 'Title is required.';

export const DESCRIPTION_ERROR_MESSAGE = 'Description is required.';

export const DURATION_ERROR_MESSAGE = 'Duration is required.';

export const AUTHORS_ERROR_MESSAGE = 'Authors are required.';

export const AUTHOR_ERROR_MESSAGE = 'Author name is required.';

export const TITLE_LABLE_TEXT = 'Title';

export const DESCRIPTION_LABLE_TEXT = 'Description';

export const DURATION_LABLE_TEXT = 'Duration';

export const AUTHORS_LABLE_TEXT = 'Author name';

export const CREATE_COURSE_FORM_TITLE = 'Course Edit/Create Page';

export const CREATE_COURSE_FORM_SUBTITLE = 'Main Info';

export const CREATE_COURSE_BUTTON_TEXT = 'CREATE COURSE';

export const CANCEL_BUTTON_TEXT = 'CANCEL';

export const AUTHORS_SUBTITLE_TEXT = 'Authors';

export const CREATE_AUTHOR_BUTTON_TEXT = 'CREATE AUTHOR';

export const AUTONRS_LIST = 'Authors List';

export const COURSE_AUTHORS = 'Course Authors';

export const AUTHOR_LIST_EMPTY = 'Author list is empty';

export const DONT_HAVE_PERMISSONS = `You don't have permissions to create a course. Please log in as
ADMIN`;

export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
		creationDate: '08/03/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

import { CourseType, CoursesActionTypes, CoursesAction } from './types';

export const coursesInitialState = [] as CourseType[];

export default function coursesReducer(
	state = coursesInitialState,
	action: CoursesAction
) {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSES:
			return action.payload;

		case CoursesActionTypes.ADD_COURSE:
			return [...state, action.payload];

		case CoursesActionTypes.DELETE_COURSE:
			return state.filter((c) => c.id !== action.payload);

		case CoursesActionTypes.UPDATE_COURSE:
			return [
				...state.filter((c) => c.id !== action.payload.id),
				action.payload,
			];

		default:
			return state;
	}
}

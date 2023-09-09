import {
	saveCoursesWithApi,
	deleteCourseWithApi,
	addCourseWithApi,
	updateCourseWithApi,
} from './../../services';
import {
	addNewCourseAction,
	deleteCourseAction,
	saveCoursesAction,
	updateCourseAction,
} from './actions';
import { CourseType } from './types';

export const saveCoursesThunk = () => {
	return async function (dispatch) {
		saveCoursesWithApi()
			.then((courses) => dispatch(saveCoursesAction(courses)))
			.catch((err) => console.log('Error saving courses:', err));
	};
};

export const deleteCourseThunk = (id: string) => {
	return async function (dispatch) {
		deleteCourseWithApi(id)
			.then((success) => {
				if (success) {
					dispatch(deleteCourseAction(id));
				}
			})
			.catch((err) => console.log('Error deleting course:', err));
	};
};

export const addCourseThunk = (newCourse: CourseType) => {
	return async function (dispatch) {
		addCourseWithApi(
			newCourse.title,
			newCourse.description,
			newCourse.duration,
			newCourse.authors
		)
			.then((response) => {
				if (response) {
					dispatch(addNewCourseAction(response));
				}
			})
			.catch((err) => console.log('Error adding course:', err));
	};
};

export const updateCourseThunk = (updatedCourse: CourseType) => {
	return async function (dispatch) {
		updateCourseWithApi(
			updatedCourse.id,
			updatedCourse.title,
			updatedCourse.description,
			updatedCourse.duration,
			updatedCourse.authors
		)
			.then((response) => {
				if (response) {
					dispatch(updateCourseAction(response));
				}
			})
			.catch((err) => console.log('Error updating course:', err));
	};
};

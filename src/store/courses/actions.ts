import { CourseType, CoursesActionTypes } from './types';

export type AddNewCourseAction = {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseType;
};

export const addNewCourseAction = (
	courseData: CourseType
): AddNewCourseAction => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});

export type DeleteCourseAction = {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
};

export const deleteCourseAction = (id: string): DeleteCourseAction => ({
	type: CoursesActionTypes.DELETE_COURSE,
	payload: id,
});

export type SaveCoursesAction = {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: CourseType[];
};

export const saveCoursesAction = (
	courseData: CourseType[]
): SaveCoursesAction => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload: courseData,
});

export type UpdateCoursesAction = {
	type: CoursesActionTypes.UPDATE_COURSE;
	payload: CourseType[];
};

export const updateCoursesAction = (
	courseData: CourseType[]
): UpdateCoursesAction => ({
	type: CoursesActionTypes.UPDATE_COURSE,
	payload: courseData,
});

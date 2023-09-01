import { RootState } from './../store/index';

export const getCourses = (state: RootState) => state?.courses;
export const getAuthors = (state: RootState) => state?.authors;
export const getUser = (state: RootState) => state?.user;

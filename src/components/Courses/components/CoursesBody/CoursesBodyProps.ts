import { CourseType } from './../../../../store/courses/types';
import { AuthorType } from './../../../../store/authors/types';

export interface CoursesBodyProps {
	courseList: CourseType[];
	authorList: AuthorType[];
}

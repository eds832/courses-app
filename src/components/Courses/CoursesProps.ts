import { CourseType } from './../../store/courses/types';
import { AuthorType } from './../../store/authors/types';

export interface CoursesProps {
	onLogout: () => void;
	courseList: CourseType[];
	authorList: AuthorType[];
}

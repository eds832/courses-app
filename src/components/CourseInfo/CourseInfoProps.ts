import { AuthorType } from './../../store/authors/types';
import { CourseType } from './../../store/courses/types';

export interface CourseInfoProps {
	onLogout: () => void;
	courseList: CourseType[];
	authorList: AuthorType[];
}

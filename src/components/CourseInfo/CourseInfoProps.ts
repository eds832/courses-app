import { Author } from '../Courses/Author';
import { Course } from '../Courses/Course';

export interface CourseInfoProps {
	onLogout: () => void;
	courseList: Course[];
	authorList: Author[];
}

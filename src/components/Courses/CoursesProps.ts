import { Author } from './Author';
import { Course } from './Course';

export interface CoursesProps {
	onLogout: () => void;
	courseList: Course[];
	authorList: Author[];
}

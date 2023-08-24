import { Author } from '../../Author';
import { Course } from '../../Course';

export interface CoursesBodyProps {
	courseList: Course[];
	authorList: Author[];
}

import { Author } from './Author';
import { Course } from './Course';

export interface CoursesProps {
	courseList: Course[];
	authorList: Author[];
	onShowCourseClicked: (courseId: string) => void;
}

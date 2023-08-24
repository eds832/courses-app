import { Author } from '../Courses/Author';
import { Course } from '../Courses/Course';

export interface CreateCourseProps {
	createCourse: (course: Course) => void;
	createAuthor: (course: Author) => void;
	onLogout: () => void;
	authorList: Author[];
	onDeleteAuthorClicked: (id: string) => boolean;
}

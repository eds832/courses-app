import { AuthorType } from './../../store/authors/types';
import { CourseType } from './../../store/courses/types';

export interface CreateCourseProps {
	createCourse: (course: CourseType) => void;
	createAuthor: (course: AuthorType) => Promise<boolean>;
	onLogout: () => void;
	authorList: AuthorType[];
	onDeleteAuthorClicked: (id: string) => boolean;
}

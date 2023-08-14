export interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: string | number;
	authors: string[];
	onShowCourseClicked?: (courseId: string) => void;
}

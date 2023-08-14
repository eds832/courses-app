export interface CourseCardProps {
	onShowCourseClicked: (courseId: string) => void;
	id: string;
	title: string;
	description: string;
	authors: string;
	duration: string;
	created: string;
}

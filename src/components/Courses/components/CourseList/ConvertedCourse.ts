export interface ConvertedCourse {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: string;
	authors: string[];
	onShowCourseClicked: (id: string) => void;
}

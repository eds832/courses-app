import { Course } from './../components/Courses/Course';
import { Author } from './../components/Courses/Author';
import formatCrationDate from './formatCreationDate';
import getCourseDuration from './getCourseDuration';
import stringToDateConvertor from './stringToDateConvertor';

const coursesListConvertor = (courseList: Course[], authorList: Author[]) => {
	return courseList.map((course) => {
		return {
			...course,
			duration: getCourseDuration(+course.duration),
			creationDate: formatCrationDate(
				stringToDateConvertor(course.creationDate)
			),
			authors: course.authors.map((authorId: string) => {
				const author = authorList.find((author) => author.id === authorId);
				return author ? author.name : authorId;
			}),
		};
	});
};

export default coursesListConvertor;

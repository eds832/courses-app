import { CourseType } from './../store/courses/types';
import formatCrationDate from './formatCreationDate';
import getCourseDuration from './getCourseDuration';
import stringToDateConvertor from './stringToDateConvertor';
import { AuthorType } from './../store/authors/types';

const coursesListConvertor = (
	courseList: CourseType[],
	authorList: AuthorType[]
) => {
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

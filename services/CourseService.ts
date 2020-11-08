
import { Helpers } from '../helpers/coursesData';

export async function getCourseList() {
    console.log(Helpers.coursesData)
    return Promise.all(Helpers.coursesData);
}
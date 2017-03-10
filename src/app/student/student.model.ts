import { Course } from '../course/course.model';

export class Student {
    public id: number;
    public name: string;
    public email: string;
    public courses: Course[];

    constructor(
        id: number,
        name: string,
        email: string
    ) {}
}


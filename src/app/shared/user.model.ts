import { Course } from '../course/course.model';

export class User {
  public id: number;
  public name: string;
  public email: string;
  public password: string;
  public type: number;
  public courses: Course[];

  constructor(
      id: number,
      name: string,
      email: string
  ) {}
}


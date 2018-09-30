
export class User {
  public _id: string;
  public name: string;
  public email: string;
  public password: string;
  public type: number;
  public courses: Object[];

  constructor(
      id: string,
      name: string,
      email: string,
      courses: Object[]
  ) {
    this._id = id;
    this.email = email;
    this.courses = Object.assign(courses);
  }
}


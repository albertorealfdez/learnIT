import { StudentMap } from '../course/student-map';
import { User } from '../shared/user.model';
import { Activity } from '../shared/activity/activity.model';
import { Course } from '../course';

export class Student extends User {
    public activities: string[];
    public maps: StudentMap[];

    constructor(id: string, name: string, email: string, courses: Course[], activities: string[], maps: StudentMap[]) {
        super(id, name, email, courses);
        this._id = id;
        this.name = name;
        this.email = email;
        this.courses = courses;
        this.activities = activities;
        this.maps = maps;
    }
}


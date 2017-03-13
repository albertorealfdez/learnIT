import { StudentMap } from './student-map.model';
import { User } from '../shared/user.model';
import { Activity } from '../shared/activity.model';
import { Course } from '../course';

export class Student extends User {
    public activities: Activity[];
    public map: StudentMap;

    constructor(id: number, name: string, email: string, courses: Course[], activities: Activity[], map: StudentMap) {
        super(id, name, email, courses);
        this.id = id;
        this.name = name;
        this.email = email;
        this.courses = courses;
        this.activities = activities;
        this.map = map;
    }
}


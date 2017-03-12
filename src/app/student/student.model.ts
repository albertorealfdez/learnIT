import { User } from '../shared/user.model';
import { Activity } from '../shared/activity.model';

export class Student extends User {
    public activities: Activity[];

    constructor(id: number, name: string, email: string) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.activities = [];
    }
}


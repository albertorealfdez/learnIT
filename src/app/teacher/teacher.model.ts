import { User } from '../shared/user.model';

export class Teacher extends User {
    constructor(
        id: number,
        name: string,
        email: string
    ) {
        super(id, name, email);
    }
}


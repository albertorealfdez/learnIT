import { User } from '../shared/user.model';

export class Teacher extends User {
    constructor(
        id: number,
        name: string,
        email: string
    ) {
        super(id, name, email);
        // TODO: check why twice
        this.id = id;
        this.name = name;
        this.email = email;
    }
}


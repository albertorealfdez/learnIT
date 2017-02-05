import { InMemoryDbService } from 'angular-in-memory-web-api';

import { COURSES } from './mocks/courses.json';
import { USERS } from './mocks/users.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = USERS;
    let courses = COURSES;

    return { users, courses };
  }
}

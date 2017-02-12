import { InMemoryDbService } from 'angular-in-memory-web-api';

import { COURSES } from './mocks/courses.json';
import { USERS } from './mocks/users.json';
import { COMPETENCES } from './mocks/competences.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = USERS;
    let courses = COURSES;
    let competences = COMPETENCES;

    return { users, courses, competences };
  }
}

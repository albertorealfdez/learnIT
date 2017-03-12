import { InMemoryDbService } from 'angular-in-memory-web-api';

import { COURSES } from '../mocks/courses.json';
import { USERS } from '../mocks/users.json';
import { STUDENTS } from '../mocks/students.json';
import { COMPETENCES } from '../mocks/competences.json';
import { ACTIVITIES } from '../mocks/activities.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = USERS;
    let students = STUDENTS;
    let courses = COURSES;
    let competences = COMPETENCES;
    let activities = ACTIVITIES;

    return { users, students, courses, competences, activities };
  }
}

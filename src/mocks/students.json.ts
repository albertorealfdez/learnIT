import { StudentMap } from '../app/student/student-map.model';
import { Student } from '../app/student/student.model';
import { COURSES } from './courses.json';

let DEFAULT_MAP: StudentMap = {
  competences: []
};

export let STUDENTS: Student[] = [
  { id: 1, name: 'Alberto', email: 'albertorealfdez@gmail.com', password: '123', type: 0, courses: COURSES, activities: [], map: DEFAULT_MAP },
  { id: 2, name: 'José', email: 'jose@jose.es', password: '123', type: 0, courses: COURSES, activities: [], map: DEFAULT_MAP },
  { id: 3, name: 'Alberto', email: 'arf34@alu.ua.es', password: '1234', type: 1, courses: COURSES, activities: [], map: DEFAULT_MAP},
  { id: 4, name: 'Javi', email: 'javi@javi.es', password: '1234', type: 1, courses: COURSES, activities: [], map: DEFAULT_MAP }
];

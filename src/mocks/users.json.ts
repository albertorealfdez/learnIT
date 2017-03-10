import { User } from '../app/shared/user.model';
import { COURSES } from './courses.json';

export let USERS: User[] = [
  { id: 1, name: 'Alberto', email: 'albertorealfdez@gmail.com', password: '123', type: 0, courses: COURSES },
  { id: 2, name: 'José', email: 'jose@jose.es', password: '123', type: 0, courses: COURSES },
  { id: 3, name: 'Marcos', email: 'marcos@marcos.es', password: '1234', type: 1, courses: COURSES },
  { id: 4, name: 'Javi', email: 'javi@javi.es', password: '1234', type: 1, courses: COURSES }
];

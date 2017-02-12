import { Course } from '../course/course.model';
import { COMPETENCES } from './competences.json';
import { ACTIVITIES } from './activities.json';

export let COURSES: Course[] = [
  { id: 1, key: 'LC', name: 'Lógica Computacional', year: 2016, competences: COMPETENCES, activities: ACTIVITIES },
  { id: 2, key: 'DETI', name: 'Dirección Estratégica de TI', year: 2016, competences: COMPETENCES, activities: ACTIVITIES },
];

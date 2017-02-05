import { Course } from '../course/course.model';
import { COMPETENCES } from './competences.json';

export let COURSES: Course[] = [
  { id: 1, key: 'LC', name: 'Lógica Computacional', year: 2016, competences: COMPETENCES },
  { id: 2, key: 'DETI', name: 'Dirección Estratégica de TI', year: 2016, competences: COMPETENCES },
]
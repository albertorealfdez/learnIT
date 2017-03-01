import { COMPETENCES, COMPETENCES1, COMPETENCES2 } from './competences.json';
import { Activity } from '../course/activity/activity.model';

export let ACTIVITIES: Activity[] = [
  { id: 1, key: 'A1', type: 1, title: 'Actividad 1', abstract: '', content: '', competences: COMPETENCES1 },
  { id: 2, key: 'A2', type: 1, title: 'Actividad 2', abstract: '', content: '', competences: COMPETENCES1 },
  { id: 3, key: 'A3', type: 2, title: 'Actividad 3', abstract: '', content: '', competences: COMPETENCES2 },
  { id: 4, key: 'A4', type: 3, title: 'Actividad 4', abstract: '', content: '', competences: COMPETENCES2 },
  { id: 5, key: 'A5', type: 3, title: 'Actividad 5', abstract: '', content: '', competences: COMPETENCES1 },
];


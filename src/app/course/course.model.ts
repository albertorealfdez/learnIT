import { Competence } from '../shared/competence/competence.model';
import { Activity } from '../shared/activity/activity.model';

export class Course {
  public id: number;
  public key: string;
  public name: string;
  public year: number;
  public competences: Competence[];
  public activities: Activity[];
}

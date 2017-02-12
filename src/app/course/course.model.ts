import { Competence } from './competence';
import { Activity } from './activity';

export class Course {
  public id: number;
  public key: string;
  public name: string;
  public year: number;
  public competences: Competence[];
  public activities: Activity[];
}

import { Competence } from './competence';

export class Course {
  public id: number;
  public key: string;
  public name: string;
  public year: number;
  public competences: Competence[];
}

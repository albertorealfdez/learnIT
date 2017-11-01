import { Competence } from '../competence/competence.model';

export class Activity {
  public id: number;
  public key: string;
  public title: string;
  public abstract: string;
  public competences: Competence[];
  public choices: string[];
  public difficulty: number;
}

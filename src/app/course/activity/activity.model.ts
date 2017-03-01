import { Competence } from '../competence';

export class Activity {
  public id: number;
  public key: string;
  public type: number;
  public title: string;
  public abstract: string;
  public content: string;
  public competences: Competence[];
}

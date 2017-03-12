import { Competence } from '../shared/competence.model';

export class Activity {
  public id: number;
  public key: string;
  public type: number;
  public title: string;
  public abstract: string;
  public content: string;
  public competences: Competence[];
  public answers: Object[]; // TODO: change to real one
}

import { Competence, StudentCompetence } from './competence/';
import { Activity } from '../shared/activity/activity.model';

export class Utils {
  public static elementExists<T extends Competence | StudentCompetence | Activity>(element: T, elementArray: T[]): boolean {
    for (let arrayElement of elementArray) {
      if (element._id === arrayElement._id) {
        return true;
      }
    }
    return false;
  }
}

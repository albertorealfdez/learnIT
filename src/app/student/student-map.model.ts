import { Competence } from '../shared/competence.model';
import { StudentCompetence } from './student-competence.model';

export class StudentMap {
    public competences: StudentCompetence[];

    constructor(competences?: Competence[]) {
        this.competences = [];

        for (let competence of competences) {
            this.competences.push(new StudentCompetence(competence));
        }
    }
}

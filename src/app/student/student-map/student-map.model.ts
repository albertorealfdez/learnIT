import { Competence } from '../../shared/competence/competence.model';
import { StudentCompetence } from '../../shared/competence/student-competence.model';

export class StudentMap {
    public courseKey: string;
    public competences: StudentCompetence[];

    constructor(competences?: Competence[]) {
        this.courseKey = "";
        this.competences = [];

        for (let competence of competences) {
            this.competences.push(new StudentCompetence(competence));
        }
    }
}

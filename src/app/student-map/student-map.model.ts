import { Competence } from '../shared/competence/competence.model';
import { StudentCompetence } from '../shared/competence/student-competence.model';

export class StudentMap {
    public courseId: string;
    public competences: StudentCompetence[];

    constructor(competences?: Competence[]) {
        this.courseId = "";
        this.competences = [];

        for (let competence of competences) {
            this.competences.push(new StudentCompetence(competence));
        }
    }
}

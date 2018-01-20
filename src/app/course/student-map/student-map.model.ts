import { Competence } from '../../shared/competence/competence.model';
import { StudentCompetence } from '../../shared/competence/student-competence.model';

export class StudentMap {
    public id: string;
    public courseId: string;
    public competences: StudentCompetence[];
    
    constructor(id: string, courseId: string = "", competences: StudentCompetence[] = []) {
        this.courseId = courseId;
        this.competences = competences;
    }
}

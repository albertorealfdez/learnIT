import { Competence } from '../../shared/competence/competence.model';
import { StudentCompetence } from '../../shared/competence/student-competence.model';
import { Connection } from 'app/shared/competence/connection.model';

export class StudentMap {
    public id: string;
    public courseId: string;
    public competences: StudentCompetence[];
    //public connections: Connection[];
    public connections: any[];
    
    constructor(id: string, courseId: string = "", competences: StudentCompetence[] = [], connections: Connection[] = []) {
        this.courseId = courseId;
        this.competences = competences;
        this.connections = connections;
    }
}

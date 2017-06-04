import { Competence } from '../shared/competence.model';

export class StudentCompetence extends Competence {
    public force: number;
    public completed: boolean;
    public unlocked: boolean;

    constructor(competence?: Competence) {
        // TODO: set parent properties correctly
        super();
        this.id = competence.id;
        this.key = competence.key;
        this.title = competence.title;
        this.threshold = competence.threshold;

        this.force = 0;
        this.completed = false;
        this.unlocked = false;
    }
}
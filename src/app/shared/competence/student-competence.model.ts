import { Competence } from '../competence/competence.model';

export class StudentCompetence extends Competence {
    public force: number;
    public completed: boolean;
    public locked: boolean;

    constructor(id, key, title, minThreshold, maxThreshold, force, completed, locked) {
        // TODO: set parent properties correctly
        super();
        this._id = id;
        this.key = key;
        this.title = title;
        this.minThreshold = minThreshold;
        this.maxThreshold = maxThreshold;
        this.force = force;
        this.completed = completed;
        this.locked = locked;
    }
}
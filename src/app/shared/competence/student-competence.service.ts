import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { StudentCompetence } from './student-competence.model';

@Injectable()
export class StudentCompetenceService {
  private competenceUrl = 'api/studentcompetences';

  constructor(private http: HttpClient) { }

  public getAllCompetences(): Observable<StudentCompetence[]> {
    const url = `${this.competenceUrl}`;

    return this.http.get(url)
      .map(response => {
        return response as StudentCompetence[];
      })
      .catch(this.handleError);
  }

  public getCompetence(id: string): Observable<StudentCompetence> {
    const url = `${this.competenceUrl}/${id}`;

    return this.http.get(url)
      .map(response => {
        return response as StudentCompetence;
      })
      .catch(this.handleError);
  }

  public updateCompetence(competence: StudentCompetence): Observable<StudentCompetence> {
    const url = `${this.competenceUrl}/${competence._id}`;

    return this.http.put(url, competence)
      .map(response => {
        return response as StudentCompetence;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}

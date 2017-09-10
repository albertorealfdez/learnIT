import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { Competence } from '../../shared/competence/competence.model';

@Injectable()
export class DashboardCompetenceService {
  private competenceUrl = 'api/competences';

  constructor(private http: Http) { }

  public createCompetence(competence: Competence): Observable<Competence> {
    const url = `${this.competenceUrl}`;

    return this.http.post(url, competence)
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }

  public updateCompetence(competence: Competence): Observable<Competence> {
    const url = `${this.competenceUrl}/${competence.id}`;

    return this.http.put(url, competence)
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { Competence } from '../../shared/competence/competence.model';

@Injectable()
export class CompetenceService {
  private competenceUrl = 'api/competences';

  constructor(private http: HttpClient) { }

  public createCompetence(competence: Competence): Observable<Competence> {
    const url = `${this.competenceUrl}`;

    return this.http.post(url, competence)
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }

  public updateCompetence(competence: Competence): Observable<Competence> {
    const url = `${this.competenceUrl}/${competence._id}`;
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

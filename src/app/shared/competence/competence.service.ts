import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { Competence } from './competence.model';

@Injectable()
export class CompetenceService {
  private competenceUrl = 'api/competences';

  constructor(private http: HttpClient) { }

  public getAllCompetences(): Observable<Competence[]> {
    const url = `${this.competenceUrl}`;

    return this.http.get(url)
      .map(response => {
        return response as Competence[];
      })
      .catch(this.handleError);
  }

  public getCompetence(id: number): Observable<Competence> {
    const url = `${this.competenceUrl}/${id}`;

    return this.http.get(url)
      .map(response => {
        return response as Competence;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}

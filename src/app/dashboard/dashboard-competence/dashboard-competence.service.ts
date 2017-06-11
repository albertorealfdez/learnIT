import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Competence } from '../../shared/competence/competence.model';

@Injectable()
export class DashboardCompetenceService {
  private competenceUrl = 'api/competences';

  constructor(private http: Http) { }

  public createCompetence(competence: Competence): Promise<Competence> {
    const url = `${this.competenceUrl}`;

    return this.http.post(url, competence)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }

  public updateCompetence(competence: Competence): Promise<Competence> {
    const url = `${this.competenceUrl}/${competence.id}`;

    return this.http.put(url, competence)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

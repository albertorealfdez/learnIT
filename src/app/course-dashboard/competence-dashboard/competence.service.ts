import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Competence } from '../../shared/competence.model';

@Injectable()
export class CompetenceService {
  private competenceUrl = 'api/competences';

  constructor(private http: Http) { }

  public getAllCompetences(): Promise<Competence[]> {
    const url = `${this.competenceUrl}`;

    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json().data as Competence[];
      })
      .catch(this.handleError);
  }

  public getCompetence(id: number): Promise<Competence> {
    const url = `${this.competenceUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json().data as Competence;
      })
      .catch(this.handleError);
  }

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
    console.log('HERE: ', competence, url);
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

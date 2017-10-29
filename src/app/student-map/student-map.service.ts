import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { StudentMap } from './student-map.model';

@Injectable()
export class StudentMapService {
  private studentMapsUrl = 'api/studentmaps';

  constructor(private http: HttpClient) {}

  public getStudentMap(id: string): Observable<StudentMap> {
    const url = `${this.studentMapsUrl}/${id}`;

    return this.http.get(url)
      .map(response => response as StudentMap)
      .catch(this.handleError);
  }

  public updateStudentMap(map: StudentMap): Observable<StudentMap> {
    const url = `${this.studentMapsUrl}/${map.id}`;

    return this.http.put(url, map)
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

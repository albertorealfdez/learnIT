import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../shared/user.model';

@Injectable()
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: Http) { }

  public getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map(response => {
        return response.json().data as User[];
      })
      .catch(this.handleError);
  }

  public getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.get(url)
      .map(response => response.json().data as User)
      .catch(this.handleError);
  }

  public getUserByEmail(email: string): Observable<User> {
    const url = `${this.usersUrl}?email=${email}`;

    return this.http.get(url)
      .map(response => response.json().data[0] as User)
      .catch(this.handleError);
  }

  public updateUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/${user.id}`;

    return this.http.put(url, user)
      .map(response => response.json().data as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}

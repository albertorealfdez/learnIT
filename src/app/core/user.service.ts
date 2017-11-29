import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../shared/user.model';
import { Student } from '../student';

@Injectable()
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }
  
  public logout(): void {
    localStorage.removeItem('user');    
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  public getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map(response => {
        return response as User[];
      })
      .catch(this.handleError);
  }

  public getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.get(url)
      .map(response => response as User)
      .catch(this.handleError);
  }

  public getUserByEmail(email: string): Observable<User> {
    const url = `${this.usersUrl}?email=${email}`;

    return this.http.get(url)
      .map(response => response as User)
      .catch(this.handleError);
  }

  public updateUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/${user._id}`;

    return this.http.put(url, user)
      .map(response => response as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}

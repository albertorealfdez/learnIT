import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../shared/user.model';

@Injectable()
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: Http) { }

  public getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => {
        return response.json().data as User[];
      })
      .catch(this.handleError);
  }

  public getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  public getUserByEmail(email: string): Promise<User> {
    const url = `${this.usersUrl}?email=${email}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data[0] as User)
      .catch(this.handleError);
  }

  public updateUser(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;

    return this.http.put(url, user)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { sha256 } from 'js-sha256';
import { JwtHelperService } from '@auth0/angular-jwt';

// import { API_SESSIONS_TOKEN } from '../shared/tokens';
import { CustomErrorHandler } from './error-handler';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class AuthService extends CustomErrorHandler {
  private jwtHelper: JwtHelperService;

  constructor(private http: HttpClient, protected loggerService: LoggerService, /*@Inject(API_SESSIONS_TOKEN)*/ public apiUrl: string) {
    super(loggerService);
    this.jwtHelper = new JwtHelperService();
   }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  /*public login(user: UserLogin): Observable<any> {
    user.password = sha256(user.password);

    return this.http.post(this.apiUrl, user).pipe(
      map((response: Response) => response),
      tap(_ => this.loggerService.info(AuthService.name, `User ${user.email} logged in`)),
      catchError((error) => {
        this.loggerService.warn(AuthService.name, `User ${user.email} failed to log in`);
        return this.handleError<any>(error, AuthService.name, 'Login')
      })
    );
  }*/

  public logout(): Observable<any> {
    const token = this.decodeToken();
    return this.http.delete(`${this.apiUrl}/${token.session}`).pipe(
      map((response: Response) => response),
      tap(_ => this.loggerService.info(AuthService.name, `User ${token.sub} logged out`)),
      catchError((error) => {
        this.loggerService.warn(AuthService.name, `User ${token.sub} failed to log out`);
        return this.handleError<any>(error, AuthService.name, 'Logout');
      })
    );
  }

  private decodeToken(): any {
    return this.jwtHelper.decodeToken(this.getToken());
  }

  public getLoggedUserId(): number {
    const token = this.decodeToken();

    return token.sub;
  }

  public getLoggedUserRole(): string {
    const token = this.decodeToken();

    return token.role.toString();
  }
}

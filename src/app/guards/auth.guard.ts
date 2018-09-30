import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private loggerService: LoggerService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLoggedIn()) {
      this.loggerService.warn('AuthGuard', `Not logged user has tried to access ${state.url}`);
      this.router.navigate(['login']);
      return false;
    }
    const loggerUserId = this.authService.getLoggedUserId();

    /*if (!this.userService.isUserSet) {
      this.userService.getById(loggerUserId).subscribe(user => {
        this.userService.changeCurrentUser(user);
      });
    }
    this.loggerService.info('AuthGuard', `User ${loggerUserId} has accessed ${state.url}`);
    */
    return true;
  }
}

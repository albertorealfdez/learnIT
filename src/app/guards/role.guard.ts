import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private loggerService: LoggerService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole: string = route.data.expectedRole;
    const loggerUserId = this.authService.getLoggedUserId();

    if (this.authService.getLoggedUserRole() !== expectedRole) {
      this.loggerService.info('RoleGuard', `User ${loggerUserId} not authorized to access ${state.url}`);
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'app/core/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  public logout() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}

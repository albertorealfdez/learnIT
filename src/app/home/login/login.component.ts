import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public userLogin: any = { // Move to separate class
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.loginUser();
  }

  public loginUser(): void {
    this.userService.getUserByEmail(this.userLogin.email)
      .subscribe(user => {
        if (user.password === this.userLogin.password) {
          sessionStorage.setItem('user', user.id.toString()); // Temporal session
          if (user.type === 0) {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/student']);
          }
        } else {
          console.error('Login incorrecto');
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
      .then(user => {
        if (user.password === this.userLogin.password) {
          if (user.type === 0) {
            this.router.navigate(['/teacher']);
          }
        } else {
          console.error('Login incorrecto');
        }
      });
  }
}

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
        if (user && user.password === this.userLogin.password) {
          console.log(user);
          sessionStorage.setItem('user', user._id); // Temporal session
          // Temporary there will be only students
          this.router.navigate(['/student']);
        } else {
          console.error('Login incorrecto');
        }
      });
  }
}

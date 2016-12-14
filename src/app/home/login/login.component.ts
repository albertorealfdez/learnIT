import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin: any = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    console.log('Submitted', this.userLogin);
    this.loginUser();
  }

  public loginUser(): void {
    this.userService.getUserById(this.userLogin.password)
      .then(user => {
        if (user.type === 0) {
          this.router.navigate(['/teacher']);        
        }
        return true;
      });
  }
}

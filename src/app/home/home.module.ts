import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    FormsModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent
  ]
})

export class HomeModule { }

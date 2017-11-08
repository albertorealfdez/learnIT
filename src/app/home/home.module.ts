import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent
  ]
})

export class HomeModule { }

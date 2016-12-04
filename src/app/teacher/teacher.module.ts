import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    TeacherRoutingModule
  ],
  declarations: [
    TeacherComponent
  ]
})
export class TeacherModule { }

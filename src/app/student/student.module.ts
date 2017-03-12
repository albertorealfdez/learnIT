import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseService } from '../course/course.service';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentService } from './student.service';

@NgModule({
  imports: [
    BrowserModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentComponent
  ],
  providers: [ CourseService, StudentService ]
})

export class StudentModule { }

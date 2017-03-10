import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
import { CourseService } from '../course/course.service';

@NgModule({
  imports: [
    BrowserModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentComponent
  ],
  providers: [ CourseService ]
})

export class StudentModule { }

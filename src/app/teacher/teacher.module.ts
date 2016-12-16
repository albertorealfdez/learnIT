import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { CourseService } from '../course/course.service';

@NgModule({
  imports: [
    BrowserModule,
    TeacherRoutingModule
  ],
  declarations: [
    TeacherComponent
  ],
  providers: [ CourseService ]
})
export class TeacherModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { CourseService } from '../course/course.service';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  declarations: [
    TeacherComponent
  ],
  providers: [ CourseService ]
})

export class TeacherModule { }

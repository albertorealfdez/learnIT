import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseService } from '../course/course.service';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentService } from './student.service';
import { StudentMapComponent } from './student-map/student-map.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentComponent,
    StudentMapComponent
  ],
  providers: [ CourseService, StudentService ]
})

export class StudentModule { }

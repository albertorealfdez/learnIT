import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseService } from '../course/course.service';
import { StudentMapService } from './student-map.service';
import { StudentMapComponent } from './student-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StudentMapComponent
  ],
  providers: [ CourseService, StudentMapService ]
})

export class StudentModule { }
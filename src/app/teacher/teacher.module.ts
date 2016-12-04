import { NgModule } from '@angular/core';

import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher.routing.module';

@NgModule({
  imports: [
    TeacherRoutingModule
  ],
  declarations: [
    TeacherComponent
  ]
})
export class TeacherModule { }

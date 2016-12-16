import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherComponent } from './teacher.component';
import { TeacherService } from './teacher.service';

const teacherRoutes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent
  }
]

@NgModule({
  imports: [
      RouterModule.forChild(teacherRoutes)
  ],
  providers: [ TeacherService ],
  exports: [ 
      RouterModule
   ]
})

export class TeacherRoutingModule { }

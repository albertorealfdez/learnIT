import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';

import { StudentComponent } from './student.component';

const studentRoutes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(studentRoutes)
  ],
  exports: [
      RouterModule
   ],
   providers: [ AuthGuard ]
})

export class StudentRoutingModule { }

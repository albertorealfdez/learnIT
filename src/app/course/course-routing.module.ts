import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';

import { CourseComponent } from './course.component';
import { ActivityComponent } from './activity/activity.component';

const courseRoutes: Routes = [
  {
    path: 'course/:key',
    component: CourseComponent,
    canActivate: [ AuthGuard ]    
  },
  {
    path: 'activity/:id',
    component: ActivityComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(courseRoutes)
  ],
  exports: [
      RouterModule
   ],
   providers: [
     AuthGuard
   ]
})

export class CourseRoutingModule { }

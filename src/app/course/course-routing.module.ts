import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseComponent } from './course.component';
import { ActivityComponent } from './activity/activity.component';

const courseRoutes: Routes = [
  {
    path: 'course/:id',
    component: CourseComponent
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
   ]
})

export class CourseRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseDashboardComponent } from './course-dashboard.component';
import { ActivityDashboardComponent } from './activity-dashboard/activity-dashboard.component';

const courseRoutes: Routes = [
  {
    path: 'course/:id/dashboard',
    component: CourseDashboardComponent
  },
  {
    path: 'activity/:id/dashboard',
    component: ActivityDashboardComponent
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

export class CourseDashboardRoutingModule { }

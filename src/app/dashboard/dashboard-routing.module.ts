import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardCourseComponent } from './dashboard-course/dashboard-course.component';
import { DashboardActivityComponent } from './dashboard-activity/dashboard-activity.component';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/:key',
    component: DashboardCourseComponent
  },
  {
    path: 'dashboard/:key/activity/:id',
    component: DashboardActivityComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
      RouterModule
   ]
})

export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { CourseService } from '../course/course.service';
import { DashboardCourseService } from './dashboard-course/dashboard-course.service';
import { DashboardCompetenceService } from './dashboard-competence/dashboard-competence.service';
import { DashboardActivityService } from './dashboard-activity/dashboard-activity.service';

import { DashboardComponent } from './dashboard.component';
import { DashboardCourseComponent } from './dashboard-course/dashboard-course.component';
import { DashboardCompetenceComponent } from './dashboard-competence/dashboard-competence.component';
import { DashboardActivityComponent } from './dashboard-activity/dashboard-activity.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardCourseComponent,
    DashboardCompetenceComponent,
    DashboardActivityComponent
  ],
  providers: [
    CourseService,
    DashboardCourseService,
    DashboardCompetenceService,
    DashboardActivityService
  ]
})

export class DashboardModule { }

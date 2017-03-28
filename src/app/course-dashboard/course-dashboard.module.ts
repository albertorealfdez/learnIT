import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseDashboardRoutingModule } from './course-dashboard-routing.module';
import {
  CourseDashboardComponent,
  CourseService
} from './';

import { CompetenceModule } from './competence-dashboard/competence-dashboard.module';
import { ActivityDashboardModule } from './activity-dashboard/activity-dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseDashboardRoutingModule,
    CompetenceModule,
    ActivityDashboardModule
  ],
  declarations: [
    CourseDashboardComponent
  ],
    providers: [ CourseService ]
})

export class CourseDashboardModule { }

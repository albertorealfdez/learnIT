import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CourseDashboardRoutingModule } from './course-dashboard-routing.module';
import {
  CourseDashboardComponent,
  CourseService
} from './';

import { CompetenceModule } from './competence/competence.module';
import { ActivityDashboardModule } from './activity-dashboard/activity-dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
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

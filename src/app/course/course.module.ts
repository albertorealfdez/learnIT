import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseRoutingModule } from './course-routing.module';
import {
  CourseComponent,
  CourseService
} from './';

import { CompetenceComponent } from './competence/competence.component';
import { ActivityComponent } from './activity/activity.component';

import { CompetenceService } from './competence/competence.service';
import { ActivityService } from './activity/activity.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseRoutingModule,
  ],
  declarations: [
    CourseComponent,
    CompetenceComponent,
    ActivityComponent
  ],
    providers: [
      CourseService,
      CompetenceService,
      ActivityService
    ]
})

export class CourseModule { }

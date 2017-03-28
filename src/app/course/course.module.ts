import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseRoutingModule } from './course-routing.module';
import {
  CourseComponent,
  CourseService
} from './';

import { CompetenceModule } from './competence/competence.module';
import { ActivityModule } from './activity/activity.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseRoutingModule,
    CompetenceModule,
    ActivityModule
  ],
  declarations: [
    CourseComponent
  ],
    providers: [ CourseService ]
})

export class CourseModule { }

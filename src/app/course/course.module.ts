import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';
import {
  CourseComponent,
  CourseService
} from './';

import { CompetenceComponent } from './competence/competence.component';
import { ActivityComponent } from './activity/activity.component';
import { CompetenceService } from './competence/competence.service';
import { CourseActivityService } from './activity/activity.service';
import { SelectionEngineService } from '../selection-engine/selection-engine.service';

@NgModule({
  imports: [ SharedModule, CourseRoutingModule ],
  declarations: [
    CourseComponent,
    CompetenceComponent,
    ActivityComponent
  ],
  providers: [
    CourseService,
    CompetenceService,
    CourseActivityService,
    SelectionEngineService
  ]
})

export class CourseModule { }

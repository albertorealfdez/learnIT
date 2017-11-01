import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';

import { CompetenceComponent } from './competence/competence.component';
import { ActivityComponent } from './activity/activity.component';
import { SelectionEngineService } from '../selection-engine/selection-engine.service';
import { StudentMapService } from '../student-map/student-map.service';
import { StudentCompetenceService } from '../shared/competence/student-competence.service';

@NgModule({
  imports: [ SharedModule, CourseRoutingModule ],
  declarations: [
    CourseComponent,
    CompetenceComponent,
    ActivityComponent
  ],
  providers: [
    CourseService,
    SelectionEngineService,
    StudentMapService,
    StudentCompetenceService
  ]
})

export class CourseModule { }

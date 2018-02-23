import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';

import { CompetenceComponent } from './competence/competence.component';
import { ActivityComponent } from './activity/activity.component';
import { SelectionEngineService } from '../selection-engine/selection-engine.service';
import { StudentMapComponent } from './student-map/student-map.component';
import { StudentMapService } from './student-map/student-map.service';
import { StudentCompetenceService } from '../shared/competence/student-competence.service';

@NgModule({
  imports: [ SharedModule, CourseRoutingModule, MaterialModule ],
  declarations: [
    CourseComponent,
    CompetenceComponent,
    ActivityComponent,
    StudentMapComponent
  ],
  providers: [
    CourseService,
    SelectionEngineService,
    StudentMapService,
    StudentCompetenceService
  ]
})

export class CourseModule { }

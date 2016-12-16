import { NgModule } from '@angular/core';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';
import { CompetenceComponent } from './competence/competence.component';

@NgModule({
  imports: [
    CourseRoutingModule
  ],
  declarations: [
    CourseComponent,
    CompetenceComponent
  ],
    providers: [ CourseService ]
})

export class CourseModule { }

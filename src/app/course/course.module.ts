import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourseService } from './course.service';
import { CompetenceComponent } from './competence/competence.component';

@NgModule({
  imports: [
    CourseRoutingModule,
    BrowserModule
  ],
  declarations: [
    CourseComponent,
    CompetenceComponent
  ],
    providers: [ CourseService ]
})

export class CourseModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CourseRoutingModule } from './course-routing.module';
import {
  CourseComponent,
  CourseService
} from './';

import { CompetenceModule } from './competence';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CourseRoutingModule,
    CompetenceModule
  ],
  declarations: [
    CourseComponent
  ],
    providers: [ CourseService ]
})

export class CourseModule { }

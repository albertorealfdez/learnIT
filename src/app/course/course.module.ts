import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CourseRoutingModule } from './course-routing.module';
import {
  CourseComponent,
  CourseService,
  CompetenceComponent
} from './';

@NgModule({
  imports: [
    CourseRoutingModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CourseComponent,
    CompetenceComponent
  ],
    providers: [ CourseService ]
})

export class CourseModule { }

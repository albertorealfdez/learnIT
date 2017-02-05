import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseComponent } from './course.component';
import { CompetenceComponent } from './competence/competence.component';

const courseRoutes: Routes = [
  {
    path: 'course/:id',
    component: CourseComponent
  },
  {
    path: 'course/competence/:id',
    component: CompetenceComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(courseRoutes)
  ],
  exports: [
      RouterModule
   ]
})

export class CourseRoutingModule { }

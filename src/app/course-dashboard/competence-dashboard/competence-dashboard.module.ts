import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  CompetenceService,
  CompetenceComponent
} from './';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [CompetenceComponent],
  exports: [CompetenceComponent],
  providers: [CompetenceService]
})
export class CompetenceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  CompetenceService,
  CompetenceComponent
} from './';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [CompetenceComponent],
  declarations: [CompetenceComponent],
  providers: [CompetenceService]
})
export class CompetenceModule { }

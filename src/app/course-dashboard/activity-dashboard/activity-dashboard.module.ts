import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  ActivityDashboardComponent,
  ActivityService
} from './';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [ActivityDashboardComponent],
  exports: [ActivityDashboardComponent],
  providers: [ActivityService]
})
export class ActivityDashboardModule { }

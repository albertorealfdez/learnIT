import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ActivityDashboardComponent,
  ActivityService
} from './';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ActivityDashboardComponent],
  exports: [ActivityDashboardComponent],
  providers: [ActivityService]
})
export class ActivityDashboardModule { }

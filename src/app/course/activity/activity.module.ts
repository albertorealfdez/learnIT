import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ActivityComponent,
  ActivityService
} from './';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ActivityComponent],
  exports: [ActivityComponent],
  providers: [ActivityService]
})
export class ActivityModule { }

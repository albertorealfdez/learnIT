import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  ActivityComponent,
  ActivityService
} from './';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [ActivityComponent],
  exports: [ActivityComponent],
  providers: [ActivityService]
})
export class ActivityModule { }

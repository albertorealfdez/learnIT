import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivityService } from './activity/activity.service';

@NgModule({
  imports: [ CommonModule ],
  exports: [ CommonModule, FormsModule ],
  declarations: [],
  providers: [ ActivityService ]
})

export class SharedModule { }

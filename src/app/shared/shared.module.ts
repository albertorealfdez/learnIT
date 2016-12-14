import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ UserService ],
  declarations: []
})

export class SharedModule { }

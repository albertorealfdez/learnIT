import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ]
})

export class HomeModule { }

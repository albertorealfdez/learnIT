import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { HeaderComponent } from './header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ HeaderComponent, HeaderMenuComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }

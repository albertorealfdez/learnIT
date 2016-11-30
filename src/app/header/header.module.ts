import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HeaderComponent, HeaderMenuComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }

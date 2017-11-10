import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule  } from '@angular/material';

@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule ],
  exports: [ MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule ],
})

export class MaterialModule { }
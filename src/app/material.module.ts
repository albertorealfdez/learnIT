import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule  } from '@angular/material';

@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule ],
  exports: [ MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule ],
})

export class MaterialModule { }
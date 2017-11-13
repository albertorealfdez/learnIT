import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule  } from '@angular/material';

@NgModule({
  imports: [ MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule ],
  exports: [ MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule ],
})

export class MaterialModule { }
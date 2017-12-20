import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    ResetPasswordComponent
  ],
  declarations: [ 
    HeaderComponent,
    FooterComponent,
    ResetPasswordComponent
  ],
  providers:[
 
  ]
})
export class SharedModule { }

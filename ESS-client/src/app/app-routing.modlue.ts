import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './shared/components/reset-password/reset-password.component'

const routes: Routes = [
    { 
      path:'', 
      loadChildren:'./home/home.module#HomeModule',
    },  
    { path:'login', component:LoginComponent },
    { path:'resetpassword', component:ResetPasswordComponent },
    { path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
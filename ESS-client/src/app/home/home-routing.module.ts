import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MainComponent } from './components/main/main.component';
import { ElectionformsComponent } from './components/electionforms/electionforms.component';
import { MyDocumentsComponent } from './components/my-documents/my-documents.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { SubmitRmaformsComponent } from './components/submit-rmaforms/submit-rmaforms.component';
import { ElectionFormDataComponent } from './components/electionforms/election-form-data/election-form-data.component';

const routes: Routes = [
  {
    path:'',component: HomeComponent,
    children:[
      { path:'', component:MainComponent },
      { path:'electionforms', component:ElectionformsComponent},
      { path:'electionformdata', component:ElectionFormDataComponent},
      { path:'mydocuments', component:MyDocumentsComponent},
      { path:'myaccount', component:MyAccountComponent},
      { path:'orderstatus', component:OrderStatusComponent},
      { path:'submitrmaforms', component:SubmitRmaformsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

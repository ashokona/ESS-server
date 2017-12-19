import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainComponent } from './components/main/main.component';
import { ElectionformsComponent } from './components/electionforms/electionforms.component';
import { MyDocumentsComponent } from './components/my-documents/my-documents.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { SubmitRmaformsComponent } from './components/submit-rmaforms/submit-rmaforms.component';
import { ElectionFormDataComponent } from './components/electionforms/election-form-data/election-form-data.component';
import {BreadcrumbModule,MenuItem} from 'primeng/primeng';
import { CustomerDetailsComponent } from './components/my-account/customer-details/customer-details.component';
import { AccountDetailsComponent } from './components/my-account/account-details/account-details.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    BreadcrumbModule
  ],
  declarations: [
    HomeComponent,
    MainComponent,
    ElectionformsComponent,
    MyDocumentsComponent,
    MyAccountComponent,
    OrderStatusComponent,
    SubmitRmaformsComponent,
    ElectionFormDataComponent,
    CustomerDetailsComponent,
    AccountDetailsComponent
  ]
})
export class HomeModule { }

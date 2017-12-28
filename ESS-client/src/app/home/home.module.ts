import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { HomeComponent } from './home.component';
import { MainComponent } from './components/main/main.component';
import { ElectionformsComponent } from './components/electionforms/electionforms.component';
import { MyDocumentsComponent } from './components/my-documents/my-documents.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { SubmitRmaformsComponent } from './components/submit-rmaforms/submit-rmaforms.component';
import { ElectionFormDataComponent } from './components/election-operations-forms/election-form-data/election-form-data.component';
import {BreadcrumbModule,MenuItem} from 'primeng/primeng';
import { CustomerDetailsComponent } from './components/my-account/customer-details/customer-details.component';
import { AccountDetailsComponent } from './components/my-account/account-details/account-details.component';
import { CustomerDepotRepairComponent } from './components/customer-depot-repair/customer-depot-repair.component';
import { DepotRepairRequestComponent } from './components/customer-depot-repair/depot-repair-request/depot-repair-request.component';
import { ElectionOperationsFormsComponent } from './components/election-operations-forms/election-operations-forms.component';
import { PrecinctListComponent } from './components/election-operations-forms/precinct-list/precinct-list.component';
import { ContestsCandidatesComponent } from './components/election-operations-forms/contests-candidates/contests-candidates.component';
import { QuestionReferendumComponent } from './components/election-operations-forms/question-referendum/question-referendum.component';
import { BallotAssignmentReviewComponent } from './components/election-operations-forms/ballot-assignment-review/ballot-assignment-review.component';
import { ProgrammingComponent } from './components/election-operations-forms/programming/programming.component';
import { ExpressPollComponent } from './components/election-operations-forms/express-poll/express-poll.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    BreadcrumbModule,
    Ng2SmartTableModule
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
    AccountDetailsComponent,
    CustomerDepotRepairComponent,
    DepotRepairRequestComponent,
    ElectionOperationsFormsComponent,
    PrecinctListComponent,
    ContestsCandidatesComponent,
    QuestionReferendumComponent,
    BallotAssignmentReviewComponent,
    ProgrammingComponent,
    ExpressPollComponent
  ]
})
export class HomeModule { }

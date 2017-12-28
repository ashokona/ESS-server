import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MainComponent } from './components/main/main.component';
import { ElectionformsComponent } from './components/electionforms/electionforms.component';
import { MyDocumentsComponent } from './components/my-documents/my-documents.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { SubmitRmaformsComponent } from './components/submit-rmaforms/submit-rmaforms.component';
import { ElectionFormDataComponent } from './components/election-operations-forms/election-form-data/election-form-data.component';
import { CustomerDepotRepairComponent } from './components/customer-depot-repair/customer-depot-repair.component';
import { DepotRepairRequestComponent } from './components/customer-depot-repair/depot-repair-request/depot-repair-request.component';
import { ElectionOperationsFormsComponent } from './components/election-operations-forms/election-operations-forms.component';
import { PrecinctListComponent } from './components/election-operations-forms/precinct-list/precinct-list.component';
import { ContestsCandidatesComponent } from './components/election-operations-forms/contests-candidates/contests-candidates.component';
import { QuestionReferendumComponent } from './components/election-operations-forms/question-referendum/question-referendum.component';
import { BallotAssignmentReviewComponent } from './components/election-operations-forms/ballot-assignment-review/ballot-assignment-review.component';
import { ProgrammingComponent } from './components/election-operations-forms/programming/programming.component';
import { ExpressPollComponent } from './components/election-operations-forms/express-poll/express-poll.component';

const routes: Routes = [
  {
    path:'',component: HomeComponent,
    children:[
      { path:'', component:MainComponent },
      { path:'electionforms', component:ElectionformsComponent},
      { path:'electionformdata', component:ElectionFormDataComponent},
      { path:'precinctlist', component:PrecinctListComponent},
      { path:'contestscandidates', component:ContestsCandidatesComponent},
      { path:'questionreferendum', component:QuestionReferendumComponent},
      { path:'ballotassignment', component:BallotAssignmentReviewComponent},
      { path:'programming', component:ProgrammingComponent},
      { path:'expresspoll', component:ExpressPollComponent},
      { path:'mydocuments', component:MyDocumentsComponent},
      { path:'myaccount', component:MyAccountComponent},
      { path:'orderstatus', component:OrderStatusComponent},
      { path:'submitrmaforms', component:SubmitRmaformsComponent},
      { path:'customerdepot', component:CustomerDepotRepairComponent },
      { path:'repairdepot', component:DepotRepairRequestComponent },
      { path:'electionoperation', component:ElectionOperationsFormsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

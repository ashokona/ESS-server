import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-election-operations-forms',
  templateUrl: './election-operations-forms.component.html',
  styleUrls: ['./election-operations-forms.component.css']
})
export class ElectionOperationsFormsComponent implements OnInit {
  source: LocalDataSource;
  customerDetails: any;
  items: MenuItem[];
  home: MenuItem;

  constructor(
    private router: Router
  ) { 
    this.source = new LocalDataSource(this.data);
    this.customerDetails = {
      accountName:'test user',
      accountNumber:'34057934',
      accountAddress:'Hno.123, teachers colony, Begumper, Hyderabad -500016'
    }
    this.items = [
      {label:'home', routerLink: ['']},
      {label:'My Account'}
    ]
  }

  ngOnInit() {
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false); 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  settings = {
    columns: {
      inputElectionDate: {
        title: 'Input Election Date',
        filter: false
      },
      inputElectionType: {
        title: 'Input Election Type',
        filter: false
      },
      comment: {
        title: 'Comment',
        filter: false
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
      display: 'none',
      custom: [
        {
          name: 'view',
          title: 'view ',
        },
      ],
    },
  };
  onCustom(event) {
    // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`)
    this.router.navigate(['/electionformdata'])
  }

  data = [
    {inputElectionDate:'27/12/2016', inputElectionType:'123', comment:'30/1/2017' },
    {inputElectionDate:'27/12/2016', inputElectionType:'123', comment:'30/1/2017' },
    {inputElectionDate:'27/12/2016', inputElectionType:'123', comment:'30/1/2017' },
  ];

}

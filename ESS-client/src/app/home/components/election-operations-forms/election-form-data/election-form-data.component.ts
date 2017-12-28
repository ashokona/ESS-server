import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-election-form-data',
  templateUrl: './election-form-data.component.html',
  styleUrls: ['./election-form-data.component.css']
})
export class ElectionFormDataComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;

  constructor( ) { 
  }

  ngOnInit() {
    this.items = [
      {label:'home', routerLink: ['']},
      {label:'Election Forms',routerLink: ['/electionforms']},
      {label:'Election Form Data'},
    ]
  }

}

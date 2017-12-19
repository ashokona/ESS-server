import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';


@Component({
  selector: 'app-electionforms',
  templateUrl: './electionforms.component.html',
  styleUrls: ['./electionforms.component.css']
})
export class ElectionformsComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;

  constructor() {

  }

  ngOnInit() {
    this.items = [
      {label:'home', routerLink: ['']},
      {label:'Election Forms'}
  ];
  
  // this.home = {icon: 'fa fa-home'};
  }

}

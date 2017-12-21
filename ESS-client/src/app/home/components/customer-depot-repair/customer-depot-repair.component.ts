import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-customer-depot-repair',
  templateUrl: './customer-depot-repair.component.html',
  styleUrls: ['./customer-depot-repair.component.css']
})
export class CustomerDepotRepairComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;
  constructor() {
    this.items = [
      { label: 'home', routerLink: [''] },
      { label: 'Depot Repair' }
    ];
   }

  ngOnInit() {
  }

}

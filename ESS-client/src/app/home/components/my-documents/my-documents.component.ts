import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.css']
})
export class MyDocumentsComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;

  constructor() {
    this.items = [
      { label: 'home', routerLink: [''] },
      { label: 'My Documents' }
    ]
  }

  ngOnInit() {
  }

}

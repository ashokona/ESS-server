import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.css']
})
export class MyDocumentsComponent implements OnInit {
  items = {}
  constructor() { }

  ngOnInit() {
  }

}

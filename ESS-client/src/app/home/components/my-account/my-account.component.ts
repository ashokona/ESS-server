import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  source: LocalDataSource;
  customerDetails: any;
  items:any = {};
  constructor() { 
    this.source = new LocalDataSource(this.data);
    this.customerDetails = {
      accountName:'test user',
      accountNumber:'34057934',
      accountAddress:'Hno.123, teachers colony, Begumper, Hyderabad -500016'
    }
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
      orderDate: {
        title: 'Order Date',
        filter: false
      },
      invoiceNumber: {
        title: 'Invoice Number',
        filter: false
      },
      invoiceDate: {
        title: 'Invoice Date',
        filter: false
      },
      dueDate: {
        title: 'Due Date',
        filter: false
      },
      projectId: {
        title: 'Project #ID',
        filter: false
      },
      orderPOReference: {
        title: 'Order PO Reference',
        filter: false
      },
      invoiceAmount: {
        title: 'Invoice Amount',
        filter: false
      },
      trackingNumber: {
        title: 'Tracking Number',
        filter: false
      },
      paymentStatus: {
        title: 'Payment Status',
        filter: false
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
      custom: [
        {
          name: 'view',
          title: 'view ',
        },
      ],
    },
  };

  data = [
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' },
    {orderDate:'27/12/2016', invoiceNumber:'123', invoiceDate:'30/1/2017', dueDate:'30/1/2017', projectId:'234235', orderPOReference:'A34DF234', invoiceAmount:'3000', trackingNumber:'45534543', paymentStatus:'sucess' }
  ];

}

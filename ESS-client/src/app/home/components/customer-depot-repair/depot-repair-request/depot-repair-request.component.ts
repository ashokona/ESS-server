import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { MenuItem } from 'primeng/primeng';


@Component({
  selector: 'app-depot-repair-request',
  templateUrl: './depot-repair-request.component.html',
  styleUrls: ['./depot-repair-request.component.css']
})
export class DepotRepairRequestComponent implements OnInit {
	view1: Boolean = true;
	items: MenuItem[];
  home: MenuItem;
  constructor() {
		this.items = [
      { label: 'home', routerLink: [''] },
      { label: 'Depot Repair Request' }
    ];
	 }

  ngOnInit() {
  	function toggleIcon(e) {
	    $(e.target)
	        .prev('.panel-heading')
	        .find(".more-less")
	        .toggleClass('glyphicon-plus glyphicon-minus');
	}
	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);
	}
	
	goback(){
		this.view1 = !this.view1
	}
	next(){
		this.view1 = !this.view1
	}
	cancel(){
		this.view1 = true
	}

}

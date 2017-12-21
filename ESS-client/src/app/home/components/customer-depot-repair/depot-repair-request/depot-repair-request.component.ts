import { Component, OnInit } from '@angular/core';
import $ from 'jQuery';


@Component({
  selector: 'app-depot-repair-request',
  templateUrl: './depot-repair-request.component.html',
  styleUrls: ['./depot-repair-request.component.css']
})
export class DepotRepairRequestComponent implements OnInit {

  constructor() { }

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

}

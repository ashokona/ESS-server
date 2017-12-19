import { Component } from '@angular/core';
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
  	$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    var headerHeight = $('.header-main').height(); 
     var speed = 300;
    if (scroll > headerHeight) {
        $(".header-main").addClass("fixedheader");
        $('.header-main').fadeIn();
        $('.content-main').css({
           'position' : 'relative',
           'top' : '120px'
        });
    } else {
        $(".header-main").removeClass("fixedheader");
        $('.content-main').css({
           'position' : 'relative',
           'top' : '0px'
        });
    }
});
  }
}


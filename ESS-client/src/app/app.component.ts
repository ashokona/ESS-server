import { Component } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private router: Router,
    public location: Location,
  ) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var headerHeight = $('.header-main').height();
      var speed = 300;
      if (scroll > headerHeight) {
        $(".header-main").addClass("fixedheader");
        $('.header-main').fadeIn();
        $('.content-main').css({
          'position': 'relative',
          'top': '120px'
        });
      } else {
        $(".header-main").removeClass("fixedheader");
        $('.content-main').css({
          'position': 'relative',
          'top': '0px'
        });
      }
    });
  }
  removeHeader() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (titlee === 'login') {
      return false;
    }
    else {
      return true;
    }
  }
  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (titlee === 'login') {
      return false;
    }
    else {
      return true;
    }
  }
}


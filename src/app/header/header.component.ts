import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("li .nav-link").on("click", function () {
      $('.navbar-nav li.active').removeClass('active');
      $(this).parent().addClass("active");
    });
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    if (window.pageYOffset > 120) {
      let nav = document.getElementById("navbar");
      if (nav) {
        nav.style.backgroundColor = "#252935";
      }
    }
    else {
      let nav = document.getElementById("navbar");
      if (nav) {
        nav.style.backgroundColor = "transparent";
      }
    }
  };

  divscroll(id: any) {
    let el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

}


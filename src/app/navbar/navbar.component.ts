import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = () => this.shrinkNav();
  }

  shrinkNav(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      document.querySelector('.header').classList.add('small')
    } else {
      document.querySelector('.header').classList.remove('small')
    }
  }

  navPanel(){
    document.querySelector('.nav-links').classList.toggle('nav-active');
    document.querySelector('.burger').classList.toggle('toggle')
  }

}

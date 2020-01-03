import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public sidePanel: boolean;

  constructor() {}

  ngOnInit() {
    this.sidePanel = false;
    window.onscroll = () => this.shrinkNav();
    //document.querySelector('#dismissSide').addEventListener("click", this.navPanel);
    //document.querySelector(".burger").addEventListener("click", this.navPanel);
  }

  shrinkNav() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.querySelector(".header").classList.add("small");
    } else {
      document.querySelector(".header").classList.remove("small");
    }
  }

  navPanel() {
    !this.sidePanel? this.openPanel(): this.closePanel();
  }

  openPanel() {
    this.sidePanel = true;
    document.querySelector(".nav-links").classList.add("nav-active");
    document.querySelector(".burger").classList.add("toggle");
    document.getElementById('dismissSide').style.height= '100vh';
  }

  closePanel() {
    this.sidePanel = false;
    document.getElementById('dismissSide').style.height= '0vh';

    document.querySelector(".nav-links").classList.remove("nav-active");
    document.querySelector(".burger").classList.remove("toggle");
  }

  printshit() {
    console.log("allo?");
  }
}

import { Component, OnInit, Query } from "@angular/core";
import { ItemService } from "../item.service";

@Component({
  selector: "app-fleur",
  templateUrl: "./fleur.component.html",
  styleUrls: ["./fleur.component.css"]
})
export class FleurComponent implements OnInit {
  public listItems: string = "";
  public modal: any;
  public closeModalBtn: any;
  public sendDiv: any;
  public items: any[];

  constructor(public todos: ItemService) {}

  ngOnInit() {
    this.modal = document.querySelector(".modal");
    this.closeModalBtn = document.querySelector(".x-close");
    this.items = [
      {
        id: 1,
        name: "Pothos",
        description: "5$ a 10$",
        img:
          "https://images.pexels.com/photos/1777813/pexels-photo-1777813.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      },
      {
        id: 2,
        name: "Oiseau du paradis ",
        description: "15$ a 30$",
        img:
          "https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      },
      {
        id: 3,
        name: "Monstera deliciosa ",
        description: "15$ a 50$",
        img:
          "https://images.pexels.com/photos/2001154/pexels-photo-2001154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        id: 4,
        name: "Hoya ",
        description: "15$ a 30$",
        img:
          "https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ];
  }

  clickItem(e) {
    let itemImg = document.querySelector(`#${e.target.parentNode.id} img`);
    this.sendDiv = {
      command: "item",
      activeItemContent: itemImg.cloneNode(true),
      activeItem: itemImg.getBoundingClientRect()
    };
  }

  openAbout(e) {
    this.sendDiv = { command: "about" };
  }
}

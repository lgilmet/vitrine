import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  private incomingDiv: any;
  private modalBack: HTMLElement;
  private modal: HTMLElement;
  constructor() {}

  ngOnInit() {
    //this.modalBack = document.querySelector(".modal-back");
    this.modal = document.querySelector(".modal-back");
  }

  @Input("incomingDiv")
  set value(value: any) {
    if (value.command == "item") {
      let position = value.activeItem;
      let imgStart = <HTMLElement>document.querySelector(".modal-start");
      //let imgStart = value.activeItemContent;

      imgStart.style.setProperty("top", `${position.top}px`);
      imgStart.style.setProperty("left", `${position.left}px`);
      imgStart.style.setProperty("height", `${position.height}px`);
      imgStart.style.setProperty("width", `${position.width}px`);

      let img = value.activeItemContent;

      img.style.setProperty("width", "100%");
      this.openmodal();

      document
        .querySelector(".modal-start")
        .appendChild(value.activeItemContent);

      let dimensions = document
        .querySelector(".item-img")
        .getBoundingClientRect();
      console.log(dimensions);
      setTimeout(() => {
        // transition image to final resitng place
        imgStart.style.setProperty("top", `${dimensions.top + 0.5}px`);
        imgStart.style.setProperty("left", `${dimensions.left}px`);
        imgStart.style.setProperty("height", `${dimensions.height}px`);
        imgStart.style.setProperty("width", `${dimensions.width}px`);
      }, 200);

      setTimeout(() => {
        imgStart.style.top = "0px";
        imgStart.style.left = "0px";
        imgStart.style.position = "relative";
        document.querySelector(".item-img").append(imgStart);
      }, 500);
    }
  }

  openmodal(input?: any) {
    document.body.style.overflow = "hidden";
    this.modal.style.display = "block";
    setTimeout(() => {
      this.modal.classList.add("modal-on");
      (<HTMLElement>document.querySelector(".x-close")).style.display = "block";
    }, 200);
  }
}

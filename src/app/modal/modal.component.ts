import { Component, OnInit, Input } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  private incomingDiv: any;
  private modal: HTMLElement;
  private modalContent: HTMLElement;
  private closeModalBtn: HTMLElement;
  private about: HTMLElement;
  private imgStart: HTMLElement;
  private imgEnd: HTMLElement;

  constructor(private snackbar: MatSnackBar) {}

  ngOnInit() {
    // actor handles
    this.modal = document.querySelector(".modal");
    this.closeModalBtn = document.querySelector(".x-close");
    this.about = <HTMLElement>document.querySelector(".about");
    this.modalContent = <HTMLElement>document.querySelector(".modal-content");

    this.imgStart = <HTMLElement>document.querySelector(".item-img-start");
    this.imgEnd = <HTMLElement>document.querySelector(".item-img-end");
  }

  // input reception/Controller
  @Input("incomingDiv")
  set value(value: any) {
    if (value != null) {
      if (value.command == "item") {
        this.imgStart.style.display = "block";
        this.imgEnd.style.display = "block";
        this.itemModal(value);
      } else if (value.command == "about") {
        this.imgStart.style.display = "none";
        this.imgEnd.style.display = "none";
        this.about.classList.add("about-on");
        this.modalContent.appendChild(this.about);
        this.openAbout();
      }
    }
  }

  itemModal(item: any) {
    //let whatsthis = this.snackbar.open("chose item");

    let startPosition = item.activeItem;
    console.log("imgStart ", this.imgStart);

    this.imgStart.style.setProperty("top", `${startPosition.top}px`);
    this.imgStart.style.setProperty("left", `${startPosition.left}px`);
    this.imgStart.style.setProperty("height", `${startPosition.height}px`);
    this.imgStart.style.setProperty("width", `${startPosition.width}px`);

    let img = item.activeItemContent;

    img.style.setProperty("width", "100%");
    img.style.setProperty("height", "100%");
    img.style.setProperty("object-fit", " cover");

    // retrieve modal image final position
    this.openmodal();

    this.imgStart.appendChild(item.activeItemContent);
    let endPosition = this.imgEnd.getBoundingClientRect();

    setTimeout(() => {
      // transition image to final resting place
      this.imgStart.style.setProperty("top", `${endPosition.top + 0.5}px`);
      this.imgStart.style.setProperty("left", `${endPosition.left}px`);
      this.imgStart.style.setProperty("height", `${endPosition.height}px`);
      this.imgStart.style.setProperty("width", `${endPosition.width}px`);
    }, 200);

    setTimeout(() => {
      document.querySelector(".order-panel").classList.add("panel-on");
    }, 350);
    setTimeout(() => {
      this.imgStart.style.top = "0px";
      this.imgStart.style.left = "0px";
      this.imgStart.style.position = "relative";
      document.querySelector(".item-img-end").append(this.imgStart);
    }, 1600);
  }

  openAbout() {
    this.openmodal();
  }

  openmodal() {
    document.body.style.overflowY = "hidden";
    if (window.innerWidth > 500) document.body.style.marginRight = "15px";
    this.modal.style.display = "block";
    setTimeout(() => {
      this.modal.classList.add("modal-on");
      this.closeModalBtn.style.display = "block";
    }, 200);
  }

  closeModal() {
    document.querySelector(".order-panel").classList.remove("panel-on");

    document.body.style.overflowY = "scroll";

    document.body.style.marginRight = "0px";
    this.modal.classList.remove("modal-on");
    this.closeModalBtn.style.display = "none";
    setTimeout(() => {
      this.about.classList.remove("about-on");
      this.modal.scrollTo(0, 0);
      this.modal.style.display = "none";
      document
        .querySelector(".item-img-start")
        .removeChild(this.imgStart.firstChild);

      let imgDiv = <HTMLElement>document.querySelector(".item-img-start");
      imgDiv.style.position = "fixed";
    }, 500);
  }

  dontClose(event) {
    event.stopPropagation();
  }
}

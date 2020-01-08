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

  constructor(public todos: ItemService) {}

  ngOnInit() {
    this.getItems();
    this.modal = document.querySelector(".modal");
    this.closeModalBtn = document.querySelector(".x-close");
  }

  async getItems() {
    let todoList: string = await (<any>this.todos.getList());
    this.listItems = todoList;
    console.log(todoList);
  }

  modalItem() {}

  clickItem() {
    let activeItem = document
      .querySelector(".item-1 img")
      .getBoundingClientRect();
    let activeItemContent = <HTMLElement>(
      document.querySelector(".item-1 img").cloneNode(true)
    );
    let command = "item";

    this.sendDiv = { command, activeItemContent, activeItem };
    // let copyrec = <HTMLElement>document.querySelector(".rectangle");

    // let rectangle = <HTMLElement>copyrec.cloneNode(true);
    // rectangle.classList.add("copyrec");
    // document.body.append(rectangle);
    // // let copyrec = <HTMLElement>rectangle.cloneNode(true)
    // // copyrec.classList.add('copyrec')
    // let position = {
    //   height: activeItem.height,
    //   width: activeItem.width,
    //   top: activeItem.top,
    //   left: activeItem.left
    // };

    // rectangle.style.setProperty("height", `${position.height}px`);
    // rectangle.style.setProperty("width", `${position.width}px`);
    // rectangle.style.setProperty("top", `${position.top}px`);
    // rectangle.style.setProperty("left", `${position.left}px`);
    // rectangle.innerHTML =
    //   "<img style=' width: 100%;' src='https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />";
    // // "<img style=' width: 100%; height: 100%; object-fit: cover; border-radius:16px' src='https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />";

    // // document.body.style.marginRight='15px';

    // this.closeModalBtn.style.display = "block";
    // setTimeout(() => {
    //   rectangle.style.top = "53px";
    //   //rectangle.style.left = '15vw';
    //   rectangle.style.left = "calc(15vw + .5px)";
    //   rectangle.style.width = "300px";
    //   rectangle.style.height = "400px";
    //   document.body.style.marginRight = "17px";
    //   this.openModal();
    //   //this.modal.style.display = 'block';
    // }, 10);

    // setTimeout(() => {
    //   rectangle.style.top = "0px";
    //   rectangle.style.left = "0px";
    //   rectangle.style.position = "relative";
    //   document.querySelector(".modal-content").append(rectangle);

    //   this.modal.classList.add("modal-on");
    // }, 1000);
  }

  openModal(input?: any) {
    document.body.style.overflow = "hidden";
    this.modal.style.display = "block";
    setTimeout(() => {
      this.modal.classList.add("modal-on");
      this.closeModalBtn.style.display = "block";
    }, 200);
  }

  closeModal() {
    const rectangle = <HTMLElement>document.querySelector(".copyrec");
    if (rectangle != null) rectangle.remove();

    document.body.style.marginRight = "0px";
    document.body.style.overflow = "scroll";
    this.modal.classList.remove("modal-on");
    this.closeModalBtn.style.display = "none";
    setTimeout(() => {
      this.modal.scrollTo(0, 0);
      this.modal.style.display = "none";
      rectangle.style.display = "fixed";
      rectangle.style.zIndex = "200";
      rectangle.remove();
    }, 500);
  }
}

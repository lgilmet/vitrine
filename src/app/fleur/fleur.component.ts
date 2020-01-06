import { Component, OnInit, Query } from '@angular/core';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-fleur',
  templateUrl: './fleur.component.html',
  styleUrls: ['./fleur.component.css']
})
export class FleurComponent implements OnInit {

  public listItems: string= '';
  public modal: any;
  public closeModalBtn : any;

  constructor(public todos: ItemService) { }

  ngOnInit() {
    this.getItems();
    this.modal = document.querySelector('.modal');
    this.closeModalBtn = document.querySelector('.x-close');
  }

  async getItems(){
    let todoList:string = await <any>this.todos.getList();
    this.listItems = todoList;
    console.log(todoList)
  }

  modalItem(){
  }

  clickItem(){
    const activeItem = document.querySelector('.item-1').getBoundingClientRect();
    const rectangle = <HTMLElement>document.querySelector('.rectangle')
    const position = {
      height: activeItem.height,
      width: activeItem.width,
      top: activeItem.top,
      left: activeItem.left
    }
    rectangle.style.setProperty('height', `${position.height}px`);
    rectangle.style.setProperty('width', `${position.width}px`);
    rectangle.style.setProperty('top', `${position.top}px`);
    rectangle.style.setProperty('left', `${position.left}px`);

    setTimeout(() => {
      rectangle.style.setProperty('top', '100px');
      rectangle.style.setProperty('left', '40px');
      rectangle.style.setProperty('background-color', 'none');
      rectangle.style.setProperty('background-image', 'url(https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)')
    rectangle.style.setProperty('width', '30vw');
    }, 200);
  }

  openModal(input?: any){
    
    let top = window.pageYOffset
    console.log(top)
    document.querySelector('html').style.scrollBehavior = 'auto'
    document.body.style.overflow= 'hidden';
    // window.scrollTo({
    //   top: 0
    // })
    console.log(this.modal.style.top)
    this.modal.style.top =  `${top}`;
    console.log(this.modal.style.top)
    this.modal.style.display = 'block'
    setTimeout(() => {
      this.modal.classList.add('modal-on') 
    this.closeModalBtn.style.display = 'block'
    }
    , 200)
  }

  closeModal(){
    document.body.style.overflow = 'auto';
    this.modal.classList.remove('modal-on')
    this.closeModalBtn.style.display = 'none'
    setTimeout(() => {
    this.modal.style.display = 'none' 
  }, 500);
  }
}

import { Component, OnInit } from '@angular/core';
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

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-map-contact',
  templateUrl: './map-contact.component.html',
  styleUrls: ['./map-contact.component.css']
})
export class MapContactComponent implements OnInit {
  @Output() openModalOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.check;
    
  }

  openModalContact(){
    this.openModalOutput.emit(true);
  }

  public check(name: string, focus: boolean){
    let element = (<any>document.querySelector(`input[name=${name}]`))
    let form = element.parentElement
    let label = element.nextSibling
    let content = element.value
    if(focus){
      (<any>form).classList.add('dirty')
    } else {
      if(content.length < 1){
        (<any>form).classList.remove('dirty')
      }
    }


    console.log(content.length)
  }
}

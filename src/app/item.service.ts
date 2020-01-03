import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get('https://restapi-262619.appspot.com/todos').toPromise();
  }
}

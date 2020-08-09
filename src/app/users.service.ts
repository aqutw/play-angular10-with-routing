import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return {
      name:'peter',
      age:35,
      id:100
    };
  }
  getHttpData(){
    let url = 'http://jsonplaceholder.typicode.com/todos';
    return this.httpClient.get(url);
  }
}

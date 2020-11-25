import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppReqService {

id= 0;
  constructor( private http: HttpClient) { }


  public getListData(){
      return this.http.get('https://reqres.in/api/users')
  }

  public getUser(){
    return this.http.get(`https://reqres.in/api/users/${this.id}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  addUser(u:any){
    return this.http.post('http://localhost:8091/user/addUser', u) ;
  }
}

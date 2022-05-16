import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../login/user";

const AUTH_API = 'http://localhost:3000/api/auth/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(newUser: User) {
    return this.http.post(AUTH_API + 'signup', {newUser});

  }

  login(username:String,password:String)
  {
    return this.http.post(AUTH_API + 'login', {username,password})
  }

  getName(id:string) {
    return  this.http.get(AUTH_API + 'home/'+id);
  }
}

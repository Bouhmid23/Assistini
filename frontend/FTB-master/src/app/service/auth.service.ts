import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthSubject = new Subject<boolean>();
  isAuth = false;

  usernameSubject  = new Subject<string>();
  // @ts-ignore
  username :string;
  userIdSubject  = new Subject<string>();
  // @ts-ignore
  userId :string;


  emitisAuthSubject() {
    this.isAuthSubject.next(this.isAuth);
  }
  emituseridSubject() {
    this.usernameSubject.next(this.username);
  }
  emituserIdSubject() {
    this.userIdSubject.next(this.userId);
  }




  signIn() {
    return new Promise(
      (resolve, reject) => {
            this.isAuth = true;
            this.emitisAuthSubject();
            resolve(true);
          },
        );
      }



  signOut() {
    this.isAuth = false;
    this.emitisAuthSubject();
  }
}


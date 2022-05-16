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

  emitisAuthSubject() {
    this.isAuthSubject.next(this.isAuth);
  }
  emituseridSubject() {
    this.usernameSubject.next(this.username);
  }



  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            this.emitisAuthSubject();

            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
    this.emitisAuthSubject();
  }
}


 import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';
 import {UserService} from "../service/user.service";
 import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  userForm: FormGroup;
  // @ts-ignore
  erreur: String;


  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private authService: AuthService){}


  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: [  '', Validators.compose([
        Validators.minLength(5),
        Validators.required]) ]

    });

  }

  onSubmitForm() {
    const formValue = this.userForm.value;

    const username = formValue['username'];
    const password = formValue['password'];

    this.userService.login(username,password).subscribe(
      ( data) => {
        const obj =JSON.parse(JSON.stringify((data)))  ;
        const username = obj.username;
        const userId= obj.userId;

        this.authService.signIn().then(
          () => {
            this.authService.username=username;
            this.authService.userId=userId;
            this.authService.emituseridSubject();
            this.authService.emituserIdSubject();

            console.log('Sign in successful!');

            //if cv n'existe pas
            this.router.navigate(['ajout-cv']);

            //else   this.router.navigate(['profile']);
          }
        );


      },
      (error) => {
        console.log('Erreur ! : ' + error);
        this.erreur='mdp ou email incorrect';

      }
    );
  }


}

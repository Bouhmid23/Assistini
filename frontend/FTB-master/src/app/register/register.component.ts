import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../login/user";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  userForm: FormGroup;

  // @ts-ignore
  erreur: String;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required])]

    });
  }



  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['email'],
      formValue['username'],
      formValue['password'],
    );
    this.userService.addUser(newUser).subscribe(
      () => {
        console.log('Enregistrement terminé !');
        this.router.navigate(['ajout-cv']);

      },
      (error) => {
        console.log('Erreur ! : ' + error);
        this.erreur='email existe déja';

      }
    );

  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form!:FormGroup;
  

  constructor(private router:Router){}
 

  ngOnInit(): void {
    this.form=new FormGroup({
      utilisateur:new FormControl(),
      mdp:new FormControl()

    });
  }
  Login():void{
    if(this.form.get('utilisateur')?.value.indexOf('rh')!==0  && this.form.get('mdp')?.value !==''){
      this.router.navigateByUrl('rh/dashboard');
    }
    else{
      
        this.router.navigateByUrl('dev/ajout-cv');
    }
  }

}

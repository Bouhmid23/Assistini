import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ajout-cv',
  templateUrl: './ajout-cv.component.html',
  styleUrls: ['./ajout-cv.component.css']
})
export class AjoutCvComponent implements OnInit {

  // @ts-ignore
  userForm: FormGroup;

  constructor(private router:Router,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit(): void {
    this.initForm();
    this.addExpProf();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: [''  , [Validators.required, Validators.email]],
      expProf: this.formBuilder.array([])

      })

  }

  get expProf() {
    return this.userForm.controls["expProf"] as FormArray;
  }

  addExpProf() {
    const expProfForm = this.formBuilder.group({
      poste: ['', Validators.required],
      societe: ['', Validators.required],
      //date_deb: ['', DateValidator.ptDate],
     // date_fin : ['', DateValidator.ptDate],
      desc: ['', Validators.required],
    });

    this.expProf.push(expProfForm);
  }

  onAddExperience(){



  }
  onAddFormation(){

  }

  onAddInteret(){


  }
  onAddCompetencePro(){}
  onAddCompetence(){

  }
  onTest(){
    this.router.navigateByUrl('test-pers');

  }

}
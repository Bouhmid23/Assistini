import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {DateValidator} from "../../models/DateValidator";
import {User} from "../../login/user";
import {CvForm} from "./CvForm";
import {CvService} from "../../service/cv.service";

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
              private userService: UserService,
              private cvService:CvService) { }

  ngOnInit(): void {
    this.initForm();
    this.addExpProf();
    this.addFormation();
    this.addCompPers();
    this.addCompProf();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: [''  , [Validators.required, Validators.email]],
      expProf: this.formBuilder.array([]),
      formation : this.formBuilder.array([]),
      compProf : this.formBuilder.array([]),
      compPers : this.formBuilder.array([]),


      })

  }

  get formation()
  {
    return this.userForm.controls["formation"] as FormArray;
  }

  addFormation() {
    const formationForm = this.formBuilder.group({
      ecole: ['', Validators.required],
      diplome: ['', Validators.required],
      date_deb: ['', DateValidator.ptDate],
      date_fin : ['', DateValidator.ptDate],
      desc: ['', Validators.required],
    });

    this.formation.push(formationForm);
  }

  get compPers(){
    return this.userForm.controls["compPers"] as FormArray;
  }

  addCompPers() {
    const newCompPersControl = this.formBuilder.control(null, Validators.required);
    this.compPers.push(newCompPersControl);
  }


  get compProf(){
    return this.userForm.controls["compProf"] as FormArray;
  }

  addCompProf() {
    const newCompProfControl = this.formBuilder.control(null, Validators.required);
    this.compProf.push(newCompProfControl);
  }

  get expProf() {
    return this.userForm.controls["expProf"] as FormArray;
  }

  addExpProf() {
    const expProfForm = this.formBuilder.group({
      poste: ['', Validators.required],
      societe: ['', Validators.required],
      date_deb: ['', DateValidator.ptDate],
      date_fin : ['', DateValidator.ptDate],
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

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newCv = new CvForm(
      formValue['name'],
      formValue['address'],
      formValue['number'],
      formValue['email'],
      formValue['expProf'],
      formValue['formation'],
      formValue['compProf'],
      formValue['compPers'],
    );
    this.cvService.addCv(newCv).subscribe(
      () => {
        console.log('Enregistrement terminé !');


      },
      (error) => {
        console.log('Erreur ! : ' + error);

      }
    );
  }
}

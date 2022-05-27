import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-cv',
  templateUrl: './ajout-cv.component.html',
  styleUrls: ['./ajout-cv.component.scss']
})
export class AjoutCvComponent implements OnInit {


  skills = [''];
  addSkill(newSkill: string) {
    if (newSkill) {
      this.skills.push(newSkill);}}
  constructor(private router:Router) { }

  ngOnInit(): void {
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

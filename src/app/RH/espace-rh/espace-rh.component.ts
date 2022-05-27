import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';

@Component({
  selector: 'app-espace-rh',
  templateUrl: './espace-rh.component.html',
  styleUrls: ['./espace-rh.component.scss']
})
export class EspaceRHComponent implements OnInit {

  constructor(private router:Router,private SimpleModalService: SimpleModalService) { }

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

  projets = [
   "projet1",
   "projet2",
    "projet3"
  ]
  selected = "----"

  technologies = [
    { id: 1, name: "JAVA" },
    { id: 2, name: "Python" },
    { id: 3, name: "Angular" },
    { id: 4, name: "node" },
    { id: 5, name: "Springboot" },
  ];
  
  selected1 = [{ id: 3, name: "Angular" }];
  
  update(e: { target: { value: string; }; }){
    this.selected = e.target.value
  }
  
  naviguer():void{
    this.router.navigateByUrl('Liste-dev');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { BasicComponent } from 'src/app/basic/basic.component';

@Component({
  selector: 'app-espace-rh',
  templateUrl: './espace-rh.component.html',
  styleUrls: ['./espace-rh.component.css']
})
export class EspaceRHComponent implements OnInit {
 
  constructor(private router:Router,private SimpleModalService: SimpleModalService) { 
   
  }

  basicModal(): void {
    this.SimpleModalService.addModal(BasicComponent, {
      title: 'Hi All! : From Edupala',
      message: 'Believing in your dreams is the only way to reach your destination. '
    }, {
      draggable: true
    }).subscribe((isConfirmed) => {
      //We get modal result
      if (isConfirmed) {
        alert('accepted');
      }
      else {
        alert('declined');
      }
    });
  }
  

  
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
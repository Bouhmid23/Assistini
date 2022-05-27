import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { NgSelectModule } from '@ng-select/ng-select';

export interface AlertModel {
  title?: string;
  message: string;
}
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})

export class BasicComponent extends SimpleModalComponent<AlertModel, null> implements AlertModel {
  title: string = '';
  message: string = '';
  technologies = [
    { id: 1, name: "JAVA" },
    { id: 2, name: "Python" },
    { id: 3, name: "Angular" },
    { id: 4, name: "node" },
    { id: 5, name: "Springboot" },
  ];

  selected1 = [{ id: 3, name: "Angular" }];

  constructor() {
    super();
  }

  confirm() {
    this.close();
  }
}

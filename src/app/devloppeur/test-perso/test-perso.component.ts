import { Component, OnInit } from '@angular/core';
import { Element } from '@angular/compiler';
import { EventListenerOptions } from 'rxjs/internal/observable/fromEvent';
import { Query } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-perso',
  templateUrl: './test-perso.component.html',
  styleUrls: ['./test-perso.component.scss']
})
export class TestPersoComponent implements OnInit {
  public d!:any;
  public i!:any;
  public s!:any;
  public c!:any;
  public d2!:any;
  public i2!:any;
  public s2!:any;
  public c2!:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getScores(){
    this.d=this.i=this.s=this.c=0;
    let inputs=document.getElementsByTagName("input");
    for(let count=0,l=inputs.length;count<l;count++){
      if(inputs[count].checked){
        switch (inputs[count].value) {
					case "d-most": this.d++; break;
					case "i-most": this.i++; break;
					case "s-most": this.s++; break;
					case "c-most": this.c++; break;
					case "d-least": this.d--; break;
					case "i-least": this.i--; break;
					case "s-least": this.s--; break;
					case "c-least": this.c--; break;
				}
      }
    }
  }

  calculateWeightedScores(){

    if (this.d >= 6) this.d2 = 7;
		else if (this.d >= -1) this.d2 = 6;
		else if (this.d >= -5) this.d2 = 5;
		else if (this.d >= -9) this.d2 = 4;
		else if (this.d >= -13) this.d2 = 3;
		else if (this.d >= -16) this.d2 = 2;
		else this.d2 = 1;
		
		if (this.i >= 8) this.i2 = 7;
		else if (this.i >= 5) this.i2 = 6;
		else if (this.i >= 2) this.i2 = 5;
		else if (this.i >= -1) this.i2 = 4;
		else if (this.i >= -4) this.i2 = 3;
		else if (this.i >= -8) this.i2 = 2;
		else this.i2 = 1;
		
		if (this.s >= 12) this.s2 = 7;
		else if (this.s >= 8) this.s2 = 6;
		else if (this.s >= 5) this.s2 = 5;
		else if (this.s >= 1) this.s2 = 4;
		else if (this.s >= -2) this.s2 = 3;
		else if (this.s >= -7) this.s2 = 2;
		else this.s2 = 1;
		
		if (this.c >= 6) this.c2 = 7;
		else if (this.c >= 3) this.c2 = 6;
		else if (this.c >= -1) this.c2 = 5;
		else if (this.c >= -3) this.c2 = 4;
		else if (this.c >= -7) this.c2 = 3;
		else if (this.c >= -11) this.c2 = 2;
		else this.c2 = 1;
	}

  createCharts(){
    let total=7;
    //document.querySelector("#d-chart").style.width=(this.d2/total*100)+"%";
  }

  showResults(){

  }

  onProfile(){
    this.router.navigateByUrl('profile');

  }

  }


  


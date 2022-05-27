import { Injectable } from '@angular/core';
import {CvForm} from "../devloppeur/ajout-cv/CvForm";
import {HttpClient} from "@angular/common/http";

const cvCrud_API = 'http://localhost:3000/api/cvCrud/';
@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }

  addCv(newCv: CvForm, userId: string | undefined) {
     return this.http.post(cvCrud_API + 'addCv', {newCv,userId});
   }
}


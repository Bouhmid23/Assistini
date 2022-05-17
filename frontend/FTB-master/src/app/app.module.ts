import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EnteteComponent } from './entete/entete.component';
import { AjoutCvComponent } from './devloppeur/ajout-cv/ajout-cv.component';
import { EspaceRHComponent } from './RH/espace-rh/espace-rh.component';
import { AppRoutingModule } from './app-routing-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestPersoComponent } from './devloppeur/test-perso/test-perso.component';
import {RegisterComponent} from "./register/register.component";
import {UserService} from "./service/user.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./service/auth.service";
import {CvService} from "./service/cv.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnteteComponent,
    AjoutCvComponent,
    EspaceRHComponent,
    TestPersoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    UserService,
    AuthService,
    CvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

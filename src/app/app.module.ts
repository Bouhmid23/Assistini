import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EnteteComponent } from './entete/entete.component';
import { AjoutCvComponent } from './devloppeur/ajout-cv/ajout-cv.component';
import { EspaceRHComponent } from './RH/espace-rh/espace-rh.component';
import { AppRoutingModule } from './app-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { TestPersoComponent } from './devloppeur/test-perso/test-perso.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnteteComponent,
    AjoutCvComponent,
    EspaceRHComponent,
    TestPersoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

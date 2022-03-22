import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AjoutCvComponent } from './devloppeur/ajout-cv/ajout-cv.component';
import { EspaceRHComponent } from './RH/espace-rh/espace-rh.component';
import { AppRoutingModule } from './app-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { TestPersoComponent } from './devloppeur/test-perso/test-perso.component';
import { ProfileComponent } from './devloppeur/profile/profile.component';
import { CreateAccountComponent } from './login/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AjoutCvComponent,
    EspaceRHComponent,
    TestPersoComponent,
    ProfileComponent,
    CreateAccountComponent
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

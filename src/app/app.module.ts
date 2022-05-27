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
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './RH/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AjoutCvComponent,
    EspaceRHComponent,
    TestPersoComponent,
    ProfileComponent,
    CreateAccountComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     DragDropModule,
     NgSelectModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

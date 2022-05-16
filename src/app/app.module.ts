import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from "@ng-select/ng-select";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EnteteComponent } from './entete/entete.component';
import { AjoutCvComponent } from './devloppeur/ajout-cv/ajout-cv.component';
import { EspaceRHComponent } from './RH/espace-rh/espace-rh.component';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestPersoComponent } from './devloppeur/test-perso/test-perso.component';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';
import { ListeDevComponent } from './liste-dev/liste-dev.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BasicComponent } from './components/modal/basic/basic.component';
import { defaultSimpleModalOptions, SimpleModalModule } from 'ngx-simple-modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnteteComponent,
    AjoutCvComponent,
    EspaceRHComponent,
    TestPersoComponent,
    CreerCompteComponent,
    ListeDevComponent,
    BasicComponent

   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    DragDropModule,
    SimpleModalModule.forRoot({ container: 'modal-container' }, {
      ...defaultSimpleModalOptions, ...{
        closeOnEscape: true,
        closeOnClickOutside: true,
        wrapperDefaultClasses: 'o-modal o-modal--fade',
        wrapperClass: 'o-modal--fade-in',
        animationDuration: 300,
        autoFocus: true,
        draggable: true
      }
    })
    
    
    
   
  ],
  exports: [ DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

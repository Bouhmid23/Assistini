import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AjoutCvComponent } from "./devloppeur/ajout-cv/ajout-cv.component";

import { ProfileComponent } from "./devloppeur/profile/profile.component";
import { TestPersoComponent } from "./devloppeur/test-perso/test-perso.component";
import { CreateAccountComponent } from "./login/create-account/create-account.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./RH/dashboard/dashboard.component";
import { EspaceRHComponent } from "./RH/espace-rh/espace-rh.component";

const routes:Routes=[
    {path:'ajout-cv', component: AjoutCvComponent},
    {path:'espace-rh', component: EspaceRHComponent},
    {path:'', component: LoginComponent},
    {path:'test-pers', component: TestPersoComponent},
    {path:'profile', component: ProfileComponent},
    {path:'create-account',component:CreateAccountComponent},
    {path:'dashboard',component:DashboardComponent}



];
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]

})

export class AppRoutingModule{

}
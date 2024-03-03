import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamenComponent } from './examen/examen.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AboutComponent } from './about/about.component';
import { QuestionComponent } from './question/question.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {path :'home', component:HomeComponent},
  {path :'connexion',component:ConnexionComponent},
  {path:'about',component:AboutComponent},
  {path:'examen',component:ExamenComponent},
  {path:'question',component:QuestionComponent},
  {path:'description',component:DescriptionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

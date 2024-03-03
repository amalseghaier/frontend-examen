import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

import { EtudiantComponent } from './etudiant/etudiant.component';
import { ExamenComponent } from './examen/examen.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,

    EtudiantComponent,
    ExamenComponent,
    QuestionComponent,
    ConnexionComponent,
    DescriptionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

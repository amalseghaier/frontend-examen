import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {


  constructor(private router: Router) { }

  redirectToFirstQuestion() {
    this.router.navigate(['/question']); // Remplacez 'premiere-question' par le chemin de votre première question
  }
 
  
}
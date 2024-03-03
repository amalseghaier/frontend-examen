import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Examen {
  type: string;
  nom: string;
  enseignant: string;
  date_heure: string; 
  // date: string; // Ajoutez la propriété 'date' ici
}
@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {
  type: string='';
  nom: string='';
  enseignant: string='';
  // date:string='';

  constructor(private router: Router) { }
  exams: Examen[] = [
    { type: 'DC', nom: 'Business Culture', enseignant: 'Daoud Salah', date_heure: '2024-03-06 10:00' },
    { type: 'DC', nom: 'culture DevOps', enseignant: 'Hafsi Haithem ', date_heure: '2024-03-07 09:00' },
    { type: 'DC', nom: 'Business Culture', enseignant: 'Wahid Hamdi', date_heure: '2024-03-08 11:00'},
    { type: 'DC', nom: 'Cloud Securitys', enseignant: 'Soufiene Benmahmoud', date_heure: '2024-03-09 12:00' },
    
    // Ajoutez d'autres examens si nécessaire
  ];
 

  passerExamen( examen:any) {
    // Implémentez la logique pour naviguer vers la page de l'examen
    this.router.navigate(['/description']);
  }
}


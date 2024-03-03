import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  cin: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }
  connecter() {
    if (this.cin.length !== 8) {
      this.errorMessage = 'Le CIN doit être composé de 8 caractères.';
      return;
    }
  
    // Vérification du CIN et du mot de passe
    if (this.cin === '09715640' && this.password === '09715640') {
      // Si le CIN et le mot de passe sont corrects, naviguer vers le composant d'examen
      this.router.navigate(['/examen']);
    } else {
      // Si le CIN ou le mot de passe est incorrect, afficher un message d'erreur
      this.errorMessage = 'CIN ou mot de passe incorrect.';
    }
  }
  
}


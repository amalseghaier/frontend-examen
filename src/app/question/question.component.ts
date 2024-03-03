import { Component } from '@angular/core';

interface Question {
  text: string;
  options: string[];
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  currentDateTime: Date;
  questions: Question[] = [
    {
      text: "L’entrepreneur est une personne qui :",
      options: ["Cherche à résoudre des problèmes gouvernementaux", "Mobilise des ressources en vue de créer une organisation", "Cherche à résoudre les problèmes d’emploi"]
    },
    {
      text: "Une entreprise à but lucratif est une entreprise qui cherche :",
      options: ["Résoudre des problèmes sociaux", "Réaliser des profits", "Résoudre des problèmes politiques"]
    },
    {
      text: "Au sein des entreprises privées, le capital est détenu par :",
      options: ["Des particuliers", "Des personnes publiques", "Des personnes publiques et privées"]
    },
    {
      text: "Une entreprise qui fabrique des produits des voitures opère dans le secteur :",
      options: ["Primaire", "Secondaire", "Tertiaire"]
    },
    {
      text: "Le marché monopolistique est constitué par :",
      options: ["Plusieurs producteurs et plusieurs acheteurs", "Un producteur et plusieurs acheteurs", "Deux producteurs et plusieurs acheteurs"]
    }
  ];

  answers: string[] = [];

  constructor() {
    this.currentDateTime = new Date(); // Initialise currentDateTime dans le constructeur
  }

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000); // Mise à jour de l'heure chaque seconde
  }

  updateDateTime(): void {
    this.currentDateTime = new Date();
  }

  submitAnswers() {
    console.log("Réponses soumises :", this.answers);
    // Vous pouvez ajouter ici le traitement des réponses soumises
  }
}

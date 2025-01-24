import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompteService } from '../../services/compte.service';
import { response, Router } from 'express';
import { log } from 'console';

@Component({
  selector: 'app-create-account',
  imports: [FormsModule,],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  nom: string = '';
  prenom: string = '';
  dateNaissance: string = '';
  identite: string = '';
  nationalite: string = '';
  sexe: string = 'Homme'; // Valeur par défaut
  email: string = '';
  telephone: string = '';
  profession: string = '';
  rue: string = '';
  ville: string = '';
  pays: string = '';
  salaire: number = 0;
  statutEmploi: string = 'Salarie'; // Valeur par défaut
  typeCompte: string = 'Compte Courant'; // Valeur par défaut

  constructor(private compteService:CompteService,private router:Router){}
  soumettre() {
    
    const compteData = {
      nom: this.nom,
      prenom: this.prenom,
      dateNaissance: this.dateNaissance,
      identite: this.identite,
      nationalite: this.nationalite,
      sexe: this.sexe,
      email: this.email,
      telephone: this.telephone,
      profession: this.profession,
      rue: this.rue,
      ville: this.ville,
      pays: this.pays,
      salaire: this.salaire,
      statutEmploi: this.statutEmploi,
      typeCompte: this.typeCompte,
    };
  
    console.log('Données du formulaire :', compteData);
    this.compteService.registerCompte(compteData).subscribe({
      next:(response)=>{
        console.log("compte enregistrer avec succes",response);
        
       },
      // error: (error) => {
      //   console.error('Erreur lors de l\'enregistrement:', error);
      // },
      // complete: () => {
      //   console.log('Requête terminée'); // Optionnel
      // },
    })
  
  }
}

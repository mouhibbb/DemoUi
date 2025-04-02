import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompteService } from '../../services/compte.service';
import { Router } from '@angular/router';
import { info, log } from 'console';
import { UserService } from '../../services/user.service';
import { firstValueFrom } from 'rxjs';

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
  codePostal: number=0;
  statusCompteBacaire:String="En_cours";

  constructor(private userService:UserService,private compteService:CompteService,private router:Router){}
  // soumettre() {

  //   const compteData = {
  //     nom: this.nom,
  //     prenom: this.prenom,
  //     date_naissance: this.dateNaissance,
  //     cin: this.identite,
  //     nationalité: this.nationalite,
  //     sexe: this.sexe,
  //     email: this.email,
  //     telephone: this.telephone,
  //     profession: this.profession,
  //     rue: this.rue,
  //     ville: this.ville,
  //     pays: this.pays,
  //     salaire: this.salaire,
  //     status_emploi: this.statutEmploi,
  //     type_compte: this.typeCompte,
  //     code_postal: this.codePostal,
  //     statusCompteBacaire:this.statusCompteBacaire,
      

  //   };

  //   console.log('Données du formulaire :', compteData);
  //   const email=localStorage.getItem('userEmail')||''
  //   this.compteService.registerCompte(compteData, email).subscribe({
  //     next: (response) => {
  //       console.log("Réponse du serveur :", response);
  //     },
  //     error: (error) => {
  //       console.error("Erreur HTTP :", error);
  //     }
  //   });
    
        

  
  // }
  soumettre() {
    const compteData = {
      nom: this.nom,
      prenom: this.prenom,
      date_naissance: this.dateNaissance,
      cin: this.identite,
      nationalité: this.nationalite,
      sexe: this.sexe,
      email: this.email,
      telephone: this.telephone,
      profession: this.profession,
      rue: this.rue,
      ville: this.ville,
      pays: this.pays,
      salaire: this.salaire,
      status_emploi: this.statutEmploi,
      type_compte: this.typeCompte,
      code_postal: this.codePostal,
      statusCompteBacaire: this.statusCompteBacaire,
    };

    const email = localStorage.getItem('userEmail') || '';
    this.compteService.registerCompte(compteData, email).subscribe({
      next: (response) => {
        console.log("Réponse du serveur :", response.message); // Affiche "Créé avec succès"
        alert(response.message); // Affiche une alerte avec le message de succès
        this.router.navigateByUrl("home")
      },
      error: (error) => {
        console.error("Erreur HTTP :", error);
        alert("Une erreur s'est produite lors de la création du compte."); // Affiche une alerte d'erreur
      }
    });
  }

  async getUser() {
    const email = localStorage.getItem('userEmail') || '';
    console.log("email",email)
    try {
      const user = await firstValueFrom(this.userService.user(email));
      console.log(user);
      return user;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'ID utilisateur:', error);
      return null; // Retourne une valeur par défaut en cas d'erreur
    }}
  }
  

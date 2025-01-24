import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharedService } from '../../services/shared.service';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  isConnected!:boolean;
 // public connected:boolean=false
  showSignupFields: boolean = false; // Variable pour gérer l'affichage des champs supplémentaires
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isActivated: Boolean=false;
  constructor(private userService:UserService, private ro : Router, private sharedervice:SharedService){

  }
  // Fonction pour afficher/masquer les champs supplémentaires
  ngOnIt(){
    this.sharedervice.connected$.subscribe((connected)=>{
      this.isConnected=connected
      console.log('Valeur de isConnected :', this.isConnected);
      
    })
  }
  inscription(){
    if (this.password !== this.confirmPassword) {
      console.error('Les mots de passe ne correspondent pas.');
      return }

    else{
      //const salt = bcrypt.genSaltSync(10); // Nombre de tours (10 est une valeur sûre)
     // const hashedPassword = bcrypt.hashSync(this.password, salt);

      const userData = {
      firstName: this.firstname,
      lastName: this.lastname,
      email: this.email,
      password: this.password,
      isActivated:this.isActivated,
      role:1
      
      };
      this.userService.registerUser(userData).subscribe({
        next: (response) => {
          console.log('Utilisateur enregistré avec succès:', response);
          // Réinitialisez le formulaire après l'enregistrement
          this.showSignupFields = !this.showSignupFields;

        },
        error: (error) => {
          console.error('Erreur lors de l\'enregistrement:', error);
        },
        complete: () => {
          console.log('Requête terminée'); // Optionnel
        },
      });  
    }
  }

  seConnecter(){
    console.log("bonjour");
    
    const loginData = {
      email: this.email,
      password: this.password

  }
    console.log(loginData);
    
    this.userService.loginUser(loginData).subscribe({
      next: (response) => {
        console.log('Connexion réussie:', response);
        
        
        if (this.password) {
          console.log('Mot de passe valide');
          // Rediriger l'utilisateur ou stocker les informations de session
          this.ro.navigate(['home']);
          this.sharedervice.setConnected()
          console.log(this.isConnected);
          
        } else {
          console.log('Mot de passe incorrect');
        }
      },
      error: (error) => {
        console.error('Erreur lors de la connexion:', error);
        if (error.status === 403) {
          // Si le statut HTTP est 403 (compte non activé)
          alert(error.error); // Affiche le message d'erreur renvoyé par l'API
        } else {
          alert('Échec de la connexion : veuillez vérifier vos identifiants.');
        }      }
    });

}
}
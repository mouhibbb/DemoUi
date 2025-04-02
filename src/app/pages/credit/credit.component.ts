import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreditService } from '../../services/credit.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-credit',
  imports: [FormsModule],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.css'
})
export class CreditComponent {
  montant :number=0
  mensualite:number=0
  typeCredit:String="Credit a la consommation"
  dateAccord:string=''
  dateEcheance:string=''
  duree:number=0
constructor(private creditService:CreditService,private userService:UserService){

}



soumettreCredit() {
  console.log();
  const creditData = {
    montant: this.montant,
    dureeMois: this.duree,
    mensualite: this.mensualite,
    typeCredit: this.typeCredit,
    statusCredit: "En_cours",
    dateAccord: this.dateAccord,
    dateEcheance: this.dateEcheance,
  };
  console.log(creditData);

  let email = localStorage.getItem('userEmail');
  let idCompte = localStorage.getItem('idCompte');
  console.log("idCompte",idCompte);
  
  // Si email est manquant, on récupère un utilisateur aléatoire
  if (!email || !idCompte) {
    this.userService.getRandomUserToTestCredit().subscribe((user: any) => {
      // Assurer que 'user' contient { idUser: number, email: string }
      if (!email) email = user.email;  // Récupérer l'email du résultat
      if (!idCompte) idCompte =String(user.idCompte);  // Récupérer l'ID du compte
      console.log("email",idCompte);
            
      // Une fois que nous avons l'email et l'idCompte, on soumet le crédit
      this.creditService.registerCredit(creditData, email, idCompte).subscribe({
        next:() => {
          console.log("Crédit enregistré");
        },
        error:(error) => {
          console.error("Erreur lors de l'enregistrement du crédit", error);
        }
    });
  }) 
}
else {
    // Si email et idCompte sont déjà présents, on soumet directement
    this.creditService.registerCredit(creditData, email, idCompte).subscribe({
      next:() => {
        console.log("Crédit enregistré");
      },
      error:(error) => {
        console.error("Erreur lors de l'enregistrement du crédit", error);
      }
});
  }
}

}

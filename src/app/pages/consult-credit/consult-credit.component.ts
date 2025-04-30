import { Component } from '@angular/core';
import { CompteService } from '../../services/compte.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CreditService } from '../../services/credit.service';

@Component({
  selector: 'app-consult-credit',
  imports: [MatTableModule],
  templateUrl: './consult-credit.component.html',
  styleUrl: './consult-credit.component.css'
})
export class ConsultCreditComponent {
constructor(private creditService:CreditService){}
  displayedColumns: string[] = ['idCredit','montant','mensualite', 'dateEcheance','statusCredit','dureeMois','typeCredit']
  dataSource =new MatTableDataSource<any>([]);

ngOnInit(){
  this.getUserCredit()
}
getUserCredit(){
  const email=localStorage.getItem('userEmail')
  if (!email) { 
    console.error("L'email de l'utilisateur est introuvable !");
    return; }
  else {this.creditService.getCredit(email).subscribe((response:any[])=>{
    if(Array.isArray(response)){
      this.dataSource.data=response   
      console.log(this.dataSource.data);
    }
      else{console.error("erreur ",response);
      }
      
    })}
  }
  elements = [
    { typeCredit: 'Credit_a_la_consommation' },
    { typeCredit: 'Credit_immobilier' },
    { typeCredit: 'Credit_voiture' },
    // autres éléments
  ];
    // Méthode pour remplacer les underscores par des espaces
    replaceUnderscoreWithSpace(typeCredit: string): string {
      
      return typeCredit.replace(/_/g,  ' ');
    }
}


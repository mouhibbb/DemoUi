import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CreditService } from '../../services/credit.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-credit-for-admin',
  imports: [MatTabsModule, MatIconModule,MatTableModule,FormsModule,CommonModule,MatButtonToggleModule],
  templateUrl: './credit-for-admin.component.html',
  styleUrl: './credit-for-admin.component.css'
})
export class CreditForAdminComponent {
  constructor(private creditService:CreditService){}
  displayedColumns: string[] = ['idCredit','idCompte','nom_prenom','montant','mensualite', 'dureeMois','dateAccord','dateEcheance','typeCredit','statusCredit']
  dataSource =new MatTableDataSource<any>([]);
  ngOnInit(){
    this.getCreditByUser()
  }
  getCreditByUser(){
    this.creditService.getCreditForAdmin().subscribe((response:any[])=>{
      if(Array.isArray(response)){
        
        this.dataSource.data=response   
        console.log(this.dataSource.data);
      }
        else{console.error("erreur ",response);
        }
        
      })}
      onApprouveClick(credit:any){
        
        this.creditService.ApprouveClicked(credit.idCredit)
      }
      onRefuseClick(credit:any){
        
        this.creditService.RefuseClicked(credit.idCredit)
      }
      onEnCoursClick(credit:any){
        this.creditService.EnCoursClicked(credit.idCredit)
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

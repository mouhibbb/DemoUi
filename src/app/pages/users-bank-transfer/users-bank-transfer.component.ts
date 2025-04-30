import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompteService } from '../../services/compte.service';
import { error } from 'console';
import { HttpClient } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-bank-transfer',
  imports: [MatSelectModule,MatFormFieldModule,MatOptionModule,
    FormsModule,CommonModule,MatInputModule,MatButtonModule],
  templateUrl: './users-bank-transfer.component.html',
  styleUrl: './users-bank-transfer.component.css'
})
export class UsersBankTransferComponent {
  constructor(private compteService:CompteService,private httpClient:HttpClient){}
  accountList:{idCompte:string,type_compte:string}[]=[];  // Projet sélectionné pour l'ouverture
  email:string=''
  compteCibleId: number=0;
  montant: number=0;
  selectedAccount:any
  ngOnInit(){
    this.email=localStorage.getItem("userEmail")||'';
    console.log(this.email);
    
    this.compteService.getAccountbyUserAndActivated(this.email).subscribe({
      next:response=>{console.log(response)
        this.accountList=response
      },
      error:error=>{console.error(error)},
      complete:()=>{console.log('complete')}
        })
      
      
  }


  envoyerArgent() {
    const virementRequest = {
      idCompteSource: this.selectedAccount,
      idCompteCible: this.compteCibleId,
      montant: this.montant
    };
  
    console.log(virementRequest);
  
    this.compteService.envoyerVirement(virementRequest).subscribe({
      next: (response: any) => {
        const message = response.message
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: message
        })
  
      },
      error: error => {
        const errorMessage = error?.error?.message || "Une erreur s'est produite";
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: errorMessage
        });
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
}
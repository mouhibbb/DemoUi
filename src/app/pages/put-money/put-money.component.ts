import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { CompteService } from '../../services/compte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-put-money',
  imports: [FormsModule,MatFormFieldModule,MatButtonToggleModule,MatToolbarModule, MatCardModule, MatTableModule,MatPaginatorModule,MatIconModule,MatFormFieldModule,],
  templateUrl: './put-money.component.html',
  styleUrl: './put-money.component.css'
})
export class PutMoneyComponent {
  displayedColumns: string[] = ['idCompte', 'type_compte', 'solde', 'montant','is_activated'];
  montants:{[id:string]:number}={}
  montant:number=0
  idCompte:any
  constructor(private userService: UserService,private compteService:CompteService) {}
  dataSource= new MatTableDataSource<any>([])
  async initilizationData() {
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem("userEmail");
      if (email) {
        try {
          const response = await firstValueFrom(this.userService.userCompte(email));
          this.dataSource.data = response;
          console.log(response);
        } catch (error) {
          console.error("error", error);
        }
      } else {
        console.warn('Email introuvable dans localStorage');
      }
    } else {
      console.warn('localStorage est inaccessible (environnement serveur)');
    }
  }
  
  
  receivedData:any;

 async  ngOnInit() {
  this.receivedData=await this.initilizationData();
  console.log(this.receivedData);
  
}
encaisser(idCompte: string) {
  const montant = this.montants[idCompte];
  if (!montant || montant <= 0) {
    const errorMessage="Veuillez saisir un montant valide."
    alert(errorMessage)
    // Swal.fire({

    //   icon: 'error',
    //   title: 'Erreur',
    //   text: errorMessage
    // })
    return;
  }
  else{
   
    const amountRequest={
      idCompte:idCompte,
      montant:montant
    }
    this.compteService.setAmount(amountRequest).subscribe({
      next:(response:any)=>{console.log(response)
        const message = response.message
                Swal.fire({
                  icon: 'success',
                  title: 'Succès',
                  text: message
                });
      },
      error:error=>{const errorMessage = error?.error?.message || "Une erreur s'est produite";
              // Swal.fire({
              //   icon: 'error',
              //   title: 'Erreur',
              //   text: errorMessage
              // });
              alert(errorMessage)
            },
      complete:()=>{console.log("complete");
      }
    })
  }
  // 👉 ici tu peux appeler un service pour envoyer ce montant
}
decaisser(idCompte: string){
  const montant = this.montants[idCompte];
  if (!montant || montant <= 0) {
    const errorMessage="Veuillez saisir un montant valide."
    alert(errorMessage)
    // Swal.fire({

    //   icon: 'error',
    //   title: 'Erreur',
    //   text: errorMessage
    // })
    return;
  }
  else{
   
    const amountRequest={
      idCompte:idCompte,
      montant:montant
    }
    this.compteService.removeAmount(amountRequest).subscribe({
      next:(response:any)=>{
        const message = response.message
                Swal.fire({
                  icon: 'success',
                  title: 'Succès',
                  text: message
                });
      },
      error:error=>{const errorMessage = error?.error?.message || "Une erreur s'est produite";
              // Swal.fire({
              //   icon: 'error',
              //   title: 'Erreur',
              //   text: errorMessage
              // });
              alert(errorMessage)
            },
      complete:()=>{console.log("complete");
      }
    })
}
}
}

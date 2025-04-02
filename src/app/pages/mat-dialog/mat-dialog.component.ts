import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { firstValueFrom } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mat-dialog',
  imports: [
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
  ],
  templateUrl: './mat-dialog.component.html',
  styleUrl: './mat-dialog.component.css',
})
export class MatDialogComponent {
  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router:Router
  ) {}
  receivedData: any;
  selectedCompte: number | null = null;
  dataSource = new MatTableDataSource<any>([]);
  async ngOnInit() {
    await this.initilizationData();
  }
  
  async initilizationData() {
    const email = localStorage.getItem('userEmail');
    if (email) {
      try {
        const response = await firstValueFrom(this.userService.userCompte(email));
        this.receivedData = response;  // Assignation correcte des données
        console.log(this.receivedData);  // Afficher les données pour vérifier
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    } else {
      console.warn('Email introuvable dans localStorage');
    }
  }
  
  
  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    if (this.selectedCompte !== null) {
      const selectedItem = this.receivedData.find((item: any) => item.idCompte === this.selectedCompte);
      if (selectedItem) {
        console.log('Compte sélectionné:', selectedItem);
        if (selectedItem.statusCompteBacaire=="Approuvé") {
          this.dialogRef.close(this.selectedCompte);
          localStorage.setItem("idCompte",selectedItem.idCompte)
          this.router.navigate(['/credit'])
          console.log('Le compte est activé.');

        } else {
          alert('Compte pas encore activé.');
          console.log('Le compte n\'est pas activé.');
          this.dialogRef.close(this.selectedCompte);

        }
      }
    } else {
      alert('Veuillez sélectionner un compte.');
    }
  }
  
}

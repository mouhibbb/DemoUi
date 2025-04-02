import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CompteService } from '../../services/compte.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-serv',
  imports: [RouterModule,],
  templateUrl: './serv.component.html',
  styleUrl: './serv.component.css'
})
export class ServComponent {
  constructor(private router:Router,private compteService:CompteService,private snackBar: MatSnackBar,public dialog:MatDialog){}
  credit(): void {
    const connectedEmail = localStorage.getItem('userEmail');
    // if (!connectedEmail) {
    //   console.error('Aucun email trouvé dans le localStorage.');
    //   return;
    // }
  
    // this.compteService.getIfCompteIsActivated(connectedEmail).subscribe({
    //   next: (activated) => {
    //     console.log("Compte activé ?", activated);
    //     if (activated) {
    //       console.log('Le compte est activé. Redirection vers /credit...');
    //       this.router.navigate(['/credit']);
    //     } else {
    //       console.log('Le compte nest pas activé.');
    //       // Gérer le cas où le compte n'est pas activé
    //       this.snackBar.open('Votre compte n\'est pas activé. Veuillez activer votre compte pour accéder à cette fonctionnalité.', 'Fermer', {
    //         duration: 5000, // Durée d'affichage du message (5 secondes)
    //       })
    //     }
    //   },
    //   error: (error) => {
    //     console.error('Erreur lors de la vérification du compte :', error);
    //   },
    // });
  
  
  
  }
  openConfirmDialog(): void {
    console.log("sssss");
    
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '500px',  // 🔵 Largeur du MatDialog
      height: 'auto',  // 🔵 Ajuste automatiquement la hauteur selon le contenu
        data: { message: 'Voulez-vous enregistrer les modifications ?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Enregistré');
      } else {
        console.log('Annulé');
      }
    });

}}

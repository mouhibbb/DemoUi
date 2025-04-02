import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports:[CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isConnected: boolean = false
isLoggedIn: boolean = false;  
role:String=""
constructor(public sharedService:SharedService,private router:Router,private changeDetectorRef:ChangeDetectorRef){

}
 ngOnInit(){

   // Abonnez-vous à l'état de connexion pour suivre les changements
   this.sharedService.connected$.subscribe((connected) => {
    this.isConnected = connected;
      if (typeof window !== 'undefined' && window.localStorage) {
        this.role = localStorage.getItem("userType") || '';

      }
  })

}

logout() {
  this.sharedService.setdisconnected(); // Mettre à jour l'état de connexion
  localStorage.removeItem('userEmail')
  localStorage.removeItem('userType')
  this.router.navigate(['']);
  console.log('Utilisateur déconnecté.');
}


}

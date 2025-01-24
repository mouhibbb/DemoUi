import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common'; // Importez CommonModule

@Component({
  selector: 'app-header',
  imports:[CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isConnected: boolean = false
constructor(public sharedService:SharedService){

}
ngOnInit(){
   // Abonnez-vous à l'état de connexion pour suivre les changements
   this.sharedService.connected$.subscribe((connected) => {
    this.isConnected = connected;
})
}
logout() {
  this.sharedService.setdisconnected(); // Mettre à jour l'état de connexion
  console.log('Utilisateur déconnecté.');
}

}

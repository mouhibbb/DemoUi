import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  dataSource= new MatTableDataSource<any>([])

  private showSignupFields: boolean = false;
  private connectedSource = new BehaviorSubject<boolean>(false); // Stocke la valeur actuelle
  connected$ = this.connectedSource.asObservable(); // Observable pour les abonnements

  constructor(private userService:UserService) { }

  toggleSignupFields() {
    console.log(this.showSignupFields);

    this.showSignupFields = !this.showSignupFields;
    console.log(this.showSignupFields);
    }
  // Définir connecté
  setConnected():void {
    this.connectedSource.next(true);
    console.log('Connexion réussie');
  }

  // Définir déconnecté
  setdisconnected():void {
    this.connectedSource.next(false);
    console.log('Déconnexion réussie',this.connectedSource);
  }
  userEmail(){
    return localStorage.getItem('userEmail')
  }
  


}

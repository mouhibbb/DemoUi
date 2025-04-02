import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { response } from 'express';
import { concat, concatMap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8081/api'; // Remplacez par l'URL de votre API

  constructor(private httpClient: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    console.log('Données de l\'utilisateur à envoyer à l\'API:', userData); // Affiche les données dans la console
    return this.httpClient.post(`${this.apiUrl}/users`, userData);
    
  }
  // registerListeUsers(users:any[]):void{
  //   of(...users).pipe(
  //     concatMap(user=>this.registerUser(user))).subscribe( {
  //     next:response=>console.log(response),
  //     error:error=>console.error(error),
  //     complete:()=>console.log('Tous les utilisateurs ont été enregistrés')
      
      
  // });
    
  // }

  loginUser(loginData: any): Observable<any> {
    console.log(loginData);
    
    return this.httpClient.post(`${this.apiUrl}/auth`, loginData);
  }
  user(useremail: string): Observable<any> {
    const payload = { email: useremail }; // Exemple de payload
    console.log("Payload envoyé :", payload);
  
    return this.httpClient.post<any>(`${this.apiUrl}/users/usercheck`, payload.email, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  userCompte(usermail:string):Observable<any[]>{
    

    return this.httpClient.post<any[]>(`${this.apiUrl}/users/compte`, { email: usermail });
      
    ;
  }
  getAllUsers(){
    return this.httpClient.get<[]>(`${this.apiUrl}/users`)
  }
  EnActClicked(idUser: any) {
    console.log('user', idUser);

    this.httpClient
      .put(`${this.apiUrl}/users/active/${idUser}`, idUser)
      .subscribe((response) => {
        console.log(response);
      });
  }
  EnDesactClicked(idUser: any) {
    console.log('user', idUser);

    this.httpClient
      .put(`${this.apiUrl}/users/desactive/${idUser}`, idUser)
      .subscribe((response) => {
        console.log(response);
      });
  }
  getRandomUserToTestCredit(){
   return this.httpClient.get(`${this.apiUrl}/users/getRandomUser`)
  }
}

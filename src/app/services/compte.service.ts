import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  private apiUrl = 'http://localhost:8081/api/compte'; // Remplacez par l'URL de votre API

  constructor(private httpClient: HttpClient) {}
  // registerCompte(compteData: any, email: String): Observable<any> {
  //   const payload = { compteData, email };
  //   console.log(payload);

  //   console.log("Données de l'utilisateur à envoyer à l'API:", compteData);
  //   // Affiche les données dans la console
  //   return this.httpClient.post(`${this.apiUrl}/compte`, payload);
  // }
  registerCompte(compteData: any, email: string): Observable<any> {
    const payload = { compteData, email };
    console.log("Données envoyées à l'API :", payload);
    return this.httpClient.post(`${this.apiUrl}`, payload);}
  getIfCompteIsActivated(connectedEmail: any): Observable<boolean> {
    console.log(connectedEmail);
    
    console.log("Données de l'utilisateur à envoyer à l'API:", connectedEmail);

    return this.httpClient
      .post<{ isActivated: boolean }>(`${this.apiUrl}/compte/check`, {
        email: connectedEmail,
      })
      .pipe(
        map((response) => {
          console.log('Réponse de lAPI :', response);
          return response.isActivated; // Retourne true ou false
        }),
        catchError((error) => {
          console.error('Erreur lors de la vérification du compte :', error);
          return of(false); // En cas d'erreur, retourne false
        })
      );
  }
  getAccountbyUserAndActivated(email: any): Observable<any> {
    console.log(email);
    
    console.log("Données de l'utilisateur à envoyer à l'API:", email);

    return this.httpClient.get<any[]>(`${this.apiUrl}/getList`, { params: { email } })

  }
  getNewAccount() {
    return this.httpClient.get<[]>(`${this.apiUrl}/getnewAccount`);
  }
  ApprouveClicked(idCompte: any) {
    console.log('user', idCompte);

    this.httpClient
      .put(`${this.apiUrl}/compte/approuve/${idCompte}`, idCompte)
      .subscribe((response) => {
        console.log(response);
      });
  }
  RefuseClicked(idCompte: any) {
    console.log('user', idCompte);

    this.httpClient
      .put(`${this.apiUrl}/compte/refuse/${idCompte}`, idCompte)
      .subscribe((response) => {
        console.log(response);
      });
  }
  EnCoursClicked(idCompte: any) {
    console.log('user', idCompte);

    this.httpClient
      .put(`${this.apiUrl}/encours/${idCompte}`, idCompte)
      .subscribe((response) => {
        console.log(response);
      });
  }
  getAllAccounts(){
   return this.httpClient.get<[]>(`${this.apiUrl}`)
  }
  envoyerVirement(virementRequest:any){
    return this.httpClient.post(`${this.apiUrl}/send`,virementRequest)
  }
  setAmount(amountRequest:any){
   return this.httpClient.post(`${this.apiUrl}/setAmount`,amountRequest)
  }
  removeAmount(amountRequest:any){
    return this.httpClient.post(`${this.apiUrl}/removeAmount`,amountRequest)
   }
   sendUrlAccounts(urlAccounts:any){
  return  this.httpClient.post(`${this.apiUrl}/urlAccounts`,urlAccounts)
  }
}

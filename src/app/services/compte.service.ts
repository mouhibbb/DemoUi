import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  private apiUrl = 'http://localhost:8081/api'; // Remplacez par l'URL de votre API

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
    return this.httpClient.post(`${this.apiUrl}/compte`, payload);}
  getIfCompteIsActivated(connectedEmail: any): Observable<boolean> {
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
  getNewAccount() {
    return this.httpClient.get<[]>(`${this.apiUrl}/compte/getnewAccount`);
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
      .put(`${this.apiUrl}/compte/encours/${idCompte}`, idCompte)
      .subscribe((response) => {
        console.log(response);
      });
  }
  getAllAccounts(){
   return this.httpClient.get<[]>(`${this.apiUrl}/compte`)
  }
}

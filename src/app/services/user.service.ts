import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  loginUser(loginData: any): Observable<any> {
    console.log(loginData);
    
    return this.httpClient.post(`${this.apiUrl}/auth`, loginData);
  }}

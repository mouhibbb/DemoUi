import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private apiUrl = 'http://localhost:8081/api/credits'; // Remplacez par l'URL de votre API

  constructor(private httpCLient:HttpClient) { }
registerCredit(creditData:any,email:any,idCompte:any){
  const payload={creditData,email,idCompte}
  console.log(payload);
  
  return this.httpCLient.post(`${this.apiUrl}`,payload)
}
getCredit(email:string){
  return this.httpCLient.get<any[]>(`${this.apiUrl}/userCredit`, { params: { email } })
}
getCreditForAdmin(){
  return this.httpCLient.get<[]>(`${this.apiUrl}`)
}
ApprouveClicked(idCredit: any) {
  console.log('idCredit', idCredit);

  this.httpCLient
    .put(`${this.apiUrl}/approuve/${idCredit}`, idCredit)
    .subscribe((response) => {
      console.log(response);
    });
}
RefuseClicked(idCredit: any) {
  console.log('idCredit', idCredit);

  this.httpCLient
    .put(`${this.apiUrl}/refuse/${idCredit}`, idCredit)
    .subscribe((response) => {
      console.log(response);
    });
}
EnCoursClicked(idCredit: any) {
  console.log('user', idCredit);

  this.httpCLient
    .put(`${this.apiUrl}/encours/${idCredit}`, idCredit)
    .subscribe((response) => {
      console.log(response);
    });
}
}

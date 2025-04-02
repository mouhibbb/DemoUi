import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CompteService } from '../../services/compte.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-account',
  imports: [MatTableModule,FormsModule],
  templateUrl: './all-account.component.html',
  styleUrl: './all-account.component.css'
})
export class AllAccountComponent {
constructor(private compteService:CompteService){}
  displayedColumns: string[] = ['idCompte','cin','nom', 'prenom','type_compte','statusCompteBacaire','telephone','email']
  dataSource =new MatTableDataSource<any>([]);

ngOnInit(){
  this.getAllAccount()
}
getAllAccount(){
  this.compteService.getAllAccounts().subscribe((response:any[])=>{
    if(Array.isArray(response)){
      
      this.dataSource.data=response   
      console.log(this.dataSource.data);
    }
      else{console.error("erreur ",response);
      }
      
    })}
}

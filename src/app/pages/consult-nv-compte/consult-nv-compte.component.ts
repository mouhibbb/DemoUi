import { Component } from '@angular/core';
import { CompteService } from '../../services/compte.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consult-nv-compte',
  imports: [MatTableModule,MatButtonToggleModule,FormsModule,CommonModule],
  templateUrl: './consult-nv-compte.component.html',
  styleUrl: './consult-nv-compte.component.css'
})
export class ConsultNvCompteComponent {
  constructor(private compteService:CompteService){}
  displayedColumns: string[] = ['id','nom', 'prenom','salaire','statusCompteBacaire']
  dataSource =new MatTableDataSource<any>([]);
  selectedStyle: string = '';
  ngOnInit(){
    this.getAccountEnCours()
  }
  getAccountEnCours(){
  this.compteService.getNewAccount().subscribe((response:any[])=>{
  if(Array.isArray(response)){
    
    this.dataSource.data=response   
    console.log(this.dataSource.data);
  }
    else{console.error("erreur ",response);
    }
    
  })
  }
  onApprouveClick(user:any){
    console.log(user.idCompte);
    
    this.compteService.ApprouveClicked(user.idCompte)
  }
  onRefuseClick(user:any){
    console.log(user.idCompte);
    
    this.compteService.RefuseClicked(user.idCompte)
  }
  onEnCoursClick(user:any){
    this.compteService.EnCoursClicked(user.idCompte)
  }
  }
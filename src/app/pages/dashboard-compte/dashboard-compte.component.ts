import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/user.service';
import { firstValueFrom } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard-compte',
  imports: [MatToolbarModule, MatCardModule, MatTableModule,MatPaginatorModule,MatIconModule,MatFormFieldModule],
  templateUrl: './dashboard-compte.component.html',
  styleUrls: ['./dashboard-compte.component.css'],
})
export class DashboardCompteComponent {
  displayedColumns: string[] = ['idCompte', 'nom', 'prenom', 'type_compte','is_activated'];
  constructor(private userService: UserService) {}
  dataSource= new MatTableDataSource<any>([])

  async initilizationData() {
    const email = localStorage.getItem("userEmail");
    if (email) {
      try {
        const response = await firstValueFrom(this.userService.userCompte(email));
        this.dataSource.data=response
        console.log(response);
        
      } catch (error) {
        console.error("error", error);
      }
    } else {
      console.warn('Email introuvable dans localStorage');
    }
  }
  
  receivedData:any;

 async  ngOnInit() {
  this.receivedData=await this.initilizationData();
  console.log(this.receivedData);
  
}

}
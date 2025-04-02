import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { UserService } from '../../services/user.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-dashboard-users-for-admin',
  imports: [MatTabsModule, MatIconModule,MatTableModule,FormsModule,CommonModule,MatButtonToggleModule],
  templateUrl: './dashboard-users-for-admin.component.html',
  styleUrl: './dashboard-users-for-admin.component.css'
})
export class DashboardUsersForAdminComponent {
  constructor(private userService:UserService){}
  displayedColumns: string[] = ['idUser','firstName','lastName', 'email','active']
  dataSource =new MatTableDataSource<any>([]);

ngOnInit(){
  this.getAllUser()
}
getAllUser(){
  this.userService.getAllUsers().subscribe((response:any[])=>{
    if(Array.isArray(response)){
      
      this.dataSource.data=response   
      console.log(this.dataSource.data);
    }
      else{console.error("erreur ",response);
      }
      
    })}
    onActiveClick(user:any){
      this.userService.EnActClicked(user.idUser)
    }
    onDesactiveClick(user:any){
      this.userService.EnDesactClicked(user.idUser)
    }
}


import { Component } from '@angular/core';
import { CompteService } from '../../services/compte.service';
import { response } from 'express';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dashboard-admin',
  imports: [MatTableModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {

}
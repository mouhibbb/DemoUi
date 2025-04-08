import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { UserService } from '../../services/user.service';
import { response } from 'express';
import { error } from 'console';
import { CreditService } from '../../services/credit.service';
import { CompteService } from '../../services/compte.service';

@Component({
  selector: 'app-ajout-par-masse',
  templateUrl: './ajout-par-masse.component.html',
  styleUrl: './ajout-par-masse.component.css'
})
export class AjoutParMasseComponent {
  file!: File;
  jsonData: any[] = [];
constructor(private userService:UserService,private compteService:CompteService){}
  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>event.target;
    if (target.files.length !== 1) return;

    this.file = target.files[0];

    // Vérification du format
    if (!this.file.name.endsWith('.xls') && !this.file.name.endsWith('.xlsx')) {
      console.error("Fichier non valide. Veuillez importer un fichier Excel.");
      return;
    }

    const reader: FileReader = new FileReader();
    reader.readAsArrayBuffer(this.file);
    
    reader.onload = (e: any) => {
      try {
        const arrayBuffer: ArrayBuffer = e.target.result;
        const binaryStr: string = new Uint8Array(arrayBuffer)
          .reduce((data, byte) => data + String.fromCharCode(byte), '');
    
        const workbook: XLSX.WorkBook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName: string = workbook.SheetNames[0];
        const sheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        this.jsonData = XLSX.utils.sheet_to_json(sheet);
        
        console.log("Données extraites du fichier :", this.jsonData);
        
        // Envoyer les données au backend
      } catch (error) {
        console.error("Erreur lors de la lecture du fichier Excel :", error);
      }
    };
  }

  uploadUsers() {
    this.jsonData.forEach(user=>{this.userService.registerUser(user).subscribe({
      
      next:response=>console.log(response),
      error:error=>console.error(error),
      complete:()=>console.log("complete"),
    })
    })
  }
  uploadCompteBancaire() {

    this.jsonData.forEach(compte=>{this.compteService.registerCompte(compte,compte.email).subscribe({
      
      next:response=>console.log(response),
      error:error=>console.error(error),
      complete:()=>console.log("complete"),
    })
    })
  }


}

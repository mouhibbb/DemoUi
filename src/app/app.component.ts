import { Component } from '@angular/core';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FooterComponent,
    HeaderComponent,FooterComponent,FormsModule,CommonModule,RouterOutlet
  ],  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading: boolean = true;

  title = 'demo_ui';
  constructor() {
  
  }
}

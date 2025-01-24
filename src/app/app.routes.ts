import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomeComponent } from './pages/home/home.component';
import { ServComponent } from './pages/serv/serv.component';
import { CreditComponent } from './pages/credit/credit.component';
import { NgModule } from '@angular/core';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent }, 
    { path: 'home', component: HomeComponent }, // Route par défaut
    { path: 'about', component: AboutUsComponent },
    { path: 'compte', component: CreateAccountComponent },
    { path: 'service', component: ServComponent },
    { path: 'credit', component: CreditComponent },
    { path: '**', redirectTo: '' }, // Redirige vers la route par défaut si le chemin n'existe pas
  
];
// @NgModule({
//     imports:[RouterModule.forRoot(routes)],
//     exports:[RouterModule]
// })

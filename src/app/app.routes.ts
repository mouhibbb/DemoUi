import {  Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomeComponent } from './pages/home/home.component';
import { ServComponent } from './pages/serv/serv.component';
import { CreditComponent } from './pages/credit/credit.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { DashboardCompteComponent } from './pages/dashboard-compte/dashboard-compte.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { ConsultNvCompteComponent } from './pages/consult-nv-compte/consult-nv-compte.component';
import { AllAccountComponent } from './pages/all-account/all-account.component';
import { DashboardUsersForAdminComponent } from './pages/dashboard-users-for-admin/dashboard-users-for-admin.component';
import { guardAdminGuard } from './guards/guard-admin.guard';
import { guardUsersGuard } from './guards/guard-users.guard';
import { UsersBankTransferComponent } from './pages/users-bank-transfer/users-bank-transfer.component';
import { ConsultCreditComponent } from './pages/consult-credit/consult-credit.component';
import { CreditForAdminComponent } from './pages/credit-for-admin/credit-for-admin.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { AjoutParMasseComponent } from './pages/ajout-par-masse/ajout-par-masse.component';
import { PutMoneyComponent } from './pages/put-money/put-money.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent }, 
    { path: 'home', component: HomeComponent,canActivate:[guardUsersGuard] }, // Route par défaut
    { path: 'about', component: AboutUsComponent },
    { path: 'compte', component: CreateAccountComponent},
    { path: 'service', component: ServComponent ,canActivate:[guardUsersGuard]},
    { path: 'credit', component: CreditComponent },
    { path: 'inscri', component: InscriptionComponent },

    { path: 'usersBankTransfer', component: UsersBankTransferComponent  ,canActivate:[guardUsersGuard]},
    { path: 'dashboardUser', component: DashboardCompteComponent ,canActivate:[guardUsersGuard]},
    { path: 'dashboardAdmin', component: DashboardAdminComponent ,canActivate:[guardAdminGuard]},
    { path: 'nvCompte', component: ConsultNvCompteComponent,canActivate:[guardAdminGuard]},
    {path:  'allAccounts',component:AllAccountComponent,canActivate:[guardAdminGuard]},
    {path:  'usersForAdmin',component:DashboardUsersForAdminComponent,canActivate:[guardAdminGuard]},
    {path:  'consultCredit',component:ConsultCreditComponent,canActivate:[guardUsersGuard]},
    {path:  'consultCreditForAdmin',component:CreditForAdminComponent,canActivate:[guardAdminGuard]},
    {path:  'ajoutparmasse',component:AjoutParMasseComponent,canActivate:[guardUsersGuard]},
    {path:   'putmoney',component:PutMoneyComponent,canActivate:[guardUsersGuard]},
    { path: '**', redirectTo: '' }, // Redirige vers la route par défaut si le chemin n'existe pas
  
];

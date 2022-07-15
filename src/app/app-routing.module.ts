import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { LoginComponent } from './login/login.component';
import { OffresComponent } from './offres/offres.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'ajouterAdmin', component: AjouterAdminComponent },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'profile' } },
  { path: 'admins', component: AdminsComponent },
  { path: 'entreprises', component: EntreprisesComponent },
  { path: 'formateurs', component: FormateursComponent },
  { path: 'offres', component: OffresComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotpassComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

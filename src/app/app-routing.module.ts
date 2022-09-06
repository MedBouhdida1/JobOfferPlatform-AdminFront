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
import { ModifieradminComponent } from './modifieradmin/modifieradmin.component';
import { OffresComponent } from './offres/offres.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ajouterAdmin', component: AjouterAdminComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'admins', component: AdminsComponent, canActivate: [AuthGuard] },
  { path: 'entreprises', component: EntreprisesComponent, canActivate: [AuthGuard] },
  { path: 'formateurs', component: FormateursComponent, canActivate: [AuthGuard] },
  { path: 'offres', component: OffresComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotpassComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'modifieradmin/:id', component: ModifieradminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }

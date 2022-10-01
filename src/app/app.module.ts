import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsComponent } from './admins/admins.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { OffresComponent } from './offres/offres.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { ModifieradminComponent } from './modifieradmin/modifieradmin.component';
import { ProfileComponent } from './profile/profile.component';
import { TmNgOdometerModule } from 'tm-ng-odometer';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    AdminsComponent,
    EntreprisesComponent,
    FormateursComponent,
    OffresComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent,
    ModifieradminComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    TmNgOdometerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

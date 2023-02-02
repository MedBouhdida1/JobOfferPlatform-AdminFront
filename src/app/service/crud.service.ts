import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../Model/Admin.model';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Entreprise } from '../Model/Entreprise.model';
import { Offres } from '../Model/Offres.model';
import { Formateur } from '../Model/Formateur.model';
import { Contact } from '../Model/Contact.model';
import { NgToastService } from 'ng-angular-popup';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  registerAdminUrl = "http://localhost:8081/api/admin/register"
  loginAdminUrl = "http://localhost:8081/api/admin/login"
  apiUrl = "http://localhost:8081/api"
  getByEntrepriseUrl = "localhost:8081/api/entreprise/entreprise"
  helper = new JwtHelperService();
  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService
  ) { }
  addadmin(admin: Admin) {
    return this.http.post<any>(this.registerAdminUrl, admin);
  }

  loginAdmin(admin: Admin) {
    return this.http.post<any>(this.loginAdminUrl, admin);
  }
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl + "/admin")
  }
  deleteAdmin(id: number) {
    const URL = `${this.apiUrl + "/admin"}/${id}`
    return this.http.delete(URL, httpOption)
  }
  userDetail() {
    let token: any = localStorage.getItem('myToken');
    if (token != null) {
      let decodeToken = this.helper.decodeToken(token);
      return decodeToken.data
    }

  }
  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiUrl + "/entreprise")
  }
  deleteEntreprise(id: number) {
    const URL = `${this.apiUrl + "/entreprise"}/${id}`
    return this.http.delete(URL, httpOption)

  }
  getOffres(): Observable<Offres[]> {
    return this.http.get<Offres[]>(this.apiUrl + "/offres")

  }
  deleteOffre(id: number) {
    const URL = `${this.apiUrl + "/offres"}/${id}`
    return this.http.delete(URL, httpOption)

  }
  getFormateur(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(this.apiUrl + "/formateur")

  }
  deleteFormateur(id: number) {
    const URL = `${this.apiUrl + "/formateur"}/${id}`
    return this.http.delete(URL, httpOption)

  }

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl + "/contact")
  }
  updateAdmin(id: number, admin: Admin): Observable<Admin> {
    const URL = `${this.apiUrl + "/admin"}/${id}`
    return this.http.put<Admin>(URL, admin, httpOption);
  }
  public getAdminById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/${id}`);
  }
  updateOffre(id: number, offre: Offres): Observable<Offres> {
    const URL = `${this.apiUrl + "/offres"}/${id}`
    return this.http.put<Offres>(URL, offre, httpOption);

  }
  public getOffreById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/offres/${id}`)
  }
  acessLogin() {
    let token: any = localStorage.getItem('myToken');
    if (token != null && (this.router.url == "/login" || this.router.url == "/register")) {
      this.router.navigate(["/dashboard"])
      this.toast.warning({
        detail: "Erreur msg !!",
        summary: "You are already loged in"
      });
    }
  }
  loginRequired() {
    let token: any = localStorage.getItem('myToken');
    if (token == null) {
      this.router.navigate(["/login"])
      this.toast.warning({
        detail: "Erreur msg !!",
        summary: "You have to login to access this page"
      });
    }

  }
  public getEntrepriseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/entreprise/${id}`)
  }

  updateEntreprise(id: number, entreprise: Entreprise): Observable<Offres> {
    const URL = `${this.apiUrl + "/entreprise"}/${id}`
    return this.http.put<Entreprise>(URL, entreprise, httpOption);

  }
  email(email: any) {
    return this.http.post<any>(this.apiUrl + "/feedback", email);
  }

}
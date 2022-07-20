import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Model/Admin.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  registerAdminUrl = "http://localhost:8081/api/admin/registeradmin"
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  addadmin(admin: Admin) {
    return this.http.post<any>(this.registerAdminUrl, admin);
  }
}

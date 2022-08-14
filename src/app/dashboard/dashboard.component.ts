import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../Model/Entreprise.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalAdmins: number = 0
  totalEntreprises: number = 0
  totalFormateurs: number = 0
  totalOffres: number = 0
  constructor(
    private service: CrudService
  ) { }

  ngOnInit(): void {
    var data = localStorage.getItem('id');
    console.log(data)

    // this.service.loginRequired();

    this.service.getAdmins().subscribe(admin => {
      this.totalAdmins = admin.length
    })
    this.service.getEntreprises().subscribe(entreprise => {
      this.totalEntreprises = entreprise.length
    })
    this.service.getFormateur().subscribe(formateur => {
      this.totalFormateurs = formateur.length
    })
    this.service.getOffres().subscribe(offre => {
      this.totalOffres = offre.length
    })
  }

}

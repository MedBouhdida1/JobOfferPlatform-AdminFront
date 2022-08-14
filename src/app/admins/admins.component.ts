import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Admin } from '../Model/Admin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  listeAdmin: Admin[];
  numberAdmin: number = 0;
  constructor(
    private route: Router,
    private service: CrudService
  ) { }
  supprimerAdmin(admin: Admin) {
    if (confirm("Voulez vous supprimer cet Administrateur ?")) {
      this.service.deleteAdmin(admin.id).subscribe(() => {
        this.route.navigate(["/admins"]).then(() => {
          window.location.reload();
        });
      })
    }
  }
  ngOnInit(): void {
    // this.service.loginRequired();

    this.service.getAdmins().subscribe(admin => {
      this.listeAdmin = admin
      this.numberAdmin = admin.length
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifieradmin',
  templateUrl: './modifieradmin.component.html',
  styleUrls: ['./modifieradmin.component.css']
})
export class ModifieradminComponent implements OnInit {
  id: number;
  currentAdmin = new Admin();
  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast: NgToastService,
    private rout: ActivatedRoute
  ) { }
  modifierAdmin() {

    this.id = this.rout.snapshot.params["id"];
    console.log(this.id);

    this.service.updateAdmin(this.id, this.currentAdmin).subscribe(admin => {
      this.router.navigate(["/admins"]).then(() => {
        window.location.reload();
      })
    })
  }




  ngOnInit(): void {
    // this.service.loginRequired();

    this.id = this.rout.snapshot.params["id"];

    this.getAdmin(this.id);
  }
  getAdmin(id: number) {
    this.service.getAdminById(id).subscribe(data => {
      this.currentAdmin = data;
    })
  }

}

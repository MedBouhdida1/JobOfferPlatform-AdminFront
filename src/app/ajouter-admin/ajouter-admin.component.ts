import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';

@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.css']
})
export class AjouterAdminComponent implements OnInit {

  addAdminForm: FormGroup
  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast: NgToastService
  ) {
    let formControls = {


      nom: new FormControl('', [
        Validators.required,

      ]),
      prenom: new FormControl('', [
        Validators.required,

      ]),
      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ])


    }
    this.addAdminForm = this.fb.group(formControls)
  }
  get nom() { return this.addAdminForm.get('nom') }
  get prenom() { return this.addAdminForm.get('prenom') }
  get mdp() { return this.addAdminForm.get('mdp') }
  get email() { return this.addAdminForm.get('email') }

  addAdmin() {
    let data = this.addAdminForm.value;
    console.log(data);
    let admin = new Admin(
      undefined, data.nom, data.prenom, data.email, data.mdp);
    console.log(admin);

    if (data.nom == 0 || data.prenom == 0 || data.email == 0 || data.mdp == 0) {
      this.toast.info({
        detail: "Erreur msg !!",
        summary: "les champs sont obligatoires"

      }
      );
    }
    else {



      this.service.addadmin(admin).subscribe(

        res => {
          console.log(res);

          this.router.navigate(['/admins']);
        },
        err => {
          console.log(err);
          this.toast.error({
            detail: "Error msg",
            summary: "verifier vore formulaire"
          });

        }

      )
    }
  }


  ngOnInit(): void {
    // this.service.loginRequired();

  }

}

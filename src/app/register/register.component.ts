import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
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
    this.registerForm = this.fb.group(formControls)
  }
  get nom() { return this.registerForm.get('nom') }
  get prenom() { return this.registerForm.get('prenom') }
  get mdp() { return this.registerForm.get('mdp') }
  get email() { return this.registerForm.get('email') }

  registerAdmin() {
    let data = this.registerForm.value;
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

          this.router.navigate(['/login']);
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
    this.service.acessLogin();
  }

}

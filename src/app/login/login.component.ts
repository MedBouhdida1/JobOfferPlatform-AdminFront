import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast: NgToastService,

  ) {

    let formControls = {



      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ])
    }
    this.loginForm = this.fb.group(formControls)
  }
  get mdp() { return this.loginForm.get('mdp') }
  get email() { return this.loginForm.get('email') }


  loginAdmin() {
    let data = this.loginForm.value;
    console.log(data);
    let admin = new Admin(null, null, null, data.email, data.mdp);
    if (data.email == 0 || data.mdp == 0) {
      this.toast.info({
        detail: "Erreur msg !!",
        summary: "les champs sont obligatoires"
      });
    }
    else {
      this.service.loginAdmin(admin).subscribe(
        res => {
          console.log(res);
          let token = res.token;
          localStorage.setItem("myToken", token);
          this.router.navigate(["/dashboard"]);
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

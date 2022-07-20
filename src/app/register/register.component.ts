import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
    private fb: FormBuilder
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
  registerAdmin() {
    let data = this.registerForm.value;
    console.log(data);
    let admin = new Admin(
      undefined, data.nom, data.prenom, data.email, data.mdp);
    console.log(admin);

    this.service.addadmin(admin).subscribe(

      res => {
        console.log(res);

        this.router.navigate(['/']);
      },
      err => {
        console.log(err);

      }

    )
  }



  ngOnInit(): void {
  }

}

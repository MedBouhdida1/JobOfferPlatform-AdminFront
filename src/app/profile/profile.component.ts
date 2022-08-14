import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  message?: String
  imgURL: any
  imagePath: any
  userFile: any
  id: number;
  currentAdmin = new Admin();

  constructor(
    private service: CrudService,
    private rout: ActivatedRoute,

    private router: Router

  ) {

  }

  onSelectFile(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;


      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
        this.currentAdmin.photo = this.imgURL;
      };
    }
  }

  modifierAdmin() {

    this.id = this.service.userDetail().id;
    console.log(this.id);


    this.service.updateAdmin(this.id, this.currentAdmin).subscribe(admin => {
      this.router.navigate(["/admins"]).then(() => {
        window.location.reload();
      })
    })
  }
  ngOnInit(): void {
    // this.service.loginRequired();

    this.id = this.service.userDetail().id;
    console.log(this.id)
    this.getAdmin(this.id);
  }
  getAdmin(id: number) {
    this.service.getAdminById(id).subscribe(data => {
      this.currentAdmin = data;
      console.log(data)
    })
  }

}

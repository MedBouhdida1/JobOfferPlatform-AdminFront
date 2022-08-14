import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  numberContact: number = 0

  constructor(
    private service: CrudService,
    private router: Router
  ) {
    this.user = this.service.userDetail()
  }

  ngOnInit(): void {
    console.log(this.user);
    this.service.getContact().subscribe(contact => {
      this.numberContact = contact.length;
    })
  }
  Logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }

}

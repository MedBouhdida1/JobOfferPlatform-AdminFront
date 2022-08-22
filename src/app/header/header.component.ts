import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../Model/Contact.model';
import { Entreprise } from '../Model/Entreprise.model';
import { Offres } from '../Model/Offres.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  now = new Date()
  user: any;
  numberContact: number = 0
  listContact: Contact[]
  listOffre: Offres[]
  listEntreprises: Entreprise[]
  listNotif: []
  numberOffre: number
  numberEntre: number

  constructor(
    private service: CrudService,
    private router: Router
  ) {
    this.user = this.service.userDetail()
  }


  ngOnInit(): void {
    console.log(this.user);
    this.service.getContact().subscribe(contact => {
      this.listContact = contact
      this.numberContact = contact.length;
    })
    this.service.getOffres().subscribe(offre => {
      this.listOffre = offre.filter(off => off.etat == 0)
      this.numberOffre = this.listOffre.length
    })
    this.service.getEntreprises().subscribe(entreprise => {
      this.listEntreprises = entreprise.filter(entre => entre.etat == 0)
      this.numberEntre = this.listEntreprises.length
    })
  }
  Logout() {
    localStorage.clear()
    this.router.navigate(["/login"])
  }

}

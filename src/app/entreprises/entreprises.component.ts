import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Entreprise } from '../Model/Entreprise.model';
import { Router } from '@angular/router';
import { Email } from '../Model/Email.modem';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css']
})
export class EntreprisesComponent implements OnInit {
  listeEntreprise: Entreprise[]
  numberEntreprises: number = 0;
  currentEntreprise = new Entreprise();
  page: number = 1;
  email = new Email()
  constructor(
    private route: Router,
    private service: CrudService,
    private toast: NgToastService

  ) { }
  supprimerEntreprise(entreprise: Entreprise) {
    if (confirm("Voulez vous supprimer cette Entreprise ?")) {
      if (entreprise.etat == 1) {
        this.email.feedback = "Votre compte entreprise a ete supprimé"
        this.email.subject = "Compte Supprimé"

      }
      else {
        this.email.feedback = "Votre demande d'ajout d'un compte entreprise a ete refuse"
        this.email.subject = "Compte Réfusé"
      }
      this.email.email = entreprise.email
      this.service.email(this.email).subscribe()
      this.service.deleteEntreprise(entreprise.id).subscribe(() => {
        this.route.navigate(["/entreprises"]).then(() => {
          window.location.reload();
        });
      })
    }
  }
  modifierEntreprise(id: number) {

    console.log(id)
    this.service.getEntrepriseById(id).subscribe(entreprise => {

      this.currentEntreprise = entreprise
      console.log(this.currentEntreprise)
      this.currentEntreprise.etat = 1;
      this.email.subject = "Compte Approuvé"
      this.email.email = this.currentEntreprise.email
      this.email.feedback = "Votre demande d'ajout d'un compte entreprise a ete approuve"
      this.service.email(this.email).subscribe()
      this.service.updateEntreprise(id, this.currentEntreprise).subscribe(() => {

        window.location.reload();
      })
    })


  }
  ngOnInit(): void {
    // this.service.loginRequired();

    this.service.getEntreprises().subscribe(entreprise => {
      this.listeEntreprise = entreprise
      this.numberEntreprises = entreprise.length
    })
  }
}

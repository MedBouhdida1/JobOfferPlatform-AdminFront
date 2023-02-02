import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../Model/Entreprise.model';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Offres } from '../Model/Offres.model';
import { Email } from '../Model/Email.modem';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  listeOffres: Offres[]
  numberOffres: number = 0
  currentOffre = new Offres()
  now = new Date()
  page: number = 1;
  email = new Email()

  constructor(
    private route: Router,

    private service: CrudService
  ) { }
  supprimerOffre(offre: Offres) {
    if (confirm("Voulez vous supprimer cette Offre ?")) {
      if (offre.etat == 1) {
        this.email.feedback = "Votre offre " + offre.titre + " a ete supprimé"
        this.email.subject = "Offre Supprimé"

      }
      else {
        this.email.feedback = "Votre demande d'ajout de l'offre " + offre.titre + " a ete refuse"
        this.email.subject = "Offre Réfusé"
      }
      this.email.email = offre.entreprise.email
      this.service.email(this.email).subscribe()
      this.service.deleteOffre(offre.id).subscribe(() => {
        this.route.navigate(["/offres"]).then(() => {
          window.location.reload();
        });
      })
    }
  }
  modifierOffre(id: number) {

    console.log(id)
    this.service.getOffreById(id).subscribe(offre => {
      this.currentOffre = offre
      console.log(this.currentOffre)
      this.currentOffre.etat = 1;
      this.email.subject = "Offre Approuvé"
      this.email.email = this.currentOffre.entreprise.email
      this.email.feedback = "Votre demande d'ajout de l'offre " + this.currentOffre.titre + " a ete approuve"
      this.service.email(this.email).subscribe()
      this.currentOffre.datePub = this.now.toISOString().slice(0, 10)
      this.service.updateOffre(id, this.currentOffre).subscribe(() => {
        window.location.reload();

      })
    })


  }

  ngOnInit(): void {
    // this.service.loginRequired();
    console.log(this.currentOffre)

    this.service.getOffres().subscribe(offre => {
      this.listeOffres = offre
      this.numberOffres = offre.length
    })
  }

}

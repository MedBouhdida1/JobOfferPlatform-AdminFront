import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Entreprise } from '../Model/Entreprise.model';
import { Router } from '@angular/router';
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

  constructor(
    private route: Router,
    private service: CrudService
  ) { }
  supprimerEntreprise(entreprise: Entreprise) {
    if (confirm("Voulez vous supprimer cette Entreprise ?")) {
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

import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../Model/Entreprise.model';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Offres } from '../Model/Offres.model';

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

  constructor(
    private route: Router,

    private service: CrudService
  ) { }
  supprimerOffre(offre: Offres) {
    if (confirm("Voulez vous supprimer cette Offre ?")) {
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

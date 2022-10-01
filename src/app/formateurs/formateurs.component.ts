import { Component, OnInit } from '@angular/core';
import { Formateur } from '../Model/Formateur.model';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  listeFormateur: Formateur[]
  numberFormateur: number = 0
  page: number = 1;

  constructor(
    private route: Router,

    private service: CrudService
  ) { }
  supprimerFormateur(formateur: Formateur) {
    if (confirm("Voulez vous supprimer cette Formateur ?")) {
      this.service.deleteFormateur(formateur.id).subscribe(() => {
        this.route.navigate(["/formateurs"]).then(() => {
          window.location.reload();
        });
      })
    }
  }
  ngOnInit(): void {
    // this.service.loginRequired();

    this.service.getFormateur().subscribe(Formateur => {
      this.listeFormateur = Formateur
      this.numberFormateur = Formateur.length
    })
  }

}

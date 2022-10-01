import { Component, OnInit } from '@angular/core';
import { Contact } from '../Model/Contact.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  listeContact: Contact[]
  numberContact: number = 0
  page: number = 1;

  constructor(
    private service: CrudService

  ) { }

  ngOnInit(): void {
    // this.service.loginRequired();

    this.service.getContact().subscribe(contact => {
      this.listeContact = contact;
      this.numberContact = contact.length;
    })
  }

}

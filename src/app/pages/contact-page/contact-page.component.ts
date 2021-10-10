import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';
import {Contact} from '../../models/contact/contact.module'


@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts:Contact[] = []

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contactService.contacts$.subscribe(contacts=>{
      this.contacts = contacts
    })
  }
}

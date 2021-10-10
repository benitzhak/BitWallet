import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  public filterBy= {
    term: ''
  }
  private subscription: Subscription

  constructor(private contactService:ContactService) { }

  onSetFilter(){
    this.contactService.loadContacts(this.filterBy)
    
  }

  ngOnInit(): void {
  }

}

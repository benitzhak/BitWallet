import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact.module';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact
  subscription: Subscription
  constructor(private contactService:ContactService,private route:ActivatedRoute,private router: Router) { }

  async onRemoveContact(){
    await this.contactService.deleteContact(this.contact._id)
    this.router.navigateByUrl('/contact')
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(async (params)=>{
      const {id} = params
      this.contact = await this.contactService.getContactById(id).toPromise()
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact.module';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contact:Contact 
  subscription: Subscription 

  constructor(private contactService:ContactService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(async (params)=>{
      const {id} = params
      this.contact = id ? await this.contactService.getContactById(id).toPromise():
      this.contactService.getEmptyContact()
    })
  }

  async onSaveContact() {
    try {
      await this.contactService.saveContact(this.contact)
      this.router.navigateByUrl('/contact')
    } catch (err) {
      console.log(err);
    }
  }
  ngOnDestroy(){
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact/contact.module';
import { User } from 'src/app/models/user/user.module';
import { BitcoinService } from 'src/app/services/bitcoin/bitcoin.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit {

  @Input() contact:Contact
  user:User
  amount:number
  rate:any

  constructor(private userService:UserService,private router:Router, private bitcoinService:BitcoinService) { }

  async onTrensfer(){
    if(this.user.coins > this.amount){
      this.rate = new Intl.NumberFormat().format(this.rate * this.amount) 
      this.userService.addMove(this.contact,this.amount,this.rate)
      this.router.navigateByUrl('/')
    } else alert('not enough moeny')
  }

  async ngOnInit(){
    this.rate = await this.bitcoinService.getRate()
    this.user = this.userService.getUser()
  }

}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service'
import { User } from 'src/app/models/user/user.module';
import { BitcoinService } from 'src/app/services/bitcoin/bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user:User 
  rate:any
  usdBalance:any
  constructor(private userService:UserService,private bitcoinService:BitcoinService) { }

  async ngOnInit() {
    this.getCurrencies()
    
  }

  async getCurrencies(){
    try{
      this.user = this.userService.getUser()
      this.rate = await this.bitcoinService.getRate()
      this.usdBalance = +(this.rate * this.user.coins).toFixed(3)
      this.usdBalance = new Intl.NumberFormat().format(this.usdBalance)
      this.rate = new Intl.NumberFormat().format(this.rate)
    } catch(err){
      console.log('cannot get currencies',err);
    }
  }
}

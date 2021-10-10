import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact/contact.module';
import { Move } from 'src/app/models/user/move.module';
import { User } from 'src/app/models/user/user.module';
import { BitcoinService } from 'src/app/services/bitcoin/bitcoin.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  @Input() contact:Contact
  user:User
  moves:Move[]
  title:string
  rate:number

  constructor(private userService:UserService,private router:Router,private bitcoinService:BitcoinService) { }

  onContactPage(){
    this.title = 'Moves History'
    this.moves = this.user.moves.filter(move=>{
      return move.toId === this.contact._id
    })
  }
  
  
  onHomePage(){
    this.moves = this.user.moves.slice(0,3)
    if(!this.moves.length){
      this.title = 'Do your first move'
    }else if(this.moves.length < 2){
      this.title = 'Last Move'
    } else if(this.moves.length < 3) {
      this.title = 'Last 2 Moves'
    } else this.title = 'Last 3 Moves'
      
  }
  
  ngOnInit() {
    this.user = this.userService.getUser()
    if(this.router.url === '/'){
      this.onHomePage()
    } else this.onContactPage()
  }
}

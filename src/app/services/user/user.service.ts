import { Injectable } from '@angular/core';
import {User} from '../../models/user/user.module'
import { Move } from 'src/app/models/user/move.module';
import { Contact } from 'src/app/models/contact/contact.module';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User = {
    name: 'Guest234',
    coins: 100,
    moves:[]
  }

  public signUp(user){
    return new Promise((resolve,reject)=>{
      this.user = user
    localStorage.setItem('loggedInUser',JSON.stringify(user))
    resolve(this.user)
    })
  }

  public async addMove(contact:Contact,amount:number,rate:number){
    const user = JSON.parse(localStorage.getItem('loggedInUser')) || this.user
    const move:Move = {
      toId:contact._id,
      to:contact.name,
      at:Date.now(),
      amount,
      rate
    }
    const coins:any = user.coins 
    user.coins = coins - amount
    user.moves.unshift(move)
    localStorage.setItem('loggedInUser',JSON.stringify(user))
  }

  public getUser (){
    const user = JSON.parse(localStorage.getItem('loggedInUser'))
    return user || this.user
  }

  constructor() { }
}

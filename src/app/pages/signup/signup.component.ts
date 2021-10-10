import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

interface User {
  name:string,
  coins:number,
  moves:object
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  user:User= {
    name:'',
    coins:100,
    moves:[]
  }

  constructor(private userService:UserService,private route:ActivatedRoute,private router: Router) { }

  onSignup(){
    this.userService.signUp(this.user)
    this.router.navigateByUrl('/')
  }

  ngOnInit(): void {
  }

}

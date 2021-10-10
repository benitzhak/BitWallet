import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isOpen:boolean = false

toggleMenue(){
this.isOpen = !this.isOpen
}

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, ElementRef, OnInit } from '@angular/core';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: true
})
export class NavbarComponent implements OnInit {

  constructor() {
  }


  go(id: string){
    document.getElementById(id)?.scrollIntoView()
  }

  ngOnInit(): void {

   }
}

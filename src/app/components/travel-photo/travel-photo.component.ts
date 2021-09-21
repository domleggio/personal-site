import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'travel-photo',
  templateUrl: './travel-photo.component.html',
  styleUrls: ['./travel-photo.component.css']
})
export class TravelPhotoComponent implements OnInit {

  @Input() src: any;

  constructor() { }

  

  ngOnInit(): void {
  }

}

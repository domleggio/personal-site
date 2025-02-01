import { Component, OnInit } from '@angular/core';
import { HelloSectionComponent } from '../hello-section/hello-section.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { WebDevelopmentSectionComponent } from '../web-development-section/web-development-section.component';
import { WhatIDoSectionComponent } from '../what-i-do-section/what-i-do-section.component';
import { TravelSectionComponent } from '../travel-section/travel-section.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
    selector: 'app-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.css'],
    standalone: true,
    imports: [HelloSectionComponent, AboutSectionComponent, WebDevelopmentSectionComponent, WhatIDoSectionComponent, TravelSectionComponent, ContactMeComponent]
})
export class MainContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
